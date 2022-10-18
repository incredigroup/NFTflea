import { Icon } from "@iconify/react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import {styled, useTheme} from '@mui/material/styles';
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Zoom } from 'swiper';
import Image from "../../components/Image";
import {motion} from "framer-motion";
import axios from 'axios';
import siteConfig from './../../config'
import { IconifyLink } from "../../components/StyledComponents";
import RouterLink from "../../components/RouterLink";

const SLIDER_SETTING = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    pagination: false,
    slidesPerView: 2,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 3,
        slideShadows: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
}

export default function HomeHero({connectWallet}) {
    const [slider, setSlider] = useState(null);
    const [recentlyNFTdata, setRecentlyNFTdata] = useState([]);   
    const getRecentlyNFTs = async () => {
        const result = await axios.post(`${siteConfig.apiUrl}/api/collectible/get-recently-nfts`);
        setRecentlyNFTdata(result.data)
    }
    useEffect(() => {
        getRecentlyNFTs()
    }, [])

    const theme = useTheme();

    return (
        <>
            <marquee style={{fontSize:'25px', backgroundColor: '#e7d0b8', padding:'10px 0', margin: '-15px 0 15px'}} >
                This is BETA
            </marquee>
            <Grid container paddingX={{ xs: 2, sm: 4, md: 8 }}>
                <Grid item md={6} xs={12} sm={12} sx={{pr:{xs:2, sm:4, md:16}}}>
                    <Stack gap={2} sx={{mb:4}}>
                        {/* Welcome page elements animation */}
                        <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ ease: "easeInOut", duration: 1 }}>
                            <Typography variant="h3">
                                FLEAMINT IS A GLOBAL NFT MARKETPLACE, CONNECTING REAL & VIRTUAL ASSETS.
                            </Typography>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}  transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
                            <Typography >
                                Fleamint is a community and NFT marketplace with real world utility, for both brands and consumers.
                                We make it easy to start a collection, mint and sell, enabling brands to bring NFTs with tangible value to our community.
                            </Typography>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}  transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
                            <Stack direction={{xs: "column", md: "row"}} gap={2}>
                                <Button  variant="contained" sx={{ paddingX: 6 }} size="large"><RouterLink color='white' to = '/market-place/nft'>Explore</RouterLink></Button>
                                <Button variant="outlined" sx={{ paddingX: 6 }} size="large"><RouterLink color = {theme.palette.primary.main} to = '/market-place/create-nft'>Create</RouterLink></Button>
                                <Button variant="contained" sx={{ paddingX: 6 }} size="large"  onClick={()=>{connectWallet()}}><Typography variant="h6" >Connect Wallet</Typography></Button>
                            </Stack>
                        </motion.div>

                        {/* Video on welcome page */}
                        <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}  transition={{ ease: "easeInOut", duration: 1, delay: 0.6 }}>
                            <iframe style={{'margin': '10px auto 0 auto', 'border': 'none', borderRadius: '10px', height: '40vh'}}
                                    width="100%"
                                    src="https://www.youtube.com/embed/SWuwqXeL3mo?controls=0">
                            </iframe>
                        </motion.div>
                    </Stack>
                </Grid>
                {/* SWIPER SLIDER  */}
                {/* Slider styling */}
                <Grid item xs={12} md={6} sm={12} padding={{ xs:'50px 0', md:'100px 0 0' }}>
                    <div style={{ position: 'relative'}}>
                        <Swiper {...SLIDER_SETTING} modules={[Navigation, EffectCoverflow]}>
                            {
                                recentlyNFTdata.map((nft, key) => (
                                    <SwiperSlide key={key}><RouterLink color='white' to={`/market-place/product-detail/${nft.smartcontractAddress}_${nft.tokenId}`}>
                                        <Image style={{ listStyle: "none", borderRadius: "30px"}} src={nft&&nft.file_path?nft.file_path:"/assets/images/card1.png"} alt='' width="100%" />
                                    </RouterLink></SwiperSlide>
                                ))
                            }
                        </Swiper>
                        <Stack direction='row' pt={{xs:1,md:2}} justifyContent='center'>
                            <IconifyLink className="swiper-button-prev">
                                <Icon icon='eva:arrow-back-outline' width={30} />
                            </IconifyLink>
                            <IconifyLink className="swiper-button-next">
                                <Icon icon='akar-icons:minus' width={30} />
                                <Icon icon='eva:arrow-forward-outline' width={30} style={{ marginLeft: -10 }} />
                            </IconifyLink>
                        </Stack>
                        <img src='/assets/images/reddot-rec.png' alt='' className='absolute dots1' />
                        <img src='/assets/images/reddot-ver.png' alt='' className='absolute dots2' />
                        <img src='/assets/images/reddot-ver.png' alt='' className='absolute dots3' />
                        
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
