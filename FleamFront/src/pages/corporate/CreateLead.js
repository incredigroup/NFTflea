import { Box, Button, Container, Grid, Stack, TextField, Typography, } from '@mui/material';
import {useState, useContext} from 'react';
import { useWeb3React } from "@web3-react/core";

import UploadAvatarLead from '../../components/UploadAvatarLead';
import Page from "../../components/Page";
import { CardStyle, GradientStyle } from "../Home";
import { AccountContext } from "./../../contexts/AccountContext";
import IconfyButton from '../../components/IconfyButton';
import Image from '../../components/Image';
import { NotificationManager } from 'react-notifications';
import {motion} from "framer-motion";

export default function CreateLead() {
    const { account } = useWeb3React();
    const { createLeadAction } = useContext(AccountContext);

    const [owner, setOwner] = useState();
    const [name, setName] = useState();
    const [title, setTitle] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [fax, setFax] = useState();
    const [mobile, setMobile] = useState();
    const [site, setSite] = useState();
    const [source, setSource] = useState();
    const [status, setStatus] = useState();
    const [industry, setIndustry] = useState();
    const [employes, setEmployes] = useState();
    const [revenue, setRevenue] = useState();
    const [rating, setRating] = useState();
    const [skype, setSkype] = useState();
    const [secEmail, setSecEmail] = useState();
    const [twitter, setTwitter] = useState();
    const [emailOpt, setEmailOpt] = useState();
    
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [zipcode, setZipcode] = useState();
    const [country, setCountry] = useState();

    const handleChangeOwner = (event) => {
        setOwner(event.target.value);
    }
    const handleChangeName = (event) => {
        setName(event.target.value);
    }
    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    }
    const handleChangeFax = (event) => {
        setFax(event.target.value);
    }
    const handleChangeMobile = (event) => {
        setMobile(event.target.value);
    }
    const handleChangeSite = (event) => {
        setSite(event.target.value);
    }
    const handleChangeSource = (event) => {
        setSource(event.target.value);
    }
    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    }
    const handleChangeIndustry = (event) => {
        setIndustry(event.target.value);
    }
    const handleChangeEmployes = (event) => {
        setEmployes(event.target.value);
    }
    const handleChangeRevenue = (event) => {
        setRevenue(event.target.value);
    }
    const handleChangeRating = (event) => {
        setRating(event.target.value);
    }
    const handleChangeSkype = (event) => {
        setSkype(event.target.value);
    }
    const handleChangeSecEmail = (event) => {
        setSecEmail(event.target.value);
    }
    const handleChangeTwitter = (event) => {
        setTwitter(event.target.value);
    }
    const handleChangeEmailOpt = (event) => {
        setEmailOpt(event.target.value);
    }
    const handleChangeStreet = (event) => {
        setStreet(event.target.value);
    }
    const handleChangeCity = (event) => {
        setCity(event.target.value);
    }
    const handleChangeState = (event) => {
        setStreet(event.target.value);
    }
    const handleChangeZipcode = (event) => {
        setZipcode(event.target.value);
    }
    const handleChangeCountry = (event) => {
        setCountry(event.target.value);
    }
    
    const handleCreateLead = () => {
        if(!account) return;
        NotificationManager.success('Successfully sent', 'Info');
        const data = {
            wallet: account,
            owner: owner,
            name: name,
            title: title,
            email: email,
            phone: phone,
            fax: fax,
            mobile: mobile,
            site: site,
            source: source,
            status: status,
            industry: industry,
            employes: employes,
            revenue: revenue,
            rating: rating,
            skype: skype,
            secEmail: secEmail,
            twitter: twitter,
            emailOpt: emailOpt,
            street: street,
            city: city,
            state: state,
            zipcode: zipcode,
            country: country
        }
        createLeadAction(data);
    }

    return (
        <Page title="Create Lead">
            <GradientStyle sx={{ paddingTop: 15, paddingBottom: 4, display: 'flex', gap: 8, flexDirection: 'column' }} >
                <Container>
                    <Stack gap={1} textAlign="center" sx={{ mb: 4 }}>
                        <Typography variant="h3">Brand Partnerships</Typography>
                        <Typography color='gray' sx={{ mb: 4 }}>We work daily to become better and we are ready to share best practices.</Typography>
                        {/* VIDEO */}
                        {/* <Box sx={{ position: 'relative' }}>
                            <Image src='/assets/images/video-thumb.png' alt='' />
                            <Box sx={{ position: 'absolute', top: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <IconfyButton icon='bi:play-fill' width={40} />
                            </Box>
                        </Box> */}
                        {/* <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}  transition={{ ease: "easeInOut", duration: 1, delay: 0.6 }}>
                            <iframe style={{'margin': '10px auto 0 auto', 'border': 'none', borderRadius: '10px', height: '70vh'}}
                                    width="100%"
                                    src="https://www.youtube.com/embed/zGy34H3jgAY">
                            </iframe>
                        </motion.div> */}
                    </Stack>
                    <CardStyle sx={{ padding: { xs: 2, sm: 4, md: 10, lg: 12 },flexDirection: 'column' }} >
                        <Stack gap={1} sx={{ mb: 4, }} >
                            <Typography variant="h3" sx={{ mb: 2 }}>Apply to become a brand partner</Typography>
                            <Typography variant="h6">Brand logo</Typography>
                            <Typography color='gray'>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB.</Typography>
                            <UploadAvatarLead />
                        </Stack>

                        <Grid container sx={{ mb: 4 }}>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Company Name </Typography>
                                <TextField size="small" label="" placeholder='Crypto Kambok' fullWidth onChange={handleChangeOwner}/>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Contact </Typography>
                                <TextField size="small" label="" placeholder='John Dao' fullWidth onChange={handleChangeName}/>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Title </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth onChange={handleChangeTitle}/>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Email </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth onChange={handleChangeEmail}/>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Phone </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth onChange={handleChangePhone}/>
                            </Grid>
                            {/* <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Fax </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth onChange={handleChangeFax}/>
                            </Grid> */}
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Mobile </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth onChange={handleChangeMobile}/>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Website </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth onChange={handleChangeSite}/>
                            </Grid>
                            {/* <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Lead Source </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth onChange={handleChangeSource}/>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Lead Status </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth onChange={handleChangeStatus}/>
                            </Grid> */}
                            {/* <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Industry </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth onChange={handleChangeIndustry}/>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">No Of Employes </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth onChange={handleChangeEmployes}/>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Annual Revenue </Typography>
                                <TextField size="small" label="" placeholder='$' fullWidth onChange={handleChangeRevenue}/>
                            </Grid> */}
                            {/* <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Rating </Typography>
                                <TextField size="small" label="" placeholder='None' fullWidth onChange={handleChangeRating}/>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Skype ID </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth onChange={handleChangeSkype}/>
                            </Grid> */}
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Secondary Email </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth onChange={handleChangeSecEmail}/>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Twitter </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth onChange={handleChangeTwitter}/>
                            </Grid>
                            {/* <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Email Opt Out </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth onChange={handleChangeEmailOpt}/>
                            </Grid> */}
                        </Grid>
                        {/* <Typography variant="h4" sx={{ mb: 2 }}> Address Infomation</Typography>
                        <Grid container sx={{ mb: 4 }}>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Street </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth onChange={handleChangeStreet}/>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">City </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth onChange={handleChangeCity}/>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">State </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth onChange={handleChangeState}/>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Zip Code </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth onChange={handleChangeZipcode}/>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ padding: { xs: 1, sm: 2 } }}>
                                <Typography variant="h6">Country </Typography>
                                <TextField size="small" label="" placeholder='' fullWidth onChange={handleChangeCountry}/>
                            </Grid>
                        </Grid> */}
                        <Grid container>
                            <Grid item xs={12} sx = {{padding:{xs:1, sm:2, }}}>
                                <Button variant="contained" fullWidth sx={{ height: 50 }} onClick={handleCreateLead}>SEND</Button>
                            </Grid>
                        </Grid>
                    </CardStyle>
                </Container>
            </GradientStyle>
        </Page>
    )

}