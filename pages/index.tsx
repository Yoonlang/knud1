import type { NextPage } from 'next';
import Menu from '../components/Menu';
import styled from 'styled-components';
import Rotates from '../components/Rotates';
import MainIcon from '../components/MainIcon';
import { AnimatedColBar } from '../components/AnimatedBar';
import Works from '../components/Works';

const Home: NextPage = () => {
  return (
    <Page>
      <Menu />
      <MainIcon mobile />
      <AnimatedColBar mobile />
      <Works mobile />
      <Limit>
        <Rotates />
      </Limit>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  background: #000;
`;

const Limit = styled.div`
  display: flex;
  width: 100%;
  height: 200%;
  max-width: 1920px;
  overflow: hidden;
  @media (max-width: 1023px) {
    display: none;
  }
  @media (max-width: 1599px) {
    padding: 210px 0 0 200px;
  }
  @media (min-width: 1600px) {
    padding: 290px 0 0 290px;
  }
`;

export default Home;
