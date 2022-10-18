import { Icon } from "@iconify/react";
import { Box, Stack, Typography } from "@mui/material";
import { useState, useContext } from "react";
import Image from "./Image";
import { AccountContext } from "./../contexts/AccountContext";

export default function UploadAvatarLead() {
    const {changePhotoForLeadAction} = useContext(AccountContext);
    const [image, setImage] = useState('');
    const imageChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            setImage(event.target.files[0]);
            changePhotoForLeadAction(event.target.files[0])
        }
    }
    return (
        <Stack justifyContent={'start'} alignItems="start" paddingTop={2} >
            <Box sx={{ position: 'relative', display: 'flex', mb: 2, gap:2 }} >
                <input hidden id="image" type="file" accept="image/*" onChange={imageChange} />
                <Typography component="label" htmlFor="image"
                    sx={{
                        width: '10rem',
                        height: '10rem',
                        cursor: 'pointer',
                        display: 'flex',
                        border:'1px solid gray',
                        borderRadius:'10px',
                        justifyContent:'center',
                        alignItems:'center',
                    }}>
                    <Icon icon={'fe:picture-square'} width={60} sx={{color: 'gray' }} />
                </Typography>
                {image &&
                    <Image
                        sx={{
                            width: '10rem',
                            height: '10rem',
                            borderRadius: '0.5rem',
                            outlineWidth: 1,
                            outlineColor: 'gray',
                            outlineOffset: 4,
                            outlineStyle: 'dashed',
                        }}

                        src={typeof avatar === 'string' ? `` : URL.createObjectURL(image)}
                    />
                }

            </Box>

         
        </Stack>
    )
}