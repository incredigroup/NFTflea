import { Avatar, Box, Button, Container, FormControlLabel, Grid, Stack, Switch, TextField, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import {useState, useEffect, useContext} from 'react';

import Page from "../../components/Page";
import { CardStyle, GradientStyle } from "../Home";
import UploadNFTs from "../../components/UploadNFT";
import { SelectStyle } from "../../components/StyledComponents";
import { MarketplaceContext } from "./../../contexts/MarketplaceContext";
import { useWeb3React } from "@web3-react/core";
import { useNavigate } from "react-router";
import CustomDatalist from '../../components/CustomDatalist';
// import ReactSlider from "react-slider"

const categories = ["Art", "Music", "Game assets", "Houses", "Property", "Wine", "Jewelry", "Clothes", "Collectibles Art", "Property", "Domain Names",
                "Photography", "Sports", "Memberships", "Other"]
const licenses = ["Non-transferable personal use license", "Transferable personal use license",
                  "Derivative works license", "Sole license", "Limited commercial use license",
                  "Exclusive license", "Transfer of all rights"]
export default function CreateNFT() {

    const { account, library  } = useWeb3React();    
    const navigate = useNavigate();

    const { createNFTAction } = useContext(MarketplaceContext);
    const [name, setName] = useState();
    const [externalLink, setExternalLink] = useState();
    const [description, setDescription] = useState();
    const [collection, setCollection] = useState();
    const [properties, setProperties] = useState();
    const [levels, setLevels] = useState();
    const [stats, setStats] = useState();
    const [category, setCategory] = useState();
    const [license, setLicense] = useState();
    const [unlockContent, setUnlockContent] = useState();
    const [sensitiveContent, setSensitiveContent] = useState();
    const [supply, setSupply] = useState();
    const [chain, setChain] = useState();
    const [freeze, setFreeze] = useState();
    const [royalty, setRoyalty] = useState(0);

    const handleChangeName = (event) => {
        setName(event.target.value);
    }
    const handleChangeExternalLink = (event) => {
        setExternalLink(event.target.value);
    }
    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    }
    const handleChangeCollection = (value) => {
        setCollection(value);
    }
    // const handleChangeProperties = (event) => {
    //     setProperties(event.target.value);
    // }
    // const handleChangeLevels = (event) => {
    //     setLevels(event.target.value);
    // }
    // const handleChangeStats = (event) => {
    //     setStats(event.target.value);
    // }
    const handleChangeCategory = (value) => {
        setCategory(value);
    }
    const handleChangeLicenses = (event) => {
        setLicense(event.target.value);
    }
    const handleChangeUnlockContent = (event) => {
        setUnlockContent(event.target.value);
    }
    const handleChangeSensitiveContent = (event) => {
        setSensitiveContent(event.target.value);
    }

    const handleChangeRoyalty = (e) => {
        setRoyalty(e.target.value)
    }

    const handleCreateNFT = async() => {
        if(!account) return;
        const data = {
            wallet: account,
            name: name?name:"",
            externalLink: externalLink?externalLink:"",
            description: description?description:"",
            collection: collection?collection:"",
            properties: properties?properties:"",
            levels: levels?levels:"",
            stats: stats?stats:"",
            category: category?category:"",
            license: license?license:"",
            unlockContent: unlockContent?unlockContent:"",
            sensitiveContent: sensitiveContent?sensitiveContent:"",
            supply: supply?supply:"",
            royalty: royalty?royalty * 0.25 :"",
            chain: chain?chain:"",
            freeze: freeze?freeze:"",
        }
        await createNFTAction(data, library);
        navigate(`/account/profile/me`,{replace:true});        
    }

    useEffect(() => {
        if(!account) navigate("/", { replace: true });
    }, [account]);

    return (
        <Page title="Create NFT">
            <GradientStyle sx={{ paddingTop: 15, paddingBottom: 4, display: 'flex', gap: 8, flexDirection: 'column' }} >
                <Container>
                    <CardStyle sx={{ padding: { xs: 2, sm: 4, md: 10, lg: 12 }, flexDirection: 'column' }} >
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
                                        <TextField label="" placeholder="John Doe" onChange={handleChangeName}/>

                                        <Typography variant="h6">Link</Typography>
                                        <TextField label="" placeholder="https://www.info.com/" onChange={handleChangeExternalLink}/>
                                        <Typography variant="subject" color="gray">Fleamint Will Include A Link To This URL On This Item's Detail Page, So That Users Can Click To Learn More About It. You Are Welcome To Link To Your Own Webpage With More Details.</Typography>

                                        <Typography variant="h6">Description</Typography>
                                        <TextField label="" placeholder="Something About Your NFT" multiline rows={4} onChange={handleChangeDescription}/>
                                        <Typography variant="subject" color="gray">The Description Will Be Included On The Item's Detail Page Underneath Its Image. Markdown Syntax Is Supported.</Typography>

                                        <Typography variant="h6">Collection</Typography>
                                       
                                        <CustomDatalist list="collections" onChange={handleChangeCollection} placeholder='Select Collection'>
                                            <option value="FleaMint">FleaMint</option>
                                            <option value="Test">Test</option>                                            
                                            <option value="No Collection">No Collection</option>                                            
                                        </CustomDatalist>
                                        
                                        <Typography variant="subject" color="gray" sx={{ display: 'flex', alignItems: 'center' }}>This Is The Collection Where Your Item Will Appear<Icon icon="tabler:info-square" width={20} /></Typography>
                                        {/* {/* <Typography variant="h6">Properties</Typography>
                                        <Stack direction="row" sx={{ position: 'relative' }}>
                                            <TextField label="" placeholder="" sx={{ width: '100%' }} onChange={handleChangeProperties}/>
                                            <Box sx={{ position: 'absolute', right: 10, top:12 }}>
                                                <Icon width={30} icon='bi:plus-square' />
                                            </Box>
                                        </Stack>
                                        <Typography variant="subject" color="gray" sx={{ display: 'flex', alignItems: 'center' }}>Textual traits that show up as rectangles</Typography>

                                        <Typography variant="h6">Levels</Typography>
                                        <Stack direction="row" sx={{ position: 'relative' }}>
                                            <TextField label="" placeholder="" sx={{ width: '100%' }} onChange={handleChangeLevels}/>
                                            <Box sx={{ position: 'absolute', right: 10, top:12 }}>
                                                <Icon width={30} icon='bi:plus-square' />
                                            </Box>
                                        </Stack>
                                        <Typography variant="subject" color="gray" sx={{ display: 'flex', alignItems: 'center' }}>Numerical traits that show as a progress bar</Typography> */}

                                        {/* <Typography variant="h6">Stats</Typography>
                                        <Stack direction="row" sx={{ position: 'relative' }}>
                                            <TextField label="" placeholder="" sx={{ width: '100%' }} onChange={handleChangeStats}/>
                                            <Box sx={{ position: 'absolute', right: 10, top:12 }}>
                                                <Icon width={30} icon='bi:plus-square' />
                                            </Box>
                                        </Stack>
                                        <Typography variant="subject" color="gray" sx={{ display: 'flex', alignItems: 'center' }}>Numerical traits that just show as numbers</Typography> */} 

                                        <Typography variant="h6">Category</Typography>
                                        <CustomDatalist list="collections" onChange={handleChangeCategory} placeholder="Select Category">
                                            {categories.map((category, index) => {
                                                if (category != 'Houses') 
                                                    return <option value={category} key={index}>{category}</option>
                                            })}
                                        </CustomDatalist>
                                        <Typography variant="subject" color="gray" sx={{ display: 'flex', alignItems: 'center' }}>Add Category of your NFTs</Typography>

                                        <Typography variant="h6">NFT licenses</Typography>
                                        <SelectStyle onChange={handleChangeLicenses}>
                                            <option>Select license</option>
                                            {licenses.map((license, index) => (
                                                <option key={index}>{license}</option>
                                            ))}
                                        </SelectStyle>
                                        <Typography variant="subject" color="gray" sx={{ display: 'flex', alignItems: 'center' }}>Add License of your NFTs</Typography>
                                        {/* Royalty input */}
                                        <Typography variant="h6">Royalty (0-10%)</Typography>
                                        {/* <TextField label="" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', shrink: true }} max={10} min={0} placeholder="Enter the royalty"/> */}

                                        {/* <ReactSlider
                                            step={0.25}
                                            min={0}
                                            max={10}
                                            className="w-full h-3 pr-2 my-4 bg-gray-200 rounded-md cursor-grab"
                                            thumbClassName="absolute w-5 h-5 cursor-grab bg-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 -top-2px"
                                            value={royalty}
                                            onChange={handleChangeRoyalty}
                                        /> */}
                                        <input type="range" min="0" max="40" value={royalty} onInput={handleChangeRoyalty} />
                                        <p>Royalty: {royalty * 0.25} %</p>

                                        {/* <Typography variant="h6">Unlockable Content</Typography>
                                        <Stack direction="row" sx={{ position: 'relative' }}>
                                            <TextField label="" placeholder="" sx={{ width: '100%' }} onChange={handleChangeUnlockContent} />
                                            <Box sx={{ position: 'absolute', right: 10, top:12 }}>
                                                <Icon width={30} icon='bi:plus-square' />
                                            </Box>
                                        </Stack>
                                        <Typography variant="subject" color="gray" sx={{ display: 'flex', alignItems: 'center' }}>Include unlockable content that can only be revealed by the owner of the item.</Typography> */}

                                        <FormControlLabel control={<Switch  />} label="Explicit & Sensitive Content" labelPlacement="start" sx = {{display:'flex',marginLeft:0, '& .MuiFormControlLabel-label':{fontWeight:600,fontSize:'1.125rem'},justifyContent:'space-between'}} />
                                        <TextField multiline rows = {4} onChange={handleChangeSensitiveContent}/>
                                        <Typography variant="subject" color="gray" sx={{ display: 'flex', alignItems: 'center' }}>Set this item as explicit and sensitive content <Icon icon="tabler:info-square" width={20} /></Typography>

                                        {/* <Typography variant="h6">Supply</Typography>
                                        <Stack direction="row" sx={{ position: 'relative' }}>
                                            <TextField label="" placeholder="" sx={{ width: '100%' }} onChange={handleChangeSupply}/>
                                            <Box sx={{ position: 'absolute', right: 4, top:10 }}>
                                                <Switch />
                                            </Box>
                                        </Stack> */}
                                        {/* <Typography variant="subject" color="gray" sx={{ display: 'flex', alignItems: 'center' }}>The number of items that can be minted. No gas cost to you! <Icon icon="tabler:info-square" width={20} /></Typography>

                                        <Typography variant="h6">Blockchain</Typography>
                                        <SelectStyle onChange={handleChangeChain}>
                                            <option>Select Blockchian</option>
                                            <option>Avalanche</option>
                                            <option>Polygon</option>
                                            <option>BSC</option>
                                            <option>Solana</option>
                                        </SelectStyle> */}
                                        <Typography variant="subject" color="gray" sx={{ display: 'flex', alignItems: 'center' }}>This is the collection where your item will appear <Icon icon="tabler:info-square" width={20} /></Typography>

                                        <Typography variant="h6">Freeze Metadata</Typography>
                                        {/* <SelectStyle onChange={handleChangeFreeze}>
                                            <option>Select Metadata</option>
                                            <option>IPFS</option>
                                        </SelectStyle> */}
                                        <Typography variant="subject" color="gray" sx={{ display: 'flex', alignItems: 'center', mb:4 }}>Freezing your metadata will allow you to permanently lock and store all of this item's content in decentralized file storage.</Typography>

                                        <Button variant="contained" size="large" onClick={handleCreateNFT}>Create NFT</Button>
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
