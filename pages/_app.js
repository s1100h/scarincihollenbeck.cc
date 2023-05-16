import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import NProgress from 'nprogress';
import { LocationProvider } from 'contexts/LocationContext';
import { AttorneysProvider } from 'contexts/AttorneysContext';
import Header from 'components/shared/Header';
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
import TagManager from 'react-gtm-module';
import { montserrat, poppins } from '../public/fonts/fonts';

const SiteFooter = dynamic(() => import('components/shared/Footer/SiteFooter'));

/**
 *  Add page transition loader
 */
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const SHSite = ({ Component, pageProps }) => {
  const router = useRouter();

  /** Effect hook that manages tracking for Google Analytics */
  useEffect(() => {
    const handleRouteChange = () => {
      TagManager.initialize({ gtmId: 'GTM-PC64FQH' });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <SSRProvider>
      <AttorneysProvider>
        <LocationProvider>
          <GlobalStyle />
          <MainSiteHead />
          <Header />
          <main className={`${poppins.variable} ${montserrat.variable}`}>
            <Component {...pageProps} />
          </main>
          <SiteFooter />
        </LocationProvider>
      </AttorneysProvider>
    </SSRProvider>
  );
};

export default SHSite;
