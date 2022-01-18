import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import NProgress from 'nprogress';
import { LocationProvider } from 'contexts/LocationContext';
import { SectionTitleProvider } from 'contexts/SectionTitleContext';
import NavBar from 'components/shared/Navbar';
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
import 'styles/globals.css';
import 'styles/carousel.css';

const Footer = dynamic(() => import('components/shared/Footer'));

/**
 *  Add page transition loader
 */
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function SHSite({ Component, pageProps }) {
  const router = useRouter();
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
        <MainSiteHead />
        <NavBar />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </LocationProvider>
    </SectionTitleProvider>
  );
}
