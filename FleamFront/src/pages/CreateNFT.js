import { Avatar, Box, Button, Container, FormControlLabel, Grid, Stack, Switch, TextField, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

import Page from "../components/Page";
import { CardStyle, GradientStyle } from "./Home";
import UploadNFTs from "../components/UploadNFT";
import { SelectStyle } from "../components/StyledComponents";

export default function CreateNFT() {
    return (
        <Page title="Create NFT">
            <GradientStyle sx={{ paddingTop: 15, paddingBottom: 4, display: 'flex', gap: 8, flexDirection: 'column' }} >
                <Container>
                    <CardStyle sx={{ padding: { xs: 2, sm: 4, md: 10, lg: 12 }, background: '#ffffff5a', flexDirection: 'column' }} >
                        <Stack gap={2} sx={{ mb: 4, textAlign: 'center' }} >
                            <Typography variant="h3" sx={{ mb: 2 }}>Create New Item</Typography>
                            <Typography variant="h4">Image, Video, Audio, or 3D Model</Typography>
                            <Typography color='gray'>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB.</Typography>
                        </Stack>
                        <Stack >
                            <Grid container>
                                <Grid item xs={12} sx={{ paddingX: { lg: 6, md: 4, sm: 3, xs: 1 }, }} >
                                    <Stack sx={{ mb: 4 }}>
                                        <UploadNFTs />
                                    </Stack>
                                    <Stack gap={1} >
                                        <Typography variant="h6">Name</Typography>
                                        <TextField label="" placeholder="John Doe" />

                                        <Typography variant="h6">External Link</Typography>
                                        <TextField label="" placeholder="https://www.info.com/" />
                                        <Typography variant="subject" color="gray">OpenSea Will Include A Link To This URL On This Item's Detail Page, So That Users Can Click To Learn More About It. You Are Welcome To Link To Your Own Webpage With More Details.</Typography>

                                        <Typography variant="h6">Description</Typography>
                                        <TextField label="" placeholder="Something About Your NFT" multiline rows={4} maxRows={4} />
                                        <Typography variant="subject" color="gray">The Description Will Be Included On The Item's Detail Page Underneath Its Image. Markdown Syntax Is Supported.</Typography>

                                        <Typography variant="h6">Collection</Typography>
                                        <SelectStyle>
                                            <option>Select Collection</option>
                                        </SelectStyle>
                                        <Typography variant="subject" color="gray" sx={{ display: 'flex', alignItems: 'center' }}>This Is The Collection Where Your Item Will Appear<Icon icon="tabler:info-square" width={20} /></Typography>

                                        <Typography variant="h6">Properties</Typography>
                                        <Stack direction="row" sx={{ position: 'relative' }}>
                                            <TextField label="" placeholder="" sx={{ width: '100%' }} />
                                            <Box sx={{ position: 'absolute', right: 10, top:12 }}>
                                                <Icon width={30} icon='bi:plus-square' />
                                            </Box>
                                        </Stack>
                                        <Typography variant="subject" color="gray" sx={{ display: 'flex', alignItems: 'center' }}>Textual traits that show up as rectangles</Typography>

                                        <Typography variant="h6">Levels</Typography>
                                        <Stack direction="row" sx={{ position: 'relative' }}>
                                            <TextField label="" placeholder="" sx={{ width: '100%' }} />
                                            <Box sx={{ position: 'absolute', right: 10, top:12 }}>
                                                <Icon width={30} icon='bi:plus-square' />
                                            </Box>
                                        </Stack>
                                        <Typography variant="subject" color="gray" sx={{ display: 'flex', alignItems: 'center' }}>Numerical traits that show as a progress bar</Typography>

                                        <Typography variant="h6">Stats</Typography>
                                        <Stack direction="row" sx={{ position: 'relative' }}>
                                            <TextField label="" placeholder="" sx={{ width: '100%' }} />
                                            <Box sx={{ position: 'absolute', right: 10, top:12 }}>
                                                <Icon width={30} icon='bi:plus-square' />
                                            </Box>
                                        </Stack>
                                        <Typography variant="subject" color="gray" sx={{ display: 'flex', alignItems: 'center' }}>Numerical traits that just show as numbers</Typography>

                                        <Typography variant="h6">Category</Typography>
                                        <SelectStyle>
                                            <option>Select Category</option>
                                        </SelectStyle>
                                        <Typography variant="subject" color="gray" sx={{ display: 'flex', alignItems: 'center' }}>Add Category of your NFTs</Typography>

                                        <Typography variant="h6">Unlockable Content</Typography>
                                        <Stack direction="row" sx={{ position: 'relative' }}>
                                            <TextField label="" placeholder="" sx={{ width: '100%' }} />
                                            <Box sx={{ position: 'absolute', right: 10, top:12 }}>
                                                <Icon width={30} icon='bi:plus-square' />
                                            </Box>
                                        </Stack>
                                        <Typography variant="subject" color="gray" sx={{ display: 'flex', alignItems: 'center' }}>Include unlockable content that can only be revealed by the owner of the item.</Typography>

                                        <FormControlLabel control={<Switch  />} label="Explicit & Sensitive Content" labelPlacement="start" sx = {{display:'flex',marginLeft:0, '& .MuiFormControlLabel-label':{fontWeight:600,fontSize:'1.125rem'},justifyContent:'space-between'}} />
                                        <TextField multiline maxRows = {4} rows = {4} />
                                        <Typography variant="subject" color="gray" sx={{ display: 'flex', alignItems: 'center' }}>Set this item as explicit and sensitive content <Icon icon="tabler:info-square" width={20} /></Typography>

                                        <Typography variant="h6">Supply</Typography>
                                        <Stack direction="row" sx={{ position: 'relative' }}>
                                            <TextField label="" placeholder="" sx={{ width: '100%' }} />
                                            <Box sx={{ position: 'absolute', right: 4, top:10 }}>
                                                <Switch />
                                            </Box>
                                        </Stack>
                                        <Typography variant="subject" color="gray" sx={{ display: 'flex', alignItems: 'center' }}>The number of items that can be minted. No gas cost to you! <Icon icon="tabler:info-square" width={20} /></Typography>

                                        <Typography variant="h6">Blockchain</Typography>
                                        <SelectStyle>
                                            <option>Select Blockchian</option>
                                        </SelectStyle>
                                        <Typography variant="subject" color="gray" sx={{ display: 'flex', alignItems: 'center' }}>This is the collection where your item will appear <Icon icon="tabler:info-square" width={20} /></Typography>

                                        <Typography variant="h6">Freeze Metadata</Typography>
                                        <SelectStyle>
                                            <option>Select Metadata</option>
                                        </SelectStyle>
                                        <Typography variant="subject" color="gray" sx={{ display: 'flex', alignItems: 'center', mb:4 }}>Freezing your metadata will allow you to permanently lock and store all of this item's content in decentralized file storage.</Typography>

                                        <Button variant="contained" size="large">Create NFT</Button>
                                    </Stack>

                                </Grid>
                            </Grid>

                        </Stack>
                    </CardStyle>
                </Container>
            </GradientStyle>
        </Page>
    )
}