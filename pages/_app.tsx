import DefaultLayoutMobile from 'components/templates/DefaultLayoutMobile';
import DefaultLayoutPC from 'components/templates/DefaultLayoutPC';
import type { AppProps } from 'next/app';
import GlobalStyle from 'others/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

      {pageProps?.home ? (
        <Component {...pageProps} />
      ) : (
        <>
          <DefaultLayoutMobile identity={pageProps?.identity}>
            <Component {...pageProps} />
          </DefaultLayoutMobile>
          <DefaultLayoutPC>
            <Component {...pageProps} />
          </DefaultLayoutPC>
        </>
      )}
    </>
  );
}

export default MyApp;
