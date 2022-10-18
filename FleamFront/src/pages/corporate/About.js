// @mui
import { Box,   } from '@mui/material';
 
 
// components
import Page from '../../components/Page';
 
import Introduce from '../../sections/about/Introduce';
import MemberShip from '../../sections/about/Membership';


// sections


// ----------------------------------------------------------------------


// ----------------------------------------------------------------------


export default function AboutUs() {
    return (
        <Page title="">
            <Box sx={{ display: 'flex', gap: { xs: 10, sm: 12, md: 14 }, flexDirection: 'column' }} >
                <Introduce />
                <MemberShip />
            </Box>
        </Page>
    );
}
