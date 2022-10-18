import { Box, Button, FormControlLabel, Grid, Stack, Switch, Typography, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import { AccountProfileData, CollectionsData } from "../../../_mock/MockData";
import Image from "../../../components/Image";
import { BackgroundImageStyle } from "../../../components/StyledComponents";
import { CardStyle } from "../../../pages/Home";
import CustomButton from "../../../components/CustomButton";
import IconfyButton from "../../../components/IconfyButton";
import { fNumber } from "../../../utils/formatNumber";
import { useState, useEffect } from 'react'
import axios from 'axios'
import siteConfig from './../../../config';

export default function CollectionCover() {
    const [ favoriteCollectionInfo, setFavoriteCollectionInfo] = useState([]);
    const getAwesomeCollection = async () => {
        const result = await axios.post(`${siteConfig.apiUrl}/api/collectible/get-awesome-collections`);
        setFavoriteCollectionInfo(result.data)
    }

    useEffect(() => {
        getAwesomeCollection()
    }, [])
    const theme = useTheme();
    return (
        <BackgroundImageStyle sx={{ backgroundImage: 'url(/assets/images/collectionbg.png)', paddingX: { xs: 2, sm: 4, md: 8, lg: 20 }, paddingTop: 20, justifyContent: 'center', flexDirection: 'column' }}>
            {/* Awesome NFT Collections */}
            <CardStyle sx={{ flexDirection: 'column', width: '100%',  padding: 2, paddingX: 4, }}>

                <Stack direction="row" gap={2}>
                    <Grid container>
                        <Grid item xs={12} sm={4} md={3} display="flex" alignItems="center" flexDirection={'column'} justifyContent='center'>
                            {/* <Image src={favoriteCollectionInfo[0]&&favoriteCollectionInfo[0].bannerUrl?favoriteCollectionInfo[0].bannerUrl:"/assets/images/card1.png"} alt='' /> */}
                            <Box style={{lineHeight: 0}}>
                                <Image src={favoriteCollectionInfo[0]&&favoriteCollectionInfo[0].bannerUrl?favoriteCollectionInfo[0].bannerUrl:"/assets/images/card1.png"} alt='' />
                            </Box>
                            <Box>
                                <Stack>
                                    <Typography mt={1} align="center" variant="h5">{favoriteCollectionInfo[0]&&favoriteCollectionInfo[0].name}</Typography>
                                </Stack>
                            </Box>
                            <Stack direction="row" sx={{ paddingY: 2 }} gap={1}>
                                <IconfyButton icon='bxl:twitter' href="https://www.twitter.com" width={20} />
                                <IconfyButton icon='gg:facebook' href="https://www.facebook.com" width={20} />
                                <IconfyButton icon='icon-park-solid:instagram-one' href="https://www.instagram.com" width={20} />
                                <IconfyButton icon='bxl:discord-alt' href="https://www.discord.com" width={20} />
                            </Stack>
                        </Grid>
                        {/* start Account Info  */}
                        <Grid item xs={12} sm={8} md={9} sx={{ paddingLeft: 1, mb: 1 }}>
                            {/* Name */}
                            <Stack gap={2} sx={{ mb: 2 }}>
                                <Stack gap={{lg:4, md:2}}>
                                    <Stack gap={1} alignItems={'center'}>
                                        <Typography variant="h3">Awesome NFTs Collection</Typography>

                                        <Typography sx = {{mb:2}} color={'gray'} >3333 Astrokids navigating their way through Fantom, Avalanche, and Matic. Inspired by the nostalgia of 80s and 90s cartoons and comics with the styling of Australian neo-pop artist Josh Thorsen, founder of Teens On Acid, Astrokids are like no other project you've seen before.</Typography>

                                    </Stack>
                                    <Grid container>
                                        <Grid item sm={6} md={3} display={"flex"} flexDirection={"column"} gap={2} sx={{ paddingY: 2,px:1, mb:1, boxShadow: '0px 3px 26px rgba(16, 30, 115, 0.1)', width: '100%' }} borderRadius={1} alignItems="center" justifyContent={'center'}>
                                            <Typography variant='subject'>Max Supply</Typography>
                                            <Typography variant="h5">{fNumber(favoriteCollectionInfo[0]&&favoriteCollectionInfo[0].maxSupply)}</Typography>
                                        </Grid>
                                        <Grid item sm={6} md={3} display={"flex"} flexDirection={"column"} gap={2} sx={{ paddingY: 2,px:1,  mb:1, boxShadow: '0px 3px 26px rgba(16, 30, 115, 0.1)', width: '100%' }} borderRadius={1} alignItems="center" justifyContent={'center'}>
                                            <Typography variant='subject'>Total Supply</Typography>
                                            <Typography variant="h5">{fNumber(favoriteCollectionInfo[0]&&favoriteCollectionInfo[0].totalSupply)}</Typography>
                                        </Grid>
                                        <Grid item sm={6} md={3} display={"flex"} flexDirection={"column"} gap={2} sx={{ paddingY: 2,px:1, mb:1, boxShadow: '0px 3px 26px rgba(16, 30, 115, 0.1)', width: '100%' }} borderRadius={1} alignItems="center" justifyContent={'center'}>
                                            <Typography variant='subject'>Total Sales Count</Typography>
                                            <Typography variant="h5">{fNumber(favoriteCollectionInfo[0]&&favoriteCollectionInfo[0].totalSalesCount)}</Typography>
                                        </Grid>
                                        <Grid item sm={6} md={3} display={"flex"} flexDirection={"column"} gap={2} sx={{ paddingY: 2,px:1, mb:1, boxShadow: '0px 3px 26px rgba(16, 30, 115, 0.1)', width: '100%' }} borderRadius={1} alignItems="center" justifyContent={'center'}>
                                            <Typography variant='subject'>Total Volume Usd</Typography>
                                            <Typography variant="h5">{fNumber(favoriteCollectionInfo[0]&&favoriteCollectionInfo[0].totalVolumeUsd)}</Typography>
                                        </Grid>
                                    </Grid>
                                </Stack>
                            </Stack>

                        </Grid>

                        {/* end collection info */}
                    </Grid>
                </Stack>
            </CardStyle>
            {/* end of collection infomation */}

        </BackgroundImageStyle>
    )
}