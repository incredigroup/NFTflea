import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button, Container, Grid, Stack, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";

import { useLocation } from 'react-router-dom';
import { SearchBar, SelectStyle} from "../../../components/StyledComponents";
import NFTCard from "../../../components/cards/NFTCard";
import siteConfig from './../../../config';


export default function NFTInCollection() {
    let location = useLocation();
    const [collectionData, setCollectionData] = useState([])
    const [displayData, setDisplayData] = useState([])
    const [count, setCount] = useState(20)
    const address = location.pathname.split("/")[3]
    const categories = ["Art", "Music", "Game assets", "Property", "Wine", "Jewelry", "Clothes", "Collectibles Art", "Property", "Domain Names",
                "Photography", "Sports", "Memberships", "Other"]
    const getCollectionData = (count) => {
        axios.post(`${siteConfig.apiUrl}/api/collectible/get-collectibles-accordingCollection`, {address: address, count: count}).then(res => {
            let result = []
            res.data.map(item => {
                result.push({
                    tokenId: item.tokenId,
                    category: item.category,
                    chain: item.chain,
                    file_path: item.file_path,
                    smartcontractAddress: item.smartcontractAddress,
                    name: item.name,
                    price: item.price ? item.price : 0,
                    // bidder: item.bidder ? item.bidder[0] :undefined,
                    stock: 1,
                    bid: 123,
                    time: new Date(item.date),
                })
            })
            setCollectionData(result.sort((a, b) => a.tokenId - b.tokenId))
            setDisplayData(result.sort((a, b) => a.tokenId - b.tokenId))
        }).catch(err => {console.log('err: ',err)});
    }

    const priceRange = (e) => {
        let data = displayData
        setDisplayData([])
        setTimeout(() => {
            setDisplayData(
                data.sort((a, b) => {
                    if(e.target.value === 'ascending') return a.price - b.price 
                    if(e.target.value === 'descending') return b.price - a.price
                })
            )
        }, 0)
    }
    const sortOrder = (e) => {
        let data = displayData
        setDisplayData([])
        setTimeout(() => {
            setDisplayData(
                data.sort((a, b) => {
                    if (e.target.value === 'tokenId') return a.tokenId - b.tokenId
                    if (e.target.value === 'rarity') return a.rarity - b.rarity
                })
            )
        }, 0)
    }
    const verifiedCreator = (e) => {
        // let data = collectionData
        // if (e.target.value === 'all') {
        //     setDisplayData(data)
        //     return
        // }
        // setDisplayData(
        //     data.filter(item => item.verifiedCreator == e.target.value)
        // )
    }
    const accordingCategory = (e) => {
        let data = collectionData
        if (e.target.value === 'all') {
            setDisplayData(data)
            return
        }
        setDisplayData(
            data.filter(item => item.category == e.target.value)
        )
    }

    const handleMore = () => {
        getCollectionData(count + 20)
        setCount(count + 20)
    }

    const onSearch = (e) => {
        if (e.target.value === '') {
            setDisplayData(collectionData)
            return
        }
        setDisplayData(collectionData.filter(item => item.name.indexOf(e.target.value) != -1))
    }

    useEffect(() => {
        getCollectionData(count)
    }, [])
    const theme = useTheme();
    return (
        <Container>
            <Grid container mt={12}>
                <Grid item xs={12} sm={12} md={8} lg={8} display="flex" alignItems={'center'}>
                    <Stack direction = "row" sx ={{paddingLeft:2}} gap={2} flexWrap={'wrap'} justifyContent={'center'}>
                        <SelectStyle onChange={priceRange}>
                            <option disabled>Price Range</option>
                            <option value="ascending">Lowest to Highest</option>
                            <option value="descending">Highest to Lowest</option>
                        </SelectStyle>
                        {/*<SelectStyle>*/}
                        {/*    <option>Sales Type</option>*/}
                        {/*</SelectStyle>*/}
                        {/* <SelectStyle>
                            <option>File Type</option>
                        </SelectStyle> */}
                        <SelectStyle onChange={sortOrder}>
                            <option disabled>Sort Order</option>
                            <option value="tokenId">Token Id</option>
                            <option value="rarity">Rarity</option>
                        </SelectStyle>
                        <SelectStyle onChange={verifiedCreator}>
                            <option value="all">Verified Creator</option>
                            <option>Yes</option>
                            <option>No</option>
                        </SelectStyle>
                        <SelectStyle onChange={accordingCategory}>
                            <option value="all">Category</option>
                            {categories.map((category, index) => (
                                <option key={index}>{category}</option>
                            ))}
                        </SelectStyle>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} sx={{ padding: 2 }}>
                    <Stack alignItems={'end'} sx ={{width:'100%'}}>
                        <SearchBar sx = {{height:44, width:{lg:320, md:280,}}}>
                            <input onChange={onSearch} type='text' placeholder="Search Text" />
                            <button type='button'>
                                <Icon icon="eva:search-fill" width={20} />
                            </button>
                        </SearchBar>
                    </Stack>
                </Grid>
            </Grid>
            <Grid container mb={2}>
                {displayData.map((collection, index) => {
                    return <NFTCard collection={collection} key={index} theme={theme} />
                })}
            </Grid>
            {/* end collections */}
            <Stack alignItems={'center'}>
                <Button onClick={handleMore} sx={{ px: { xs: 4, sm: 8 } }}>Load More..</Button>
            </Stack>

        </Container>
    )
}
