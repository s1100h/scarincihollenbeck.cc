import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
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
import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import 'animate.css/animate.min.css';

/**
 * Custom Style Sheets
 * */
import { GlobalStyle } from 'styles/global_styles/Global.styles';
import Script from 'next/script';
import { FormContextProvider } from '../contexts/FormsContext';
import {
  montserrat, poppins, rajdhani, licorice,
} from '../public/fonts/fonts';
import { createMarkup } from '../utils/helpers';

const SiteFooter = dynamic(() => import('components/shared/Footer/SiteFooter'));

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
          <GlobalStyle />
          <MainSiteHead />
          <Header />
          {/* <!-- Google tag (gtag.js) --> */}
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-EQ890E606W"
          />
          <Script
            id="G-EQ890E606W"
            dangerouslySetInnerHTML={createMarkup(`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EQ890E606W');
            `)}
          />
          <main
            className={`${poppins.variable} ${montserrat.variable} ${rajdhani.variable} ${licorice.variable}`}
          >
            <Component {...pageProps} />
          </main>
          <SiteFooter />
        </FormContextProvider>
      </LocationProvider>
    </AttorneysProvider>
  </SSRProvider>
);

export default SHSite;
