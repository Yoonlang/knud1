import type { NextPage } from 'next';
import Menu from '../components/Menu';
import styled from 'styled-components';
import Rotates from '../components/Rotates';

const Home: NextPage = () => {
  return (
    <Page>
      <Limit>
        <Menu />
        <Rotates />
      </Limit>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  justify-content: center;
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
`;

export default Home;
