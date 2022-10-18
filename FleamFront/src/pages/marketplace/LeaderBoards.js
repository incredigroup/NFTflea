import { Box, Button, ButtonGroup, Container, Divider, Grid, Stack, Typography, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router";
import {useState, useContext, useEffect} from 'react';

import { SelectStyle, TableStyle } from "./../../components/StyledComponents";
import Page from "./../../components/Page";
import { GradientStyle } from "./../Home";
import { ProfilesData } from "./../../_mock/LeaderBoard";
import { fNumber } from "./../../utils/formatNumber";
import { AccountContext } from "./../../contexts/AccountContext";


export default function LeaderBoard() {
    const theme = useTheme();
    const navigate = useNavigate();
    const { leaderBoardData, siteConfig, getLeaderBoardDataAction, mostLikedData, getMostLikedDataAction } = useContext(AccountContext);
    const [leaderBoard, setLeaderBoard] = useState([]);

    const handleNavigateProfile=(profile)=>{
        navigate(`/account/profile/${profile.wallet}`,{replace:true});        
    }

    useEffect(() => {
        getLeaderBoardDataAction();
        getMostLikedDataAction();
    }, []);

    useEffect(() => {
        if(leaderBoardData) setLeaderBoard(leaderBoardData)
    }, [leaderBoardData]);

    return (
        <Page title="">
            <Box sx={{ display: 'flex', gap: { xs: 10, sm: 12, md: 14 }, flexDirection: 'column' }} >
                <GradientStyle sx={{ paddingTop: 15, display: 'flex', gap: 8, flexDirection: 'column' }} >
                    <Container>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row'}} gap={2} justifyContent='space-between' alignItems="center">

                            <Typography variant="h3">Leader Boards</Typography>
                            <Stack direction='row' gap={2} sx={{ background: '#ffffff99', boxShadow: '0 3px 26px #101e731a'  }} padding={1} borderRadius={1} >
                                <SelectStyle>
                                    <option>View</option>
                                </SelectStyle>
                                <Divider orientation="vertical" variant="middle" flexItem/>
                                <ButtonGroup variant="outlined" aria-label="outlined button group">
                                    <Button variant = "contained">Daily</Button>
                                    <Button>Weekly</Button>
                                    <Button>Monthly</Button>
                                </ButtonGroup>
                            </Stack>

                        </Stack>
                        {/* start grid */}
                        <Grid container>
                            <Grid item xs = {12} sm ={6} md={4}>
                                <Box sx = {{padding:2}}>
                                    <Typography  paddingX={2} paddingY={1}   sx = {{background:theme.palette.primary.main, borderTopLeftRadius:10 , borderTopRightRadius:10}} color="white">Most Liked</Typography>
                                    <TableStyle cellSpacing={0} cellPadding={0}>
                                        <thead>
                                            <tr>
                                                <th>Ranks</th>
                                                <th>Product Name</th>
                                                <th>Collection Name</th>
                                                {/* <th>Product Pic</th> */}
                                                <th>Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {mostLikedData.map((product,index)=>(
                                                <tr key={index}>
                                                    <td style={{textAlign: 'center'}}>{index+1}</td>
                                                    <td style={{textAlign: 'center'}}>{product.name}</td>
                                                    <td style={{textAlign: 'center'}}>{product.collectionName}</td>
                                                    {/* <td style={{textAlign: 'center'}}><img  src = {product.file_path?`${siteConfig.apiUrl}/${product.file_path}`:""} alt = '' /></td> */}
                                                    <td style={{textAlign: 'center'}}><Typography display={'flex'} justifyContent='space-around' alignItems="center"><Icon icon = "ei:trophy" color={ProfilesData&&ProfilesData[index]&&ProfilesData[index].color} width={20}/></Typography></td>
                                                </tr>
                                            ))}
                                            
                                        </tbody>
                                    </TableStyle>
                                </Box>
                            </Grid>
                            <Grid item xs = {12} sm ={6} md ={4}>
                                <Box sx = {{padding:2}}>
                                    <Typography  paddingX={2} paddingY={1}   sx = {{background:theme.palette.primary.main, borderTopLeftRadius:10 , borderTopRightRadius:10}} color="white">Most Searches</Typography>
                                    <TableStyle cellSpacing={0} cellPadding={0}>
                                        <thead>
                                            <tr>
                                                <th>Ranks</th>
                                                <th>User Name</th>
                                                <th>Profile Pic</th>
                                                <th>Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {MostSearchesData.map((profile,index)=>(
                                                <tr key = {index} onClick = {()=>handleNavigateProfile(profile)}>
                                                    <td style={{textAlign: 'center'}}>{profile.rank}{profile?.isYou&&<Typography color = '#00D18C' variant='caption'>(you)</Typography>||''}</td>
                                                    <td style={{textAlign: 'center'}}>{profile.user}</td>
                                                    <td style={{textAlign: 'center'}}><img  src = {profile.avatar} alt = '' /></td>
                                                    <td style={{textAlign: 'center'}}><Typography display={'flex'} justifyContent='space-around' alignItems="center"><Icon icon = "ei:trophy" color={profile.color} width={20}/>{fNumber(profile.value)}</Typography></td>
                                                </tr>
                                            ))} */}
                                            {leaderBoardData&&leaderBoardData[0]&&leaderBoardData[0].map((profile,index)=>(
                                                <tr key = {index} onClick = {()=>handleNavigateProfile(profile)}>
                                                    <td style={{textAlign: 'center'}}>{index+1}{profile?.isYou&&<Typography color = '#00D18C' variant='caption'>(you)</Typography>||''}</td>
                                                    <td style={{textAlign: 'center'}}>{profile.name}</td>
                                                    <td style={{textAlign: 'center'}}><img  src = {profile.file_path?`${siteConfig.apiUrl}/${profile.file_path}`:""} alt = '' /></td>
                                                    <td style={{textAlign: 'center'}}><Typography display={'flex'} justifyContent='space-around' alignItems="center"><Icon icon = "ei:trophy" color={ProfilesData&&ProfilesData[index]&&ProfilesData[index].color} width={20}/>{profile.follwingCount&&fNumber(profile.follwingCount)}</Typography></td>
                                                </tr>
                                            ))}
                                            
                                        </tbody>
                                    </TableStyle>
                                </Box>
                            </Grid>
                            <Grid item xs = {12} sm ={6} md ={4}>
                                <Box sx = {{padding:2}}>
                                    <Typography  paddingX={2} paddingY={1}   sx = {{background:theme.palette.primary.main, borderTopLeftRadius:10 , borderTopRightRadius:10}} color="white">Most Items List</Typography>
                                    <TableStyle cellSpacing={0} cellPadding={0}>
                                        <thead>
                                            <tr>
                                                <th>Ranks</th>
                                                <th>User Name</th>
                                                <th>Profile Pic</th>
                                                <th>Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {MostItemsListData.map((profile,index)=>(
                                                <tr key = {index} onClick = {()=>handleNavigateProfile(profile)}>
                                                    <td style={{textAlign: 'center'}}>{profile.rank}{profile?.isYou&&<Typography color = '#00D18C' variant='caption'>(you)</Typography>||''}</td>
                                                    <td style={{textAlign: 'center'}}>{profile.user}</td>
                                                    <td style={{textAlign: 'center'}}><img  src = {profile.avatar} alt = '' /></td>
                                                    <td style={{textAlign: 'center'}}><Typography display={'flex'} justifyContent='space-around' alignItems="center"><Icon icon = "ei:trophy" color={profile.color} width={20}/>{fNumber(profile.value)}</Typography></td>
                                                </tr>
                                            ))} */}
                                            {leaderBoardData&&leaderBoardData[0]&&leaderBoardData[0].map((profile,index)=>(
                                                <tr key = {index} onClick = {()=>handleNavigateProfile(profile)}>
                                                    <td style={{textAlign: 'center'}}>{index+1}{profile?.isYou&&<Typography color = '#00D18C' variant='caption'>(you)</Typography>||''}</td>
                                                    <td style={{textAlign: 'center'}}>{profile.name}</td>
                                                    <td style={{textAlign: 'center'}}><img  src = {profile.file_path?`${siteConfig.apiUrl}/${profile.file_path}`:""} alt = '' /></td>
                                                    <td style={{textAlign: 'center'}}><Typography display={'flex'} justifyContent='space-around' alignItems="center"><Icon icon = "ei:trophy" color={ProfilesData&&ProfilesData[index]&&ProfilesData[index].color}  width={20}/>{profile.follwingCount&&fNumber(profile.follwingCount)}</Typography></td>
                                                </tr>
                                            ))}
                                            
                                        </tbody>
                                    </TableStyle>
                                </Box>
                            </Grid>
                            <Grid item xs = {12} sm ={6} md={4}>
                                <Box sx = {{padding:2}}>
                                    <Typography  paddingX={2} paddingY={1}   sx = {{background:theme.palette.primary.main, borderTopLeftRadius:10 , borderTopRightRadius:10}} color="white">Most Valuable Created Collection</Typography>
                                    <TableStyle cellSpacing={0} cellPadding={0}>
                                        <thead>
                                            <tr>
                                                <th>Ranks</th>
                                                <th>User Name</th>
                                                <th>Profile Pic</th>
                                                <th>Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {MostCollectionData.map((profile,index)=>(
                                                <tr key = {index} onClick = {()=>handleNavigateProfile(profile)}>
                                                    <td style={{textAlign: 'center'}}>{profile.rank}{profile?.isYou&&<Typography color = '#00D18C' variant='caption'>(you)</Typography>||''}</td>
                                                    <td style={{textAlign: 'center'}}>{profile.user}</td>
                                                    <td style={{textAlign: 'center'}}><img  src = {profile.avatar} alt = '' /></td>
                                                    <td style={{textAlign: 'center'}}><Typography display={'flex'} justifyContent='space-around' alignItems="center"><Icon icon = "ei:trophy" color={profile.color} width={20}/>{fNumber(profile.value)}</Typography></td>
                                                </tr>
                                            ))} */}
                                            {leaderBoardData&&leaderBoardData[0]&&leaderBoardData[0].map((profile,index)=>(
                                                <tr key = {index} onClick = {()=>handleNavigateProfile(profile)}>
                                                    <td style={{textAlign: 'center'}}>{index+1}{profile?.isYou&&<Typography color = '#00D18C' variant='caption'>(you)</Typography>||''}</td>
                                                    <td style={{textAlign: 'center'}}>{profile.name}</td>
                                                    <td style={{textAlign: 'center'}}><img  src = {profile.file_path?`${siteConfig.apiUrl}/${profile.file_path}`:""} alt = '' /></td>
                                                    <td style={{textAlign: 'center'}}><Typography display={'flex'} justifyContent='space-around' alignItems="center"><Icon icon = "ei:trophy" color={ProfilesData&&ProfilesData[index]&&ProfilesData[index].color}  width={20}/>{profile.follwingCount&&fNumber(profile.follwingCount)}</Typography></td>
                                                </tr>
                                            ))}
                                            
                                        </tbody>
                                    </TableStyle>
                                </Box>
                            </Grid>
                            <Grid item xs = {12} sm ={6} md ={4}>
                                <Box sx = {{padding:2}}>
                                    <Typography  paddingX={2} paddingY={1}   sx = {{background:theme.palette.primary.main, borderTopLeftRadius:10 , borderTopRightRadius:10}} color="white">Most Valuable Created Item</Typography>
                                    <TableStyle cellSpacing={0} cellPadding={0}>
                                        <thead>
                                            <tr>
                                                <th>Ranks</th>
                                                <th>User Name</th>
                                                <th>Profile Pic</th>
                                                <th>Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {MostItemsListData.map((profile,index)=>(
                                                <tr key = {index} onClick = {()=>handleNavigateProfile(profile)}>
                                                    <td style={{textAlign: 'center'}}>{profile.rank}{profile?.isYou&&<Typography color = '#00D18C' variant='caption'>(you)</Typography>||''}</td>
                                                    <td style={{textAlign: 'center'}}>{profile.user}</td>
                                                    <td style={{textAlign: 'center'}}><img  src = {profile.avatar} alt = '' /></td>
                                                    <td style={{textAlign: 'center'}}><Typography display={'flex'} justifyContent='space-around' alignItems="center"><Icon icon = "ei:trophy" color={profile.color} width={20}/>{fNumber(profile.value)}</Typography></td>
                                                </tr>
                                            ))} */}
                                            {leaderBoardData&&leaderBoardData[0]&&leaderBoardData[0].map((profile,index)=>(
                                                <tr key = {index} onClick = {()=>handleNavigateProfile(profile)}>
                                                    <td style={{textAlign: 'center'}}>{index+1}{profile?.isYou&&<Typography color = '#00D18C' variant='caption'>(you)</Typography>||''}</td>
                                                    <td style={{textAlign: 'center'}}>{profile.name}</td>
                                                    <td style={{textAlign: 'center'}}><img  src = {profile.file_path?`${siteConfig.apiUrl}/${profile.file_path}`:""} alt = '' /></td>
                                                    <td style={{textAlign: 'center'}}><Typography display={'flex'} justifyContent='space-around' alignItems="center"><Icon icon = "ei:trophy" color={ProfilesData&&ProfilesData[index]&&ProfilesData[index].color}  width={20}/>{profile.follwingCount&&fNumber(profile.follwingCount)}</Typography></td>
                                                </tr>
                                            ))}
                                            
                                        </tbody>
                                    </TableStyle>
                                </Box>
                            </Grid>
                            <Grid item xs = {12} sm ={6} md ={4}>
                                <Box sx = {{padding:2}}>
                                    <Typography  paddingX={2} paddingY={1}   sx = {{background:theme.palette.primary.main, borderTopLeftRadius:10 , borderTopRightRadius:10}} color="white">Most Valuable Created Collection</Typography>
                                    <TableStyle cellSpacing={0} cellPadding={0}>
                                        <thead>
                                            <tr>
                                                <th>Ranks</th>
                                                <th>User Name</th>
                                                <th>Profile Pic</th>
                                                <th>Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {MostValuableCollectData.map((profile,index)=>(
                                                <tr key = {index} onClick = {()=>handleNavigateProfile(profile)}>
                                                    <td style={{textAlign: 'center'}}>{profile.rank}{profile?.isYou&&<Typography color = '#00D18C' variant='caption'>(you)</Typography>||''}</td>
                                                    <td style={{textAlign: 'center'}}>{profile.user}</td>
                                                    <td style={{textAlign: 'center'}}><img  src = {profile.avatar} alt = '' /></td>
                                                    <td style={{textAlign: 'center'}}><Typography display={'flex'} justifyContent='space-around' alignItems="center"><Icon icon = "ei:trophy" color={profile.color} width={20}/>{fNumber(profile.value)}</Typography></td>
                                                </tr>
                                            ))} */}
                                            {leaderBoardData&&leaderBoardData[0]&&leaderBoardData[0].map((profile,index)=>(
                                                <tr key = {index} onClick = {()=>handleNavigateProfile(profile)}>
                                                    <td style={{textAlign: 'center'}}>{index+1}{profile?.isYou&&<Typography color = '#00D18C' variant='caption'>(you)</Typography>||''}</td>
                                                    <td style={{textAlign: 'center'}}>{profile.name}</td>
                                                    <td style={{textAlign: 'center'}}><img  src = {profile.file_path?`${siteConfig.apiUrl}/${profile.file_path}`:""} alt = '' /></td>
                                                    <td style={{textAlign: 'center'}}><Typography display={'flex'} justifyContent='space-around' alignItems="center"><Icon icon = "ei:trophy" color={ProfilesData&&ProfilesData[index]&&ProfilesData[index].color}  width={20}/>{profile.follwingCount&&fNumber(profile.follwingCount)}</Typography></td>
                                                </tr>
                                            ))}
                                            
                                        </tbody>
                                    </TableStyle>
                                </Box>
                            </Grid>
                        </Grid>
                        {/* end grid */}
                    </Container>
                </GradientStyle>
            </Box>
        </Page>
    )
}