import { Button, Grid, Stack, Typography, Container } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import { Box } from "@mui/system";
import { RootStyle } from "../../components/StyledComponents";
import Image from "../../components/Image";
import RouterLink from "../../components/RouterLink";
import BrandsCard from "../../components/cards/BrandsCard";
import TextSpinBox from "../../components/TextSpinBox";
import IconfyButton  from './../../components/IconfyButton';

export default function Brands({ connectWallet }) {
    const theme = useTheme();
    return (
        <Box gap={4}>
             {/* Become a creator */}
             <Container>
                <Grid container paddingY={{ xs: 2, sm: 4, md: 8 }}>
                    <Grid item md={6} sm={12} sx={{ mb: 4, pr:{sm: 1, md:2, lg:3}}}>
                        {/* VIDEO */}
                        <Box sx={{ width: '100%', height: '300px',
                                width:{sx:'100%'}
                        }}>
                            
                            <iframe
                                    src="https://www.youtube.com/embed/zGy34H3jgAY"
                                    frameborder="0"
                                    allow="autoplay; encrypted-media"
                                    allowfullscreen
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
                        <Stack gap={4}>
                            <Typography variant="h3">
                                FLEAMINT DETONATES WEB 3.0 FOR BRANDS 
                            </Typography>
                            <Typography>
                                We remove the barriers to entry for corporates. 
                                There’s no need to worry about complex technological terms and methodologies, or issues around compliance. 
                                We provide the necessary advisory services to help onboard your collection of NFTs, assisting NFT minting,
                                authentication, and providing real time actionable data on what’s working.
                                Our market-leading platform enables you to develop new revenue streams, creating innovative benefits and
                                utilities for your customers
                            </Typography>
                            <Box display="flex" justifyContent="center">
                                <Button variant="contained" sx={{ paddingX: 10, paddingY: 1 }}>
                                    <RouterLink to='/corporate/partners' color="white">Apply for brand partnerships</RouterLink>
                                </Button>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    )
}