import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
// components
import Page from '../../components/Page';
import Charties from '../../sections/home/Charties';
import { GradientStyle } from "../Home";

// ----------------------------------------------------------------------
export const CardStyle = styled('div')(({theme, sx }) => ({
  boxShadow: (theme.palette.mode==='light'?`0px 3px 26px rgb(16 30 115 / 10%)`:`0px 2px 16px rgb(255 255 255 / 10%)`),
  borderRadius: `10px`,
  display: 'flex',
  justifyContent: 'center',
  background:theme.palette.mode==='light'?'white':theme.palette.background.paper,
  ...sx,
}));

export default function CharitiesPage() {
  const [openWallet, setOpenWallet] = useState(false);
  const handleConnectWallet = () => {
    setOpenWallet(true)
  }

  const handleCloseWallet = () => {
    setOpenWallet(false);
  }
  return (
    <Page title="Charities">
        <GradientStyle sx={{ paddingTop: 15, paddingBottom: 4, display: 'flex', gap: 8, flexDirection: 'column' }} >
          <Charties connectWallet={handleConnectWallet} />
      </GradientStyle>
    </Page>
  );
}
