import { Button, IconButton, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState, useContext } from "react";
import { Icon } from "@iconify/react";
import { MenuRoutes } from "./../../_mock/MenuItems";
import useResponsive from "./../../hooks/useResponsive";
import DropdownMenu from "./../../components/DropdownMenu";
import MobileDrawer from "./MobileDrawer";
import ConnectWallet from "./../../pages/ConnectWallet";
import useSettings from "./../../hooks/useSettings";
import { useWeb3React } from "@web3-react/core";
import { NotificationManager } from 'react-notifications';
import { MarketplaceContext } from "./../../contexts/MarketplaceContext";
import siteConfig from './../../config';
const avaxChainId = siteConfig.avaxChainId;

const MenuAction = styled('div')(({ theme }) => ({

    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    "&:hover": { borderBottom: `1px solid ${theme.palette.primary.main}` }
}))

  
export default function MainMenu() {
    const { themeMode, onToggleMode } = useSettings();
    const {
        library,
        chainId,
        account,
        activate,
        deactivate,
        active
    } = useWeb3React();
    
    const { airdropTestTokenAction } = useContext(MarketplaceContext);
    const isMobile = useResponsive('down', 'md');
    const [open, setOpen] = useState(false);
    const [openWallet, setOpenWallet] = useState(false);

    const handleCloseWallet = () => {
        setOpenWallet(false);
    }
    const openDrawer = () => {
        setOpen(true);

    }
    const handleClose = () => {
        setOpen(false);
    }

    const disconnect = () => {
        window.localStorage.setItem("provider", undefined);
        deactivate();
    };

    
    const handleAirdrop = () => {
        if (!account) {
            NotificationManager.warning('Connect Wallet', 'Warning');
            return;
        }
        if (account && chainId == parseInt(avaxChainId))
            airdropTestTokenAction(account)
    }

    return (
        <Stack direction='row' gap={2} alignItems="center" >
            {!isMobile && MenuRoutes.map((menu, index) => (
                <DropdownMenu key={index} menu={menu} />
            ))}
            
            {/* <Button variant="outlined"  sx={{ paddingX: 4 }} onClick={handleAirdrop}>Airdrop FUJI</Button> */}
            
            <Button variant="contained" sx={{ paddingX: 4 }} onClick={() => {
                {!account?setOpenWallet(true):disconnect()}
            }}>{!account?"Wallet":`${account.slice(0,4)}...${account.slice(-2)}`}</Button>
            

            <IconButton onClick = {onToggleMode} sx = {{color:'black', padding:'0px'}}>
                <Icon  color = {themeMode === 'light' ?'black':'white'} icon={themeMode === 'light' ? "ic:twotone-nightlight" : "carbon:light-filled"} width={20} />
            </IconButton>

            {isMobile &&
                <>
                    <IconButton onClick={openDrawer}>
                        <Icon icon='dashicons:menu-alt' />
                    </IconButton>
                    <MobileDrawer open={open} handleClose={handleClose} />
                </>
            }
            <ConnectWallet open={openWallet} handleClose={handleCloseWallet} />
        </Stack>
    )
}