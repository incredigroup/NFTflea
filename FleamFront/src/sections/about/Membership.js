// @mui
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { CardStyle } from '../../pages/Home';
import MembershipCard from '../../components/cards/MembershipCard';


import { purplePreset } from '../../utils/getColorPresets';
import { MembershipData } from '../../_mock/Membership';
import StayInLoop from '../StayInLoop';

export default function MemberShip() {
    const theme = useTheme();

    return (
        <Stack justifyContent={'center'} padding={{ xs: 2, sm: 4 }}>
            <Box sx={{ background: purplePreset.lighter, borderRadius: 1, padding: { xs: 1 },mb:4 }}>
                <Stack gap={4}>
                    <Box textAlign={'center'} padding={2}>
                        <Typography color={theme.palette.primary.dark} variant="h3">Membership</Typography>
                        <Typography variant="h3">Community Tiering & Staking <br /> Bands</Typography>
                        <Stack direction="row" display={'flex'} flexWrap={"wrap"}>
                            {MembershipData.map((data, index) => (
                                <MembershipCard data={data} index={index} key={index} />
                            ))}
                        </Stack>
                    </Box>
                </Stack>
            </Box>
            <Container>
                {/* <Grid container sx = {{mb:4}} >
                    <Grid item xs={12} sm={6} sx={{ padding: 2 }}>
                        <Typography variant="h3" sx={{ flexGrow: 1 }}>We Are Helping People To Get A Success
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ padding: 2 }}>
                        <Typography color="gray">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </Typography>
                    </Grid>
                </Grid> */}
                {/* HELP Cards */}
                {/* <Grid container sx = {{mb:8}}>
                    <Grid item xs={12} sm={6} md={4} sx={{padding:1}}>
                        <CardStyle sx={{ flexDirection: "column", padding: 4 , gap:2}}>
                            <Box display="flex" sx = {{justifyContent:"center"}}>
                                <img src='/assets/images/help1.png' alt='' />
                            </Box>
                            <Typography color='gray' sx = {{textAlign:"center"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            </Typography>
                        </CardStyle>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{padding:1}}>
                        <CardStyle sx={{ flexDirection: "column", padding: 4 , gap:2}}>
                            <Box display="flex" sx = {{justifyContent:"center"}}>
                                <img src='/assets/images/help2.png' alt='' />
                            </Box>
                            <Typography color='gray' sx = {{textAlign:"center"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            </Typography>
                        </CardStyle>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{padding:1}}>
                        <CardStyle sx={{ flexDirection: "column", padding: 4 , gap:2}}>
                            <Box display="flex" sx = {{justifyContent:"center"}}>
                                <img src='/assets/images/help3.png' alt='' />
                            </Box>
                            <Typography color='gray' sx = {{textAlign:"center"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            </Typography>
                        </CardStyle>
                    </Grid>
                </Grid> */}
                {/* Stay In the loop */}
                <StayInLoop />
             
            </Container>
        </Stack>

    )
}