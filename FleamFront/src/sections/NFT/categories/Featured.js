import { Icon } from "@iconify/react";
import { Container, Stack, useTheme, Typography, Box, styled, Grid, Avatar, Divider, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import Slider from 'react-slick';
import { IconifyLink } from "../../../components/StyledComponents";
import Image from "../../../components/Image";
import RouterLink from './../../../components/RouterLink';
import siteConfig from './../../../config'
import axios from 'axios'
import { CardStyle, GradientStyle } from "../../../pages/Home";


const SLIDER_SETTING = {
    dots: false,
    infinaite: true,
    speed: 500,
    arrows: false,

}

const AUTHORS = [
    { cover: '/assets/images/nft1.png', title: 'The cartoon monster Ⓡ', avatar: '/assets/images/author.png', author: 'John Doe', isVerified: true, bid: 1000, time: '15 hours left' },

    { cover: '/assets/images/nft1.png', title: 'The cartoon monster Ⓡ', avatar: '/assets/images/author.png', author: 'John Smith', isVerified: false, bid: 300, time: '12 hours left' },

]


function FeaturedNFTsCarousel() {
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
        <Stack>
            {/* Featured NFT slider start */}
            <Slider ref={c => (setSlider(c))} {...SLIDER_SETTING}>
                {recentlyNFTdata.map((nft, index) => (
                    <Box sx={{ position: 'relative', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }} key={index}>
                        <Box sx={{ width: {sm:'50%'} }}>
                            <RouterLink to={`/market-place/product-detail/${nft.smartcontractAddress}_${nft.tokenId}`} color='gray'>
                                <Image src={nft.file_path?nft.file_path:"/assets/images/card1.png"} alt='' />
                            </RouterLink>
                        </Box>
                        <Box sx={{ position: { sm: 'absolute' }, left: { sm: '40%', lg: '42%' }, top: 0, height: '100%', display: 'flex', flexDirection: 'column' }} justifyContent={'center'}>
                            <Stack justifyContent='center' sx = {{padding:{xs:4}}}>
                                <Box>
                                    <CardStyle sx={{ padding: '16px 24px 16px 24px',  flexDirection: 'column', gap: 2 }}>
                                        <Typography variant="h6" sx={{ textAlign: 'center' }}>{nft.name}</Typography>
                                        {/* Avatar */}
                                        {/* <Stack direction='row' gap={2}>
                                            <Avatar alt='' src={`${nft.file_path}`} sx={{ width: 56, height: 56 }} />
                                            <Stack >
                                                <Typography color='gray' component="p" sx={{ display: 'flex', alignItems: 'center' }}>Creator
                                                    {author.isVerified &&
                                                        <Icon icon='bxs:check-shield' width={20} color='#0e77b7' />
                                                    }
                                                    {!author.isVerified &&
                                                        <Icon icon='codicon:unverified' width={20} color='red' />
                                                    }
                                                </Typography>
                                                <Typography>John Doe</Typography>
                                            </Stack>
                                        </Stack> */}
                                        <Divider color='black' />
                                        <Stack direction='row' justifyContent={'space-between'} alignItems="center" gap={2}>
                                            <TextField
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                                label='Current Bid' value={(nft?.price ? nft.price + ' FUJI20': "Not For Sale")} sx={{

                                                    "& .MuiOutlinedInput-root": {
                                                        "& > fieldset": { borderColor: theme.palette.primary.main },
                                                    },
                                                    "& .MuiOutlinedInput-root:hover": {
                                                        "& > fieldset": { borderColor: theme.palette.primary.main },
                                                    },
                                                    width: '8rem'
                                                }} />
                                            {nft?.price ? <Typography color='gray'>{nft.auctionDate ? (new Date() - nft.auctionDate) / 3600 / 1000 : 0} Hours Left</Typography> : ''}
                                        </Stack>
                                    </CardStyle>
                                    <Stack direction='row' sx={{ paddingLeft: 8, paddingTop: { xs: 1, sm: 2, md: 4 } }}>
                                        <IconifyLink onClick={() => { slider.slickPrev() }}>
                                            <Icon icon='eva:arrow-back-outline' width={30} />
                                        </IconifyLink>
                                        <IconifyLink onClick={() => { slider.slickNext() }}>
                                            <Icon icon='akar-icons:minus' width={30} />
                                            <Icon icon='eva:arrow-forward-outline' width={30} style={{ marginLeft: -10 }} />
                                        </IconifyLink>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>
                ))
                }

            </Slider>
            {/* end nft slider  */}
        </Stack>
    )

}

export default function FeaturedNFTs() {

    const theme = useTheme();
    return (
        <GradientStyle sx={{ paddingTop: 18, display: 'flex', gap: 8, flexDirection: 'column' }} >
            <Container>
                <CardStyle sx={{ padding: { xs: 2, md: 4 },  }} >
                    <Grid container>
                        <Grid item xs={12} md={4} sx = {{textAlign:'center'}} >
                            <Typography variant="h4" sx = {{paddingY:{xs:2,sm:4, md:10}}}>
                                Featured NFTs
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <FeaturedNFTsCarousel />
                        </Grid>
                    </Grid>

                </CardStyle>
            </Container>

        </GradientStyle>
    )
}