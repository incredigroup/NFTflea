// @mui
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

import IconfyButton from '../../components/IconfyButton';
import { GradientStyle } from '../../pages/Home';

const AboutCardStyle = styled('div')(({ theme, sx }) => ({
    background: (theme.palette.mode ==="light"?'rgba(255,255,255,0.5)':theme.palette.background.default),
    boxShadow: '0px 3px 26px rgb(16 30 115 / 10%)',
    border: `1px solid ${theme.palette.background.paper}`,
    borderImage: 'initial',
    borderRadius: '10px',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...sx,
}));
export default function Introduce() {
    const theme = useTheme();

    return (
        <GradientStyle sx={{ paddingTop: 15, display: 'flex', gap: 8, flexDirection: 'column' }} >
            <Container>
                <AboutCardStyle sx={{ padding: { xs: 2, md: 4 } }} >
                    <Stack direction={{ xs: 'column', md: 'row' }} alignItems={'center'}>
                        <img src='/assets/images/about1.png' width={'100%'} height={'100%'} alt='' />
                        <Stack gap={{ xs: 2, sm: 3 }} padding={2}>
                            <Typography component="p" variant="h3">Our <span style={{ color: theme.palette.primary.dark }}>Company</span></Typography>
                            <Typography color={'gray'}>Fleamint is a global gas free non fungible marketplace.  The platform is decentralized and designed for buying and selling unique digital and physical assets represented by NFT’s and leveraged by smart contracts.</Typography>
                            <Grid container>
                                <Grid item sm={6}>
                                    <ul className='text-ul'>
                                        <li>USP</li>
                                        <li>Advisory</li>
                                        <li>Staking</li>
                                        <li>NFT Property Bonds</li>
                                        <li>CSR</li>
                                    </ul>
                                </Grid>
                                <Grid item sm={6}>
                                    <ul className='text-ul'>
                                        <li>Unique Token Utility</li>
                                        <li>Liquidity Pools</li>
                                        <li>Yield Farming </li>
                                        <li>Low circulating supply</li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </Stack>

                    </Stack>

                </AboutCardStyle>
            </Container>
            <Container>
                <Stack direction='column' gap={4}>
                    <Box textAlign={'center'} padding={2}>
                        <Typography color={theme.palette.primary.dark} variant="h3">For Beginners</Typography>
                        <Typography variant="h3">Watch Our Crypto Guide For Beginners</Typography>
                        <Typography color='gray'>We work daily to become better and we are ready to share best practices</Typography>
                    </Box>
                </Stack>
                <Box sx={{ position: 'relative' }}>
                    <img src='/assets/images/video-thumb2.png' alt='' width={'100%'} />
                    <Box sx={{ position: "absolute", top: 0, width: '100%', height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <IconfyButton icon="bx:play-circle" width={40} />
                    </Box>
                </Box>
            </Container>
        </GradientStyle>

    )
}