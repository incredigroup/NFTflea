// @mui
import { Box, Button, Container, Grid, Stack, Typography, } from '@mui/material';
import Slider from 'react-slick';

import { BLOGS_DATA } from './../_mock/MockData';
import Image from './../components/Image';
import Page from './../components/Page';
import { CardStyle, GradientStyle } from './Home';
import StayInLoop from './../sections/StayInLoop';

import SliderWrapper from "./../components/SlickSliderStyle";

const SLICK_SETTING = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    initialSlide: 0,
    arrows: false,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,

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

export default function Blogs() {
    return (
        <Page title="">
            <GradientStyle sx={{ paddingTop: { xs: 15, sm: 20 }, paddingBottom: 4, display: 'flex', gap: 8, flexDirection: 'column' }} >
                <Container >
                    {/* posted */}

                    <SliderWrapper>
                        <Slider {...SLICK_SETTING}>
                            {[1, 2, 3].map((value, index) => (
                                <Box key={index} >
                                    <Box sx={{ mb: { xs: 6, sm: 10 } }} key = {index} >
                                        <Grid container >
                                            <Grid item xs={12} sm={5}>
                                                <Image sx={{ height: '100%' }} src='/assets/images/image 144.png' alt='' />
                                            </Grid>
                                            <Grid item xs={12} sm={7} sx={{ padding: 4 }}>
                                                <Stack gap={2} >
                                                    <Typography variant='h6'>Guest Post</Typography>
                                                    <Typography variant='h4'>Dony Herrera</Typography>
                                                    <Typography color='gray' sx={{ mb: 4 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                                                    <Box><Button variant="contained" color="error" >VIEW POST</Button></Box>
                                                </Stack>
                                            </Grid>
                                        </Grid>

                                    </Box>
                                </Box>
                            ))}

                        </Slider>
                    </SliderWrapper>

                    {/* blog list */}
                    <Grid container>
                        {BLOGS_DATA.map((blog, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index} padding={1}>
                                <CardStyle sx={{ flexDirection: 'column', gap: 2 }}>
                                    <Image src='/assets/images/image 145.png' alt='' />
                                    <Box padding={2}>
                                        <Typography sx={{ mb: 2 }} variant={'h6'}>{blog.title}</Typography>
                                        <Typography sx={{ mb: 2 }} color='gray'>{blog.description}</Typography>
                                        <Stack direction='row' justifyContent={'space-between'} alignItems={'center'}>
                                            <Typography variant="caption">{blog.posted}</Typography>
                                            <Button color="error">Read Detail</Button>
                                        </Stack>
                                    </Box>
                                </CardStyle>
                            </Grid>
                        ))}

                    </Grid>

                </Container>

            </GradientStyle>
            {/* Stay in loop start */}
            <StayInLoop />
        </Page>
    );
}
