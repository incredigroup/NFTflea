import { useState, useEffect, useContext } from "react";
import { Avatar, Box, Button, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Stack, TextField, Typography, useTheme } from "@mui/material";

import moment from "moment";
import { useLocation } from 'react-router-dom';
import { useWeb3React } from "@web3-react/core";
import { AccountContext } from "./../../../contexts/AccountContext";
import { MarketplaceContext} from "./../../../contexts/MarketplaceContext";
import RouterLink from './../../../components/RouterLink';
import IconfyButtonLike from "../../../components/IconfyButtonLike";
import { useNavigate } from "react-router";
import AcceptOffer from './AcceptOffer';
import siteConfig from './../../../config';

var countDownTimer;

export default function DetailCover() {
    const theme = useTheme();
    const { account } = useWeb3React();
    const location = useLocation();
    const navigate = useNavigate();
    const { getProductDetailsAction, productDetailsData, profileInfo, profileLikeAction } = useContext(AccountContext);
    const { placeBuyAction, makeOfferAction, isChanged, changeToSellItemAction, changeToCancelSellItemAction, acceptOfferAction, cancelOfferAction, messageMarketplaceAction, messageTypeMarketplaceAction } = useContext(MarketplaceContext);

    const [productDetails, setProductDetails] = useState();
    const [duration, setDuration] = useState();
    const [timeTillDate, setTimeTillDate] = useState();
    const [price, setPrice] = useState(100);
    const [day, setDay] = useState(0)
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    const [bidders, setbidders] = useState()

    // const [open, setOpen] = useState(false);
    const [openWallet, setOpenWallet] = useState(false);
    const [bidderInfo, setBidderInfo] = useState();
    const [isLike, setIsLike] = useState();
    
    const handleLike = ()=>{
        if(!account) return;
        profileLikeAction(account, location.pathname.split("/")[3])
    }

    useEffect(() => {
        if (profileInfo.like)
            setIsLike(JSON.parse(profileInfo.like)[location.pathname.split("/")[3]])
    }, [profileInfo])

    // const handleClose = () => {
    //     setOpen(false);
    // }

    const handleOpenBidder = (data) => {
        setBidderInfo(data)
        setOpenWallet(true);
    }
    
    const handleCloseWallet = () => {
        setOpenWallet(false);
    }

    const buyHandle = () =>{
        if(!account) return;
        if (!productDetails[0].onSale&&!productDetails[0].price) {
            messageMarketplaceAction('The NFT is not for sale')
            messageTypeMarketplaceAction('warning')
            return;
        }
        if (productDetailsData[0].onSale && (new Date() > new Date(productDetailsData[0].auctionDate))) {
            messageMarketplaceAction('The NFT has beend expired')
            messageTypeMarketplaceAction('warning')
            return;
        }
        if (productDetails[0].price > price) {
            messageMarketplaceAction('The price should be greate than ' + productDetails[0].price)
            messageTypeMarketplaceAction('warning')
            return;
        }
        const data ={
            id: location.pathname.split("/")[3],
            wallet: account,
            smartcontractAddress: location.pathname.split("/")[3].split('_')[0],
            assetId: productDetailsData[0].tokenId,
            price: price,
            royalty: productDetailsData[0].royalty?productDetailsData[0].royalty * 10000:0
        }
        placeBuyAction(data)
    }

    const acceptOfferHandle = (val) =>{
        if(!account) return;
        const data ={
            id: location.pathname.split("/")[3],
            wallet: val[0],
            smartcontractAddress: location.pathname.split("/")[3].split('_')[0],
            assetId: productDetailsData[0].tokenId,
            price: val[4],
            royalty: productDetailsData[0].royalty?productDetailsData[0].royalty * 10000:0
        }
        acceptOfferAction(data);
        handleCloseWallet();
    }

    const makeOfferHandle = () =>{
        if(!account) return;
        if (!productDetailsData[0].auctionDate || new Date() > new Date(productDetailsData[0].auctionDate)) {
            messageMarketplaceAction('The auction is done')
            messageTypeMarketplaceAction('warning')
            return;
        }
        const data ={
            id: location.pathname.split("/")[3],        
            wallet: account,
            smartcontractAddress: location.pathname.split("/")[3].split('_')[0],
            assetId: productDetailsData[0].tokenId,
            price: price
        }   
        makeOfferAction(data);
    }

    const cancelOfferHandle = () =>{
        if(!account) return;
        const data ={
            id: location.pathname.split("/")[3],
            wallet: account,
            smartcontractAddress: location.pathname.split("/")[3].split('_')[0],
            assetId: productDetailsData[0].tokenId,
        }   
        cancelOfferAction(data);
    }

    const calDate = (day, hour, minute, second)=>{
        // To add Days
        var d = new Date();
        d.setDate(d.getDate() + parseInt(day));

        // To add Hours
        d.setHours(d.getHours() + parseInt(hour));

        // To add Minutes
        d.setMinutes(d.getMinutes() + parseInt(minute));

        // To add Seconds
        d.setSeconds(d.getSeconds() + parseInt(second));

        return d;
    }

    const changeToSellItemHandle = () =>{
        if(!account) return;
        const auctionDate = calDate(day, hour, minute, second);
        if ( (new Date(auctionDate) - new Date()) / 1000 < 300 ) {
            messageMarketplaceAction('The auction date should be great than 5 minutes')
            messageTypeMarketplaceAction('warning')
            return;
        }
        const data ={  id: location.pathname.split("/")[3],
            smartcontractAddress: location.pathname.split("/")[3].split('_')[0],
            wallet: account,
            price: price,
            assetId: productDetailsData[0].tokenId,
            date: auctionDate,
            isCreated: productDetailsData[0].onSale
        }

        if (data.isCreated && (new Date() > new Date(productDetailsData[0].auctionDate))) {
            messageMarketplaceAction('The NFT has beend expired, cancel item to change auction again')
            messageTypeMarketplaceAction('warning')
            return;
        }
        changeToSellItemAction(data);
    }

    const changeToCancelSellItemHandle = () =>{
        if(!account) return;
        if (!productDetailsData[0].onSale) {
            messageMarketplaceAction('Creat an auction')
            messageTypeMarketplaceAction('warning')
            return;
        }
        const data ={
            id: location.pathname.split("/")[3],
            wallet: account,
            smartcontractAddress: location.pathname.split("/")[3].split('_')[0],
            assetId: productDetailsData[0].tokenId,
        }
        changeToCancelSellItemAction(data)
    }
    

    const toTwoDigit = (val) => {
        if (String(val).length === 1)
          return "0" + val;
        return val;
    }

    useEffect(() => {
        if (productDetailsData&&productDetailsData[0]&&productDetailsData[0].auctionDate&&timeTillDate !== null) {
            var eventTime = Math.floor(new Date(productDetailsData[0].auctionDate).getTime()/1000);
            var currentTime = moment().unix();
            var diffTime = eventTime - currentTime;
            var dur = moment.duration(diffTime * 1000, "milliseconds");
            if (dur.asMilliseconds() > 0) {
                countDownTimer = setInterval(() => {
                if (dur.asMilliseconds() <= 0) { 
                    clearInterval(countDownTimer);
                    return;
                }
                dur = moment.duration(dur.asMilliseconds() - 1000, "milliseconds");
                setDuration(dur);
                }, 1000); 
            }
            return () => {clearInterval(countDownTimer)};
        }
        else {
            clearInterval(countDownTimer);
            setDuration(moment.duration(0, "milliseconds"));
        }
        return () => {};
    }, [productDetailsData]); 

    useEffect(() => {
        getProductDetailsAction(location.pathname.split("/")[3], account)
    }, [account, location.pathname, isChanged]);

    // useEffect(() => {
    //     getProductDetailsAction(location.pathname.split("/")[3], account)
    // }, [location.pathname])

    useEffect(() => {
        // if(productDetailsData&&productDetailsData.Status){
        //     navigate("/", { replace: true });
        // }
        
        if(productDetailsData&&productDetailsData[0]&&productDetailsData[0].price)
            setPrice(productDetailsData[0].price)
            
        if(productDetailsData&&productDetailsData[0]&&productDetailsData[0].bidder){
            let temp = []
            for(let key in JSON.parse(productDetailsData[0].bidder) ){
                temp.push( JSON.parse(productDetailsData[0].bidder)[key])
            }
            setbidders(temp)
        } 
        setProductDetails(productDetailsData)
    }, [productDetailsData]);

    return (
        <Grid container sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6}>
                <Stack gap={2} sx={{ padding: 2, paddingRight: { xs: 2, md: 4 } }}>
                    <img height="100%" src={productDetails&&productDetails[0]&&productDetails[0].file_path?productDetails[0].file_path:''}  alt='NFT Image' />
                </Stack>

            </Grid>
            <Grid item xs={12} sm={6}>
                <Stack gap={{sm:1, xs:1, md:2, lg:3}} sx={{ padding: 2 }}>
                    {/* Avatar */}
                    <Typography variant={'h4'}>
                        {productDetails&&productDetails[0]&&productDetails[0].name}
                    </Typography>
                    <Stack direction='row'>
                        {/* <ListItem>
                            <ListItemAvatar>
                                <Avatar sx={{ height: 56, width: 56 }}>
                                    <img src={productDetails&&productDetails[0]&&productDetails[0].file_path?productDetails[0].file_path:'/assets/images/author.png'} alt='' />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Creator" secondary={productDetails&&productDetails[1]&&productDetails[1].name} sx={{ pl: 2 }} />
                        </ListItem> */}
                        {/* <Divider variant="middle" flexItem orientation="vertical" /> */}
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar sx={{ height: 56, width: 56 }}>
                                    <img src='/assets/images/image 130.png' alt='' />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Collection" secondary={productDetails&&productDetails[0]&&productDetails[0].collectionName} sx={{ pl: 2 }} />
                        </ListItem>
                    </Stack>
                    <Divider variant="middle" flexItem />
                    {/* Aucition Ending */}
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                        {productDetails&&productDetails[0]&&productDetails[0].wallet&&account&&productDetails[0].wallet==account?"Change To Create Auction":"Auction Ending"}
                    </Typography>
                    <Stack direction='row' gap={1}>
                        <Box borderRadius={1} border="1px solid black" sx={{ textAlign: 'center', width: 76 }} padding={1}>                            
                            {productDetails&&productDetails[0]&&productDetails[0].wallet&&account&&productDetails[0].wallet==account?
                                <TextField
                                type="number"
                                InputProps={{
                                    inputProps: { 
                                        max: 90, min: 0 
                                    }
                                }}
                                value = {day}
                                onChange={(e)=>{setDay(e.target.value?e.target.value:0)}}
                                label={"Days"} sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& > fieldset": { borderColor: theme.palette.primary.dark },
                                    },
                                    "& .MuiOutlinedInput-root:hover": {
                                        "& > fieldset": { borderColor: theme.palette.primary.dark },
                                    },
                                }} />
                                :
                                <Typography variant={'h6'}>{toTwoDigit(Math.floor(duration?.days()).toString() ?? "0")}</Typography>
                            }
                            <Divider />
                            <Typography variant={'caption'} color='gray'>Days</Typography>
                        </Box>
                        <Box borderRadius={1} border="1px solid black" sx={{ textAlign: 'center', width: 76 }} padding={1}>
                            {productDetails&&productDetails[0]&&productDetails[0].wallet&&account&&productDetails[0].wallet==account?
                                <TextField
                                type="number"
                                InputProps={{
                                    inputProps: { 
                                        max: 59, min: 0 
                                    }
                                }}
                                value = {hour}
                                onChange={(e)=>{setHour(e.target.value?e.target.value:0)}}
                                label={"Hours"} sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& > fieldset": { borderColor: theme.palette.primary.dark },
                                    },
                                    "& .MuiOutlinedInput-root:hover": {
                                        "& > fieldset": { borderColor: theme.palette.primary.dark },
                                    },
                                }} />
                                :
                                <Typography variant={'h6'}>{toTwoDigit(Math.floor(duration?.hours()).toString() ?? "0")}</Typography>
                            }
                            <Divider />
                            <Typography variant={'caption'} color='gray'>Hours</Typography>
                        </Box>
                        <Box borderRadius={1} border="1px solid black" sx={{ textAlign: 'center', width: 76 }} padding={1}>
                            {productDetails&&productDetails[0]&&productDetails[0].wallet&&account&&productDetails[0].wallet==account?
                                    <TextField
                                    type="number"
                                    InputProps={{
                                        inputProps: { 
                                            max: 59, min: 0 
                                        }
                                    }}
                                    value = {minute}
                                    onChange={(e)=>{setMinute(e.target.value?e.target.value:0)}}
                                    label={"Minutes"} sx={{
                                        "& .MuiOutlinedInput-root": {
                                            "& > fieldset": { borderColor: theme.palette.primary.dark },
                                        },
                                        "& .MuiOutlinedInput-root:hover": {
                                            "& > fieldset": { borderColor: theme.palette.primary.dark },
                                        },
                                    }} />
                                    :
                                    <Typography variant={'h6'}>{toTwoDigit(Math.floor(duration?.minutes()).toString() ?? "0")}</Typography>
                                }                    
                            <Divider />
                            <Typography variant={'caption'} color='gray'>Minutes</Typography>
                        </Box>
                        <Box borderRadius={1} border="1px solid black" sx={{ textAlign: 'center', width: 76 }} padding={1}>
                            {productDetails&&productDetails[0]&&productDetails[0].wallet&&account&&productDetails[0].wallet==account?
                                <TextField
                                type="number"
                                InputProps={{
                                    inputProps: { 
                                        max: 59, min: 0 
                                    }
                                }}
                                value = {second}
                                onChange={(e)=>{setSecond(e.target.value?e.target.value:0)}}
                                label={"Seconds"} sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& > fieldset": { borderColor: theme.palette.primary.dark },
                                    },
                                    "& .MuiOutlinedInput-root:hover": {
                                        "& > fieldset": { borderColor: theme.palette.primary.dark },
                                    },
                                }} />
                                :
                                <Typography variant={'h6'}>{toTwoDigit(Math.floor(duration?.seconds()).toString() ?? "0")}</Typography>
                            }
                            <Divider />
                            <Typography variant={'caption'} color='gray'>Seconds</Typography>
                        </Box>
                    </Stack>
                    <Divider variant="middle" flexItem />
                    <Stack direction='row' mb={4} gap={1} justifyContent='space-between' alignItems={'end'}>
                        {
                            productDetails&&productDetails[0]&&productDetails[0].wallet!=account&&!productDetails[0].onSale&&!productDetails[0].price ? <Typography variant='h5' color='gray'>Not for sale</Typography> : 
                            <TextField
                            onChange={(e)=>{setPrice(e.target.value?e.target.value:0)}}
                            label={productDetails&&productDetails[0]&&productDetails[0].wallet&&account&&productDetails[0].wallet==account?"Set To Buy Now Price":"Current Bid"} value={price} sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& > fieldset": { borderColor: theme.palette.primary.dark },
                                },
                                "& .MuiOutlinedInput-root:hover": {
                                    "& > fieldset": { borderColor: theme.palette.primary.dark },
                                },
                            }} />
                        }
                           {/* disabled={productDetails&&1productDetails[0]&&productDetails[0].wallet&&account&&productDetails[0].price&&productDetails[0].wallet==account ? false : true}/> */}
                        <Typography color='gray'> 1 in Stock</Typography>
                    </Stack>
                    {productDetails&&productDetails[0]&&productDetails[0].wallet&&account&&productDetails[0].wallet==account?
                    <>
                        <Stack direction='row' gap={1} justifyContent='space-between' alignItems={'end'} onClick={changeToSellItemHandle}>
                            <Button size="large" color='success' variant='contained' fullWidth>Change To Sell Item</Button>
                        </Stack>
                        <Stack direction='row' gap={1} justifyContent='space-between' alignItems={'end'} onClick={changeToCancelSellItemHandle}>
                            <Button size="large" color='error' variant='contained' fullWidth>Cancel To Sell Item</Button>
                        </Stack>
                        {/* <Stack direction='row' gap={1} justifyContent='space-between' alignItems={'end'} onClick={handleLike}>
                            <IconfyButtonLike icon='ant-design:heart-filled'  width={30} sx={{background:"none", color:"red", '&:hover': { background: "none", border: "1px solid red" },}}
                           />
                        </Stack> */}
                    </>
                    :
                    <Stack direction='row' gap={1} justifyContent='space-between' alignItems={'end'}>
                        <Button size="large" color='error' variant='contained' fullWidth onClick={buyHandle}>Buy</Button>
                        <Button size="large" color='error' variant="outlined" fullWidth onClick={makeOfferHandle}>Make Offer</Button>
                        <Button size="large" color='error' variant="outlined" fullWidth onClick={cancelOfferHandle}>Cancel Offer</Button>
                        {/* <Button size="large" color='error' variant="outlined" fullWidth onClick={cancelOfferHandle}>like</Button> */}
                        <IconfyButtonLike icon={isLike == 'Yes' ? 'ant-design:heart-filled' : 'ant-design:heart'}  width={30} sx={{background:"none", border: "1px solid transparent", color:"red", '&:hover': { background: "none", border: "1px solid red" },}} handleEvent={handleLike}/>
                    </Stack>
                    }
                    
                </Stack>

            </Grid>

            <Grid item xs={12} sm={6}>
                <Stack gap={2} sx={{ padding: 2, paddingRight: { xs: 2, md: 4 } }}>
                    <Typography variant={'h4'}>
                        Descriptions
                    </Typography>
                    <Typography color='gray'>
                        {productDetails&&productDetails[0]&&productDetails[0].description}
                    </Typography>
                    <Typography variant={'h4'}>
                        Detail
                    </Typography>
                    <Typography >
                        IMAGE
                    </Typography>
                    <Typography variant={'h6'}>Contract Address</Typography>
                    <Typography color='gray'>
                        {productDetails&&productDetails[0]&&productDetails[0].smartcontractAddress}
                    </Typography>
                    <Typography variant={'h6'}>Token ID</Typography>
                    <Typography color='gray'>
                        {productDetails&&productDetails[0]&&productDetails[0].tokenId}
                    </Typography>
                </Stack>
            </Grid>

            <Grid item xs={12} sm={6}>

                <Stack sx={{ padding: 2, }} gap={2}>

                    <Divider variant="middle" flexItem sx={{ mb: 4 }} />
                    <Typography variant="h6" >
                        <u>Bid History</u>
                    </Typography>
                    {/* bid history */}
                    <Stack gap={1}>

                    {bidders&&bidders.map((bidder, index) => (
                            <Stack key={index}>
                                <Stack direction="row" sx={{cursor:"pointer"}} justifyContent={'space-between'} alignItems='center' key={1} 
                                    onClick={()=>{productDetails&&productDetails[0]&&productDetails[0].wallet&&account&&productDetails[0].wallet==account?handleOpenBidder(bidder):handleCloseWallet()}}
                                >
                                    <Stack gap={1} direction='row' alignItems='center' justifyContent={'center'}>
                                        <RouterLink to={`/account/profile/${bidder[0]}`} color="white">
                                            <Avatar sx={{ width: 48, height: 48 }}>
                                                <img width={'100%'} height={'100%'} style={{objectFit: 'cover'}} src = {bidder[1]?`${siteConfig.apiUrl}/${bidder[1]}`:'/assets/images/image 132.png'} alt='' />
                                            </Avatar>
                                        </RouterLink>
                                        <Typography color="gray">
                                            Placed a bid {bidder[4]} FUJI20 by
                                        </Typography>
                                        <Typography >
                                            <b>{bidder[3]}</b>
                                        </Typography>
                                    </Stack>
                                    <Typography color='gray'>{new Date(bidder[2]).toISOString().slice(0, 10)}</Typography>
                                </Stack>
                                <Divider variant="fullWidth" flexItem />
                            </Stack>
                    ))}
                        {/* <Stack direction="row" justifyContent={'space-between'} alignItems='center'>
                            <Stack gap={1} direction='row' alignItems='center' justifyContent={'center'}>
                                <Avatar sx={{ width: 48, height: 48 }}>
                                    <img src='/assets/images/image 133.png' alt='' />
                                </Avatar>
                                <Typography color="gray">
                                    Placed a bid $1500 by
                                </Typography>
                                <Typography >
                                    <b>John Doe</b>
                                </Typography>
                            </Stack>
                            <Typography color='gray'>Jun 14 - 4:12 PM</Typography>
                        </Stack>
                        <Divider variant="fullWidth" flexItem />
                        <Stack direction="row" justifyContent={'space-between'} alignItems='center'>
                            <Stack gap={1} direction='row' alignItems='center' justifyContent={'center'}>
                                <Avatar sx={{ width: 48, height: 48 }}>
                                    <img src='/assets/images/image 134.png' alt='' />
                                </Avatar>
                                <Typography color="gray">
                                    Placed a bid $1500 by
                                </Typography>
                                <Typography >
                                    <b>John Doe</b>
                                </Typography>
                            </Stack>
                            <Typography color='gray'>Jun 14 - 4:12 PM</Typography>
                        </Stack>
                        <Divider variant="fullWidth" flexItem />
                        <Stack direction="row" justifyContent={'space-between'} alignItems='center'>
                            <Stack gap={1} direction='row' alignItems='center' justifyContent={'center'}>
                                <Avatar sx={{ width: 48, height: 48 }}>
                                    <img src='/assets/images/image 135.png' alt='' />
                                </Avatar>
                                <Typography color="gray">
                                    Placed a bid $1500 by
                                </Typography>
                                <Typography >
                                    <b>John Doe</b>
                                </Typography>
                            </Stack>
                            <Typography color='gray'>Jun 14 - 4:12 PM</Typography>
                        */}
                        </Stack> 
                </Stack>
            </Grid>
            <AcceptOffer open={openWallet} bidderInfo={bidderInfo} acceptOffer={acceptOfferHandle}  handleClose={handleCloseWallet} />
        </Grid>
    )
}