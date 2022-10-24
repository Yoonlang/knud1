import MainPage from 'components/pages/MainPage';
import type { GetStaticProps, NextPage } from 'next';

const Home: NextPage = () => {
  return <MainPage />;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      home: true,
    },
  };
};

export default Home;
