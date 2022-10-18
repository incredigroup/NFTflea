import { Box, Card, CardContent } from "@mui/material";
import ApexCharts from 'react-apexcharts'

const CHAT_DATA = {

    series: [{
        name: 'Session',
        data: [13,25,13,20,12]
    }, {
        name: 'Bounce',
        data: [20,21,16,22,18]
    }],
    options: {
        chart: {
            type: 'bar',
            height: 400
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '75%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Australia','UK','America','Canada','Gemany'],
        },
        title: {
            text: 'Top 5 Countries - Session & Bounce Rate (last 30 days)'
        },
        yaxis: {
            
        },
        fill: {
            opacity: 1
        },
        
    },


};

export default function Top5CountriesChart() {
    return (
        <Box>
             <Card sx={{ width: '100%', background: "#ffffff" }}>
                <CardContent >
                    <ApexCharts options={CHAT_DATA.options} series={CHAT_DATA.series} type="bar" height={445} />
                </CardContent>
            </Card>
        </Box>
    )
}