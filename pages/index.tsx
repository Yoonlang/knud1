import { AnimatedColBar, AnimatedBar } from 'components/AnimatedBar';
import MainIcon from 'components/MainIcon';
import Menu from 'components/Menu';
import Nav from 'components/Nav';
import Works from 'components/Works';
import type { GetStaticProps, NextPage } from 'next';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <Page>
      <Mobile>
        <Menu />
        <MainIcon />
        <AnimatedColBar />
        <Works />
      </Mobile>
      <PC>
        <Rotate>
          <MainIcon />
          <Nav />
          <AnimatedBar />
          <AnimatedColBar />
          <Works />
        </Rotate>
      </PC>
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

const Mobile = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const Rotate = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  transform-origin: left top;
`;

const PC = styled.div`
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
    ${Rotate} {
      transform: rotate(-15deg) scale(0.8);
    }
  }
  @media (min-width: 1600px) {
    padding: 290px 0 0 290px;
    ${Rotate} {
      transform: rotate(-15deg);
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      home: true,
    },
  };
};

export default Home;
