import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import NProgress from 'nprogress';
import { LocationProvider } from 'contexts/LocationContext';
import { SectionTitleProvider } from 'contexts/SectionTitleContext';
import Header from 'components/shared/Header';
import MainSiteHead from 'components/shared/head/MainSiteHead';
import * as gtag from 'utils/gtag';

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
import 'styles/carousel.css';
import { GlobalStyle } from 'styles/global_styles/Global.styles';

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
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <SectionTitleProvider>
      <LocationProvider>
        <GlobalStyle />
        <MainSiteHead />
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <SiteFooter />
      </LocationProvider>
    </SectionTitleProvider>
  );
};

export default SHSite;
