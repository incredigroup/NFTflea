import { Box, Card, CardContent } from "@mui/material";
import ApexCharts from 'react-apexcharts'
import { ApexChartData } from "../../_mock/ApexChartData";

const options = {
    chart: {
        height: 350,
        type: 'line',
    },
    stroke: {
        width: [0, 4]
    },
    title: {
        text: 'AVG, Session Duration & Users'
    },
    
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    xaxis: {
        type: 'string'
    },
    yaxis: [{
        title: {
            text: 'Session & New Users',
        },

    }, {
        opposite: true,
        title: {
            text: 'AVG Session Duration'
        }
    }]
}
export default function AvgSessionChart() {


    return (
        <Box sx = {{mb:4}}>
            <Card sx={{ width: '100%', background: "#ffffff" }}>
                <CardContent >
                    <ApexCharts options={options} series={ApexChartData.series} type="line" height={350} />
                </CardContent>
            </Card>
        </Box>
    )
}