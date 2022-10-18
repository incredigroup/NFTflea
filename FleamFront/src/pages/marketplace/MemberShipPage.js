// @mui
import { Box,   } from '@mui/material';
 
 
// components
import Page from '../../components/Page';
 
import MemberShip from '../../sections/about/Membership';

// sections


// ----------------------------------------------------------------------


// ----------------------------------------------------------------------


export default function MemberShipPage() {
    return (
        <Page title="">
            <Box sx={{ display: 'flex', gap: { xs: 10, sm: 12, md: 14 }, flexDirection: 'column' }} >
                <MemberShip />
            </Box>
        </Page>
    );
}
