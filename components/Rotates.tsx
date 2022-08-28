import styled from 'styled-components';
import Nav from '../components/Nav';
import Works from '../components/Works';
import { AnimatedBar, AnimatedColBar } from './AnimatedBar';
import MainIcon from './MainIcon';

const Rotates: React.FC = () => {
  return (
    <Rotate>
      <MainIcon />
      <Nav />
      <AnimatedBar />
      <AnimatedColBar />
      <Works />
    </Rotate>
  );
};

const Rotate = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  transform-origin: left top;
  @media (max-width: 1023px) {
    display: none;
  }
  @media (max-width: 1599px) {
    transform: rotate(-15deg) scale(0.8);
  }
  @media (min-width: 1600px) {
    transform: rotate(-15deg);
  }
`;

export default Rotates;
