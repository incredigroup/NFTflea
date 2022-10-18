import { Avatar, Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import {useState, useEffect, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import UploadAvatar from "../../components/UploadAvatar";
import Page from "../../components/Page";
import { CardStyle, GradientStyle } from "../Home";
import { AccountContext } from "./../../contexts/AccountContext";

export default function EditProfile() {

    const { account } = useWeb3React();
    const { editProfileAction, myWalletInfo, getUserDataAction} = useContext(AccountContext);
    let navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [site, setSite] = useState('');
    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [instagram, setInstagram] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [discord, setDiscord] = useState('');
    const [photo, setPhoto] = useState('');

    const [emailDisable, setEmaildisable] = useState(false);


    const handleChangeName = (event) => {
        setName(event.target.value);
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleChangeBio = (event) => {
        setBio(event.target.value);
    }
    const handleChangeSite = (event) => {
        setSite(event.target.value);
    }
    const handleChangeFacebook = (event) => {
        setFacebook(event.target.value);
    }
    const handleChangeTwitter = (event) => {
        setTwitter(event.target.value);
    }
    const handleChangeInstagram = (event) => {
        setInstagram(event.target.value);
    }
    const handleChangeLinkedin = (event) => {
        setLinkedin(event.target.value);
    }
    const handleChangeDiscord = (event) => {
        setDiscord(event.target.value);
    }
    const handleUpdateProfile = async () => {
        if(!account) return;
        const data = {
            wallet: account,
            name: name?name:"",
            email: email?email:"",
            bio: bio?bio:"",
            site: site?site:"",
            facebook: facebook?facebook:"",
            twitter: twitter?twitter:"",
            instagram: instagram?instagram:"",
            linkedin: linkedin?linkedin:"",
            discord: discord?discord:""
        }
        setEmaildisable(true)

        const res = await editProfileAction(data)
        if(res === "success")
            navigate("/account/profile/me")
    }
    useEffect(() => {
        if(myWalletInfo){
            setName(myWalletInfo.name?myWalletInfo.name:"");
            setEmail(myWalletInfo.email?myWalletInfo.email:"");
            setBio(myWalletInfo.bio?myWalletInfo.bio:"");
            setSite(myWalletInfo.site?myWalletInfo.site:"");
            setFacebook(myWalletInfo.facebook?myWalletInfo.facebook:"");
            setTwitter(myWalletInfo.twitter?myWalletInfo.twitter:"");
            setInstagram(myWalletInfo.instagram?myWalletInfo.instagram:"");
            setLinkedin(myWalletInfo.linkedin?myWalletInfo.linkedin:"");
            setDiscord(myWalletInfo.discord?myWalletInfo.discord:"");
            setPhoto(myWalletInfo.file_path?myWalletInfo.file_path:"");
            myWalletInfo.email?setEmaildisable(true):setEmaildisable(false);
        }
    }, [myWalletInfo]);

    useEffect(() => {
        if(!account) navigate("/", { replace: true });
    }, [account]);

    useEffect(() => {
        getUserDataAction(account)
    }, [])


    return (
        <Page title="Edit Profile">
            <GradientStyle sx={{ paddingTop: 15,paddingBottom:4, display: 'flex', gap: 8, flexDirection: 'column' }} >
                <Container>
                    <CardStyle sx={{ padding: { xs: 2, sm: 4, md: 10, lg: 12 }, flexDirection: 'column' }} >
                        <Stack gap={2} sx={{ mb: 4, textAlign:'center' }} >
                            <Typography variant="h4">Edit Profile</Typography>
                            <Typography color='gray'>You can set preferred display name, create your profile URL and manage other personal settings.</Typography>
                        </Stack>
                        <Stack>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={3} lg={3} sx = {{display:'flex', justifyContent:'center'}}>
                                    <UploadAvatar photo={photo}/>
                                </Grid>
                                <Grid item xs={12} sm={12} md={9} lg={8}>
                                    <Stack gap={1} padding={{ lg: 2 }}>
                                        <Typography variant="h6">User Name</Typography>
                                        <TextField label="" placeholder="John Doe" onChange={handleChangeName} value={name}/>
                                        <Typography variant="h6">Email</Typography >
                                        <TextField label="" placeholder="info@yahoo.com" onChange={handleChangeEmail} value={email}/>
                                        <Typography variant="h6">Bio</Typography>
                                        <TextField label="" placeholder="Something About Yourself" multiline rows={4} maxRows={4} onChange={handleChangeBio} value={bio}/>
                                        <Typography variant="h6">Website</Typography>
                                        <TextField label="" placeholder="https://www.info.com/" onChange={handleChangeSite} value={site}/>
                                        <Grid container>
                                            <Grid item xs={12} sm={6} md={4} lg={4} sx = {{paddingRight:1, paddingBottom:1}}>
                                                <Stack>
                                                    <Typography variant="h6">Facebook</Typography>
                                                    <TextField label="" placeholder="Your Facebook" onChange={handleChangeFacebook} value={facebook}/>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4} lg={4} sx = {{paddingRight:1, paddingBottom:1}}>
                                                <Stack>
                                                    <Typography variant="h6">Twitter</Typography>
                                                    <TextField label="" placeholder="Your Twitter" onChange={handleChangeTwitter} value={twitter}/>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4} lg={4} sx = {{paddingRight:1, paddingBottom:1}}>
                                                <Stack>
                                                    <Typography variant="h6">Instagram</Typography>
                                                    <TextField label="" placeholder="Your Instagram" onChange={handleChangeInstagram} value={instagram}/>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4} lg={4} sx = {{paddingRight:1, paddingBottom:1}}>
                                                <Stack>
                                                    <Typography variant="h6">Linkedin</Typography>
                                                    <TextField label="" placeholder="Your Linkedin" onChange={handleChangeLinkedin} value={linkedin}/>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4} lg={4} sx = {{paddingRight:1, paddingBottom:1}}>
                                                <Stack>
                                                    <Typography variant="h6">Discord</Typography>
                                                    <TextField label="" placeholder="Your Discord" onChange={handleChangeDiscord} value={discord}/>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                        <Typography variant="h6">Wallet Address</Typography>
                                        <TextField label="" placeholder={account?account:""} sx={{mb:4}}  disabled={true}/>
                                        <Button variant = "contained" size = "large" onClick={handleUpdateProfile}>UPDATE PROFILE</Button>
                                    </Stack>

                                </Grid>
                            </Grid>

                        </Stack>
                    </CardStyle>
                </Container>
            </GradientStyle>
        </Page>
    )
}