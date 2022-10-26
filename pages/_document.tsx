import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class AppDocument extends Document {
  static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
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
          <link rel="preload" as="font" type="font/woff" href="/fonts/Poppins-Light.woff" />
          <link rel="preload" as="font" type="font/woff" href="/fonts/Poppins-Medium.woff" />
          <link rel="preload" as="font" type="font/woff" href="/fonts/Poppins-Bold.woff" />

          <link rel="preload" as="font" type="font/woff" href="/fonts/NotoSansKR-Light.woff" />
          <link rel="preload" as="font" type="font/woff" href="/fonts/NotoSansKR-Medium.woff" />
          <link rel="preload" as="font" type="font/woff" href="/fonts/NotoSansKR-Bold.woff" />

          <link rel="preload" as="font" type="font/woff" href="/fonts/GmarketSansLight.woff" />
          <link rel="preload" as="font" type="font/woff" href="/fonts/GmarketSansMedium.woff" />
          <link rel="preload" as="font" type="font/woff" href="/fonts/GmarketSansBold.woff" />
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
