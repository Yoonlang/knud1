import PortfolioPage from 'components/pages/PortfolioPage';
import { PRODUCER } from 'constants/producer';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

const Portfolio: NextPage = () => {
  return <PortfolioPage />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.values(PRODUCER).map((producer) => {
      return {
        params: { id: producer },
      };
    }),
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
