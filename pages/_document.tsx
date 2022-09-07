import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class AppDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(context);
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
      <Html>
        <Head>
          <link rel="prefetch" href="/fonts/Poppins-Light.otf" />
          <link rel="prefetch" href="/fonts/Poppins-Medium.otf" />
          <link rel="prefetch" href="/fonts/Poppins-Bold.otf" />

          <link rel="prefetch" href="/fonts/NotoSansKR-Light.otf" />
          <link rel="prefetch" href="/fonts/NotoSansKR-Medium.otf" />
          <link rel="prefetch" href="/fonts/NotoSansKR-Bold.otf" />

          <link rel="prefetch" href="/fonts/GmarketSansLight.otf" />
          <link rel="prefetch" href="/fonts/GmarketSansMedium.otf" />
          <link rel="prefetch" href="/fonts/GmarketSansBold.otf" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
