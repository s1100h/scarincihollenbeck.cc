import React from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import NProgress from 'nprogress';
import { LocationProvider } from 'contexts/LocationContext';
import { AttorneysProvider } from 'contexts/AttorneysContext';
import Header from 'components/shared/Header/Header';
import MainSiteHead from 'components/shared/head/MainSiteHead';
import SSRProvider from 'react-bootstrap/SSRProvider';
/**
 *
 * 3rd Party Resources
 *
 * */
import { GoogleTagManager } from '@next/third-parties/google';
import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import 'animate.css/animate.min.css';

/**
 * Custom Style Sheets
 * */
import { GlobalStyle } from 'styles/global_styles/Global.styles';
import { PracticesContextProvider } from 'contexts/PracticesContext';
import InitFonts from 'styles/global_styles/InitFonts';
import { FormContextProvider } from '../contexts/FormsContext';
import 'react-toastify/dist/ReactToastify.css';
import Notifications from '../hoks/notifications';

const SiteFooter = dynamic(() => import('components/shared/Footer/SiteFooter'));
const ToastContainer = dynamic(
  () => import('react-toastify').then((mod) => mod.ToastContainer),
  { ssr: false },
);

/**
 *  Add page transition loader
 */
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const SHSite = ({ Component, pageProps }) => (
  <SSRProvider>
    <AttorneysProvider>
      <LocationProvider>
        <FormContextProvider>
          <PracticesContextProvider>
            <GlobalStyle />
            <InitFonts />
            <Notifications>
              <MainSiteHead />
              <ToastContainer />
              <Header />
              {/* <!-- Google tag (gtag.js) --> */}
              <GoogleTagManager gtmId="GTM-PBD4BN" />
              <main>
                <Component {...pageProps} />
              </main>
              <SiteFooter />
            </Notifications>
          </PracticesContextProvider>
        </FormContextProvider>
      </LocationProvider>
    </AttorneysProvider>
  </SSRProvider>
);

export default SHSite;
