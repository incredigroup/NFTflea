import { Box, Container, Grid, } from '@mui/material';
import {useState, useEffect, useContext} from 'react';

import RealTable from '../../sections/analystic/RealTable';
// components
import Page from '../../components/Page';
import { GradientStyle } from '../Home';
import AvgSessionChart from '../../sections/analystic/AvgSestionChart';
import Top5CountriesChart from '../../sections/analystic/Top5CountiresChart';
import WorldMapSVG from '../../sections/analystic/WorldMapSVG';
import { useWeb3React } from "@web3-react/core";
import { useNavigate } from "react-router";
import { AccountContext } from "./../../contexts/AccountContext";

export default function Analystics() {

    const { account, library  } = useWeb3React();   
    const { myPartnerInfo } = useContext(AccountContext);
 
    const navigate = useNavigate();
    
    useEffect(() => {
        if(!account) {
            navigate("/", { replace: true });            
        }else{
            if((myPartnerInfo&&myPartnerInfo.Status) || ((myPartnerInfo&&myPartnerInfo.wallet) != account)){
                navigate("/", { replace: true });    
            }
        }

    }, [account]);

    return (
        <Page title="">
            <Box sx={{ display: 'flex', gap: { xs: 10, sm: 12, md: 14 }, flexDirection: 'column' }} >
                <GradientStyle sx={{ paddingTop: 20, display: 'flex', gap: 8, flexDirection: 'column' }} >
                    <Container>
                        <RealTable />
                        <AvgSessionChart />
                        <Grid container>
                            <Grid item  xs ={12} sm={12} md={6} sx  ={{paddingRight:{md:2,xs:0, sm:0}, mb:4}}>
                                <WorldMapSVG />
                            </Grid>
                            <Grid item  xs ={12} sm={12} md={6} sx  ={{paddingLeft:{md:2,xs:0, sm:0}, mb:4}}>
                                <Top5CountriesChart />
                            </Grid>
                        </Grid>
                    </Container>
                </GradientStyle>
            </Box>
        </Page>
    )
}