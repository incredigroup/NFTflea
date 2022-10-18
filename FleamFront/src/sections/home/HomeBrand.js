import { Button, Grid, Stack, Typography,Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import CoporateCard from "../../components/cards/CorporateCard";
import TextSpinBox from "../../components/TextSpinBox";
import { BrandData } from "../../_mock/BrandData";

export default function HomeBrand() {
    const theme = useTheme();
    return (
        <Stack gap={4} padding={{xs:2,sm:4, md:8}}>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2}>
                <Typography variant = "h3">Brands Of</Typography>
                <TextSpinBox  color={`${theme.palette.primary.dark}`} variant = "h3"
                values = {[{id:0,label:'The Week'},{id:1,label:'The Month'}]} 
                />
            </Box>
            <Typography>
            Brand partners will be able to facilitate their digital twinning with our authenticated marketplace, giving safety and security to them and their consumers. Our Brand Advisory services will be present every step of the way empowering marketing teams with the power of real data. Demographic segmentation via staking enables surgical target marketing.
            </Typography>
            <Grid container>
                {BrandData.map((brand,index)=>(
                    <Grid item key = {index} sm={12} md={6} lg={4} padding = {1}>
                        <CoporateCard {...brand} />
                    </Grid>
                ))}               
            </Grid>
        </Stack>
    )
}
