import { Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Slider from 'react-slick';
import SliderWrapper from "../../components/SlickSliderStyle";
import siteConfig from './../../config'
import Image from "../../components/Image";
import axios from 'axios'
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

const SLICK_SETTING = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
        <div className="ft-slick__dots--custom">
            <div className="loading" />
        </div>
    )
}

export default function HomeNotableDrops() {
    
    const [lastAddedCollections, setLastAddedCollections] = useState([])

    const getLastAddedCollections = async () => {
        const result = await axios.post(`${siteConfig.apiUrl}/api/collectible/get-last-added-collections`);
        setLastAddedCollections(result.data)
    }
    useEffect(() => {
        getLastAddedCollections()
    }, [])

    const theme = useTheme();
    return (
        <Box gap={2} paddingX={{ xs: 2, sm: 4, md: 8 }}>
            <Box justifyContent={'space-between'} display='flex' alignItems={'center'}>
                <Typography variant="h3">Notable Drops</Typography>
                <Link style={{fontWeight: 'bold', textDecoration:'none', color: 'black'}} to='/market-place/collections'>View All</Link>
            </Box>
            {/* carousel */}
            <Box>
                <SliderWrapper>
                    <Slider {...SLICK_SETTING}>
                        {lastAddedCollections.map((data, index) => (
                            <div key={index}>
                                <Box sx={{ gap: 2, padding: 2, textAlign: 'center' }}>
                                    <Image src={`${data?.bannerUrl}`} alt='' />
                                    <Typography variant='h5'>{data?.name}</Typography>
                                    <Typography color='gray'>Total NFTs: {data?.totalSupply}</Typography>
                                </Box>
                            </div>
                        ))}
                    </Slider>
                </SliderWrapper>
            </Box>

        </Box>
    )
}