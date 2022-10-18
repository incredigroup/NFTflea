import { Stack, Container, Typography, Grid, Box, Divider, TextField, useTheme, Button } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import StayInLoop from "./../../StayInLoop";
import CustomButton from "./../../../components/CustomButton";
import Image from "./../../../components/Image";
import { BlankLink } from "./../../../components/StyledComponents";
import { CollectionsData, CollectionsCategories, cagegoryTopicData } from "./../../../_mock/MockData";
import NFTCard from "./../../../components/cards/NFTCard";
import { AccountContext } from "./../../../contexts/AccountContext";
import { useWeb3React } from "@web3-react/core";


export default function BrowserCollection() {
    const theme = useTheme();
    const {  getCollectionProfileAction, profileCollectionData, getProductsCountDataAction, productsCountData } = useContext(AccountContext);
    const [filtered,setFiltered] = useState([]);
    const [index, setIndex] = useState(6)
    const [topic, setTopic] = useState("")
    const { account } = useWeb3React();
    const [count, setCount] = useState(16)
    const categories = ["Art", "Art", "Art", "Art", "Art", "Art", "Art", "Music", "Game assets", "Houses", "Property", "Wine", "Jewelry", "Clothes", "Collectibles Art", "Domain Names",
                "Photography", "Sports", "Memberships", "Other"];
    const handleCategory = (collection) => {
        setIndex(collection)
        getCollectionProfileAction(account, collection, count)
        // const _filterd = CollectionsData.slice(0,CollectionsData.length);
        // console.log(_filterd)
        // setFiltered(_filterd.filter((f)=>f.category === collection));
        setFiltered(profileCollectionData.filter(item => item.category === categories[collection]));
        setTopic(cagegoryTopicData[collection])
    }
    const isSelected = (number) => {
        if (number === index)
            return 'selected'
        return ''
    }
    const handleMore = () => {
        getCollectionProfileAction(account, index, count + 12)
        setCount(count + 12)
    }

    useEffect(() => {
        setFiltered(profileCollectionData.filter(item => item.category === categories[index]));
    }, [profileCollectionData]);

    useEffect(() => {
        for (let i = 0; i < categories.length; i++)
            if (productsCountData.filter((productsCount) => productsCount._id.category === categories[i])[0]?.count) {
                handleCategory(i);
                return;
            }
    }, [productsCountData])

    useEffect(() => {
        getProductsCountDataAction();
    }, [])
    return (
        <Container>
            {/* start categories */}
            <Stack alignItems={'center'} gap={2} mb={4}>
                <Typography variant="h3">Browse By Category</Typography>
                <Typography textAlign={'center'} color="gray"> {topic?topic:"Discover the best NFTs across a range of topics"}.</Typography>
                <hr style={{border: 'none', height: '1px', width: '65%', backgroundColor: '#d7d7d7'}} />
                <Box sx={{overflowX: {lg: 'auto', xs:"scroll"}, width: '100%'}}>
                    <Stack direction="row" gap={2} justifyContent="space-evenly" flexWrap={'wrap'} sx={{width: "100%"}}>
                        {/* {CollectionsCategories.map((collection, index) => (
                            <BlankLink selected={index === selectedIndex} key={index} onClick={() => handleCategory(index,collection)}>{collection.title}</BlankLink>
                        ))} */}
                        {/* <BlankLink selected={index === selectedIndex} key={index} onClick={() => handleCategory(index,collection)}>{collection.title}</BlankLink> */}
                        {/* <BlankLink onClick={() => handleCategory(6)} selected >Trending</BlankLink> */}
                        { productsCountData.filter((productsCount) => productsCount._id.category === categories[6])[0]?.count ? <BlankLink onClick={() => handleCategory(6)} selected = {isSelected(6)} >Art</BlankLink> : '' }
                        { productsCountData.filter((productsCount) => productsCount._id.category === categories[7])[0]?.count ? <BlankLink onClick={() => handleCategory(7)} selected = {isSelected(7)} >Music</BlankLink> : '' }
                        { productsCountData.filter((productsCount) => productsCount._id.category === categories[8])[0]?.count ? <BlankLink onClick={() => handleCategory(8)} selected = {isSelected(8)} >Game assets</BlankLink> : '' }
                        {/*<BlankLink onClick={() => handleCategory(9)} selected = {isSelected(9)} >Houses</BlankLink>*/}
                        { productsCountData.filter((productsCount) => productsCount._id.category === categories[10])[0]?.count ? <BlankLink onClick={() => handleCategory(10)} selected = {isSelected(10)} >Property</BlankLink> : '' }
                        { productsCountData.filter((productsCount) => productsCount._id.category === categories[11])[0]?.count ? <BlankLink onClick={() => handleCategory(11)} selected = {isSelected(11)} >Wine</BlankLink> : '' }
                        { productsCountData.filter((productsCount) => productsCount._id.category === categories[12])[0]?.count ? <BlankLink onClick={() => handleCategory(12)} selected = {isSelected(12)} >Jewelry</BlankLink> : '' }
                        { productsCountData.filter((productsCount) => productsCount._id.category === categories[13])[0]?.count ? <BlankLink onClick={() => handleCategory(13)} selected = {isSelected(13)} >Clothes</BlankLink> : '' }

                        { productsCountData.filter((productsCount) => productsCount._id.category === categories[14])[0]?.count ? <BlankLink onClick={() => handleCategory(14)} selected = {isSelected(14)} >Collectibles Art</BlankLink> : '' }
                        { productsCountData.filter((productsCount) => productsCount._id.category === categories[15])[0]?.count ? <BlankLink onClick={() => handleCategory(15)} selected = {isSelected(15)} >Domain Names</BlankLink> : '' }
                        { productsCountData.filter((productsCount) => productsCount._id.category === categories[16])[0]?.count ? <BlankLink onClick={() => handleCategory(16)} selected = {isSelected(16)} >Photography</BlankLink> : '' }
                        { productsCountData.filter((productsCount) => productsCount._id.category === categories[17])[0]?.count ? <BlankLink onClick={() => handleCategory(17)} selected = {isSelected(17)} >Sports</BlankLink> : '' }
                        { productsCountData.filter((productsCount) => productsCount._id.category === categories[18])[0]?.count ? <BlankLink onClick={() => handleCategory(18)} selected = {isSelected(18)} >Memberships</BlankLink> : '' }
                        { productsCountData.filter((productsCount) => productsCount._id.category === categories[19])[0]?.count ? <BlankLink onClick={() => handleCategory(19)} selected = {isSelected(19)} >Other</BlankLink> : '' }
                    </Stack>
                </Box>
            </Stack>
            {/* end categories */}
            {/* Show Collections */}
            <Grid container mb={4}>
                {filtered&&filtered.map((collection, index) => (
                    <NFTCard collection = {collection} key = {index} theme = {theme}/>
                ))}
            </Grid>
            {/* end collections */}
            <Stack alignItems={'center'}>
                <Button sx={{px:{xs:4, sm:8}}} onClick={handleMore}>Load More..</Button>
            </Stack>
            {/* Stay in loop start */}
            <StayInLoop />
        </Container>
    )
}
