import styled, { keyframes } from 'styled-components';

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
  animation: ${moveToRight} 3.5s linear forwards;
`;

const ColBarContainer = styled.div`
  @media (max-width: 1023px) {
    transform: translate(100px);
    z-index: 2;
  }
`;

const moveToBottom = (startPoint: string) => keyframes`
0%{
  top: ${startPoint};
  opacity: 0;
}
100%{
  top: 0;
}
`;

const GradationColBar = styled.div`
  position: absolute;
  @media (max-width: 1023px) {
    width: 36px;
    height: 100%;
    transform: translate(-63px);
    mix-blend-mode: hard-light;
    background: none;
    {GradationColBar}::after {
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(to bottom, rgba(99, 99, 99, 0), rgba(99, 99, 99, 0.5), rgba(150, 150, 150, 0.8), #ddd, #eee, #fff, #fff, #fff, #fff);
      animation: ${() => moveToBottom('-100%')} 1s linear forwards;
    }
  }
  @media (min-width: 1024px) {
    width: 70px;
    height: 150%;
    background: linear-gradient(to bottom, #000, #494949, #fff, #fff, #fff, #fff,#fff, #fff, #fff, #fff);
    transform: translate(-69px, -400px);
    animation: ${() => moveToBottom('-200%')} 1.3s linear forwards;
  }
`;

export { BarContainer, GradationBar, BlockBar, ColBarContainer, GradationColBar };
