import * as React from 'react';
import {useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import { Box, Chip, Divider, MenuItem, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useWeb3React } from "@web3-react/core";
import { WalletContext, connectors } from "./../../../contexts/WalletContext";
import { AccountContext } from "./../../../contexts/AccountContext";
import siteConfig from './../../../config';
const avaxChainId = siteConfig.avaxChainId;


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 4 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.primary.main,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const WALLET_LIST = [
    { name: 'Avax', image: '/assets/images/image 178.png', popular: true },
    { name: 'Avalanche Web Wallet', image: '/assets/images/image 179.png', popular: false },
    { name: 'Metamask', image: '/assets/images/metamask-alternative 1.png', popular: false },
    { name: 'Coinbase Wallet', image: '/assets/images/metamask-alternative 2.png', popular: false },
    { name: 'Wallet Connect', image: '/assets/images/metamask-alternative 3.png', popular: false },
    { name: 'Phantom', image: '/assets/images/phantom 1.png', popular: false },
    { name: 'Glow', image: '/assets/images/glow 1.png', popular: false },
]
export default function AcceptOffer({ open, bidderInfo, acceptOffer, handleClose }) {
    const { activate, deactivate, library, chainId, account } = useWeb3React();
    const {switchNetwork} = useContext(WalletContext);
    // const {walletConnectAction} = useContext(AccountContext);

    const setProvider = (type) => {
        window.localStorage.setItem("provider", type);
    };
    
    // useEffect(() => 
    // {
    //     console.log(chainId)
    //     if(chainId){
    //         const provider = window.localStorage.getItem("provider");
    //         if(chainId != avaxChainId){
    //             switchNetwork(library);
    //             deactivate(connectors[provider])
    //         }
    //         if (provider) activate(connectors[provider]);
    //     }
    // }, [chainId]);

    // useEffect(() => {
    //     if(account){
    //         walletConnectAction(account);
    //     }
    // }, [account]);

    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <Stack justifyContent="center" alignItems="center" gap={2}>
                        <Typography variant="h4">Bidder Info</Typography>
                    </Stack>
                </BootstrapDialogTitle>
                <DialogContent dividers sx={{ display: 'flex', padding: 2, }}>
                    <Box sx={{ border: '1px solid gray', borderRadius: 2, padding: 2, width: '100%', height: '100%' }}>
                            <React.Fragment key={1} >
                                    <MenuItem sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'space-between', px: 2 }}>
                                        <Stack direction="row" alignItems={'center'} gap={2} >
                                            <Typography>Price</Typography>
                                        </Stack>
                                        <Chip color="warning" label = {bidderInfo&&bidderInfo[4]} />
                                    </MenuItem>
                                <Divider />
                            </React.Fragment>
                        <MenuItem sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center', px: 2 }}>
                            <Button onClick={()=>{acceptOffer(bidderInfo)}} >Accept offer</Button>
                        </MenuItem>
                    </Box>
                </DialogContent>

            </BootstrapDialog>
        </div>
    );
}