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
  overflow: hidden;
  background: #000;
`;

const Limit = styled.div`
  display: flex;
  width: 100%;
  height: 150%;
  max-width: 1920px;
  padding: 290px 0 0 290px;
  overflow: hidden;
  @media (max-width: 1023px) {
    display: none;
  }
`;

export default Home;
