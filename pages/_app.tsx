import DefaultLayoutMobile from 'components/templates/DefaultLayoutMobile';
import DefaultLayoutPC from 'components/templates/DefaultLayoutPC';
import type { AppProps } from 'next/app';
import GlobalStyle from 'others/GlobalStyle';
import useMobileDetect from 'utils/useMobileDetect';

function MyApp({ Component, pageProps }: AppProps) {
  const isMobile = useMobileDetect();

  return (
    <>
      <GlobalStyle />

      {pageProps?.home || pageProps?.portfolio ? (
        <Component {...pageProps} />
      ) : (
        <>
          {!isMobile ? (
            <DefaultLayoutPC>
              <Component {...pageProps} />
            </DefaultLayoutPC>
          ) : (
            <DefaultLayoutMobile identity={pageProps?.identity}>
              <Component {...pageProps} />
            </DefaultLayoutMobile>
          )}
        </>
      )}
    </>
  );
}

export default MyApp;
