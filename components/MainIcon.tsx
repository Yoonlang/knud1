import { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface drawLineFunc {
  (
    ctx: CanvasRenderingContext2D | null,
    canvas: HTMLCanvasElement,
    x1R: number,
    y1R: number,
    x2R: number,
    y2R: number,
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

const MainIcon = () => {
  const canvasUpper = useRef<HTMLCanvasElement>(null);
  const canvasGradation = useRef<HTMLCanvasElement>(null);
  const canvasCurtain = useRef<HTMLCanvasElement>(null);

  const drawLine: drawLineFunc = (ctx, canvas, x1R, y1R, x2R, y2R, bold, time, startTime, now) => {
    if (!ctx) return;
    const pieces = (time / 1000) * 60;
    const speed = now - (startTime / 1000) * 60;
    if (now / 60 < startTime / 1000) return;
    if (now - (startTime / 1000) * 60 >= pieces) return;
    const x1 = x1R * canvas.width,
      y1 = y1R * canvas.height,
      x2 = x2R * canvas.width,
      y2 = y2R * canvas.height;
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = bold;
    ctx.beginPath();
    ctx.moveTo(
      x1 * ((pieces - speed) / pieces) + x2 * (speed / pieces),
      y1 * ((pieces - speed) / pieces) + y2 * (speed / pieces)
    );
    ctx.lineTo(
      x1 * ((pieces - speed - 1.2) / pieces) + x2 * ((speed + 1.2) / pieces),
      y1 * ((pieces - speed - 1.2) / pieces) + y2 * ((speed + 1.2) / pieces)
    );
    console.log(
      x1 * ((pieces - speed) / pieces) + x2 * (speed / pieces),
      x1 * ((pieces - speed - 1.2) / pieces) + x2 * ((speed + 1.2) / pieces)
    );
    ctx.stroke();
  };

  const drawCircle: drawCircleFunc = (ctx, x, y, radius, bold, start, end, time, startTime, now, reverse = false) => {
    if (!ctx) return;
    const pieces = (time / 1000) * 60;
    const speed = now - (startTime / 1000) * 60;
    if (now / 60 < startTime / 1000) return;
    if (now - (startTime / 1000) * 60 >= pieces) return;
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = bold;
    ctx.beginPath();
    ctx.arc(
      x,
      y,
      radius,
      Math.PI * ((start * (pieces - speed)) / pieces + (end * speed) / pieces),
      Math.PI * ((start * (pieces - speed - 1.2)) / pieces + (end * (speed + 1.2)) / pieces),
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
      Math.PI * ((start * (pieces - speed - 1.2)) / pieces + (end * (speed + 1.2)) / pieces),
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

  const layer = (ctx: any, canvas: any) => {
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.width, 0);
    ctx.lineTo(0, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
  };

  useEffect(() => {
    if (!canvasUpper.current) return;
    const canvas: HTMLCanvasElement = canvasUpper.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    const resize = () => {
      if (!canvasUpper.current) return;
      canvas.width = document.body.clientWidth * pixelRatio;
      canvas.height = document.body.clientHeight * pixelRatio;
    };
    resize();

    // layer(ctx, canvas);

    var now = 0;
    const update = () => {
      if (!ctx) return;
      // //1
      drawLine(ctx, canvas, 0, 0, 0, 1, 100, 500, 0, now);
      // drawCircle(ctx, 81, 102, 46, 51, 0, 0.3, 100, 200, now);
      // drawLine(ctx, canvas, 116, 132, 56, 254, 51, 200, 300, now);

      // //2
      // drawLine(ctx, canvas, 197, 70.2, 321, 70.2, 35, 200, 500, now);
      // drawCircle(ctx, 310.3, 88, 17.5, 35, -0.5, 0.1, 100, 700, now);
      // drawEllipse(ctx, 303, 92, 9, 7.5, 5, -0.5, 0.1, 100, 700, now);
      // drawLine(ctx, canvas, 327.6, 87, 327.6, 134, 35, 200, 800, now);
      // drawCircle(ctx, 310, 129.4, 17.5, 35, 0, 0.6, 100, 1000, now);
      // drawEllipse(ctx, 303, 124, 9, 7.5, 5, 0, 0.6, 100, 1000, now);
      // drawLine(ctx, canvas, 305, 146.5, 205, 146.5, 35, 200, 1100, now);
      // drawCircle(ctx, 219.5, 164, 17.5, 35, -0.5, -1.1, 100, 1300, now, true);
      // drawEllipse(ctx, 228, 169, 9, 7.5, 5, -0.5, -1.1, 100, 1300, now, true);
      // drawLine(ctx, canvas, 202.5, 168, 202.5, 241, 35, 200, 1400, now);
      // drawLine(ctx, canvas, 227, 217.5, 297, 217.5, 35, 100, 1600, now);

      // //6
      // drawLine(ctx, canvas, 469, 217.5, 492, 217.5, 35, 100, 2000, now);
      // drawCircle(ctx, 488, 235, 17.5, 35, -0.5, 0.1, 100, 2100, now);
      // drawEllipse(ctx, 481, 239, 9, 7.5, 5, -0.5, 0.1, 100, 2100, now);
      // drawLine(ctx, canvas, 505.6, 244, 505.6, 286, 35, 100, 2200, now);
      // drawCircle(ctx, 488, 276, 17.5, 35, 0, 0.6, 100, 2300, now);
      // drawEllipse(ctx, 481, 272, 9, 7.5, 5, 0, 0.6, 100, 2300, now);
      // drawLine(ctx, canvas, 483, 293, 383, 293, 35, 200, 2400, now);
      // drawCircle(ctx, 393.2, 275.3, 17.5, 35, 0.5, 1.1, 100, 2600, now);
      // drawEllipse(ctx, 401, 271, 9, 7.5, 5, 0.5, 1.1, 100, 2600, now);
      // drawLine(ctx, canvas, 376, 268, 376, 153, 35, 200, 2700, now);
      // drawCircle(ctx, 394.2, 163, 17.5, 35, 1, 1.6, 100, 2900, now);
      // drawEllipse(ctx, 400.5, 169, 9, 7.5, 5, 1, 1.6, 100, 2900, now);
      // drawLine(ctx, canvas, 408, 145.5, 532, 145.5, 35, 200, 3000, now);

      now++;
      const animation = requestAnimationFrame(update);
      if (now >= (6000 / 1000) * 60) cancelAnimationFrame(animation);
    };

    update();
  }, []);

  useEffect(() => {
    if (!canvasCurtain.current) return;
    const canvas: HTMLCanvasElement = canvasCurtain.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    const resize = () => {
      canvas.width = document.body.clientWidth * pixelRatio;
      canvas.height = document.body.clientHeight * pixelRatio;
    };
    resize();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.moveTo(102, 56);
    ctx.lineTo(102, 368);
    ctx.lineTo(152, 368);
    ctx.lineTo(152, 56);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(283, 200);
    ctx.lineTo(283, 235);
    ctx.lineTo(465, 235);
    ctx.lineTo(465, 200);
    ctx.fill();

    var now = 0;
    const update = () => {
      clearRect(ctx, 102, 56, 152, 368, true, 1000, 200, now);
      clearRect(ctx, 283, 200, 465, 235, false, 1000, 200, now);
      const animation = requestAnimationFrame(update);
      now++;
      if (now > (6000 / 1000) * 60) cancelAnimationFrame(animation);
    };
    update();
  }, []);

  useEffect(() => {
    if (!canvasGradation.current) return;
    const canvas: HTMLCanvasElement = canvasGradation.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    const resize = () => {
      canvas.width = document.body.clientWidth * pixelRatio;
      canvas.height = document.body.clientHeight * pixelRatio;
    };
    resize();

    const gradientOne = ctx.createLinearGradient(102, 56, 152, 428);
    gradientOne.addColorStop(0, 'rgb(14, 14, 14)');
    gradientOne.addColorStop(0.5, '#fff');
    gradientOne.addColorStop(1, 'rgb(37, 37, 37)');
    ctx.fillStyle = gradientOne;
    ctx.fillRect(103, 57, 48, 310);

    const gradientTwo = ctx.createLinearGradient(283, 0, 465, 0);
    gradientTwo.addColorStop(0, '#fff');
    gradientTwo.addColorStop(0.4, '#555');
    gradientTwo.addColorStop(0.5, '#000');
    gradientTwo.addColorStop(0.6, '#555');
    gradientTwo.addColorStop(1, '#fff');
    ctx.fillStyle = gradientTwo;
    ctx.fillRect(284, 201, 180, 33);
  }, []);

  return (
    <CanvasDiv>
      {/* <Canvas ref={canvasGradation}></Canvas> */}
      {/* <Canvas ref={canvasCurtain}></Canvas> */}
      <Canvas ref={canvasUpper}></Canvas>
    </CanvasDiv>
  );
};

const CanvasDiv = styled.div`
  display: flex;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  /* pointer-events: none; */
`;

export default MainIcon;
