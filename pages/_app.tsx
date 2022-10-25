import DefaultLayoutMobile from 'components/templates/DefaultLayoutMobile';
import DefaultLayoutPC from 'components/templates/DefaultLayoutPC';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'others/GlobalStyle';
import useMobileDetect from 'utils/useMobileDetect';

function MyApp({ Component, pageProps }: AppProps) {
  const isMobile = useMobileDetect();

  return (
    <>
      <NextSeo
        title="2022 경북대학교 디자인학과 졸업전시"
        description="모두가 1에 가지는 의미가 다르지만 경북대학교 디자인학과 졸업생들이 하나를 추구하며 만든 ‘우리의 1’은그 뜻을 함께 하기에 하나가 될 수 있었습니다. 1의 26제곱이 1이라는 것은 당연하기에 매력적이며, 이중적이기에 그 의미가 있습니다. 이러한 각자의 1들이 모여 우리 디자인학과 4학년 26명의 1이 만들어집니다. 1의 26제곱은 여전히 1이듯이. "
        openGraph={{
          type: 'website',
          locale: 'ko_KR',
          url: 'https://knud1.com',
          title: '2022 경북대학교 디자인학과 졸업전시',
          images: [
            {
              url: 'https://knud1.com/assets/126_logo.svg',
              alt: '126_logo',
            },
          ],
        }}
      />
      <Head>
        <link rel="shortcut icon" href="./assets/126_logo.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
