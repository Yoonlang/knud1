import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { drawLine, drawCircle } from '../others/drawFunctions';

const MainIcon: React.FC = () => {
  const canvasOne = useRef<HTMLCanvasElement>(null);
  const canvasUpper = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasOne.current) return;
    const canvas: HTMLCanvasElement = canvasOne.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let now = 0;
    const update = () => {
      if (!ctx) return;
      
      drawLine(ctx, 278, 0, 278, 103, 70, 400, 0, now);
      drawCircle(ctx, 243, 104, 35, 70, 0, 0.3, 200, 400, now);
      drawLine(ctx, 272, 124, 136, 302, 70, 400, 600, now);
      now++;
      const animation = requestAnimationFrame(update);
      if (now >= (1100 / 1000) * 60) cancelAnimationFrame(animation);
    };

    update();
  });

  useEffect(() => {
    if (!canvasUpper.current) return;
    const canvas: HTMLCanvasElement = canvasUpper.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let now = 0;
    const update = () => {
      if (!ctx) return;
      drawLine(ctx, 354, 263 - 80, 420, 263 - 80, 20, 200, 500, now);
      drawCircle(ctx, 420.5, 273.5 - 80, 10, 21, -0.5, 0.1, 100, 700, now);
      drawLine(ctx, 431, 273 - 80, 431, 298 - 80, 20, 200, 800, now);
      drawCircle(ctx, 420.5, 298.5 - 80, 10, 21, 0, 0.5, 100, 1000, now);
      drawLine(ctx, 421, 309 - 80, 374, 309 - 80, 20, 200, 1100, now);
      drawCircle(ctx, 373.5, 319.5 - 80, 10, 21, -0.5, -1, 100, 1300, now, true);
      drawLine(ctx, 363, 318 - 80, 363, 358 - 80, 20, 200, 1400, now);
      drawLine(ctx, 354, 350 - 80, 408, 350 - 80, 20, 100, 1600, now);

      const gradient = ctx.createLinearGradient(408 * 2, 270 * 2, 508 * 2, 270 * 2);
      gradient.addColorStop(0, '#fff');
      gradient.addColorStop(0.5, '#000');
      gradient.addColorStop(1, '#fff');
      drawLine(ctx, 408, 270, 505, 270, 20, 300, 1700, now, gradient);

      drawLine(ctx, 505, 350 - 80, 523, 350 - 80, 20, 100, 2000, now);
      drawCircle(ctx, 523.5, 360.5 - 80, 10, 21, -0.5, 0, 100, 2100, now);
      drawLine(ctx, 534, 359 - 80, 534, 382 - 80, 20, 100, 2200, now);
      drawCircle(ctx, 523.5, 382.5 - 80, 10, 21, 0, 0.5, 100, 2300, now);
      drawLine(ctx, 524, 393 - 80, 470, 393 - 80, 20, 200, 2400, now);
      drawCircle(ctx, 470.5, 382.5 - 80, 10, 21, 0.5, 1, 100, 2600, now);
      drawLine(ctx, 460, 383 - 80, 460, 319 - 80, 20, 200, 2700, now);
      drawCircle(ctx, 470.5, 319.5 - 80, 10, 21, 1, 1.5, 100, 2900, now);
      drawLine(ctx, 470, 309 - 80, 537, 309 - 80, 20, 200, 3000, now);

      now++;
      const animation = requestAnimationFrame(update);
      if (now >= (3300 / 1000) * 60) cancelAnimationFrame(animation);
    };

    update();
  }, []);

  return (
    <>
      <CanvasDiv>
        <Canvas ref={canvasUpper} width="1920" height="1080"></Canvas>
      </CanvasDiv>
      <CanvasOneDiv>
        <Canvas ref={canvasOne} width="1920" height="1080"></Canvas>
      </CanvasOneDiv>
    </>
  );
};

const CanvasDiv = styled.div`
  display: flex;
  z-index: 3;
  @media (max-width: 1023px) {
    transform: translate(-90px, -73px);
    & > canvas {
      width: 500px;
    }
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
    & > canvas {
      width: 500px;
    }
  }
  @media (min-width: 1024px) {
    transform: translate(-312px, -330px);
  }
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 960px;
  pointer-events: none;
`;

export default MainIcon;
