import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { drawOne, drawTwentySix } from '../../../../../utils/drawFunctions';

const MainIcon: React.FC = () => {
  const canvasOne = useRef<HTMLCanvasElement>(null);
  const canvasTwentySix = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasOne.current || !canvasTwentySix.current) return;
    const cvO: HTMLCanvasElement = canvasOne.current,
      cvT: HTMLCanvasElement = canvasTwentySix.current,
      ctxO = cvO.getContext('2d'),
      ctxT = cvT.getContext('2d');
    if (!ctxO || !ctxT) return;

    let now = 0;
    const update = () => {
      if (!ctxO || !ctxT) return;
      drawOne(ctxO, now);
      drawTwentySix(ctxT, now);
      now++;
      const animation = requestAnimationFrame(update);
      if (now >= (1700 / 1000) * 60) cancelAnimationFrame(animation);
    };

    update();
  });

  return (
    <>
      <CanvasTwentySixDiv>
        <Canvas ref={canvasTwentySix} width="1920" height="1080"></Canvas>
      </CanvasTwentySixDiv>
      <CanvasOneDiv>
        <Canvas ref={canvasOne} width="1920" height="1080"></Canvas>
      </CanvasOneDiv>
    </>
  );
};

const CanvasTwentySixDiv = styled.div`
  display: flex;
  z-index: 3;
  @media (max-width: 1023px) {
    transform: translate(-90px, -73px);
  }
  @media (min-width: 1024px) and (max-width: 1599px) {
    transform: translate(-312px, -365px);
  }
  @media (min-width: 1600px) {
    transform: translate(-312px, -295px);
  }
`;

const CanvasOneDiv = styled.div`
  display: flex;
  z-index: 3;
  @media (max-width: 1023px) {
    transform: translate(-90px);
  }
  @media (min-width: 1024px) {
    transform: translate(-312px, -330px);
  }
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  @media (max-width: 1023px) {
    width: 500px;
  }
  @media (min-width: 1024px) {
    width: 960px;
  }
`;

export default MainIcon;
