
// @mui
import { styled,  } from '@mui/material/styles';
import { Grid,  Typography, Stack, Box, } from '@mui/material';

// components
import RouterLink from './../../components/RouterLink';
import { GradientStyle } from './../../pages/Home';
import { purplePreset } from './../../utils/getColorPresets';
import IconfyButton  from './../../components/IconfyButton';
// ----------------------------------------------------------------------


const RootStyle = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    paddingBottom: 10,
}));

// ----------------------------------------------------------------------

export default function MainFooter() {

    return (
        <RootStyle>
            <Box sx={{ pt: 4, }} >
                <Grid
                    container
                    justifyContent={{ xs: 'center', md: 'space-between' }}
                    sx={{ textAlign: { xs: 'center', md: 'left' } }}
                >
                    <Box sx={{ paddingY: 2, width: '100%', textAlign: 'center'}}>
                        <Typography variant={'h3'} sx={{ mb: 1 }}>WE WORK WITH THE BEST PARTNERS</Typography>
                        <Grid container justifyContent={'center'}>
                            <Grid item display={'flex'} flexWrap={'wrap'} width={'100%'} justifyContent={'space-evenly'} alignItems={'center'}>
                                <Grid item display={'flex'} width={'350px'} justifyContent={'center'} padding={1}> <img src='/assets/images/logo-with-text-2048x592.png' alt='dapper' sx={{ maxHeight: '110px', maxWidth: '100%' }} width={'100%'} height={'80%'}/></Grid>
                                <Grid item display={'flex'} width={'100px'} justifyContent={'center'} padding={1} ><img src='/assets/images/blockchain-1.png' alt='blockchain' sx={{ maxHeight: '110px', maxWidth: '100%' }} width={'100%'} height={'90%'} /></Grid>
                                <Grid item display={'flex'} width={'350px'} justifyContent={'center'} padding={1}> <img src='/assets/images/avalanche.png' alt='quant' sx={{ maxHeight: '110px', maxWidth: '100%' }} height={'80%'} width={'100%'}  loading='lazy' /></Grid>
                            </Grid>
                            {/* <Grid item flexDirection={'column'} alignItems={'center'} height={'250px'}> */}
                                {/* <Grid item display={'flex'} width={'100%'} justifyContent={'center'} padding={{xs:4, sm: 3, md:3, lg:3}}  ><img src='/assets/images/avalanche.png' alt='quant' sx={{ maxHeight: '110px', maxWidth: '100%' }} height={'80%'}  loading='lazy' /></Grid> */}
                                {/* <Grid item display={'flex'} width={'100%'} justifyContent={'center'} padding={1}><img src='/assets/images/combinator-1.png' alt='combinator' sx={{ maxHeight: '110px', maxWidth: '100%' }} height={'90%'} /></Grid> */}
                            {/* </Grid> */}
                        </Grid>
                    </Box>

                    <GradientStyle sx={{ mb: 3, width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', paddingTop: { xs: 2, sm: 10 }, paddingX: { xs: 2, sm: 10 } }}>
                        <Stack gap={2} sx={{ mb: 3, paddingX: 2 }} alignItems='start'>
                            <Typography variant={'h5'} sx={{ mb: 1 }}>Marketplace</Typography>
                            <RouterLink to='/market-place/categories' color='gray'>Categories</RouterLink>
                            <RouterLink to='/market-place/collections' color='gray'>Collections</RouterLink>
                            <RouterLink to='/market-place/create-nft' color='gray'>Create Product</RouterLink>
                            <RouterLink to='/market-place/memberships' color='gray'>Memberships</RouterLink>
                        </Stack>

                        <Stack gap={2} sx={{ mb: 3, paddingX: 2 }} alignItems='start'>
                            <Typography variant={'h5'} sx={{ mb: 1 }}>Brand Relations</Typography>

                            {/* TEMPORARY HIDDEN */}
                            {/*<RouterLink to='/corporate/about' color='gray'>About Us</RouterLink>*/}

                            <RouterLink to='/corporate/partners' color='gray'>Partners</RouterLink>
                        </Stack>
                        <Stack gap={2} sx={{ mb: 3, paddingX: 2 }} alignItems='start'>
                            <Typography variant={'h5'} sx={{ mb: 1 }}>Resources</Typography>
                            <RouterLink to='/resources/beginners' color='gray'>For Beginners</RouterLink>
                            <RouterLink to='/resources/charities' color='gray'>For Charities</RouterLink>
                            <RouterLink to='/resources/brands' color='gray'>For Brands</RouterLink>
                            <a href='https://fleamint.zendesk.com/hc/en-us' style={{color: 'gray', textDecoration:'none'}} target="_blank" color='gray'>Help FAQ</a>

                        </Stack>
                        <Stack gap={2} sx={{ mb: 3, paddingX: 2 }} alignItems='start'>
                            <Typography variant={'h5'} sx={{ mb: 1 }}>My Profile</Typography>
                            <RouterLink to='/account/leader-board' color='gray'>Leaderboards</RouterLink>
                            <RouterLink to='/account/analytics' color='gray'>Analytics</RouterLink>
                        </Stack>
                        {/* <Stack gap={2} sx={{ mb: 3, paddingX: 2 }} alignItems='start'>
                            <Typography variant={'h5'} sx={{ mb: 1 }}>Wallet</Typography>
                        </Stack> */}
                    </GradientStyle>

                </Grid>


            </Box>
            <Box display={'flex'} flexDirection={{ xs: 'column', md: 'row', }} paddingX={{ xs: 4, md: 10 }} justifyContent={'space-between'} alignItems={"center"} gap={2}>
                <Typography component='div'>
                    ® 2022. All Right Reserved   |
                    <RouterLink to='/resources/privacy' color='gray'> Privacy Policy | </RouterLink>
                    <RouterLink to='/resources/cookie' color='gray'> Cookie Policy</RouterLink>
                    {/* <a style={{textDecoration:'none', color:'gray'}} href="/assets/privacy_statement.docx">  Privacy Policy</a> |
                    <a style={{textDecoration:'none', color:'gray'}} href="/assets/Cookie_Policy_EU_-_Fleamint_.docx">  Cookie Policy</a> */}
                    {/* <a color='gray' to="/">  Term Of Use</a> */}
                </Typography>
                <Box display={'flex'} gap={2}>
                    <IconfyButton icon='bxl:twitter' href="https://www.twitter.com"/>
                    <IconfyButton icon='gg:facebook' href="https://www.facebook.com"/>
                    <IconfyButton icon='bxl:instagram-alt' href="https://www.instagram.com"/>
                    {/* <IconfyButton icon='bxs:camera' href="https://www.instagram.com"/> */}
                </Box>
            </Box>
        </RootStyle>
    );
}
