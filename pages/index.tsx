import type { NextPage } from 'next';
import MainIcon from '../components/MainIcon';
import Menu from '../components/Menu';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <Page>
      <MainIcon />
      <Menu />
    </Page>
  );
};

const Page = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
`;

export default Home;
