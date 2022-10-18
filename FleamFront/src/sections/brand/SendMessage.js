import { Icon } from "@iconify/react";
import { Container, Grid, Stack, TextField, Typography, useTheme } from "@mui/material";
import CustomButton from "../../components/CustomButton";
import { CardStyle } from "../../pages/Home";


export default function SendMessage() {
    const theme = useTheme();
    return (
        <Container>
            <Grid container sx={{ padding: 2 }}>
                <Grid item xs={12} sm={6} sx = {{paddingRight:4}}>
                    <Stack gap={4}>
                        <Typography variant="h3">ABOUT US</Typography>
                        <Typography color='gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Typography>
                        <Stack gap={2} sx={{ color: 'gray' }}>
                            <Stack direction='row' gap={1} alignItems="center">
                                <Icon icon='akar-icons:location' color={theme.palette.primary.main} />
                                <Typography> 49 Grand Street, LA, USA</Typography>
                            </Stack>
                            <Stack direction='row' gap={1} alignItems="center">
                                <Icon icon='charm:phone-call' color={theme.palette.primary.main} />
                                <Typography> (222) 111 222 4444</Typography>
                            </Stack>
                            <Stack direction='row' gap={1} alignItems="center">
                                <Icon icon='ci:mail-open' color={theme.palette.primary.main} />
                                <Typography> info@gmail.com</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CardStyle sx={{ flexDirection: 'column', padding: { xs: 4, sm: 6 }, gap:4, textAlign:'center' }}>
                        <Typography variant = "h4">Send Us A Message</Typography>
                        <form >
                            <Stack direction="column" gap={2}>
                                <TextField required label="Name" />
                                <TextField required label="Email" />
                                <TextField required label="Name" />
                                <TextField required label="Subject" />
                                <TextField multiline label="Message" rows={6} maxRows={6} />
                                <CustomButton>Submit</CustomButton>
                            </Stack>
                        </form>
                    </CardStyle>
                </Grid>
            </Grid>
        </Container>
    )
}
