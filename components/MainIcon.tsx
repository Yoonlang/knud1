import { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface drawLineFunc {
  (
    ctx: CanvasRenderingContext2D | null,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    bold: number,
    time: number,
    startTime: number,
    now: number
  ): void;
}

interface drawCircleFunc {
  (
    ctx: CanvasRenderingContext2D | null,
    x: number,
    y: number,
    radius: number,
    bold: number,
    start: number,
    end: number,
    time: number,
    startTime: number,
    now: number,
    reverse?: boolean
  ): void;
}

interface drawEllipseFunc {
  (
    ctx: CanvasRenderingContext2D | null,
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    bold: number,
    start: number,
    end: number,
    time: number,
    startTime: number,
    now: number,
    reverse?: boolean
  ): void;
}

interface clearRectFunc {
  (
    ctx: CanvasRenderingContext2D | null,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    isCol: boolean,
    time: number,
    startTime: number,
    now: number
  ): void;
}

const drawLine: drawLineFunc = (ctx, x1, y1, x2, y2, bold, time, startTime, now) => {
  if (!ctx) return;
  const pieces = (time / 1000) * 60;
  const speed = now - (startTime / 1000) * 60;
  if (now / 60 < startTime / 1000) return;
  if (now - (startTime / 1000) * 60 >= pieces) return;
  x1 *= 2;
  y1 *= 2;
  x2 *= 2;
  y2 *= 2;
  bold = bold * 2;
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = bold;
  ctx.beginPath();
  ctx.moveTo(
    x1 * ((pieces - speed) / pieces) + x2 * (speed / pieces),
    y1 * ((pieces - speed) / pieces) + y2 * (speed / pieces)
  );
  ctx.lineTo(
    x1 * ((pieces - speed - 1.25) / pieces) + x2 * ((speed + 1.25) / pieces),
    y1 * ((pieces - speed - 1.25) / pieces) + y2 * ((speed + 1.25) / pieces)
  );
  ctx.stroke();
};

const drawCircle: drawCircleFunc = (ctx, x, y, radius, bold, start, end, time, startTime, now, reverse = false) => {
  if (!ctx) return;
  const pieces = (time / 1000) * 60;
  const speed = now - (startTime / 1000) * 60;
  if (now / 60 < startTime / 1000) return;
  if (now - (startTime / 1000) * 60 >= pieces) return;
  x *= 2;
  y *= 2;
  radius *= 2;
  bold *= 2;
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = bold;
  ctx.beginPath();
  ctx.arc(
    x,
    y,
    radius,
    Math.PI * ((start * (pieces - speed)) / pieces + (end * speed) / pieces),
    Math.PI * ((start * (pieces - speed - 1.25)) / pieces + (end * (speed + 1.25)) / pieces),
    reverse
  );
  ctx.stroke();
};

const drawEllipse: drawEllipseFunc = (
  ctx,
  x,
  y,
  radiusX,
  radiusY,
  bold,
  start,
  end,
  time,
  startTime,
  now,
  reverse = false
) => {
  if (!ctx) return;
  const pieces = (time / 1000) * 60;
  const speed = now - (startTime / 1000) * 60;
  if (now / 60 < startTime / 1000) return;
  if (now - (startTime / 1000) * 60 >= pieces) return;
  x *= 2;
  y *= 2;
  radiusX *= 2;
  radiusY *= 2;
  bold *= 2;
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = bold;
  ctx.beginPath();
  ctx.ellipse(
    x,
    y,
    radiusX,
    radiusY,
    0,
    Math.PI * ((start * (pieces - speed)) / pieces + (end * speed) / pieces),
    Math.PI * ((start * (pieces - speed - 1.25)) / pieces + (end * (speed + 1.25)) / pieces),
    reverse
  );
  ctx.stroke();
};

const clearRect: clearRectFunc = (ctx, x1, y1, x2, y2, isCol, time, startTime, now) => {
  if (!ctx) return;
  const pieces = (time / 1000) * 60;
  const speed = now - (startTime / 1000) * 60;
  if (now / 60 < startTime / 1000) return;
  if (now - (startTime / 1000) * 60 >= pieces) return;
  x1 *= 2;
  y1 *= 2;
  x2 *= 2;
  y2 *= 2;
  if (isCol) {
    ctx.clearRect(
      x1,
      y1 * ((pieces - speed) / pieces) + y2 * (speed / pieces),
      Math.abs(x2 - x1),
      Math.abs((y1 - y2) / pieces) + 1
    );
  } else {
    ctx.clearRect(
      x1 * ((pieces - speed) / pieces) + x2 * (speed / pieces),
      y1,
      Math.abs((x1 - x2) / pieces) + 1,
      Math.abs(y2 - y1)
    );
  }
};

const MainIcon = () => {
  const canvasOne = useRef<HTMLCanvasElement>(null);
  const canvasUpper = useRef<HTMLCanvasElement>(null);
  const canvasGradation = useRef<HTMLCanvasElement>(null);
  const canvasCurtain = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasOne.current) return;
    const canvas: HTMLCanvasElement = canvasOne.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    var now = 0;
    const update = () => {
      if (!ctx) return;
      //1
      drawLine(ctx, 278, 0, 278, 103, 70, 200, 0, now);
      drawCircle(ctx, 243, 104, 35, 70, 0, 0.3, 100, 200, now);
      drawLine(ctx, 272, 124, 136, 302, 70, 200, 300, now);
      now++;
      const animation = requestAnimationFrame(update);
      if (now >= (600 / 1000) * 60) cancelAnimationFrame(animation);
    };

    update();
  });

  useEffect(() => {
    if (!canvasUpper.current) return;
    const canvas: HTMLCanvasElement = canvasUpper.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    var now = 0;
    const update = () => {
      if (!ctx) return;
      //2
      drawLine(ctx, 354, 263 - 80, 420, 263 - 80, 20, 200, 500, now);
      drawCircle(ctx, 420.5, 273.5 - 80, 10, 21, -0.5, 0.1, 100, 700, now);
      // drawEllipse(ctx, 303, 92, 9, 7.5, 5, -0.5, 0.1, 100, 700, now);
      drawLine(ctx, 431, 273 - 80, 431, 298 - 80, 20, 200, 800, now);
      drawCircle(ctx, 420.5, 298.5 - 80, 10, 21, 0, 0.5, 100, 1000, now);
      // drawEllipse(ctx, 303, 124, 9, 7.5, 5, 0, 0.6, 100, 1000, now);
      drawLine(ctx, 421, 309 - 80, 374, 309 - 80, 20, 200, 1100, now);
      drawCircle(ctx, 373.5, 319.5 - 80, 10, 21, -0.5, -1, 100, 1300, now, true);
      // drawEllipse(ctx, 228, 169, 9, 7.5, 5, -0.5, -1.1, 100, 1300, now, true);
      drawLine(ctx, 363, 318 - 80, 363, 359 - 80, 20, 200, 1400, now);
      drawLine(ctx, 354, 350 - 80, 408, 350 - 80, 20, 100, 1600, now);

      // //6
      drawLine(ctx, 505, 350 - 80, 523, 350 - 80, 20, 100, 2000, now);
      drawCircle(ctx, 523.5, 360.5 - 80, 10, 21, -0.5, 0, 100, 2100, now);
      // drawEllipse(ctx, 481, 239, 9, 7.5, 5, -0.5, 0.1, 100, 2100, now);
      drawLine(ctx, 534, 359 - 80, 534, 382 - 80, 20, 100, 2200, now);
      drawCircle(ctx, 523.5, 382.5 - 80, 10, 21, 0, 0.5, 100, 2300, now);
      // drawEllipse(ctx, 481, 272, 9, 7.5, 5, 0, 0.6, 100, 2300, now);
      drawLine(ctx, 524, 393 - 80, 470, 393 - 80, 20, 200, 2400, now);
      drawCircle(ctx, 470.5, 382.5 - 80, 10, 21, 0.5, 1, 100, 2600, now);
      // drawEllipse(ctx, 401, 271, 9, 7.5, 5, 0.5, 1.1, 100, 2600, now);
      drawLine(ctx, 460, 383 - 80, 460, 319 - 80, 20, 200, 2700, now);
      drawCircle(ctx, 470.5, 319.5 - 80, 10, 21, 1, 1.5, 100, 2900, now);
      // drawEllipse(ctx, 400.5, 169, 9, 7.5, 5, 1, 1.6, 100, 2900, now);
      drawLine(ctx, 470, 309 - 80, 537, 309 - 80, 20, 200, 3000, now);

      now++;
      const animation = requestAnimationFrame(update);
      if (now >= (3300 / 1000) * 60) cancelAnimationFrame(animation);
    };

    update();
  }, []);

  useEffect(() => {
    if (!canvasCurtain.current) return;
    const canvas: HTMLCanvasElement = canvasCurtain.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.moveTo(407 * 2, 259 * 2);
    ctx.lineTo(407 * 2, 281 * 2);
    ctx.lineTo(507 * 2, 281 * 2);
    ctx.lineTo(507 * 2, 259 * 2);
    ctx.fill();

    var now = 0;
    const update = () => {
      clearRect(ctx, 408, 260, 506, 280, false, 300, 1700, now);
      const animation = requestAnimationFrame(update);
      now++;
      if (now > (2100 / 1000) * 60) cancelAnimationFrame(animation);
    };
    update();
  }, []);

  useEffect(() => {
    if (!canvasGradation.current) return;
    const canvas: HTMLCanvasElement = canvasGradation.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gradientOne = ctx.createLinearGradient(408 * 2, 0, 506 * 2, 0);
    gradientOne.addColorStop(0.1, '#fff');
    gradientOne.addColorStop(0.4, '#444');
    gradientOne.addColorStop(0.5, '#000');
    gradientOne.addColorStop(0.6, '#444');
    gradientOne.addColorStop(0.9, '#fff');
    ctx.fillStyle = gradientOne;
    ctx.fillRect(408 * 2, 260 * 2, 98 * 2, 20 * 2);
  }, []);

  return (
    <>
      <CanvasDiv>
        <Canvas ref={canvasGradation} width="1920" height="1080"></Canvas>
        <Canvas ref={canvasCurtain} width="1920" height="1080"></Canvas>
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
  transform: translate(-312px, -295px);
  z-index: 1;
`;

const CanvasOneDiv = styled.div`
  display: flex;
  transform: translate(-312px, -330px);
  z-index: 1;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 960px;
  pointer-events: none;
`;

export default MainIcon;
