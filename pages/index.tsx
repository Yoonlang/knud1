import type { NextPage } from 'next';
import Menu from '../components/Menu';
import styled from 'styled-components';
import Rotates from '../components/Rotates';

const Home: NextPage = () => {
  return (
    <Page>
      <Menu />
      <Rotates />
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

// const Limit = styled.div`
//   display: flex;
//   max-width: 1920px;
//   max-height: 1000px; // 이건 임시
//   overflow: hidden;
// `;

export default Home;
