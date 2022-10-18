import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import { Box } from "@mui/system";
import siteConfig from './../../config';
import RouterLink from "../../components/RouterLink";
import TextSpinBox from "../../components/TextSpinBox";
import {SearchBar} from "../../components/StyledComponents";
import {Icon} from "@iconify/react/dist/iconify";
import { useState, useEffect, useContext } from 'react'
import { AccountContext } from "./../../contexts/AccountContext";
import CoporateCard from "../../components/cards/CorporateCard";
import {motion} from "framer-motion";

export default function HomeAvax({ connectWallet }) {
    const { brandPartnerData, getBrandPartnerDataAction } = useContext(AccountContext);
    const [brandData, setBrandData] = useState([])
    const [displayData, setDisplayData] = useState([])
    // const [searchText, setSearchText] = useState('')
    const theme = useTheme();
    let brand_arr = [];
    let products = [];
    
    // const handleSearchText = (e) => {
    //     if (e.keyCode === 13) {
    //         handleSearchButton();
    //         return;
    //     }
    //     setSearchText(e.target.value);
    // }
    
    // const handleSearchButton = () => {
    //     setDisplayData(brandData.filter(data => data.name.toUpperCase().indexOf(searchText.toUpperCase()) !== -1));
    // }
    
    useEffect(() => {
        brand_arr = [];
        brandPartnerData.map((data, index) => {
            if (index >= 6) return;
            products = [
                data.file_path&&siteConfig.apiUrl?`${data&&data.file_path&&siteConfig.apiUrl}/${data&&data.file_path}`:`/assets/images/profile-head.png`,
                "/assets/images/image 78.png",
                "/assets/images/image 79.png",
                "/assets/images/image 80.png",
                "/assets/images/image 81.png"
            ];
            JSON.parse(data.site).map((product, index) => {
                if (product&&product.file_path)
                    products[index + 1] = product.file_path
            })
            brand_arr.push({
                name:data.name,
                created:'John Doe',
                floorPrice:0.4,
                totalPrice:24400,
                percent:1276.9,
                images: products,
                path:"/account/profile/" + data.wallet,
                verified:true,
            })
        })
        setBrandData(brand_arr)
        setDisplayData(brand_arr)
    }, [brandPartnerData])

    useEffect(() => {
        getBrandPartnerDataAction();
    }, []);

    return (
        <>
            <Box gap={4}>

                {/* Become a creator */}
                <Grid container padding={{ xs: 2, sm: 4, md: 8 }}>
                    {/* <Grid item md={6} sm={12} paddingX={{ sm: 10, md: 12, lg: 20 }} sx={{ mb: 4 }}>
                        <Image src='/assets/images/Group 2656.png' alt='' width={'100%'} /> 
                    </Grid> */}
                    <Grid item md={12} sm={12}>
                        <Stack gap={4}>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2}>
                                <Typography variant = "h3">Brands of</Typography>
                                <TextSpinBox  variant = "h3"
                                values = {[{id:0,label:'The Week'},{id:1,label:'The Month'}]} 
                                />
                                {/* <Image src='/assets/images/brand/arasaka.png' alt='' width={'100%'} />  */}
                            </Box>
                            <Grid container>
                                {/* {BrandRealData.map((brand,index)=>(
                                    <Grid item key = {index} sm={12} md={6} lg={4} padding = {1} >
                                        <BrandsCard {...brand} />
                                    </Grid>
                                ))}                */}
                                {displayData.map((brand, index) => (
                                    <Grid item key={index} sm={12} md={6} lg={4} padding={{ xs: 1, sm: 2 }}>
                                        <motion.div style={{height:'100%'}} initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ ease: "easeInOut", duration: 1 }}>
                                            <CoporateCard {...brand} />
                                        </motion.div>
                                    </Grid>
                                ))}
                            </Grid>
                            {/* <Box display="flex" justifyContent="center">
                                <Button variant="contained" sx={{ paddingX: 10, paddingY: 1 }}>
                                    <RouterLink to='/market-place/create-nft' color="white">Get Started</RouterLink>
                                </Button>
                            </Box> */}
                        </Stack>
                    </Grid>
                </Grid>
                {/* <RootStyle sx={{ padding: { md: 10, sm: 6, xs: 4, } }}>
                    <Typography variant='h3'>
                        AVAX - Speed, Security, Green Credentials, Potential For Multi Chain NFTs
                    </Typography>
                    <Typography>
                        Blisteringly fast, green blockchain with surprisingly low costs of usage. PoS means no wasteful mining with huge electricity generation costs. Theoretically infinite Transactions per second and a cross chain approach through the application of EVM technology makes Avax the natural choice for our company
                    </Typography>
                    <Button onClick={connectWallet} variant="outlined" size='large' sx={{ color: theme.palette.primary.dark, paddingX: 10, paddingY: 2, background: 'white', borderColor: 'white', '&:hover': { background: 'transparent', borderColor: 'white', color: 'white' } }}><Typography variant="h6">Connect Wallet</Typography></Button>
                </RootStyle> */}
                {/* Corporate */}
                {/* <Grid container sx={{ padding: { md: 10, sm: 6, xs: 4, } }}>
                    <Grid item xs={12} md={6} gap={4} >
                        <Typography variant="h3">NOTABLE COLLECTIONS</Typography>
                        <Stack gap={2}>

                            <ul className='text-ul'>
                                <li>
                                    Provide tools for you to personally measure in real time, no marketing bs. Try it, love it, buy it.
                                </li>
                                <li>
                                    Provide tools for you to personally measure in real time, no marketing bs. Try it, love it, buy it.
                                </li>
                                <li>
                                    Provide tools for you to personally measure in real time, no marketing bs. Try it, love it, buy it.
                                </li>
                                <li>
                                    Provide tools for you to personally measure in real time, no marketing bs. Try it, love it, buy it.
                                </li>
                            </ul>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6} paddingX={{ xs: 4, md: 8, }} >
                        <Image src='/assets/images/image 10.png' alt="" width={'100%'} />
                    </Grid>


                </Grid> */}
                {/* Giving Back */}
                {/* <Grid container padding={{ xs: 2, sm: 4, md: 8 }} >
                    <Grid item xs={12} md={6} paddingX={{ xs: 4, md: 8 }} marginBottom={4}>
                        <Image src='/assets/images/image 177.png' alt="" width={'100%'} />
                    </Grid>
                    <Grid item xs={12} md={6} gap={4} >
                        <Typography variant="h3">Giving Back</Typography>
                        <Stack gap={2}>
                            <Typography>
                                We offer services to the charities that can change and save lives all over the world, every single day, for free. Giving back to the community and others in neeed is a core tenet of our philisophy and our community.
                            </Typography>
                            <ul className='text-ul'>
                                <li>
                                    Provide tools for you to personally measure in real time, no marketing bs. Try it, love it, buy it.
                                </li>
                                <li>
                                    Provide tools for you to personally measure in real time, no marketing bs. Try it, love it, buy it.
                                </li>
                                <li>
                                    Provide tools for you to personally measure in real time, no marketing bs. Try it, love it, buy it.
                                </li>
                                <li>
                                    Provide tools for you to personally measure in real time, no marketing bs. Try it, love it, buy it.
                                </li>
                            </ul>
                        </Stack>
                    </Grid>

                </Grid> */}
            {/* <Container>
                <Stack>
                    <SearchBar sx={{width: '100%', height: "47px"}}>
                        <input type='text' onKeyUp={handleSearchText} placeholder="Search Text"/>
                        <button type='button' onClick={handleSearchButton}>
                            <Icon icon="eva:search-fill" width={40} height={30}/>
                        </button>
                    </SearchBar>
                </Stack>
            </Container> */}
            </Box>
        </>
    )
}
