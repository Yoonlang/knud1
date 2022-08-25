import styled, { keyframes } from 'styled-components';

const AnimatedBar = () => {
  return (
    <BarContainer>
      <GradationBar />
      <BlockBar />
    </BarContainer>
  );
};

const BarContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 200%;
`;

const GradationBar = styled.div`
  width: 200%;
  height: 25px;
  background: linear-gradient(to right, #000, #eee, #fff, #fff, #fff);
`;

const move = keyframes`
0%{
    left: 0;
}
100%{
    left: 200%;
}
`;

const BlockBar = styled.div`
  position: absolute;
  left: 0;
  top: -1px;
  width: 100%;
  height: 27px;
  background: #000;
  animation: ${move} 1.6s linear forwards;
`;

export default AnimatedBar;
