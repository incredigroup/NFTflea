import { Stack, Typography, Grid, Box, Divider, TextField, useTheme, Button } from "@mui/material";
import PropTypes from 'prop-types';
import RouterLink from './../../components/RouterLink';
import { AccountContext } from "./../../contexts/AccountContext";

import Image from "../Image";
import {useEffect, useContext} from 'react';

ProfileCard.propTypes={
    collection:PropTypes.object,
    theme:PropTypes.object,
}
export default function ProfileCard({collection, theme}){

    const { siteConfig } = useContext(AccountContext);

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}  mb={4}>
            <Stack gap={2} px={1} >
                <Box sx={{ borderRound: 1 }}>
                    <RouterLink to={`/account/profile/${collection.wallet}`} color='gray'>
                        <Image src={`${collection&&collection.file_path&&siteConfig.apiUrl}/${collection&&collection.file_path}`} sx={{ height:'300px'}} alt='' />
                    </RouterLink>
                </Box>
                <Stack direction='row' justifyContent={'center'} sx={{ width: '100%' }}>
                    <Typography variant="h5">{collection.name}</Typography>
                </Stack>
                <Divider color='black' />
            </Stack>
        </Grid>
    )
} 