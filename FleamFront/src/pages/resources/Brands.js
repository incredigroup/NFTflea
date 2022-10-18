import { useState } from 'react';
// @mui
import { Box, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeHero from '../../sections/home/HomeHero';
// components
import Page from '../../components/Page';
import HomeNotableDrops from '../../sections/home/HomeNotableDrops';
import HomeAvax from '../../sections/home/HomeAvax';
import Brands from '../../sections/home/Brands';
import HomeBrand from '../../sections/home/HomeBrand';
import ConnectWallet from './../ConnectWallet';
import { GradientStyle } from "../Home";

// sections


// ----------------------------------------------------------------------


// ----------------------------------------------------------------------
export const CardStyle = styled('div')(({theme, sx }) => ({
  boxShadow: (theme.palette.mode==='light'?`0px 3px 26px rgb(16 30 115 / 10%)`:`0px 2px 16px rgb(255 255 255 / 10%)`),
  borderRadius: `10px`,
  display: 'flex',
  justifyContent: 'center',
  background:theme.palette.mode==='light'?'white':theme.palette.background.paper,
  ...sx,
}));

export default function BrandsPage() {
  const [openWallet, setOpenWallet] = useState(false);
  const handleConnectWallet = () => {
    setOpenWallet(true)
  }

  const handleCloseWallet = () => {
    setOpenWallet(false);
  }
  return (
    <Page title="Brands">
        <GradientStyle sx={{ paddingTop: 15, paddingBottom: 4, display: 'flex', gap: 8, flexDirection: 'column' }} >
          <Brands connectWallet={handleConnectWallet} />
        </GradientStyle>
    </Page>
  );
}
