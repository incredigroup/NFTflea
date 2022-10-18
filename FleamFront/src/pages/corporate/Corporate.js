// @mui
import { Box,   } from '@mui/material';
import { useEffect } from 'react';
// components
import Page from '../../components/Page';
import BrandShow from '../../sections/brand/BrandShow';
import SendMessage from '../../sections/brand/SendMessage';

// ----------------------------------------------------------------------

export default function Corporate() {
   
    return (
        <Page title="">
            <Box sx={{ display: 'flex', gap: { xs: 10, sm: 12, md: 14 }, flexDirection: 'column' }} >
                <BrandShow />
                {/* <SendMessage /> */}
            </Box>
        </Page>
    );
}
