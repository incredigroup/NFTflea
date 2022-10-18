import { Button, FormControlLabel, Grid, Stack, Switch, Typography, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import { AccountProfileData, CollectionsData } from "../../_mock/MockData";
import Image from "../../components/Image";
import { BackgroundImageStyle } from "../../components/StyledComponents";
import { CardStyle } from "../../pages/Home";
import CustomButton from "../../components/CustomButton";
import IconfyButton from "../../components/IconfyButton";
import NFTCard from "../../components/cards/NFTCard";
import RouterLink from './../../components/RouterLink';
import { AccountContext } from "./../../contexts/AccountContext";
import {useState, useContext, useEffect} from 'react';
import { useWeb3React } from "@web3-react/core";
import { useNavigate } from "react-router-dom";
import { ProfilesData } from "./../../_mock/LeaderBoard";

export default function ProfileCover({ isYou }) {
    const theme = useTheme();
    const { profileInfo, siteConfig, getProfileAction, checkPrivateProfileAction, requestBrandPartnerAction, leaderBoardData, getLeaderBoardDataAction } = useContext(AccountContext);
    const { account } = useWeb3React();
    let navigate = useNavigate();
    const [privateProfile, setPrivateProfile] = useState(false);
    const [twitter, setTwitter] = useState("");
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [discord, setDiscord] = useState("");
    const [following, setFollowing] = useState(0);
    const [followers, setFollowers] = useState(0);
    const [like, setLike] = useState(0);
    const [userColor, setUserColor] = useState(0);

    const checkPrivateProfileHandle = () => {
        if(account){
            checkPrivateProfileAction(account);
            setPrivateProfile(!privateProfile)
        }
    }
    const requestBrandPartner = () => {
        requestBrandPartnerAction(profileInfo.wallet)
    }
    const getUserColor = () => {
        if (!leaderBoardData.length) return;
        for(let i = 0; i < leaderBoardData[0].length; i ++)
            if(leaderBoardData[0][i].wallet === profileInfo.wallet) {
                setUserColor(ProfilesData[i].color);
                return;
            }
    }
    useEffect(() => {
        getLeaderBoardDataAction();
    }, []);

    useEffect(() => {
        getUserColor();
    }, [leaderBoardData])

    useEffect(() => {
        if(account){
            getProfileAction(account)
        }
    }, [account]);
    useEffect(() => {
        if(account&&profileInfo){
            if(profileInfo&&profileInfo.following){
                setFollowing(Object.keys(JSON.parse(profileInfo.following)).length)
            }
            if(profileInfo&&profileInfo.followers){
                setFollowers(Object.keys(JSON.parse(profileInfo.followers)).length)
            }
            if(profileInfo&&profileInfo.like){
                setLike(Object.keys(JSON.parse(profileInfo.like)).length)    
            }
            
            setTwitter(profileInfo&&profileInfo.twitter)
            setFacebook(profileInfo&&profileInfo.facebook)
            setInstagram(profileInfo&&profileInfo.instagram)
            setDiscord(profileInfo&&profileInfo.discord)
            if(profileInfo&& profileInfo.public == "1")  {
                setPrivateProfile(false)
            }
            else {
                setPrivateProfile(true)
            }
        }else{
            navigate("/", { replace: true });
        }
    }, [profileInfo]);

    return (

        <BackgroundImageStyle sx={{ backgroundImage: 'url(/assets/images/profilebg.png)', backgroundSize: 'cover', paddingX: { xs: 2, sm: 4, md: 8, lg: 20 }, paddingTop: 20, justifyContent: 'center', flexDirection: 'column' }}>
            {/* Account Infomation Card */}
            <CardStyle sx={{ flexDirection: 'column', width: '100%', padding: 2, paddingX: 4, }}>
                {isYou &&
                    < Stack justifyContent={'end'} sx={{ mb: 2 }}>
                        <FormControlLabel checked={privateProfile} onChange= {checkPrivateProfileHandle } control={<Switch color="error" />} label="MAKE YOUR PROFILE PRIVATE?" labelPlacement="start" />
                    </Stack>
                }
                <Stack direction="row" gap={2}>
                    <Grid container>
                        <Grid item xs={12} sm={4} md={3}>
                            <Image src={profileInfo&&profileInfo.file_path&&siteConfig.apiUrl?`${profileInfo&&profileInfo.file_path&&siteConfig.apiUrl}/${profileInfo&&profileInfo.file_path}`:`/assets/images/profile-head.png`} alt='' />
                        </Grid>
                        {/* start Account Info  */}
                        <Grid item xs={12} sm={8} md={9} sx={{ paddingLeft: 5, mb: 1 }}>
                            {/* Name */}
                            <Stack gap={2} sx={{ mb: 2 }}>
                                <Stack direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'row' }} justifyContent={'space-between'}>
                                    <Stack direction='row' gap={1} alignItems={'center'}>
                                        <Typography variant="h3" sx={{ py: 2 }}>{profileInfo&&profileInfo.name}</Typography>
                                        <Icon icon='ei:trophy' width={40} color={userColor} sx={{ mb: 2 }} />
                                        {/* <Typography color={AccountProfileData.leaderColor} sx={{ marginLeft: -2 }}>({AccountProfileData.leaderLevel})</Typography> */}
                                    </Stack>
                                    {isYou &&
                                        <Stack sx={{ width: "50%"}}>
                                            <Stack direction={{ xs: 'column', sm: "row" }} justifyContent="space-between" alignItems="center" gap={1}>
                                                <CustomButton sx={{ height: 40}} size="55%">
                                                    <RouterLink to='/account/leader-board' color='gray'>
                                                        My Ranking
                                                    </RouterLink>
                                                </CustomButton>
                                                <Button sx={{ height: 40, width:"40%" }} variant="contained">
                                                    <RouterLink to='/account/edit' color='gray'>
                                                        Edit Profile
                                                    </RouterLink>
                                                </Button>
                                            </Stack>
                                            <Stack>
                                                {
                                                    profileInfo&&profileInfo.brandPartnerStatus == 'accepted' ?
                                                        <Button sx={{ height: 40, margin: "10px 0" }} variant="contained" disabled>
                                                            You are a Brand Partner
                                                        </Button>
                                                    : profileInfo&&profileInfo.brandPartnerStatus == 'refused' ?
                                                        <Button sx={{ height: 40, margin: "10px 0" }} variant="contained" disabled>
                                                            Refused (Brand Partner)
                                                        </Button>
                                                    : profileInfo&&profileInfo.brandPartnerStatus == 'waiting' ?
                                                        <Button sx={{ height: 40, margin: "10px 0" }} variant="contained" disabled>
                                                            Waiting...
                                                        </Button>
                                                    : <Button onClick={requestBrandPartner} sx={{ height: 40, margin: "10px 0" }} variant="contained">
                                                        Request Brand Partner
                                                    </Button>
                                                }
                                            </Stack>
                                        </Stack>
                                    }
                                    {/* {!isYou &&
                                        <Stack direction={{ xs: 'column', sm: "row" }} alignItems="center" justifyContent={'end'} gap={2}>

                                            <Button sx={{ height: 40 }} variant="contained">Follow</Button>
                                        </Stack>
                                    } */}
                                </Stack>
                            </Stack>
                            {/* description */}
                            <Typography color="gray" paddingY={{ xs: 2, lg: 1 }}>{profileInfo&&profileInfo.bio}</Typography>
                            {/* Followers */}
                            <Stack direction={{ md: 'row', sm: 'column', xs: 'column' }} justifyContent="space-between" ml={{ lg: 0, md: -10, sm: 0 }}>
                                <Stack justifyContent={'space-between'} direction="row" padding={2} sx={{ borderRadius: 1, background: '#f5585b1a' }} gap={3} alignItems="center" textAlign={'center'} >
                                    <Typography  variant="h5" >
                                        {following}<br />
                                        <font style={{ color: 'gray', fontWeight: 400, fontSize: 16 }}>Following</font>
                                    </Typography>
                                    <Typography   variant="h5">
                                        {followers}<br />
                                        <font style={{ color: 'gray', fontWeight: 400, fontSize: 16 }}>Followers</font>
                                    </Typography>
                                    <Typography  variant="h5">
                                        {like}<br />
                                        <font style={{ color: 'gray', fontWeight: 400, fontSize: 16 }}>Like</font>
                                    </Typography>
                                </Stack>
                                <Stack direction="row" sx={{ paddingY: 4 }} gap={1}>
                                    <IconfyButton icon='bxl:twitter' href={`${twitter}`} width={30} />
                                    <IconfyButton icon='gg:facebook' href={`${facebook}`} width={30} />
                                    <IconfyButton icon='icon-park-solid:instagram-one' href={`${instagram}`} width={30} />
                                    <IconfyButton icon='bxl:discord-alt' href={`${discord}`}  width={30} />
                                </Stack>
                            </Stack>
                        </Grid>

                        {/* end account info */}
                    </Grid>
                </Stack>
            </CardStyle>
            {/* end of account infomation */}

        </BackgroundImageStyle >
    )
}