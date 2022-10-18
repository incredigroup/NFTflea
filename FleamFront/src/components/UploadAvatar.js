import { Icon } from "@iconify/react";
import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { AccountContext } from "./../contexts/AccountContext";
import siteConfig from './../config';
import Image from "./Image";

export default function UploadAvatar(props) {
    
    const {changePhotoUserAction} = useContext(AccountContext);
    const [avatar, setAvatar] = useState('/assets/images/card1.png');

    const imageChange=(event)=>{
        if (event.target.files && event.target.files.length > 0) {
            setAvatar("");
            setAvatar(event.target.files[0]);
            changePhotoUserAction(event.target.files[0])
        }
    }
    useEffect(() => {
        if(props.photo){
            setAvatar(`${siteConfig.apiUrl}/${props.photo}`);
        }
    }, [props.photo]);

    return (
        <Stack justifyContent={'start'} alignItems="start" paddingTop={{xs:2,sm:4,md:10}} paddingRight={2}>
            <Box sx={{ position: 'relative',display:'flex', mb:2}} >
                {avatar &&
                    <Image
                        sx={{
                            width: '8rem',
                            height: '8rem',
                            borderRadius: '50%',
                            outlineWidth: 1,
                            outlineColor: 'gray',
                            outlineOffset: 4,
                            outlineStyle: 'dashed',
                        }}

                        src={typeof avatar === 'string' ? avatar : URL.createObjectURL(avatar)}
                    />
                }
                <input hidden id="avatar" type="file" accept="image/*" onChange={imageChange} />
                <Typography component="label" htmlFor="avatar"
                    sx={{
                        width: '36px',
                        height: '36px',
                        cursor: 'pointer',
                        display: 'flex',
                        position: 'absolute',
                        paddingTop:4,
                        bottom: 2,
                        left:'3.5rem'
                    }}>
                    <Icon icon={'fa:pencil'} width={20} sx={{margin:'auto', color:'gray'}}/>
                </Typography>
            </Box>

            <Typography color={'gray'} variant = 'subject'>
                Allowed *.jpeg, *.jpg, *.png, *.gif <br />
                max size of 3.1 MB
            </Typography>
        </Stack>
    )
}