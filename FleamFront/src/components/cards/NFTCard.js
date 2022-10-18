import { Stack, Typography, Grid, Box, Divider, TextField, useTheme, Button } from "@mui/material";
import PropTypes from 'prop-types';
import RouterLink from './../../components/RouterLink';
import Image from "../Image";

NFTCard.propTypes={
    collection:PropTypes.object,
    theme:PropTypes.object,
}
export default function NFTCard({collection, theme}){
    const tokenUnit = collection&&collection.chain == "43114" ? " AVAX" : ""
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} mb={4} className="nft-card">
            <Stack gap={2} px={1} >
                <Box sx={{ borderRound: 1, display: 'block', margin: 'auto' }}>
                    <RouterLink to={`/market-place/product-detail/${collection.smartcontractAddress}_${collection.tokenId}`} color='gray'>
                        <Image sx={{borderRadius: '10px', width: '210px', height: '210px'}} src={collection&&collection.file_path?collection.file_path:"/assets/images/card1.png"} alt='' />
                        {/* <img style={{width: "200px", height: "auto"}} src={collection&&collection.file_path?collection.file_path:"/assets/images/card1.png"} alt='' /> */}
                    </RouterLink>
                </Box>
                <Stack direction='row' justifyContent={'space-between'} sx={{ width: '100%' }}>
                    <Typography variant="h6">{collection.name&&collection.name.slice(0,12) + (collection.name.length > 12 ? '...' : '')}</Typography>
                    <Typography color='gray'>1 in Stock</Typography>
                </Stack>
                <Divider color='black' />
                <Stack direction='row' alignItems={'center'} justifyContent={'space-between'} sx={{ width: '100%' }}>
                    <TextField
                        InputProps={{
                            readOnly: true,
                        }}
                        label='Current Price' defaultValue={collection&&collection.price?(collection.price + "FUJI"):"Not For Sale"} sx={{

                            "& .MuiOutlinedInput-root": {
                                "& > fieldset": { borderColor: theme.palette.primary.main },
                            },
                            "& .MuiOutlinedInput-root:hover": {
                                "& > fieldset": { borderColor: theme.palette.primary.main },
                            },
                            width: '10rem',
                            display: 'block',
                            margin: 'auto'
                        }} />
                    {/* <Typography color='gray'>{collection.time}</Typography> */}
                </Stack>
            </Stack>
        </Grid>
    )
}