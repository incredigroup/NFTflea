

// highlight
import './utils/highlight';

// scroll bar
import 'simplebar/src/simplebar.css';

// lightbox
import 'react-image-lightbox/style.css';



// editor
import 'react-quill/dist/quill.snow.css';

// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// swiper 
import './swiper.min.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import 'react-notifications/lib/notifications.css';
import './index.css';
// @mui

// redux

// contexts
import { SettingsProvider } from './contexts/SettingsContext';
import { WalletContextProvider } from './contexts/WalletContext';
import { AccountContextProvider } from './contexts/AccountContext';
import { MarketplaceContextProvider } from './contexts/MarketplaceContext';

//
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Buffer } from 'buffer';

window.Buffer = window.Buffer || Buffer;

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <SettingsProvider>
      <WalletContextProvider>
        <MarketplaceContextProvider>
          <AccountContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
          </AccountContextProvider>
        </MarketplaceContextProvider>
      </WalletContextProvider>
    </SettingsProvider>
  </HelmetProvider>

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
