import IdentityPage from 'components/pages/IdentityPage';
import { GetStaticProps } from 'next';

const Identity = () => {
  return <IdentityPage />;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      identity: true,
    },
  };
};

export default Identity;
