import PropTypes from 'prop-types';
import { styled } from "@mui/material";
import { useNavigate } from "react-router";

const CustomButtonStyle = styled('button')(({ theme, size,}) => ({
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding:12,
    width:(size),
    fontWeight:560,
    fontSize:'1rem',
    color: theme.palette.primary.main,
    cursor: 'pointer',
    "&:hover": {
        color: 'white',
        backgroundColor: theme.palette.primary.main,
    },
    transition: 'all 0.4s ease-in-out',
    
}));

CustomButton.propTypes = {
    children:PropTypes.node,
    sx:PropTypes.any,
    size:PropTypes.string
}
export default function CustomButton({sx, size, children}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/market-place/categories", { replace: true });            
    }
    return(
        // <CustomButtonStyle onClick={handleClick} {...sx} size = {size}>{children}</CustomButtonStyle>
        <CustomButtonStyle {...sx} size = {size}>{children}</CustomButtonStyle>
    )
}