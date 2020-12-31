import Router from 'next/router';
import Head from 'next/head';
import * as gtag from 'utils/gtag';
import NProgress from 'nprogress';
import NavBar from 'components/navbar';

/**
 *
 * 3rd Party Resources
 *
 * */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import 'nprogress/nprogress.css';
import 'animate.css/animate.min.css';

/**
 * Custom Style Sheets
 * */
import 'styles/globals.css';
import 'styles/dropdown.css';
import 'styles/carousel.css';

/**
 * Bind nprogress loader to app
 * */
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

/**
 *
 * Track pageview when route is changed
 */
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

function SHApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
          name="viewport"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="msvalidate.01" content="D568BE2730F6C27E33061E84F8DE58B1" />
        <meta
          name="google-site-verification"
          content="ulImKkFX6Wqx04n63QzoiKMPDPwbQ53bDZAfwxyMq2Q"
        />
        <link
          rel="preload"
          href="/fonts/proxima-nova-regular.ttf"
          as="font"
          crossOrigin=" "
        />
        <link
          rel="preload"
          href="/fonts/proxima-nova-bold.ttf"
          as="font"
          crossOrigin=" "
        />
        <link
          rel="preload"
          href="/fonts/proxima-nova-italic.ttf"
          as="font"
          crossOrigin=" "
        />
      </Head>
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default SHApp;
