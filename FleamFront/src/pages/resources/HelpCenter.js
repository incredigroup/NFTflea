import { Icon } from '@iconify/react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Divider, Grid, Stack, Typography, useTheme } from '@mui/material';
import SelectInput from '@mui/material/Select/SelectInput';
import { useEffect, useState } from 'react';
import { SelectStyle } from '../../components/StyledComponents';
import Image from '../../components/Image';

import Page from "../../components/Page";
import StayInLoop from "../../sections/StayInLoop";
import { CardStyle, GradientStyle } from '../Home';

const HELP_CATEGORIES = [
    // { name: 'Getting Start', icon: 'lucide:align-vertical-justify-start' },
    { name: 'Buying', icon: 'bi:credit-card-2-front' },
    { name: 'Selling', icon: 'la:sellsy' },
    { name: 'Creating', icon: 'akar-icons:folder-add' },
    { name: 'FAQ', icon: 'arcticons:note-it' },
    { name: 'User Friendly', icon: 'ph:users-three-bold' },
    { name: 'Partner', icon: 'carbon:partnership' },
    { name: 'Developer', icon: 'bx:code-block' },
];

const HEL_ACCORDION = [
    { pannel: 'pannel1', title: "What's WETH? How do I get it", content: ["In Fleamint auctions, wrapped Ethereum (WETH) is used for both buying and selling. With the help of WETH, users can place pre-authorized bids that can be completed at a later time without additional action from the bidder. You can easily exchange ETH and WETH on your Fleamint profile, and both have the same monetary worth."] },
    { pannel: 'pannel2', title: "Why is the wrong owner listed for my NFT?", content: ["The ownership may not be updated right away when you buy an NFT on Fleamint. Typically, Ethereum blockchain congestion is to blame for this delay. We advise waiting a short while and refreshing the item's Fleamint page. The owner of the item should show as your wallet address!"]},
    { pannel: 'pannel3', title: "What NFTs are in the “hidden” tab in my profile?", content: ["Do not worry if some of the NFTs are hidden in your profile.", "Here is the explanation for it.One of the fascinating features of many blockchains is the ability for anybody to transfer and receive tokens to and from wallet addresses. You don't even need to accept a transfer to receive an NFT from someone else, much like how anyone may send you an email.", "Receiving an NFT you didn't request does not necessarily mean your wallet has been taken. On occasion, genuine creators will mint NFTs and give them to users in an airdrop for a collection. Like when you receive spam emails, scammers will occasionally employ transfers to send you NFTs that induce you to read NFT listings that contain links to dubious third-party websites. Fleamint will move a transferred NFT to the Hidden tab if we believe it is questionable in order to protect our users. Neither the transfer nor the item will show up in your activity feed or Collected tab. On occasion, we'll send valid item transfers to the Hidden tab."]},
    { pannel: 'pannel4', title: "How can I connect my Twitter account to my profile?", content: ["You can connect your twitter account with Fleamint very easily."]},
    { pannel: 'pannel5', title: "Adding a link to your Twitter account ", content: ["Select Settings by navigating to your profile symbol in the top right corner.", "In social connections click connect.", "Authorize your Fleamint’s connection with your twitter account."]},
    { pannel: 'pannel6', title: "How can I cancel all my item listings and offers on Ethereum? ", content: ["All active Ethereum ads and deals on Fleamint may be cancelled using the bulk cancellation feature.", "Start by clicking on Your Profile, followed by More Active Listings.", "In the top right corner of your listings, click Cancel all offers and listings.", "You'll get a new window after doing this. To make a bulk cancellation, check the box and click Cancel all listings and offers.", "You'll receive a confirmation message after the cancellation has been handled."]},
    { pannel: 'pannel7', title: "What does a typed signature request look like? ", content: ["Depending on the contract you are entering into, a different sort of typed signature will be requested. If your wallet receives a signature request, it means you have given it permission to carry out the requested action, such as connecting to the Fleamint platform or buying or selling NFTs."] },
    { pannel: 'pannel8', title: "How can I export my NFT sales on Fleamint? ", content: ["The choice of whether taxes, if any, are applicable to a user's NFT purchases, transactions, and transfers is their own. Please contact a reputable tax specialist if you have any inquiries about taxes.", "Unrelated third parties might provide services to make it easier for you to comprehend and/or estimate taxes on NFT transfers, sales, and purchases for a certain wallet address. Please be aware that we cannot guarantee the performance of any third-party services."] },
    { pannel: 'pannel9', title: "How can I connect my social account to my collection? ", content: ["Start by clicking on the icon for your profile, then selecting My Collections from the dropdown menu.", "Click on any of your collections to continue.", "Once you're in the collection editor, scroll down to the Social Connections header. Currently, connections with Twitter accounts are supported. Select Connect from the menu. ", "You'll be asked to give Fleamint permission to access your Twitter account. The upper right corner will display the Twitter account. ", "Your linked Twitter account will appear on the right side of your profile once you're finished on your collection page."] },
    { pannel: 'panne20', title: "How do I find my transaction hash? ", content: ["Your `transaction hash` from a blockchain explorer will be required by a member of the support team if you have any problems purchasing or selling your NFT. ", "Every transaction on the blockchain, including NFT purchases, sales, and cancelled orders, is recorded using transaction hashes, which are distinctive identifiers. A transaction hash is created for each gas fee paid."] },
    { pannel: 'panne21', title: "What is a floor price? ", content: ["For collection items, the lowest price that is changed in real-time is the floor price rather than the average item price. Dutch auctions are excluded from floor price calculations."] },
    { pannel: 'panne22', title: "How do I find my funds on Polygon? ", content: ["Scalable, safe, and immediate transactions using Ethereum tokens like ETH, USDC, and DAI are made possible via the Polygon blockchain. Prior to using Polygon, currencies must first be bridged from Ethereum's mainnet. ", " Fleamint only supports Polygon ETH on Polygon at this time. Go to the wallet symbol in the top-right corner of the Fleamint website to see your Polygon ETH balance. The logo for Polygon ETH is purple."] },
    { pannel: 'panne23', title: "Where can I find NFT sales records? ", content: ["A useful resource for understanding the Ethereum network is Etherscan. You can look up your wallet address to see your token balance if you've sold something on Ethereum, or you may enter a transaction hash to view your transaction history. It's a quick technique to determine whether a transaction went successful."]},
    { pannel: 'panne24', title: "What are gas fees on Ethereum? ", content: ["Ethereum miners are charged transaction fees known as  `gas fees.` Because these expenses were not paid to Fleamint, the company is unable to repay them. Furthermore, Fleamint neither sets nor benefits from gas pricing. ", " You need to have enough ETH in your wallet to cover gas costs when you send NFTs to another wallet or use Fleamint to purchase NFTs. ", "There are two user behaviours on Fleamint that lead to ETH gas expenses. ", "One-time fees", "Recurring fees"] },
    { pannel: 'panne25', title: "How do I transfer ETH from Ethereum to Polygon? ", content: ["The Polygon blockchain enables scalable, secure, and immediate transactions utilising the Ethereum tokens ETH, USDC, and DAI.", "To use your Ethereum funds on Polygon, you must first transfer them across the Polygon network from the Ethereum network (ETH) (PoS).", "-On the Fleamint page, click the wallet icon in the upper right corner.", "-For Ethereum, choose Bridge to Polygon from the three-dot menu.", "-In the pop-up box, enter the amount of ETH you wish to bridge onto Polygon.", "-A transaction on your cryptocurrency wallet will require your signature.", "-Once you've completed the purchase and signed it, you should get a confirmation.", "-The process of connecting Ethereum and Polygon is quick. When it's finished, a purple ETH icon reflecting your bridged ETH will appear on Polygon (PoS)."] },
    { pannel: 'pannel26', title: "How do I withdraw funds from Polygon? ", content: ["-Bridge to Ethereum can be chosen by selecting the three dots menu on ETH Polygon.", "-Your Polygon (PoS) wallet dashboard and all currently bridged tokens to Polygon should appear (PoS).", "-To withdraw, find the Ether (PoS-WETH) token and click it.", "-On three pop-up windows, click Continue to proceed. As well as acknowledging that the withdrawal procedure could take up to 4 hours, you will be asked to confirm the transaction charge.", "-The initial stage of the withdrawal procedure will take 45 to 1 hour.", "-You will be reminded once again to sign the transaction on Ethereum via a notification in the top-right corner after the funds reach the checkpoint."] },
    { pannel: 'pannel27', title: "How can I contact Fleamint? ", content: ["All of our customers have access to email support from us. The following information will be required of you when completing the support form: ", "Name of your email address ", "Provide specifics regarding your query or the issue you're experiencing. ", "By providing us with this information, you enhance the chance that we can fix your issue fast."] },
]

