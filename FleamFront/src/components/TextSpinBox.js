import { Icon } from "@iconify/react";
import { IconButton,Typography } from "@mui/material";
import { Box, styled } from "@mui/material/styles";
import PropTypes from 'prop-types';
import { useState } from "react";



TextSpinBox.propTypes = {
    values:PropTypes.array, // [{id, label},{id,label}]
    color:PropTypes.string, // "red", "#f9af2e"
    variant:PropTypes.string,  // 'typograph's variant'
}
const RootStyle = styled('div')(({theme,height, color})=>({
    display:'flex',
    height:(height!==''?height:30),
    overflow:'hidden',
    color,
    alignItems:'center',
    cursor:'pointer',
    
}));

export default function TextSpinBox({values,color, variant}){
    const [index, setIndex] = useState(0);
    const handleNext = ()=>{
        setIndex((index+1)>=values.length ? 0: (index+1));
    }
    return(
        <RootStyle height = {variant==='h3'?'3rem':'2.25rem'} color ={color} onClick = {handleNext}>
            <Typography variant = {variant}>
                {values[index].label}
            </Typography>
            <Icon icon = "akar-icons:chevron-down" width = {variant==='h3'?30:20}/>
            
        </RootStyle>
    )
}