import PortfolioPage from 'components/pages/PortfolioPage';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

const Portfolio: NextPage = () => {
  return <PortfolioPage />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: 'ojh' },
      },
      {
        params: { id: '1' },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      portfolio: true,
    },
  };
};

export default Portfolio;
