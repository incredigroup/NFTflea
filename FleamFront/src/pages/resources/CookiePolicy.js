import { Box, Container, Typography } from '@mui/material';
import Page from "../../components/Page";
import { GradientStyle } from '../Home';

export default function PrivacyPolicy() {
  return (
    <Page title="Help Center">
      <GradientStyle sx={{ paddingTop: { xs: 15, sm: 20 }, paddingBottom: 4, display: 'flex', gap: 8, flexDirection: 'column' }} >
        <Container >
          <Box>
            <Typography variant="h3" align="center">Cookie Policy (EU)</Typography>
            <Typography sx={{fontStyle: 'italic'}} align="center" mb={2}>This cookie policy was last updated on October 10 2022 and applies to citizens and legal permanent residents of the European Economic Area and Switzerland.</Typography>
            <Typography variant="p">In this privacy statement, we explain what we do with the data we obtain about you via HTTP S:// flea, Mint.com. we recommend you carefully read this statement period in our processing we comply with the requirements of privacy legislation. That means, among other things, that:</Typography>
          </Box>
          <Box>
            <ol>
              <li>Introduction
                <p>Our Website https://www.fleamint.com (hereafter “the website” ,) uises cookies and other related technologies, (for convenience all technologies are referred to as “cookies”.) Cookies are also placed by third parties we have engaged. In the document below we inform you about the use of cookies on our website.</p>
              </li>
              <li>
                What are cookies?
                <p>A cookie is a small simple file that is sent along with the pages of the this website and stored by your browser on the hard drive of your computer or another device. The information stored therein may be returned to our servers or to the servers of the relevant third parties during  a subsequent visit.</p>
              </li>
              <li>
                What are scripts?
                <p>A script is a piece of program code that is used to make our website function properly and interactive. This code is executed on our server or on your device.</p>
              </li>
              <li>What is a web beacon?
                <p>A web beacon or a pixel tag, is a small invisible piece of text or image in a website that is used to monitor traffic on the website. In order to do this, various data about you is stored using web beacons</p>
              </li>
              <li>Cookies
                <p>5.1  Technical or functional cookies.</p>
                <p>5.2  Some cookies ensure that certain parts of the website work properly and that your user preferences remain known.<br /> By placing functional cookies, we make it easier for you to visit our website. This way, you do not need to repeatedly enter the same information when visiting our website. And, for example, the items remain in your shopping cart until you have paid. We may place these cookies without your consent. </p>
                <p>5.3  Statistics cookies.<br/>We use statistics cookies to optimise the website experience for our users. With these Statistics cookies we get insights in the usage of our website. We ask your permission to play statistics cookies.</p>
                <p>5.4	Marketing /Tracking cookies<br />Marketing/tracking cookies are cookies or any other form of local storage, used to create user profiles to display advertising or to track the user on this website or across several websites for similar marketing purposes.</p>
                <p>5.5	On our website we have included buttons for Twitter and other social media to promote web pages (eg Like pin.) Or share(eg tweet) On social networks like Twitter. These buttons work using pieces of code coming from Twitter themselves. This code places cookies. These social media buttons also can store and process certain information, so a personalised advertisement can be shown to you. Please read the privacy statement of these individual social networks. To read what they do with your personal data which they process using these cookies. The data that is retrieved is anonymised as much as possible. Twitter is located in the United States.<br /></p>
                <p><br /></p>
                <p><br /></p>
              </li>
              <li>
                Placed cookies.
                <p>None Currently.</p>
              </li>
              <li>
                Consent
                <p>When you visit our website for the first time, we will show you a pop up with an explanation about cookies. As soon as you click on save profile, you can send to us using the categories of cookies and plugins you selected in the pop up. As described in this cookie policy, you can disable the use of cookies via your browser. But Please note that the website may no longer work. Properly.</p>
              </li>
              <li>
                Your rights with respect to personal data. You have the following rights with respect to your personal data; 
                <ol type="I">
                  <li>You have the right to know why your personal data is needed, what will happen to it, and how long it will be retained for.</li>
                  <li>Right of access: you have the right to access your personal data that is known to us.</li>
                  <li>Right to rectification: You have the right to supplement correct have deleted or blocked your personal data. Whenever you wish.</li>
                  <li>If you give us your consent to process your data, you have the right to revoke that consent and to have your personal data delete it.</li>
                  <li>Right to transfer your data: You have the right to request all your personal data from the controller and transfer it in its entirety to another controller.</li>
                  <li>Right to object code on. You may object to the processing of your data. We comply with this, unless there are justified grounds for processing.
                    <br />
                    To exercise these rights, please contact us. Please refer to the contact details at the bottom of this cookie policy. If you have a complaint about how we handle your data, we would like to hear from you, but you also have a right to submit a complaint to the supervisory authority or the Data Protection authority of your jurisdiction.
                  </li>
                </ol>
              </li>
              <li>
                Enabling/disabling and deleting cookies.
                <p>You can use your Internet browser to automatically or manually delete cookies. You can also specify that certain cookies may not be placed. Another option is to say change the settings of your Internet browser so that you receive a message each time a cookie is placed. For more information about these options, please refer to the instructions in the help section of your browser. Please note that our website may not work properly if all cookies are disabled. If you do delete the cookies in your browser, they will be placed again after you consent when you visit our website again.</p>
              </li>
              <li>
                Contact details.
                <p>For questions and comments. About our cookie policy and this statement, please contact us by using the following e-mail. Enquiries@flamant.com.</p>
              </li>
            </ol>
            </Box>
        </Container>
      </GradientStyle>
    </Page>
  );
}
