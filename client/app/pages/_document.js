import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { initGA } from '../utils/analytics';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta content="width=device-width,initial-scale=1,shrink-to-fit=no" name="viewport" />
          <meta name="msvalidate.01" content="D568BE2730F6C27E33061E84F8DE58B1" />
          <meta name="google-site-verification" content="ulImKkFX6Wqx04n63QzoiKMPDPwbQ53bDZAfwxyMq2Q" />
          <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png"/>
          <link rel="manifest" href="/public/site.webmanifest"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
