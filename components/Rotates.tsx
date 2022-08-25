import styled from 'styled-components';
import Nav from '../components/Nav';
import Works from '../components/Works';
import AnimatedBar from './AnimatedBar';
import MainIcon from './MainIcon';

const Rotates = () => {
  return (
    <Rotate>
      <MainIcon />
      <Nav />
      <AnimatedBar />
      <Works />
    </Rotate>
  );
};

const Rotate = styled.div`
  width: 100%;
  height: 100%;
  transform: rotate(-15deg);
  margin: 5% 0 0 15%;
  @media (max-width: 1023px) {
    display: none;
  }
`;

export default Rotates;
