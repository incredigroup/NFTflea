import { Button, Container, Grid, Stack, Typography, useTheme } from "@mui/material";

import { CollectionsData } from "../../../_mock/MockData";
import NFTCard from "../../../components/cards/NFTCard";
import { AccountContext } from "./../../../contexts/AccountContext";
import { useWeb3React } from "@web3-react/core";
import { useState, useEffect, useContext } from "react";


export default function DetailCollection() {
    const theme = useTheme();
    const {  getCollectionProfileAction, profileCollectionData  } = useContext(AccountContext);
    const { account } = useWeb3React();
    const [filtered, setFiltered] = useState([]);

    // const handleMore = (collection) => {
    //     getCollectionProfileAction(account, 0, 30)
    // }

    // useEffect(() => {
    //     getCollectionProfileAction(account, 0, 30)
    //     setFiltered(profileCollectionData)
    // }, []);


    useEffect(() => {
        setFiltered(profileCollectionData)
    }, [profileCollectionData]);

    return (
        <>
            <Typography variant="h4" sx={{ textAlign: 'center', mb:4 }}>
                More From This Collection
            </Typography>
            <Grid container mb={4}>
                {filtered&&filtered.map((collection, index) => (
                    <NFTCard collection={collection} key={index} theme={theme} />
                ))}

            </Grid>
            {/* <Stack alignItems={'center'}>
                <Button variant="contained" color="error" onClick={handleMore}>View More</Button>
            </Stack> */}
        </>
    )
}