export default function HelpCenter() {
    const theme = useTheme();
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Page title="Help Center">
            <GradientStyle sx={{ paddingTop: { xs: 15, sm: 20 }, paddingBottom: 4, display: 'flex', gap: 8, flexDirection: 'column' }} >
                <Container >
                    <Box sx={{ position: 'relative' }}>
                        
                        {/* <Box sx = {{position:'absolute', width:'100%', marginTop:30,zIndex:50}}>
                            <Stack direction="row">
                                <Stack flexGrow={1} sx={{ borderTopLeftRadius: 8, borderBottomLeftRadius: 8, background: 'white' }} direction="row" gap={1} alignItems={'center'} justifyContent={'center'} padding={2}>
                                    <Grid container>
                                        <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center', gap: 2 }}>

                                            <SelectStyle sx={{ border: 'none', borderRadius: 0, flexGrow: 1 }}>
                                                <option>Search NFTs</option>
                                            </SelectStyle>
                                            <Divider orientation='vertical' variant="middle" flexItem />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center', gap: 2 }}>
                                            <SelectStyle sx={{ border: 'none', borderRadius: 0, flexGrow: 1 }}>
                                                <option>Item Type</option>
                                            </SelectStyle>
                                            <Divider display={{ sm: 'none', md: 'block' }} orientation='vertical' variant="middle" flexItem />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center', gap: 2 }}>
                                            <SelectStyle sx={{ border: 'none', borderRadius: 0, flexGrow: 1 }}>
                                                <option>Sale Type</option>
                                            </SelectStyle>
                                            <Divider display={{ sm: 'none', md: 'block' }} orientation='vertical' variant="middle" flexItem />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center', gap: 2 }}>
                                            <SelectStyle sx={{ border: 'none', borderRadius: 0, flexGrow: 1 }}>
                                                <option>Price Range</option>
                                            </SelectStyle>
                                            <Divider display={{ sm: 'none', md: 'block' }} orientation='vertical' variant="middle" flexItem />
                                        </Grid>
                                    </Grid>

                                </Stack>
                                <Button color='error' sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} variant="contained">
                                    <Icon icon="eva:search-fill" width={30} />
                                </Button>
                            </Stack>
                        </Box> */}
                        {/* hero */}
                        {/* <Grid container sx={{ mb: { xs: 4, md: 8 } }}>
                            <Grid item xs={12} sm={6}>
                                <Box>
                                    <Typography variant={'h3'} component={'p'}>
                                        Discover, Collect, And Sell <font color={theme.palette.primary.dark}>NFTs</font>

                                    </Typography>
                                    <Typography color="gray">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation

                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box paddingX={{ xs: 2, sm: 4 }}>
                                    <Image src="/assets/images/image 143.png" alt="" />
                                </Box>
                            </Grid>

                        </Grid> */} 
                        
                        {/* Card list */}
                        {/* https://www.youtube.com/watch?v=KOgux1_2dFY */}
                        {/* href="https://www.facebook.com" */}
                        <Grid container sx={{ mb: { xs: 4, md: 8 } }}>
                                <Grid item xs={12} sm={6} md={3} sx={{ padding: 2 }} >
                                    <a href='https://www.youtube.com/watch?v=KOgux1_2dFY' style={{ textDecoration: 'none', color:'black'}}>
                                        <CardStyle sx={{ width: '100%', padding: 2, paddingY: 4, flexDirection: 'column', gap: 2, justifyContent: 'center', alignItems: 'center', ":hover": { color: theme.palette.primary.dark } }} >
                                            <Icon icon='lucide:align-vertical-justify-start' width={60} />
                                            <Typography variant="h6" fontWeight={400} >Getting Start</Typography>
                                        </CardStyle>
                                    </a>
                                </Grid>
                            {HELP_CATEGORIES.map((category, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index} sx={{ padding: 2 }}>
                                    <CardStyle sx={{ width: '100%', padding: 2, paddingY: 4, flexDirection: 'column', gap: 2, justifyContent: 'center', alignItems: 'center', ":hover": { color: theme.palette.primary.dark } }} >
                                        <Icon icon={category.icon} width={60} />
                                        <Typography variant="h6" fontWeight={400} >{category.name}</Typography>
                                    </CardStyle>
                                </Grid>
                            ))}

                        </Grid>
                        {/* Accodion list */}
                        <Stack alignItems={'center'}>
                            <Typography variant="h3" sx={{ mb: 4 }}>Recommended Reads</Typography>
                            {HEL_ACCORDION.map((accordion, index) => (
                                <Accordion key={index} expanded={expanded === accordion.pannel} sx={{width:"100%"}}onChange={handleChange(accordion.pannel)}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography variant="h6" color={(accordion.pannel === expanded) ? theme.palette.primary.dark : 'black'} >
                                            {accordion.title}
                                        </Typography>

                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {accordion.content.map((item, index) => (
                                        <Typography color="gray" m={2}>
                                            {item}
                                        </Typography>
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                            ))}

                        </Stack>
                    </Box>
                </Container>
            </GradientStyle>
            {/* Stay in loop start */}
            <StayInLoop />

        </Page>
    )
}