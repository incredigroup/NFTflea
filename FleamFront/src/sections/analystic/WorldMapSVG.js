import { Box, Card, CardContent, Divider, Stack, Typography } from "@mui/material";
import WorldMap from "react-svg-worldmap";

export default function WorldMapSVG() {
    const data = [
        { country: "au", value: 100 },  
        { country: "uk", value: 90 },  
        { country: "us", value: 70 },  
        { country: "ca", value: 100 },  
        { country: "gm", value: 100 },  
       
    ];

    return (
        <Box>
            <Card sx={{ width: '100%', background: "#ffffff" }}>
                <Stack direction = "row" justifyContent={'space-between'} alignItems = {'end'} padding={2}>
                    <Typography variant = "h5" color = "black">Goal Completions By Countries </Typography>

                    <Typography variant = "h6"  color = "black">Last 30 Days</Typography>
                    
                </Stack>
                <Divider />
                <CardContent >
                    <WorldMap size="lg" color="red" data = {data} title="" />
                </CardContent>
            </Card>
        </Box>
    )
}