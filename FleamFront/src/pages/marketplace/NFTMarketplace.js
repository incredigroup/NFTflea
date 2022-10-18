import {Box, Container, Grid, Stack, Typography, useTheme} from "@mui/material";
import Page from "../../components/Page";
import {GradientStyle} from "../Home";
import BrowserCollection from "../../sections/NFT/categories/BrowserCollection";
import {motion} from "framer-motion";
import HomeAvax from "../../sections/home/HomeAvax";

export default function NFTMarketplace() {
    const theme = useTheme();
    return (
        <Page title="Marketplace">
            <GradientStyle sx={{paddingTop: 15, paddingBottom: 4, display: 'flex', gap: 8, flexDirection: 'column'}}>
                <Container>
                    <Stack gap={4} alignItems={'center'} sx={{mb: {xs: 4, sm: 8}}}>

                        <Typography variant="h4">CREATE AND SELL YOUR <span
                            color={theme.palette.primary.dark}>NFTs</span></Typography>
                        <Grid container sx={{
                            borderRadius: '10px',
                            backgroundColor: 'rgb(255 241 226)',
                            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;',
                            padding: '0 15px 30px'
                        }}>
                            {/* help */}
                            <Grid container sx={{display: 'flex'}}>
                                <Grid item xs={12} sm={6} md={3} sx={{padding: 1, textAlign: 'center'}}>
                                    <Box>
                                        <motion.div initial={{opacity: 0, y: -10}} whileInView={{opacity: 1, y: 0}}
                                            transition={{ease: "easeInOut", duration: 1}} gap={1} display={'flex'}
                                            sx={{alignItems: 'center'}}>
                                            <div><img src="/assets/images/image 74.png" alt=''/></div>
                                            <Typography variant={'h5'}>Set up Your Wallet </Typography>
                                            <Typography color='gray'> You must have a cryptocurrency wallet in order to list
                                                your NFT for sale. So, the first step is to set up your wallet
                                            </Typography>
                                        </motion.div>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} sx={{padding: 1, textAlign: 'center'}}>
                                    <Box>
                                        {/* Info elements animation */}
                                        <motion.div initial={{opacity: 0, y: -10}} whileInView={{opacity: 1, y: 0}}
                                                    transition={{ease: "easeInOut", duration: 1, delay: 0.2}} gap={1}
                                                    display={'flex'}
                                                    sx={{alignItems: 'center'}}>
                                            <div><img src="/assets/images/image 75.png" alt=''/></div>
                                            <Typography variant={'h5'}>Create Your Collection </Typography>
                                            <Typography color='gray'>Once you’ve set up your wallet, you need to create a
                                                listing.
                                                Make a title for your collection that is eye-catching, and unique.
                                                It’s important to talk about the purpose of your collection, articulate what
                                                the mission of your project is,
                                                and ultimately how this brings value and utility to the community.
                                            </Typography>
                                        </motion.div>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} sx={{padding: 1, textAlign: 'center'}}>
                                    <Box>
                                        <motion.div initial={{opacity: 0, y: -10}} whileInView={{opacity: 1, y: 0}}
                                                    transition={{ease: "easeInOut", duration: 1, delay: 0.4}} gap={1}
                                                    display={'flex'}
                                                    sx={{alignItems: 'center'}}>
                                            <div><img src="/assets/images/image 76.png" alt=''/></div>
                                            <Typography variant={'h5'}>Add Your NFTs </Typography>
                                            <Typography color='gray'>After creating you collection, the next step is to add
                                                your NFTs.
                                            </Typography>
                                        </motion.div>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} sx={{padding: 1, textAlign: 'center'}}>
                                    <Box>
                                        <motion.div initial={{opacity: 0, y: -10}} whileInView={{opacity: 1, y: 0}}
                                                    transition={{ease: "easeInOut", duration: 1, delay: 0.6}} gap={1}
                                                    display={'flex'}
                                                    sx={{alignItems: 'center'}}>
                                            <div><img src="/assets/images/image 77.png" alt=''/></div>
                                            <Typography variant={'h5'}>List Them For Sale </Typography>
                                            <Typography color='gray'>The final step is listing them, and then easily selling
                                                them on Fleamint.
                                            </Typography>
                                        </motion.div>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Stack>
                </Container>
                
                <HomeAvax />
                
                <BrowserCollection/>
            </GradientStyle>
        </Page>
    )
}
