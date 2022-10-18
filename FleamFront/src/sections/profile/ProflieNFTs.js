import { Button, Container, Grid, Stack, useTheme } from "@mui/material";
import { SelectStyle, ToggoleButton } from "../../components/StyledComponents";
import NFTCard from "../../components/cards/NFTCard";
import ProfileCard from "../../components/cards/ProfileCard";
import { useState, useEffect, useContext } from "react";
import { AccountContext } from "./../../contexts/AccountContext";
import { useWeb3React } from "@web3-react/core";


export default function ProfileNFTs() {
    const theme = useTheme();
    const {  getCollectionProfileAction, profileCollectionData, profileFollowData, getProfilesFollowAction } = useContext(AccountContext);
    const { account } = useWeb3React();
    const [filtered, setFiltered] = useState([]);
    const [index, setIndex] = useState(1)
    const [category, setCategory] = useState(false)

    const handleCategory = (collection) => {
        setIndex(collection)
        if(account){
            setIndex(collection)
            if (collection == 1 || collection == 2 || collection == 3){
                getCollectionProfileAction(account, collection)
                setCategory(false)
            }else{
                setCategory(true)
                getProfilesFollowAction(account, collection)
            }
        }
    }

    const isSelected = (number) => {
        if (number === index)
            return 'selected'
        return ''
    }

    useEffect(() => {
        if(account){
            if (index == 1 || index == 2 || index == 3){
                setFiltered(profileCollectionData);
            }else{
                setFiltered(profileFollowData);
            }
        }
    }, [profileCollectionData, profileFollowData]);

    useEffect(() => {
        handleCategory(1)
    }, [])

    return (
        <Container>
            <Grid container>
                <Grid item xs={12} sm={12} md={9} lg={9}>
                    <Stack direction={{xs:'column', sm:'row',md:"row",lg:'row'}} justifyContent={'space-between'} gap={2} sx={{padding:2}}>
                        <ToggoleButton onClick={() => handleCategory(1)} selected = {isSelected(1)}>My Collection</ToggoleButton>
                        <ToggoleButton onClick={() => handleCategory(2)} selected = {isSelected(2)}>My Purchased</ToggoleButton>
                        <ToggoleButton onClick={() => handleCategory(3)} selected = {isSelected(3)}>Liked</ToggoleButton>
                        <ToggoleButton onClick={() => handleCategory(4)} selected = {isSelected(4)}>Following</ToggoleButton>
                        <ToggoleButton onClick={() => handleCategory(5)} selected = {isSelected(5)}>Followers</ToggoleButton>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} sx = {{padding:2 }}>
                    <Stack justifyContent={'end'}>
                        <SelectStyle >
                            <option>Most Recent</option>
                            <option>Newest</option>
                            <option>Oldest</option>
                        </SelectStyle>
                    </Stack>
                </Grid>
            </Grid>
            <Grid container mb={4}>
                {!category&&filtered&&filtered.map((collection, index) => (
                    <NFTCard collection = {collection} key = {index} theme = {theme}/>
                ))}
                {category&&filtered&&filtered.map((collection, index) => (
                    <ProfileCard collection = {collection} key = {index} theme = {theme}/>
                ))}
            </Grid>
            {/* end collections */}
            <Stack alignItems={'center'}>
                <Button sx={{px:{xs:4, sm:8}}}>Load More..</Button>
            </Stack>
           
        </Container>
    )
}