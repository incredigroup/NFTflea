import { Box, Container, Grid, Stack, Typography, useTheme, } from '@mui/material';
import CustomButton from '../../components/CustomButton';
import IconfyButton from '../../components/IconfyButton';
import Image from '../../components/Image';
import { GradientStyle } from '../../pages/Home';
import {motion} from "framer-motion";

const DETAILS = [
    { title: "Advisory", content: ["Fleamint is the most innovative platform in the world for businesses and people to quickly mint, trade, store, collect, and exhibit NFTs. Our expert advisory services help onboard brand collections, assisting in NFT minting and giving you access to world class design support. Our insights capabilities and dashboards will give partners competitive advantage, providing real time, measurable, and actionable data."] },
    { title: "Onboarding To Platform", content: ["Our platform removes the barriers to entering the NFT marketplace. Expert teams guide you, providing thought leadership and educational materials at every step. We workshop ideas with you to determine how NFTs can bring value for your business, and we customise solutions for your needs. We help you create a custom wallet, give you access to community portals and our social hub, and you can start selling immediately. We’ll be with you every step of the way. We even have experts that can enable you to create advanced gamified experiences for your customers in the metaverse."] },
    { title: "Trust and Credibility", content: ["Fleamint is a one stop solution. The platform is easy to use, decentralized and designed for buying and selling NFTs with wide ranging utility including digital twins of real-world assets. Smart contracts provide authenticated and clear proof of origin."] },
    // { title: "How to Mint and Sell an NFT ", content: ["-Connect your wallet: to begin, you must first create a cryptocurrency wallet and then link it to our NFT marketplace.", " -Create your first NFT easily", " -Advertise or auction your NFT in our marketplace ", " -Confirm a sale and check that your wallet is funded."] },
    // { title: "How to Buy an NFT", content: ["-Sign up to Fleamint", "-Create an account", "-Connect your wallet"] },
    // { title: "How To Navigate The Platform", content: ["-Sign up to Fleamint", "-Create an account",  "-Connect the wallet", "-You are free to take advantage of the marketplace"] },
]
const categories = ["Art", "Music", "Game assets", "Property", "Wine", "Jewelry", "Clothes", "Collectibles Art", "Domain Names",
                "Photography", "Sports", "Memberships"]
export default function BrandShow() {
    const theme = useTheme();
    return (
        <GradientStyle sx={{ paddingTop: 20, display: 'flex', gap: 8, flexDirection: 'column' }} >
            <Container >
                <Stack gap={1} textAlign="center" sx={{ mb: 4 }}>
                    <Typography variant="h3">Explainer Video From Our Expert</Typography>
                    <Typography color='gray' sx={{ mb: 4 }}>We work daily to become better and we are ready to share best practices.</Typography>
                    {/* VIDEO */}
                    <Box sx={{ position: 'relative' }}>
                        {/* <Image src='/assets/images/video-thumb.png' alt='' />
                        <Box sx={{ position: 'absolute', top: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <IconfyButton icon='bi:play-fill' width={40} />
                        </Box> */}
                    <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}  transition={{ ease: "easeInOut", duration: 1, delay: 0.6 }}>
                        <iframe style={{'margin': '10px auto 0 auto', 'border': 'none', borderRadius: '10px', height: '70vh'}}
                                width="100%"
                                src="https://www.youtube.com/embed/zGy34H3jgAY">
                        </iframe>
                    </motion.div>
                    </Box>
                </Stack>
                <Grid container sx={{ padding: 2 }}>
                    <Grid item xs={12} sm={5} md={6} sx={{ display: 'flex', gap: 2, flexDirection: 'column' }} >
                        {
                            categories.map((category, index) => {
                                return <CustomButton key={index} size="90%">{category}</CustomButton>        
                            })
                        }
                    </Grid>
                    <Grid item xs={12} sm={5} md={6}>
                        {DETAILS.map((detail, index) => (
                            <Stack gap={2} sx={{ mb: 4 }} key = {index}>
                                <Typography variant='h3' color={theme.palette.primary.main}>{detail.title}</Typography>
                                {detail.content.map((item, index) => (
                                <Typography component='p' color='gray'>
                                    {item}
                                </Typography>
                                ))}
                            </Stack>
                        ))}

                    </Grid>
                </Grid>
            </Container>
        </GradientStyle>
    )
}