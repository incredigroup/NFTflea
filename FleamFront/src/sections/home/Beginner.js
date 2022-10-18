import { Button, Grid, Stack, Typography, Container } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import { Box } from "@mui/system";
import { RootStyle } from "../../components/StyledComponents";
import Image from "../../components/Image";
import RouterLink from "../../components/RouterLink";
import BrandsCard from "../../components/cards/BrandsCard";
import TextSpinBox from "../../components/TextSpinBox";
import IconfyButton  from './../../components/IconfyButton';

export default function Beginner({ connectWallet }) {
    const theme = useTheme();
    return (
        <Box gap={4}>
             {/* Become a creator */}
            <Container>
                <Grid container paddingY={{  xs: 2, sm: 4, md: 8 }}>
                    <Grid item md={6} sm={12} sx={{ mb: 4, pr:{sm: 1, md:2, lg:3}}}>
                        {/* VIDEO */}
                        <Box sx={{ width: '100%', height: '300px',
                            width:{sx:'100%'}
                        }}>
                            {/* <Image src='/assets/images/video-thumb.png' alt='' sx={{ display: 'contents' }}/> */}
                            {/* <iframe className='video'
                                    title='Youtube player'
                                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                                    src={`https://www.youtube.com/watch?v=HZjvbxLDYnw`}>
                            </iframe> */}
                            <iframe
                                src="https://www.youtube.com/embed/SWuwqXeL3mo?controls=0"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title="video"
                                width={'100%'}
                                height={'100%'}
                            />
                            {/* <iframe className='video'
                                    title='Youtube player'
                                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                                    src={`https://youtube.com/embed/HZjvbxLDYnw?autoplay=0`}>
                            </iframe>
                             */}
                            {/* <Box sx={{ display: "flex", flexDirection: 'row', marginTop: '-200px', top: 0,  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <IconfyButton icon='bi:play-fill' width={40} />
                            </Box> */}
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <Stack gap={4}>
                            <Typography variant="h3">
                                CREATE & SELL YOUR NFTS
                            </Typography>
                            <Typography>
                                NFTs, or non-fungible tokens, are blockchain-based tokens that represent digital or real-world assets like a work of art,
                                piece of music, in-game item or even a car. Fleamint provides you with an incredible platform where you can mint and sell your own NFTs.
                                We’re here to bridge the gap between real-world value and digital authentication.
                                Have you thought about how NFTs could change your business? We can make it happen.
                            </Typography>
                            {/* <Box display="flex" justifyContent="center">
                                <Button variant="contained" sx={{ paddingX: 10, paddingY: 1 }}>
                                    <RouterLink to='/market-place/create-nft' color="white">Get Started</RouterLink>
                                </Button>
                            </Box> */}
                        </Stack>
                        <Grid container paddingY={{  xs: 2, sm: 4, md: 5 }}>
                            <Grid item md={12} sm={12}>
                                <Stack gap={4}>
                                    <Typography variant="h3">
                                        START SELLING YOUR NFTS TODAY
                                    </Typography>
                                    <Typography>
                                        Fleamint makes minting and selling NFTs easy. 
                                        We hold your hand throughout the process, giving you support and guidance at every step. 
                                        Our platform demystifies the process, our social community provide expert advice,
                                        and our data and analytics give you unfair competitive advantage. 
                                        So, get in touch and start selling today. 
                                    </Typography>
                                    {/* <Box display="flex" justifyContent="center">
                                        <Button variant="contained" sx={{ paddingX: 10, paddingY: 1 }}>
                                            <RouterLink to='/market-place/create-nft' color="white">Get Started</RouterLink>
                                        </Button>
                                    </Box> */}
                                </Stack>
                            </Grid>
                            <Grid item md={6} sm={12} sx={{ mb: 4, pl:{sm: 1, md:2, lg:3}}}>
                                {/* VIDEO */}
                                <Box sx={{ width: '100%', height: '300px',
                                    width:{sx:'100%'}
                                }}>
                                
                                    {/* <iframe className='video'
                                            title='Youtube player'
                                            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                                            src={`https://www.youtube.com/watch?v=3XBzgB4nMNE`}>
                                    </iframe> */}
                                    {/* <iframe
                                        src="https://www.youtube.com/embed/SWuwqXeL3mo?controls=0"
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                        title="video"
                                        width={'100%'}
                                        height={'100%'}
                                    /> */}
                                    {/* <Image src='/assets/images/video-thumb.png' alt='' sx={{ display: 'contents' }}/> */}
                            
                                    {/* <Box sx={{ display: "flex", flexDirection: 'row', marginTop: '-200px', top: 0,  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <IconfyButton icon='bi:play-fill' width={40} />
                                    </Box> */}
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    )
}