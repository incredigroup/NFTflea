import { useState } from 'react';
// @mui
import { Box, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeHero from '../../sections/home/HomeHero';
// components
import Page from '../../components/Page';
import HomeNotableDrops from '../../sections/home/HomeNotableDrops';
import Charties from '../../sections/home/Charties';
import HomeBrand from '../../sections/home/HomeBrand';
import ConnectWallet from './../ConnectWallet';

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
export const GradientStyle = styled('div')(({ theme, sx }) => ({

  ...sx,
  height: '100%',
  background: theme.palette.mode === 'light' ? `linear-gradient(rgba(242, 156, 67, 0.26) 0%, rgba(229, 239, 255, 0.263) 83.7%, rgba(229, 239, 255, 0) 100%)` : 'linear-gradient(rgba(0,18,14, 0.8) 0%, rgba(0,28,44, 0.8) 83.7%, rgba(229, 239, 255, 0) 100%)',

}));

export default function ChartiesPage() {
  const [openWallet, setOpenWallet] = useState(false);
  const handleConnectWallet = () => {
    setOpenWallet(true)
  }

  const handleCloseWallet = () => {
    setOpenWallet(false);
  }
  return (
    <Page title="">
      <Box sx={{ display: 'flex', gap: { xs: 4, sm: 6, md: 8 }, flexDirection: 'column' }} >
        <GradientStyle sx={{ paddingTop: 25, display: 'flex', gap: 1, flexDirection: 'column' }} >
          <Charties connectWallet={handleConnectWallet} />
        </GradientStyle>
      </Box>
    </Page>
  );
}
