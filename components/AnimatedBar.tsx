import styled, { keyframes } from 'styled-components';

const AnimatedBar = () => {
  return (
    <BarContainer>
      <GradationBar />
      <BlockBar />
    </BarContainer>
  );
};

interface AnimatedColBarProps {
  mobile?: boolean;
}

const AnimatedColBar = ({ mobile = false }: AnimatedColBarProps) => {
  return (
    <ColBarContainer className={mobile ? 'mobile' : ''}>
      <GradationColBar className={mobile ? 'mobileGradation' : ''} />
    </ColBarContainer>
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

const ColBarContainer = styled.div`
  &.mobile {
    transform: translate(100px);
    z-index: 2;
    @media (min-width: 1024px) {
      display: none;
    }
  }
  &.mobile > div {
    width: 36px;
    height: 100%;
    transform: translate(-63px);
  }
  &.mobile > .mobileGradation {
    mix-blend-mode: hard-light;
    background: none;
  }
  &.mobile > .mobileGradation::after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, #000, transparent, #fff, #fff, #fff, #fff);
  }
`;

const moveToBottom = keyframes`
0%{
  top: -150%;
  opacity: 0;
}
100%{
  top: 0;
}
`;

const GradationColBar = styled.div`
  position: absolute;
  width: 70px;
  height: 150%;
  background: linear-gradient(to bottom, #000, #494949, #fff, #fff, #fff, #fff, #fff, #fff, #fff);
  transform: translate(-69px, -400px);
  animation: ${moveToBottom} 0.7s linear forwards;
`;

export { AnimatedBar, AnimatedColBar };
