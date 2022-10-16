import PortfolioPage from 'components/pages/PortfolioPage';
import type { GetStaticProps, NextPage } from 'next';

const Portfolio: NextPage = () => {
  return <PortfolioPage />;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      portfolio: true,
    },
  };
};

export default Portfolio;
