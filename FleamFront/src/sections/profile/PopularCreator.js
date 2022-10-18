import { Icon } from "@iconify/react";
import { Box, Container, Typography, Grid, Avatar, Stack, Button, Chip, useTheme } from "@mui/material";
import Image from "../../components/Image";
import { useContext, useEffect, useState } from 'react';
import { AccountContext } from "./../../contexts/AccountContext";
import { useWeb3React } from "@web3-react/core";
import RouterLink from './../../components/RouterLink';


export default function PopularCreator() {
    const theme = useTheme();
    const { popularCreators, profileInfo, getPopularCreatorAction, siteConfig, profileFollowAction } = useContext(AccountContext);
    const { account } = useWeb3React();
    const [popularCreatorsData, setPopularCreatorsData] = useState([]);

    const followHandle = (followWallet, index) =>{
        if(account){
            profileFollowAction(account, followWallet)
            let temp = popularCreatorsData;
            temp[index].follow = !temp[index].follow
            setPopularCreatorsData(temp)
        }
    }

    useEffect(() => {
        getPopularCreatorAction();
    }, []);

    useEffect(() => {
        let temp = [];
        let me = {};
        for ( let i = 0; i < popularCreators.length; i++)
        {
            const data = {};
            const wallet = popularCreators[i].wallet;
            data[wallet]= {}
            data[wallet] = popularCreators[i];
            data.item = popularCreators[i];
            data.follow = false;
            temp.push(data)
        }
        
        if (profileInfo.following) me = JSON.parse(profileInfo.following);

        for (var key in me) {
            const wallet = key;
            for (let i = 0; i < temp.length; i++)
            {
             if(temp[i][wallet]) temp[i].follow = true;
            }
        }

        setPopularCreatorsData(temp)

    }, [popularCreators, account, profileInfo]);

    return (
        <Container>
            <Typography variant="h3" sx={{ textAlign: 'center', mb: 4 }}>Popular Creators</Typography>
            <Grid container sx = {{background:'rgba(245, 88, 91, 0.1)',padding:1, borderRadius:1}}>
                {popularCreatorsData && popularCreatorsData.map((creator, index) => {
                    if (creator.public === "0" || creator.item.wallet == account) return;
                    return <Grid item xs={12} sm={6} md={6} lg={4} key={index} sx={{ padding: 1,  }} >
                        <Stack alignItems={'center'} sx={{ borderRadius: 2,background:theme.palette.background.paper, position: 'relative', boxShadow: '0px 12px 26px rgb(16 30 115 / 6%)' }}>
                            <RouterLink to={`/account/profile/${creator.item.wallet}`} color='gray'>
                                <Chip label={"Top Creator"}  sx = {{zIndex:10, position:'absolute', top:10, left:10, background:theme.palette.primary.dark, color:'white'}} />
                            </RouterLink>
                            <Box sx={{ width: '100%' }}>
                                <Image  alt='' />
                                {/* creator.cover */}
                            </Box>
                            <RouterLink to={`/account/profile/${creator.item.wallet}`} color='gray'>
                                <Box mt={'-38px'} sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                                    <Avatar src={`${creator&&creator.item.file_path&&siteConfig.apiUrl}/${creator&&creator.item.file_path}`} sx={{ width: 76, height: 76 }} />
                                    {/* creator.avatar */}
                                </Box>
                            </RouterLink>

                            <Stack direction="row" justifyContent="space-between" sx={{ width: '100%', padding: 2, paddingY: 4 }}>
                                <Box>
                                    <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', }}>{creator.item.name}
                                        <Icon icon={`${creator.verified ? 'codicon:verified' : 'codicon:unverified'}`} width="24" color={`${creator.verified ? 'green' : 'red'}`} />
                                    </Typography>
                                    {/* <Typography component={'p'}>
                                        {creator.amount} <b>FLM</b>
                                    </Typography> */}
                                </Box>
                                <Stack justifyContent={'center'}>
                                    <Button variant="contained" onClick={()=>{followHandle(creator.item.wallet, index)}}>{creator.follow ? 'Following' : 'Follow'}</Button>
                                </Stack>

                            </Stack>
                        </Stack>
                    </Grid>
                })}

            </Grid>
        </Container>
    )
}