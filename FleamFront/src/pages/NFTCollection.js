import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import CollectionCover from "../sections/NFT/collections/CollectionCover";
import Page from "../components/Page";
import StayInLoop from "../sections/StayInLoop";
import CollectionNFTs from "../sections/NFT/collections/CollectionNFT";
import { RootStyle } from "../components/StyledComponents";

export default function NFTCollection() {
    const theme = useTheme();

    return (
        <Page title="">
            <Box marginBottom={6} sx={{ display: 'flex', gap: { xs: 10, sm: 12, md: 14 }, flexDirection: 'column' }} >
                <CollectionCover />
                <CollectionNFTs />
            </Box>
            {/* <RootStyle sx={{ padding: { md: 4, sm: 3, xs: 2, }, gap:4 }}>
                <Typography variant='h3'>
                    Disclaimer
                </Typography>
                <Typography sx ={{paddingX:{md:10, lg:16}}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Typography>
                <Stack direction='row' gap={2} justifyContent={'center'} alignItems="center">
                    <Button variant="outlined" size='large' sx={{ color: theme.palette.primary.dark, paddingX: 10, paddingY: 2, background: 'white', borderColor: 'white', '&:hover': { background: 'transparent', borderColor: 'white', color: 'white' } }}><Typography variant="h6">Decline</Typography></Button>
                    <Button variant="outlined" size='large' sx={{ color: theme.palette.primary.dark, paddingX: 10, paddingY: 2, background: 'white', borderColor: 'white', '&:hover': { background: 'transparent', borderColor: 'white', color: 'white' } }}><Typography variant="h6">Accept</Typography></Button>
                </Stack>

            </RootStyle> */}
            {/* Stay in loop start */}
            <StayInLoop />
        </Page>
    )
}
