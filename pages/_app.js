import React from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import NProgress from 'nprogress';
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
import InitFonts from 'styles/global_styles/InitFonts';
import 'react-toastify/dist/ReactToastify.css';
import Contexts from 'contexts/Contexts';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import Notifications from '../hoks/notifications';
import { RECAPTCHA_SITE_KEY } from '../utils/constants';

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
    <Contexts>
      <GlobalStyle />
      <InitFonts />
      <Notifications>
        <ReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
          <MainSiteHead />
          <ToastContainer />
          <Header />
          {/* <!-- Google tag (gtag.js) --> */}
          <GoogleTagManager gtmId="GTM-PZ2XWLW4" />
          <main>
            <Component {...pageProps} />
          </main>
          <SiteFooter />
        </ReCaptchaProvider>
      </Notifications>
    </Contexts>
  </SSRProvider>
);

export default SHSite;
