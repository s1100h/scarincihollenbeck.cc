import Router from 'next/router';
import Head from 'next/head';
import * as gtag from 'utils/gtag';
import NProgress from 'nprogress'; // nprogress module
import 'nprogress/nprogress.css';
import NavBar from 'components/navbar';
import Footer from 'components/footer'

/**
*
* 3rd Party Resources
*
* */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import 'animate.css'

/**
 * Util Sheets
 */

import 'styles/utils/carousel.css';
import 'styles/globals.css';
// import 'styles/utils/just-in-carousel.scss';
// import 'styles/utils/location-carousel.scss';
// import 'styles/utils/spacing-and-fonts.scss';
// import 'styles/utils/tabs.scss';

/**
* Custom Style Sheets
* */
// import 'styles/main.scss';
import 'styles/dropdown.css'
// import 'styles/navigation.scss';
// import 'styles/archive-attorney&admin.scss';
// import 'styles/archive-location.scss';
// import 'styles/archive-career.scss';
// import 'styles/archive-practice.scss';
// import 'styles/single-admin&attorney&career&page&single.scss';
// import 'styles/single-practice.scss';
// import 'styles/subscription-form.scss';
// import 'styles/firm-page.scss';
// import 'styles/category.css';


/**
* Bind nprogress loader to app
* */
const msDelay = 200;
const options = { trickleSpeed: 50 };
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


/**
 * 
 * Track pageview when route is changed
 */
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

function SHApp({ Component, pageProps, posts }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1,shrink-to-fit=no" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="msvalidate.01" content="D568BE2730F6C27E33061E84F8DE58B1" />
        <meta name="google-site-verification" content="ulImKkFX6Wqx04n63QzoiKMPDPwbQ53bDZAfwxyMq2Q" />
      </Head>
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default SHApp;
