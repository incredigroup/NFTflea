import * as React from 'react';
import {useEffect, useContext, useState} from 'react';
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
import { NotificationManager } from 'react-notifications';
import { WalletContext, connectors } from "./../contexts/WalletContext";
import { AccountContext } from "./../contexts/AccountContext";
import { MarketplaceContext } from "./../contexts/MarketplaceContext";
import siteConfig from './../config';
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
export default function ConnectWallet({ open, handleClose }) {
    const { activate, deactivate, library, chainId, account } = useWeb3React();
    const {switchNetwork} = useContext(WalletContext);
    const {walletConnectAction, message, messageType, messageTypeAction, alertWalletConnectAction } = useContext(AccountContext);
    const { messageMarketplace, messageTypeMarketplace, messageTypeMarketplaceAction, airdropTestTokenAction } = useContext(MarketplaceContext);
    const [more, setMore] = useState(false);

    const setProvider = (type) => {
        window.localStorage.setItem("provider", type);
    };
    
    useEffect(() => 
    {
        const provider = window.localStorage.getItem("provider");
        if (provider && chainId == parseInt(avaxChainId)) {
            activate(connectors[provider]);
        }
        if(chainId&&chainId != parseInt(avaxChainId)){
            deactivate(connectors[provider])
            switchNetwork(library);
        }
    }, [chainId]);

    const handleInjected = ()=>{
        activate(connectors.injected);
        setProvider("injected");
        handleClose(); 
    }
    useEffect(() => {
        handleInjected()
    }, [])

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        if(account && chainId == parseInt(avaxChainId)){
            walletConnectAction(account)
            // airdropTestTokenAction(account)
        }else{
            alertWalletConnectAction()
        }
    }, [account]);

    useEffect(() => {
        if(messageType=="success"){
            NotificationManager.success(message, 'Info');    
        }
        if(messageType=="info"){
            NotificationManager.info(message);
        }
        if(messageType=="warning"){
            NotificationManager.warning(message, 'Warning');
        }
        if(messageType=="error"){
            NotificationManager.error(message, 'Error!');
        }
        if(messageTypeMarketplace=="success"){
            NotificationManager.success(messageMarketplace, 'Info');    
        }
        if(messageTypeMarketplace=="info"){
            NotificationManager.info(messageMarketplace);
        }
        if(messageTypeMarketplace=="warning"){
            NotificationManager.warning(messageMarketplace, 'Warning');
        }
        if(messageTypeMarketplace=="error"){
            NotificationManager.error(messageMarketplace, 'Error!');
        }

        messageTypeAction("")
        messageTypeMarketplaceAction("")
    }, [messageType, messageTypeMarketplace]);



    return (
        <>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <Stack justifyContent="center" alignItems="center" gap={2}>
                        <Typography variant="h4">Connect Your Wallet To Signin</Typography>
                        <Typography color="gray">connect with one of our available wallet providers <br/> or create a new one</Typography>
                    </Stack>
                </BootstrapDialogTitle>
                <DialogContent dividers sx={{ display: 'flex', padding: 2, }}>
                    <Box sx={{ border: '1px solid gray', borderRadius: 2, padding: 2, width: '100%', height: '100%' }}>
                        {/* {WALLET_LIST.map((wallet, index) => ( */}
                            <React.Fragment >
                                    <MenuItem   onClick={async() => { handleInjected(); }} 
                                                sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'space-between', px: 2 }}>
                                        <Stack direction="row" alignItems={'center'} gap={2} >
                                            <img src={"/assets/images/image 178.png"} alt='' height="30px" />
                                            <Typography>Avax</Typography>
                                        </Stack>
                                        {true &&
                                            <Chip color="warning" label = "Popular" />
                                        }
                                    </MenuItem> 
                                    <Divider />
                                    {/* <MenuItem  
                                            sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'space-between', px: 2 }}>
                                            <Stack direction="row" alignItems={'center'} gap={2} >
                                                <img src={"/assets/images/image 179.png"} alt='' height="30px" />
                                                <Typography>Avalanche Web Wallet</Typography>
                                            </Stack>
                                            {false &&
                                                <Chip color="warning" label = "Popular" />
                                            }
                                    </MenuItem> */}
                                    <Divider />
                                    <MenuItem   onClick={async() => { handleInjected(); }} 
                                                sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'space-between', px: 2 }}>
                                        <Stack direction="row" alignItems={'center'} gap={2} >
                                            <img src={"/assets/images/metamask-alternative 1.png"} alt='' height="30px" />
                                            <Typography>Metamask</Typography>
                                        </Stack>
                                        {false &&
                                            <Chip color="warning" label = "Popular" />
                                        }
                                    </MenuItem> 
                                    <Divider />
                                    <MenuItem   onClick={() => { switchNetwork(library); activate(connectors.coinbaseWallet); setProvider("coinbaseWallet"); }} 
                                                sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'space-between', px: 2 }}>
                                        <Stack direction="row" alignItems={'center'} gap={2} >
                                            <img src={"/assets/images/metamask-alternative 2.png"} alt='' height="30px" />
                                            <Typography>Coinbase Wallet</Typography>
                                        </Stack>
                                        {false &&
                                            <Chip color="warning" label = "Popular" />
                                        }
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem   onClick={() => { activate(connectors.walletConnect);
                                        setProvider("walletConnect"); }} 
                                                sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'space-between', px: 2 }}>
                                        <Stack direction="row" alignItems={'center'} gap={2} >
                                            <img src={"/assets/images/metamask-alternative 3.png"} alt='' height="30px" />
                                            <Typography>Wallet Connect</Typography>
                                        </Stack>
                                        {false &&
                                            <Chip color="warning" label = "Popular" />
                                        }
                                    </MenuItem>
                                    <Divider />
                                    {/* {!more?
                                        <></>
                                    :
                                        <>
                                            <MenuItem  onClick={() => { switchNetwork(library); activate(connectors.coinbaseWallet); setProvider("coinbaseWallet"); }}
                                                    sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'space-between', px: 2 }}>
                                                    <Stack direction="row" alignItems={'center'} gap={2} >
                                                        <img src={"/assets/images/phantom 1.png"} alt='' height="30px" />
                                                        <Typography>Phantom</Typography>
                                                    </Stack>
                                                    {false &&
                                                        <Chip color="warning" label = "Popular" />
                                                    }
                                            </MenuItem>
                                            <Divider />
                                            <MenuItem  
                                                    sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'space-between', px: 2 }}>
                                                    <Stack direction="row" alignItems={'center'} gap={2} >
                                                        <img src={"/assets/images/glow 1.png"} alt='' height="30px" />
                                                        <Typography>Glow</Typography>
                                                    </Stack>
                                                    {false &&
                                                        <Chip color="warning" label = "Popular" />
                                                    }
                                            </MenuItem>
                                            <Divider />
                                        </>
                                    } */}
                            </React.Fragment>
                        {/* <MenuItem sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center', px: 2 }}>
                            <Button onClick={()=>{setMore(!more)}}>Show {!more?"More":"Less"} Option</Button>
                        </MenuItem> */}
                    </Box>
                </DialogContent>

            </BootstrapDialog>
        </>
    );
}