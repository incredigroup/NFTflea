import { Icon } from '@iconify/react';
import { styled } from '@mui/material/styles';
import { Stack, Card, CardContent, CardActions, Button, Divider, Container, Box, tableCellClasses, TableContainer, Paper, TableBody, Table, TableHead, TableRow, TableCell, Typography, useTheme } from '@mui/material';
import Page from "../../components/Page";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));
  
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));  

const rows = [
    {name: 'Non-transferable personal use license', personalUse: true, copy: true, display: true, transfer: false, commercialUse: false, additionalUse: ''},
    {name: 'Transferable personal use license', personalUse: true, copy: true, display: true, transfer: true, commercialUse: false, additionalUse: ''},
    {name: 'Derivative works license', personalUse: true, copy: true, display: true, transfer: true, commercialUse: false, additionalUse: 'Derivative works'},
    {name: 'Sole license', personalUse: true, copy: true, display: true, transfer: true, commercialUse: false, additionalUse: 'Sole license'},
    {name: 'Limited commercial use license', personalUse: true, copy: true, display: true, transfer: true, commercialUse: true, additionalUse: ''},
    {name: 'Exclusive license', personalUse: true, copy: true, display: true, transfer: true, commercialUse: true, additionalUse: 'Exclusive license'},
    {name: 'Transfer of all rights', personalUse: true, copy: true, display: true, transfer: true, commercialUse: true, additionalUse: 'Including but not limited to all intellectual property rights'},
];

