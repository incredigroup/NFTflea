import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Drawer, MenuItem, Typography } from "@mui/material";
import React from "react";
import RouterLink from "../../components/RouterLink";
import { MenuRoutes } from "../../_mock/MenuItems";

MobileDrawer.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func
}

const AccordionStyle = styled((props) => (
    <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.divider}`,

    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

export default function MobileDrawer({ open, handleClose }) {
    return (
        <Drawer anchor="left" open={open} onClose={handleClose} >
            <Box padding={2} sx={{ width: '300px' }}>
                {MenuRoutes.map((menu, index) => (
                    <React.Fragment key={index}>

                        {menu.elements && menu.elements.length >= 1 &&
                            <Box sx={{ mb:1  }}>
                                <AccordionStyle>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography>{menu.title}</Typography>

                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {menu.elements.map((sub, subIndex) => (
                                            <MenuItem key={`sub-${subIndex}`}>
                                                <RouterLink to={sub.path} >{sub.title}</RouterLink>
                                            </MenuItem>
                                        ))}
                                    </AccordionDetails>
                                </AccordionStyle>

                            </Box>}
                        {(!menu.elements || menu.elements.length === 0) &&
                            <>

                                <MenuItem sx={{ paddingTop: 1 }}>
                                    <RouterLink to={menu.path}>{menu.title}</RouterLink>
                                </MenuItem>
                                <Divider sx={{ magin: 0, height: '1px' }} />
                            </>
                        }

                    </React.Fragment>
                ))}
            </Box>
        </Drawer>
    )
}