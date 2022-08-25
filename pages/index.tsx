import type { NextPage } from 'next';
import MainIcon from '../components/MainIcon';
import Menu from '../components/Menu';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Images from '../components/Images';

const Home: NextPage = () => {
  return (
    <Page>
      {/* <MainIcon /> */}
      <Nav />
      <Menu />
      <Images />
    </Page>
  );
};

const Page = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;

  @media (min-width: 1024px) {
    /* transform: rotate(-15deg); */
  }
`;

export default Home;
