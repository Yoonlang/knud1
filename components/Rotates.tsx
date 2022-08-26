import styled from 'styled-components';
import Nav from '../components/Nav';
import Works from '../components/Works';
import { AnimatedBar, AnimatedColBar } from './AnimatedBar';
import MainIcon from './MainIcon';

const Rotates = () => {
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
  transform: rotate(-15deg);
  transform-origin: left top;
  @media (max-width: 1023px) {
    display: none;
  }
`;

export default Rotates;
