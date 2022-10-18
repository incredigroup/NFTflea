import { Container } from "@mui/material";
import DetailCover from "../../sections/NFT/detail/DetailCover";
import Page from "../../components/Page";
import { GradientStyle } from "../Home";
import DetailCollection from "../../sections/NFT/detail/DetailCollection";

export default function ProductDetail() {
    return (
        <Page title="Product Details">
            <GradientStyle sx={{ paddingTop: { xs: 15, sm: 20 }, paddingBottom: 4, display: 'flex', gap: 8, flexDirection: 'column' }} >
                <Container >
                    <DetailCover />
                </Container>
            </GradientStyle>
            {/* <Container>
                <DetailCollection />
            </Container> */}
        </Page>
    )
}