import PropTypes from 'prop-types';
import { styled, TextField } from "@mui/material";
import { createRef, useEffect, useState } from 'react'

// const CustomButtonStyle = styled('button')(({ theme, size,}) => ({
//     border: `1px solid ${theme.palette.primary.main}`,
//     backgroundColor: 'transparent',
//     borderRadius: 8,
//     padding:12,
//     width:(size),
//     fontWeight:560,
//     fontSize:'1rem',
//     color: theme.palette.primary.main,
//     cursor: 'pointer',
//     "&:hover": {
//         color: 'white',
//         backgroundColor: theme.palette.primary.main,
//     },
//     transition: 'all 0.4s ease-in-out',
    
// }));
const StyledDatalist = styled('datalist')(({theme, size}) => ({
    position: 'absolute',
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '2px',
    boxShadow: '1px 1px 4px #eeeeee',
    width: '100%',
    padding: '5px',
    maxHeight: '10em',
    overflowY: 'auto',
    '& option': {
        backgroundColor: 'white',
        padding: '4px',
        color: 'black',
        marginBottom: '1px',
        cursor: 'pointer'
    },
    '& option:hover': {
        backgroundColor: '#cccccc'
    }
}))

CustomDatalist.propTypes = {
    children:PropTypes.node,
    list: PropTypes.string,
    placeholder: PropTypes.string
}
function CustomDatalist({onChange, children, list, placeholder}) {
    const datalistRef = createRef()
    const [input, setInput] = useState('')

    const handleInput = (event) => {
        var text = event.target.value.toUpperCase();
        for (let option of datalistRef.current.children) {
            if(option.value.toUpperCase().indexOf(text) > -1){
                option.style.display = "block";
            } else {
                option.style.display = "none";
            }
        }
    }

    useEffect(() => {
        if(datalistRef) {
            for (let option of datalistRef.current.children) {
                option.onmousedown = function () {
                    setInput(option.value)
                    datalistRef.current.style.display = 'none'
                }
            }
        }
    }, [datalistRef])

    useEffect(() => {
        onChange(input)
    }, [input])

    return(
        <div style={{position: 'relative'}}>
            <TextField placeholder={placeholder} value={input} onChange={(e)=>{setInput(e.target.value)}} onBlur={(e)=>{datalistRef.current.style.display = ''}} fullWidth onFocus={()=>{datalistRef.current.style.display = 'block'}} autoComplete='off' onInput={handleInput}/>
            <StyledDatalist id={list} ref={datalistRef}>
                {children}
            </StyledDatalist>
        </div>
    )
}

export default CustomDatalist