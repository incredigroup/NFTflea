import { Icon } from "@iconify/react";
import { styled, } from '@mui/material/styles';
import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "../components/Image";
import { SearchBar } from "../components/StyledComponents";

export default function StayInLoop() {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} sm={6} >
                    <Stack gap={2} justifyContent="center" sx = {{height:'100%'}}>
                        <Typography variant="h3">KEEP IN TOUCH</Typography>
                        <Typography color='gray'>
                            Join our mailing list to stay in the loop with our newest feature releases, 
                            NFT drops, and tips and tricks for navigating Fleamint.
                        </Typography>
                        <Stack direction='row'>
                            <SearchBar>
                                <input type='text' placeholder="Email"  />
                                <button type='button'>
                                    <Icon icon="bi:arrow-right-short" width={40} />
                                </button>
                            </SearchBar>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6} sx ={{padding:{xs:4, md:8, lg:12}}}>
                    <Stack gap={2}>
                        <Image alt ='' src = '/assets/images/newlater.png'/>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}