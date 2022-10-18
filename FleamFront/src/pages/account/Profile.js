import { Box } from "@mui/material";
import { useParams } from "react-router";
import { useEffect, useContext } from "react";

import ProfileCover from "../../sections/profile/ProfileCover";
import Page from "../../components/Page";
import ProfileNFTs from "../../sections/profile/ProflieNFTs";
import PopularCreator from "../../sections/profile/PopularCreator";
import StayInLoop from "../../sections/StayInLoop";
import { useWeb3React } from "@web3-react/core";
import { AccountContext } from "./../../contexts/AccountContext";


export default function Profile() {
    const { account } = useWeb3React();
    const { getProfileAction } = useContext(AccountContext);
    const { id } = useParams();
    useEffect(()=>{
        let wallet = id;
        if(id == 'me' && account) {
            wallet = account;
            getProfileAction(wallet)
        }else{
            getProfileAction(wallet)
        }
    },[id]);
    return (
        <Page title="">
            <Box sx={{ display: 'flex', gap: { xs: 10, sm: 12, md: 14 }, flexDirection: 'column' }} >
                <ProfileCover isYou = {(id)===`me`} />
                <ProfileNFTs />
                <PopularCreator />
                {/* Stay in loop start */}
                <StayInLoop />
            </Box>
        </Page>
    )
}
