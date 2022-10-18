import { Menu, MenuItem, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import Iconify from "./Iconify";
import RouterLink from "./RouterLink";
import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import siteConfig from './../config';

const MenuAction = styled('div')(({ theme }) => ({
    color:(theme.palette.mode==='dark'?'white':'black'),
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    "&:hover": { borderBottom: `1px solid ${theme.palette.primary.main}`, marginBottom: '-1px' }
}))

DropdownMenu.propTypes = {
    menu: PropTypes.object,
}
export default function DropdownMenu({ menu }) {
    const [myProfileInfo, setMyProfileInfo] = useState({})
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const { account } = useWeb3React();

    const getMyProfile = async () => {
        const data = { wallet: account, token: localStorage.getItem('token') }
        const result = await axios.post(`${siteConfig.apiUrl}/api/users/get-profile`, data);
        setMyProfileInfo(result)
    }
    
    useEffect(() => {
        if(account){
            getMyProfile()
        }
    }, [account]);

    return (
        <Stack gap={2}>
            <MenuAction onClick={handleClick} >
                {!menu.elements &&
                    <RouterLink to={menu.path}>{menu.title}</RouterLink>
                }
                {menu.elements &&
                    <div >{menu.title}<Iconify icon={"bx:chevron-down"} /></div>
                }
            </MenuAction>
            {menu.elements &&
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {menu.elements.map((item, index) => {
                        if (!account && (item.notLoginVisible !== undefined))
                            return;
                        if (account && myProfileInfo?.brandPartnerStatus != 'accepted' && item.notLoginVisible === 'brandPartner')
                            return;
                        
                        return <MenuItem key = {index} onClick = {handleClose}>
                            {item.outLink ? <a href={item.path} style={{color: 'black', textDecoration:'none'}} target="_blank" color='gray'>{item.title}</a> 
                            : <RouterLink to = {item.path} >{item.title}</RouterLink>}
                        </MenuItem>
                    })}

                </Menu>
            }
        </Stack>
    )
}
