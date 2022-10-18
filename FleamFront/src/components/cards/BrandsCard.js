import { Grid, Stack, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { fNumber } from '../../utils/formatNumber';
import { cyanPreset } from '../../utils/getColorPresets';
import RouterLink from "./../RouterLink";


BrandsCard.propTypes = {
    name: PropTypes.string, // [{id, label},{id,label}]
    verified: PropTypes.bool, // "red", "#f9af2e"
    created: PropTypes.string,  // 'typograph's variant'
    floorPrice: PropTypes.number,
    totalPrice: PropTypes.number,
    percent: PropTypes.number,
    images: PropTypes.array,
}

const CardStyle = styled(`div`)(({ theme }) => ({
    boxShadow: 'rgba(16, 30, 115, 0.06) 0px 12px 26px',
    background: theme.palette.background.default,
    border: '1px solid rgb(239,239,239)',
    borderImage: 'initial',
    borderRadius: '10px',
    '&:hover': { boxShadow: 'rgba(16, 30, 115, 0.26) 0px 12px 26px' },
    width: '100%', 
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
}))
export default function BrandsCard({
    name, verified, created, floorPrice, totalPrice, percent, path, images
}) {
    return (
        <CardStyle >
            <Stack display='flex' justifyContent={'space-between'} gap={1}>
                <RouterLink to={path}>
                    <Stack direction='row' gap={1} justifyContent={'space-between'} alignItems={'center'}>
                        
                        <img src={images[0]} style={{background:"black"}} alt="" width={95} height={100} />
                        {/* <Stack  gap={1}>
                            <Typography variant="h6" style={{ wordWrap: "anywhere" }}>{name}</Typography>
                        </Stack> */}
                        <Icon icon="bxs:check-shield" color={cyanPreset.dark}  width = {30}/>
                    </Stack>
                </RouterLink>
            </Stack>
        </CardStyle >
    )
}