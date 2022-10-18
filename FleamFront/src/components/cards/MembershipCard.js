import { Icon } from '@iconify/react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import RouterLink from './../../components/RouterLink';

const CONTENT_COLORS = ["white", "white", "black", "white"];
const BUTTON_COLOR = ['white','white','black','white'];
const TITLE_COLORS = ["#E4CD85", "#5B2F02", "#394047", "white"];
const BACKGROUNDS = [
    "/assets/images/member-ship-bg-1.png",
    "/assets/images/member-ship-bg-2.png",
    "/assets/images/member-ship-bg-3.png",
    "/assets/images/member-ship-bg-4.png"
]
const MembershipCardStyle = styled('div')(({ theme, index }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 510,
    maxWidth: 300,
    minWidth: 282,
    padding: 12,
    margin: '10px auto',
    background: `url(${BACKGROUNDS[index]})`,
    backgroundSize: `100% 100%`,
}));

MembershipCard.propTypes = {
    data: PropTypes.object,
    index: PropTypes.number,
}
export default function MembershipCard({ data, index }) {

    return (
        <MembershipCardStyle index={index}>
            <Stack sx={{ borderBottom: `1px  dashed ${data.dashColor}`, padding: 2 }} gap={2}>
                <Typography variant="h3" color={TITLE_COLORS[index]}>{data.name}</Typography>
                <Typography variant="h5" color={TITLE_COLORS[index]}>{data.description}</Typography>

            </Stack>
            <Stack gap="2" alignItems={'start'} justifyContent={'start'} sx={{ padding: 2 }}>
                {data.benifies.map((element, bIndex) => (
                    <Stack direction="row" sx={{ width: '100%', paddingY: 1 }} justifyContent={'space-between'} alignItems="center" key={bIndex} gap={1}>
                        <Typography component="p" variant="caption" color = {CONTENT_COLORS[index]}>
                            {element.title}<font color={data.dashColor}>{element.subTitle}</font>
                        </Typography>
                        {element.icon.indexOf("%")<0?<Icon icon={element.icon} width={10} color =  {CONTENT_COLORS[index]} />
                            :<Typography component="p" variant="caption" color = {CONTENT_COLORS[index]}>
                                <font color={data.dashColor}>{element.icon}</font>
                            </Typography>
                        }
                    </Stack>

                ))}
                <Typography component="p" variant="caption" sx={{color:"white"}}>
                        *Subject to Avaliability
                </Typography>
                
            </Stack>
            {/* <Stack sx = {{padding:2}}> 
                <RouterLink to='/market-place/product-detail' color='gray'>
                    <Button variant="outlined"sx ={{color:BUTTON_COLOR[index], borderColor:BUTTON_COLOR[index]}}>
                        Buy
                    </Button>
                </RouterLink>
            </Stack> */}

        </MembershipCardStyle>
    )
}