// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
import ScrollToTop from './components/ScrollToTop';
import { ProgressBarStyle } from './components/ProgressBar';
import NotistackProvider from './components/NotistackProvider';
import { NotificationContainer, NotificationManager } from 'react-notifications';


// ----------------------------------------------------------------------

export default function App() {
  
  return (

    <ThemeProvider>
      <NotistackProvider>
        <ProgressBarStyle />
        <ScrollToTop />
        <Router />
      </NotistackProvider>
      <NotificationContainer enterTimeout={800} leaveTimeout={500}/>
    </ThemeProvider>
  );
}
