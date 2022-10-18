import { Box, Container, Typography } from '@mui/material';
import Page from "../../components/Page";
import { GradientStyle } from '../Home';

export default function PrivacyPolicy() {
  return (
    <Page title="Help Center">
      <GradientStyle sx={{ paddingTop: { xs: 15, sm: 20 }, paddingBottom: 4, display: 'flex', gap: 8, flexDirection: 'column' }} >
        <Container >
          <Box>
            <Typography variant="h3" align="center">Privacy statement for the EU</Typography>
            <Typography sx={{fontStyle: 'italic'}} align="center" mb={2}>This privacy statement was last updated on October the 7th, 2022 <br />and applies to citizens and legal permanent residents of the European Economic Area and Switzerland.</Typography>
            <Typography variant="p">In this privacy statement, we explain what we do with the data we obtain about you via HTTP S:// flea, Mint.com. we recommend you carefully read this statement period in our processing we comply with the requirements of privacy legislation. That means, among other things, that:</Typography>
          </Box>
          <Box>
            <ul>
              <li>We clearly state the purposes for which we process the personal data. We do this by means of this privacy statement to; </li>
              <li>we aim to limit our collection of personal data to only the personal data required for legitimate purposes;</li>
              <li>We first request your explicit consent to process your personal data in cases requiring your consent; </li>
              <li>We take appropriate security measures to protect your personal data and also require this from all cookies on our site.</li>
            </ul>
          </Box>
          <Box>
            <ol>
              <li>Retention
                <p>We retain this data upon termination of the service for the following number of months: 48.</p>
                <p>For this purpose we use the following data Web 3.0 login e-mail and social media. The basis on which we may process these data is on the provision of consent.</p>
                <p>Offering personalised products and services. We retain this information until the services terminated.</p>
              </li>
              <li>Cookies
                <p>Our website uses cookies. For more information about cookies, please refer to our cookie policy. The inclusion of full IP addresses is blocked by us.</p>
              </li>
              <li>Security
                <p>We are committed to the security of personal data. We take appropriate security measures to limit abuse of and unauthorised access to personal data.</p>
              </li>
              <li>Third party websites
                <p>This privacy statement does not apply to 3rd party websites connected by links on our website. We cannot guarantee that these third parties handle your personal data in a reliable or secure manner from stop. We recommend you read the privacy statements of these websites prior to making use of these websites.</p>
              </li>
              <li>Amendments to this privacy statement
                <p>We reserve the right to make amendments to this privacy statement. It is recommended that you. Use management of girl cookie consent to prove the best experiences. We use technology like cookies to store and access device information. Consenting to these technologies will allow us to process data such as browsing behaviour or unique IDs on this site. Not consenting or withdrawing consent may adversely affect certain features and functions. You have a right to rectification to supplement correct have deleted or blocked your personal data whenever you wish. If you give us your consent, process your data, you have the right to revoke that consent and to have your personal data delete it. You have the right to Transfer your data: You have the right to request all your personal data from the controller and transfer it in its entirety to another controller. You have the right to reject. You may object to the processing of your data. We comply with this unless there are justified grounds for processing. Please make sure to always clearly state who you are so that we can be certain that we do not modify or delete any data of the wrong person.</p>
              </li>
              <li>Submitting a complaint
                <p>If you are not satisfied with the way in which we handle a complaint about the processing of your personal data, you have the right to submit a complaint to the Data Protection authority of your jurisdiction. Our contact details are listed below.</p>
              </li>
            </ol>
          </Box>
        </Container>
      </GradientStyle>
    </Page>
  );
}
