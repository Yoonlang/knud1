import styled, { keyframes } from 'styled-components';

const AnimatedBar = () => {
  return (
    <BarContainer>
      <GradationBar />
      <BlockBar />
    </BarContainer>
  );
};

const AnimatedColBar = () => {
  return (
    <>
      <GradationColBar />
      <BlockColBar />
    </>
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
  height: 20px;
  background: linear-gradient(to right, #000, #fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff);
  margin-left: 1px;
`;

const moveToRight = keyframes`
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
  animation: ${moveToRight} 1.5s linear forwards;
`;

const GradationColBar = styled.div`
  position: absolute;
  width: 70px;
  height: 200%;
  background: linear-gradient(to bottom, #000, #494949, #fff, #fff, #fff, #fff, #fff, #fff, #fff);
  transform: translate(-69px, -400px);
`;

const moveToBottom = keyframes`
0%{
  top: 0;
}
100%{
  top: 200%;
}
`;

const BlockColBar = styled.div`
  position: absolute;
  width: 70px;
  height: 200%;
  background: #000;
  transform: translate(-69px, -400px);
  animation: ${moveToBottom} 0.7s linear forwards;
`;

export { AnimatedBar, AnimatedColBar };
