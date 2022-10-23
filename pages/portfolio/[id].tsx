import PortfolioPage from 'components/pages/PortfolioPage';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

const Portfolio: NextPage = () => {
  return <PortfolioPage />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: 'gny' },
      },
      {
        params: { id: 'knh' },
      },
      {
        params: { id: 'kmh' },
      },
      {
        params: { id: 'kej' },
      },
      {
        params: { id: 'khj' },
      },
      {
        params: { id: 'nsb' },
      },
      {
        params: { id: 'bsj' },
      },
      {
        params: { id: 'sde' },
      },
      {
        params: { id: 'syb' },
      },
      {
        params: { id: 'shj' },
      },
      {
        params: { id: 'yjy' },
      },
      {
        params: { id: 'ojh' },
      },
      {
        params: { id: 'yjh' },
      },
      {
        params: { id: 'lar' },
      },
      {
        params: { id: 'lyj' },
      },
      {
        params: { id: 'lyr' },
      },
      {
        params: { id: 'lwj' },
      },
      {
        params: { id: 'lja' },
      },
      {
        params: { id: 'jsh' },
      },
      {
        params: { id: 'jys' },
      },
      {
        params: { id: 'jde' },
      },
      {
        params: { id: 'jyn' },
      },
      {
        params: { id: 'jej' },
      },
      {
        params: { id: 'jsb' },
      },
      {
        params: { id: 'hyr' },
      },
      {
        params: { id: 'hyd' },
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
