import { Button, Grid, Stack, Typography, Container } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import { Box } from "@mui/system";
import { RootStyle } from "../../components/StyledComponents";
import Image from "../../components/Image";
import RouterLink from "../../components/RouterLink";
import BrandsCard from "../../components/cards/BrandsCard";
import TextSpinBox from "../../components/TextSpinBox";
import IconfyButton  from './../../components/IconfyButton';

export default function Charties({ connectWallet }) {
    const theme = useTheme();
    return (
            <Box gap={4}>
                 {/* Become a creator */}
                 <Container>
                    <Grid container paddingY={{  xs: 2, sm: 4, md: 8 }}>
                        <Grid item md={6} sm={12} sx={{ width: "100%", mb: 4, pr:{sm: 1, md:2, lg:3}}}>
                            {/* VIDEO */}
                            <Box sx={{ width: '100%', height: '300px',
                                width:{sx:'100%'}
                            }}>
                                <iframe
                                    src="https://www.youtube.com/embed/JlO5nqvdCtY"
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    title="video"
                                    width={'100%'}
                                    height={'100%'}
                                 />
                                {/* <Image src='/assets/images/video-thumb.png' alt='' sx={{ display: 'contents' }}/>
                        
                                <Box sx={{ display: "flex", flexDirection: 'row', marginTop: '-200px', top: 0,  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <IconfyButton icon='bi:play-fill' width={40} />
                                </Box> */}
                            </Box>
                        </Grid>
                        <Grid item md={6} sm={12}>
                            <Stack gap={3}>
                                <Typography variant="h3">
                                    CREATE & SELL YOUR NFTS
                                </Typography>
                                <Typography>
                                    At Fleamint, we want to make it easy for buyers and sellers to make donations to their preferred charity. 
                                    Charities can extend their global reach, reach new audiences, and engage our community, with no mint fees.
                                </Typography>
                                <Stack gap={2}>
                                    <ul className='text-ul' style={{paddingLeft:'20px'}}>
                                        <li>
                                            Engage your existing members
                                        </li>
                                        <li>
                                            Engage our existing members
                                        </li>
                                        <li>
                                            Educate new demographics
                                        </li>
                                        <li>
                                            No mint fees
                                        </li>
                                        <li>
                                            Free to use
                                        </li>
                                    </ul>
                                </Stack>
                                {/* <Box display="flex" justifyContent="center">
                                    <Button variant="contained" sx={{ paddingX: 10, paddingY: 1 }}>
                                        <RouterLink to='/market-place/create-nft' color="white">Get Started</RouterLink>
                                    </Button>
                                </Box> */}
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

    )
}