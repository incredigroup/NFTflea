import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button, Container, Typography, Grid, Box, Stack, useTheme } from "@mui/material";
import RouterLink from './../../../components/RouterLink';
import Image from "./../../../components/Image";
import { Icon } from "@iconify/react";

import { SearchBar, SelectStyle, ToggoleButton } from "../../../components/StyledComponents";
import NFTCard from "../../../components/cards/NFTCard";
import { CollectionsData } from "../../../_mock/MockData";
import siteConfig from './../../../config';


export default function CollectionNFTs() {
    const [collectionData, setCollectionData] = useState([])
    const [displayData, setDisplayData] = useState([])
    const [searchText, setSearchText] = useState('')
    const getCollectionData = () => {
        axios.post(`${siteConfig.apiUrl}/api/collectible/get-all-collections`, {}).then(res => {
        let result = []
        res.data.map(item => {
            result.push({
                id: item.id,
                file_path: item.bannerUrl,
                name: item.name,
                address: item.address
            })
        })
        setCollectionData(result)
        setDisplayData(result)
        // axios.post(`${siteConfig.apiUrl}/api/collectible/get-all-collectibles`, {}).then(res => {
        //     let result = []
        //     res.data.map(item => {
        //         result.push({
        //             tokenId: item.tokenId, 
        //             category: 'art',
        //             file_path: item.file_path,
        //             name: item.name,
        //             price: item.price,
        //             // bidder: item.bidder ? item.bidder[0] :undefined,
        //             stock: 1,
        //             bid: 123,
        //             time: new Date(item.date),
        //         })
        //     })
        //     setCollectionData(result)
        }).catch(err => {console.log('err: ',err)});
    }
    const handleSearchText = (e) => {
        if (e.keyCode === 13) {
            handleSearchButton();
            return;
        }
        setSearchText(e.target.value);
    }
    const handleSearchButton = () => {
        setDisplayData(collectionData.filter(data => data.name.toUpperCase().indexOf(searchText.toUpperCase()) !== -1));
    }

    useEffect(() => {
        getCollectionData()
    }, [])
    const theme = useTheme();
    return (
        <Container>
            <Grid container justifyContent={"end"}>
                <Grid item xs={12} sm={12} md={4} lg={4} sx={{ padding: 2 }}>
                    <Stack sx ={{width:'100%'}}>
                        <SearchBar sx = {{height:44, width:{lg:320, md:280,}}}>
                            <input type='text' onKeyUp={handleSearchText} placeholder="Search Text" />
                            <button onClick={handleSearchButton} type='button'>
                                <Icon icon="eva:search-fill" width={20} />
                            </button>
                        </SearchBar>
                    </Stack>
                </Grid>
            </Grid>
            <Grid container mb={2}>
                {displayData.map((collection, index) => {
                    // return index < 12 ? <NFTCard collection={collection} key={index} theme={theme} /> : <></>
                    return <Grid item key={index} xs={12} sm={6} md={4} lg={4} mb={4} pr={1} pl={1}>
                        <RouterLink to={`/market-place/collections/${collection.address.toLowerCase()}`}>
                            <Box style={{lineHeight: 0}}>
                                <Image src={collection&&collection.file_path?collection.file_path:"/assets/images/card1.png"} alt='' />
                            </Box>
                            <Box sx={{ bgcolor: '#eee' }} >
                                <Stack>
                                    <Typography mt={1} align="center" variant="h5">{collection.name}</Typography>
                                    <Typography style={{border: "1px solid #aaa", width: '120px', margin: "5px auto 10px", borderRadius: "20px"}} align="center" variant="p">Marketplace</Typography>
                                </Stack>
                            </Box>
                        </RouterLink>
                    </Grid>
                })}
            </Grid>
            {/* end collections */}
            <Stack alignItems={'center'}>
                <Button onClick={getCollectionData} sx={{ px: { xs: 4, sm: 8 } }}>Load More..</Button>
            </Stack>

        </Container>
    )
}
