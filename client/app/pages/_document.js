import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8"/>
          <meta content="width=device-width,initial-scale=1,shrink-to-fit=no" name="viewport"/>
          <meta name="msvalidate.01" content="D568BE2730F6C27E33061E84F8DE58B1" />
          <meta name="google-site-verification" content="ulImKkFX6Wqx04n63QzoiKMPDPwbQ53bDZAfwxyMq2Q" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `<!-- Global site tag (gtag.js) - Google Analytics -->
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-18813670-1"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'UA-18813670-1');
              </script>
              `
            }}
          />
        </body>
      </Html>
    );
  }
}