export default function Licences() {
    const theme = useTheme();
    return (
        <Page title="Licences">
            <Container>
                <Stack direction="row" spacing={2} sx={{paddingTop: '100px'}}>
                    <Item sx={{ minWidth: 280 }} >
                        <Card sx={{ minWidth: 250 }} style={{position: 'fixed', backgroundColor:'#ffeeda'}}>
                            <CardContent>
                                <Typography mb={2} sx={{ fontSize: 14 }} variant="h6" color="text.secondary">
                                    Index
                                </Typography>
                                <Divider sx={{borderBottomWidth: 2}}/>
                                <a style={{ color:'gray', margin: '15px 0 5px', display: 'block'}} href='#Non-transferable'>Non-transferable personal use license</a>
                                <a style={{ color:'gray', margin: '5px 0', display: 'block'}} href='#Transferable'>Transferable personal use license</a>
                                <a style={{ color:'gray', margin: '5px 0', display: 'block'}} href='#Derivative'>Derivative works license</a>
                                <a style={{ color:'gray', margin: '5px 0', display: 'block'}} href='#Sole'>Sole license</a>
                                <a style={{ color:'gray', margin: '5px 0', display: 'block'}} href='#Limited'>Limited commercial use license</a>
                                <a style={{ color:'gray', margin: '5px 0', display: 'block'}} href='#Exclusive'>Exclusive license</a>
                                <a style={{ color:'gray', margin: '5px 0', display: 'block'}} href='#Transfer'>Transfer of all rights</a>
                            </CardContent>
                        </Card>
                    </Item>
                    <Item>
                        <Typography variant="h3" align='center' mb={2}>NFT Licences</Typography>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                                <TableHead>
                                    <StyledTableRow>
                                        <StyledTableCell>Name</StyledTableCell>
                                        <StyledTableCell align="center">Personal use</StyledTableCell>
                                        <StyledTableCell align="center">Copy</StyledTableCell>
                                        <StyledTableCell align="center">Display</StyledTableCell>
                                        <StyledTableCell align="center">Transfer</StyledTableCell>
                                        <StyledTableCell align="center">Commercial use</StyledTableCell>
                                        <StyledTableCell align="center">Additional use</StyledTableCell>
                                    </StyledTableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{row.personalUse ? <Icon icon="ps:checked"></Icon> : ''}</StyledTableCell>
                                        <StyledTableCell align="center">{row.copy ? <Icon icon="ps:checked"></Icon> : ''}</StyledTableCell>
                                        <StyledTableCell align="center">{row.display ? <Icon icon="ps:checked"></Icon> : ''}</StyledTableCell>
                                        <StyledTableCell align="center">{row.transfer ? <Icon icon="ps:checked"></Icon> : ''}</StyledTableCell>
                                        <StyledTableCell align="center">{row.commercialUse ? <Icon icon="ps:checked"></Icon> : ''}</StyledTableCell>
                                        <StyledTableCell align="center">{row.additionalUse}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Box>
                            <p id='Non-transferable' style={{fontWeight: 'bold'}}>Non-transferable personal use license:</p>
                            <p>Choosing this license you will allow the Buyer of your NFT to:</p>
                            <ul>
                                <li>Use the NFT for their personal needs, but not for a commercial purpose.</li>
                                <li>They may not use the NFT for illegal and other inappropriate activities, e.g. production of any pornographic or inappropriate material, racist, discriminatory or hateful content or financing of any illicit activities.</li>
                                <li>Reproduce the NFT in any way (digitally, materially or other) without your express permission.</li>
                                <li>Display the NFT virtually on social platforms or any other web pages that comply with the necessary regulations.</li>
                                <li>The Buyer, however, may not transfer the above rights, acquired by purchasing your NFT, onto another person.</li>
                            </ul>
                        </Box>
                        <Box>
                            <p id="Transferable" style={{fontWeight: 'bold'}}>Transferable personal use license:</p>
                            <p>Choosing this license, you will allow the Buyer of your NFT to:</p>
                            <ul>
                                <li>Use the NFT for their personal needs, but not for a commercial purpose.</li>
                                <li>They may not use the NFT for illegal and other inappropriate activities, e.g. production of any pornographic or inappropriate material, racist, discriminatory or hateful content or financing of any illicit activities.</li>
                                <li>Reproduce the NFT in any way (digitally, materially or other) without your express permission.</li>
                                <li>Display the NFT virtually on social platforms or any other web pages that comply with the necessary regulations.</li>
                                <li>Transfer all the above rights, acquired by purchasing your NFT, onto another person.</li>
                            </ul>
                        </Box>
                        <Box>
                            <p id='Derivative' style={{fontWeight: 'bold'}}>Derivative works license:</p>
                            <p>Choosing this license, you will allow the Buyer of your NFT to:</p>
                            <ul>
                                <li>Use the NFT for their personal needs, but not for a commercial purpose.</li>
                                <li>They may not use the NFT for illegal and other inappropriate activities, e.g. production of any pornographic or inappropriate material, racist, discriminatory or hateful content or financing of any illicit activities.</li>
                                <li>Reproduce the NFT in any way (digitally, materially or other) without your express permission.</li>
                                <li>Display the NFT virtually on social platforms or any other web pages that comply with the necessary regulations.</li>
                                <li>Create new NFTs or other digital assets based on your NFT, e.g. adaptations, elaborations, compilations etc.</li>
                                <li>Transfer all the above rights, acquired by purchasing your NFT, onto another person.</li>
                            </ul>
                        </Box>
                        <Box>
                            <p id='Sole' style={{fontWeight: 'bold'}}>Sole license:</p>
                            <p>Choosing this license, you will allow the Buyer of your NFT to:</p>
                            <ul>
                                <li>Use the NFT for their personal needs, but not for a commercial purpose.</li>
                                <li>They may not use the NFT for illegal and other inappropriate activities, e.g. production of any pornographic or inappropriate material, racist, discriminatory or hateful content or financing of any illicit activities.</li>
                                <li>Reproduce the NFT in any way (digitally, materially or other) without your express permission.</li>
                                <li>Display the NFT virtually on social platforms or any other web pages that comply with the necessary regulations.</li>
                                <li>Have an exclusive license, and you may not grant any additional licenses to others, however, you alone may still exercise all intellectual property rights on the NFT.</li>
                                <li>Transfer all the above rights, acquired by purchasing your NFT, onto another person.</li>
                            </ul>
                        </Box>
                        <Box>
                            <p id="Limited" style={{fontWeight: 'bold'}}>Limited commercial use license:</p>
                            <p>Choosing this license, you will allow the Buyer of your NFT to:</p>
                            <ul>
                                <li>Use the NFT for their personal needs, and also for limited commercial purposes, namely to reproduce or make photographs of it for advertising and marketing purposes.</li>
                                <li>They may not use the NFT for illegal and other inappropriate activities, e.g. production of any pornographic or inappropriate material, racist, discriminatory or hateful content or financing of any illicit activities.</li>
                                <li>Reproduce the NFT in any way (digitally, materially or other) without your express permission, for personal use, as well as for advertising and marketing purposes.</li>
                                <li>Display the NFT virtually on social platforms or any other web pages that comply with the necessary regulations.</li>
                                <li>Transfer all the above rights, acquired by purchasing your NFT, onto another person.</li>
                            </ul>
                        </Box>
                        <Box>
                            <p id="Exclusive" style={{fontWeight: 'bold'}}>Exclusive license:</p>
                            <p>Choosing this license, you will allow the Buyer of your NFT to:</p>
                            <ul>
                                <li>Use the NFT for their personal needs, and also for limited commercial purposes, namely to reproduce or make photographs of it for advertising and marketing purposes.</li>
                                <li>They may not use the NFT for illegal and other inappropriate activities, e.g. production of any pornographic or inappropriate material, racist, discriminatory or hateful content or financing of any illicit activities.</li>
                                <li>Reproduce the NFT in any way (digitally, materially or other) without your express permission.</li>
                                <li>Display the NFT virtually on social platforms or any other web pages that comply with the necessary regulations.</li>
                                <li>Have an exclusive license and be the sole right to use all intellectual property. You may not grant any additional licenses to others nor may you exercise any of the intellectual property rights on the NFT.</li>
                            </ul>
                        </Box>
                        <Box>
                            <p id="Transfer" style={{fontWeight: 'bold'}}>Transfer of all rights on the NFT</p>
                            <p>Choosing this option, you will transfer all rights on your NFT as far as permitted by applicable law onto the Buyer, including but not limited to all intellectual property rights.</p>
                            <p><span style={{fontWeight: 'bold'}}>NOTE:</span> The Buyer as the new owner will not have the option to choose a different license if they wish to further sell the NFT. Therefore, should they sell the NFT all rights on it will be transferred onto the new Buyer.</p>
                            <p>For more detailed information about the different license types please check below:</p>
                            <ul>
                                <li>
                                    <p style={{fontStyle: 'italic'}}>Non-transferable personal use license</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Non-commercial use:</span> The Buyer may use digital asset(s) for their personal needs but not with the intention of commercial purposes. The digital asset(s) must be used in accordance with their normal use and the Buyer may not use digital asset(s) for including, but not limited to, production of any pornographic or inappropriate material, racist, discriminatory or hateful content or financing of any illicit activities.</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Copy:</span> The Buyer may use digital asset(s) for their personal needs but not with the intention of commercial purposes. The digital asset(s) must be used in accordance with their normal use and the Buyer may not use digital asset(s) for including, but not limited to, production of any pornographic or inappropriate material, racist, discriminatory or hateful content or financing of any illicit activities.</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Display:</span> The Buyer may use digital asset(s) for their personal needs but not with the intention of commercial purposes. The digital asset(s) must be used in accordance with their normal use and the Buyer may not use digital asset(s) for including, but not limited to, production of any pornographic or inappropriate material, racist, discriminatory or hateful content or financing of any illicit activities.</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Non transferability:</span> The Buyer may use digital asset(s) for their personal needs but not with the intention of commercial purposes. The digital asset(s) must be used in accordance with their normal use and the Buyer may not use digital asset(s) for including, but not limited to, production of any pornographic or inappropriate material, racist, discriminatory or hateful content or financing of any illicit activities.</p>
                                </li>
                                <li>
                                    <p style={{fontStyle: 'italic'}}>Transferable personal use license</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Non-commercial use:</span>The Buyer may use digital asset(s) for their personal needs but not with the intention of commercial purposes. The digital asset(s) must be used in accordance with their normal use and the Buyer may not use digital asset(s) for including, but not limited to, production of any pornographic or inappropriate material, racist, discriminatory or hateful content or financing of any illicit activities.</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Copy:</span>The Buyer is permitted to digitally, materially or in another way reproduce digital asset(s) without the express permission of the Seller.</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Display:</span> The Buyer may present the digital asset(s) virtually on social platforms or any other web pages, which comply with the regulations regarding intellectual proprietary rights and does not encourage violence, racism or any illicit activity.</p>
                                </li>
                                <li>
                                    <p style={{fontStyle: 'italic'}}>Derivative works license</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Non-commercial use:</span> The Buyer may use digital asset(s) for their personal needs but not with the intention of commercial purposes. The digital asset(s) must be used in accordance with their normal use and the Buyer may not use digital asset(s) for including, but not limited to, production of any pornographic or inappropriate material, racist, discriminatory or hateful content or financing of any illicit activities.</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Copy:</span> The Buyer is permitted to digitally, materially or in another way reproduce digital asset(s) without the express permission of the Seller.</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Display:</span> The Buyer may present the digital asset(s) virtually on social platforms or any other web pages, which comply with the regulations regarding intellectual proprietary rights and does not encourage violence, racism or any illicit activity.</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Derivative work(s):</span> The Buyer is permitted to create new digital asset(s) based on digital asset(s) which is the subject of the Sale and Purchase Agreement between Seller and Buyer, which includes, but not limited to, translations, reproductions, motion picture version of literary material or plays, condensation of pre-existing works, or editorial revisions or elaborations.</p>
                                </li>
                                <li>
                                    <p style={{fontStyle: 'italic'}}>Sole license</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Non-commercial use:</span> The Buyer may use digital asset(s) for their personal needs but not with the intention of commercial purposes. The digital asset(s) must be used in accordance with their normal use and the Buyer may not use digital asset(s) for including, but not limited to, production of any pornographic or inappropriate material, racist, discriminatory or hateful content or financing of any illicit activities.</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Copy:</span> The Buyer is permitted to digitally, materially or in another way reproduce digital asset(s) without the express permission of the Seller.</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Display:</span> The Buyer may present the digital asset(s) virtually on social platforms or any other web pages, which comply with the regulations regarding intellectual proprietary rights and does not encourage violence, racism or any illicit activity.</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Derivative work(s):</span> A sole license grants the Buyer an exclusive license, but the Seller keeps the right to use the intellectual property. So, although the Seller will not grant any additional licenses, the Seller can continue to use the intellectual property and any previous licenses can still remain in effect.</p>
                                </li>
                                <li>
                                    <p style={{fontStyle: 'italic'}}>Limited commercial use license</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Non-commercial use:</span> The Buyer may use digital asset(s) for their personal needs but not with the intention of commercial purposes. The digital asset(s) must be used in accordance with their normal use and the Buyer may not use digital asset(s) for including, but not limited to, production of any pornographic or inappropriate material, racist, discriminatory or hateful content or financing of any illicit activities.</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Copy:</span> The Buyer is permitted to digitally, materially or in another way reproduce digital asset(s) without the express permission of the Seller.</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Display:</span> The Buyer may present the digital asset(s) virtually on social platforms or any other web pages, which comply with the regulations regarding intellectual proprietary rights and does not encourage violence, racism or any illicit activity.</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Derivative work(s):</span> The digital asset(s), in its original state, may be photographed or reproduced by the Buyer/Buyer for the advertising and marketing purposes. The Buyer/Buyer agrees that all promotions shall be dignified and not used in a way to associate the digital asset(s) with hatred, intolerance, violence, cruelty or otherwise infringes upon the rights of others.</p>
                                </li>
                                <li>
                                    <p style={{fontStyle: 'italic'}}>Exclusive license</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Non-commercial use:</span> The Buyer may use digital asset(s) for their personal needs, as well for commercial purposes. The digital asset(s) must be used in accordance with their normal use and the Buyer may not use digital asset(s) for including, but not limited to, production of any pornographic or inappropriate material, racist, discriminatory or hateful content or financing of any illicit activities.</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Copy:</span> The Buyer is permitted to digitally, materially or in another way reproduce digital asset(s) without the express permission of the Seller.</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Display:</span> The Buyer may present the digital asset(s) virtually on social platforms or any other web pages, which comply with the regulations regarding intellectual proprietary rights and does not encourage violence, racism or any illicit activity.</p>
                                    <p><span style={{fontStyle: 'italic', textDecoration: 'underline'}}>Derivative work(s):</span> An exclusive license gives the Buyer the exclusive and only right to the use of the intellectual property – not even the Seller can use the intellectual property. Once a Seller grants an exclusive license to someone, no other licenses on that intellectual property can be granted to anyone else.</p>
                                </li>
                            </ul>
                        </Box>
                    </Item>
                </Stack>
                
            </Container>
        </Page>
    )
}