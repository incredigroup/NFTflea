import { Box, Card, CardContent, Stack, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

import { NormalTableStyle } from "./../../components/StyledComponents";
// import EnhancedTableHead from './../../components/EnhancedTableHeader';
import { PerfomanceData } from "./../../_mock/MockData";




export default function RealTable() {
    return (
        <Stack gap={2} sx ={{mb:4}} >
            <Typography variant="h4">Analytics Performance</Typography>
            <Card sx={{ width: '100%',}}>
                <CardContent >
                    <NormalTableStyle cellPadding={0} cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>Sort</th>
                                <th>Top Searches</th>
                                <th>Users</th>
                                <th>Sessions</th>
                                <th>Avg.Session Duration</th>
                                <th>% New sessions</th>
                                <th>Goal Complections</th>
                                <th>Papers Per Session</th>
                                <th>Page Views</th>
                            </tr>
                        </thead>
                        <tbody>
                            {PerfomanceData.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.sort}</td>
                                    <td><Typography sx={{ display: 'flex', alignItems: 'center' }} color={(row.searcher.direction === 'up' ? 'green' : 'red')}>
                                        <Icon icon={(row.searcher.direction === 'up' ? 'bi:arrow-up-short' : 'bi:arrow-down-short')} width={20} /> {row.searcher.amount}</Typography></td>
                                    <td><Typography color={(row.user.direction === 'up' ? 'green' : 'red')} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Icon icon={(row.user.direction === 'up' ? 'bi:arrow-up-short' : 'bi:arrow-down-short')} width={20} /> {row.user.amount}</Typography></td>
                                    <td><Typography color={(row.session.direction === 'up' ? 'green' : 'red')} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Icon icon={(row.session.direction === 'up' ? 'bi:arrow-up-short' : 'bi:arrow-down-short')} width={20} /> {row.session.amount}</Typography></td>
                                    <td><Typography color={(row.avg.direction === 'up' ? 'green' : 'red')} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Icon icon={(row.avg.direction === 'up' ? 'bi:arrow-up-short' : 'bi:arrow-down-short')} width={20} /> {row.avg.amount}</Typography></td>
                                    <td><Typography color={(row.news.direction === 'up' ? 'green' : 'red')} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Icon icon={(row.news.direction === 'up' ? 'bi:arrow-up-short' : 'bi:arrow-down-short')} width={20} /> {row.news.amount}</Typography></td>
                                    <td><Typography color={(row.goal.direction === 'up' ? 'green' : 'red')} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Icon icon={(row.goal.direction === 'up' ? 'bi:arrow-up-short' : 'bi:arrow-down-short')} width={20} /> {row.goal.amount}</Typography></td>
                                    <td><Typography color={(row.paper.direction === 'up' ? 'green' : 'red')} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Icon icon={(row.paper.direction === 'up' ? 'bi:arrow-up-short' : 'bi:arrow-down-short')} width={20} /> {row.paper.amount}</Typography></td>
                                    <td><Typography color={(row.view.direction === 'up' ? 'green' : 'red')} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Icon icon={(row.view.direction === 'up' ? 'bi:arrow-up-short' : 'bi:arrow-down-short')} width={20} /> {row.view.amount}</Typography></td>

                                </tr>
                            ))}

                        </tbody>
                    </NormalTableStyle>
                </CardContent>
            </Card>

        </Stack>
    )
}