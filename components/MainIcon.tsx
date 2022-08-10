import { useEffect, useRef } from 'react';

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
    now: number
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

  const drawLine: drawLineFunc = (ctx, x1, y1, x2, y2, bold, time, startTime, now) => {
    if (!ctx) return;
    const pieces = (time / 1000) * 60;
    const speed = now - (startTime / 1000) * 60;
    if (now / 60 < startTime / 1000) return;
    if (now - (startTime / 1000) * 60 >= pieces) return;
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = bold;
    ctx.beginPath();
    ctx.moveTo(
      x1 * ((pieces - speed) / pieces) + x2 * (speed / pieces),
      y1 * ((pieces - speed) / pieces) + y2 * (speed / pieces)
    );
    ctx.lineTo(
      x1 * ((pieces - speed + 1.5) / pieces) + x2 * ((speed - 1.5) / pieces),
      y1 * ((pieces - speed + 1.5) / pieces) + y2 * ((speed - 1.5) / pieces)
    );
    ctx.stroke();
  };

  const drawCircle: drawCircleFunc = (ctx, x, y, radius, bold, start, end, time, startTime, now) => {
    if (!ctx) return;
    const pieces = (time / 1000) * 60;
    const speed = now - (startTime / 1000) * 60;
    if (now / 60 < startTime / 1000) return;
    if (now - (startTime / 1000) * 60 >= pieces) return;
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = bold;
    ctx.beginPath();
    ctx.arc(x, y, radius, Math.PI * start, (Math.PI * (end * speed)) / pieces);
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
        x2 - x1,
        (y2 - y1 + 30) * (1 / pieces)
      );
    } else {
      ctx.clearRect(x1 * ((pieces - speed) / pieces) + x2 * (speed / pieces), y1, (x2 - x1) * (1 / pieces), y1 - y2);
    }
  };

  useEffect(() => {
    if (!canvasUpper.current) return;
    const canvas: HTMLCanvasElement = canvasUpper.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = 700;
    canvas.height = 700;

    var now = 0;
    const update = () => {
      if (!ctx) return;
      drawLine(ctx, 127, 53, 127, 108, 51, 200, 0, now);
      drawCircle(ctx, 81, 102, 46, 51, 0, 0.3, 100, 200, now);
      drawLine(ctx, 116, 132, 56, 204, 51, 200, 300, now);
      const animation = requestAnimationFrame(update);
      now++;
      // cancelAnimationFrame(animation);
    };

    update();
  }, []);

  useEffect(() => {
    if (!canvasCurtain.current) return;
    const canvas: HTMLCanvasElement = canvasCurtain.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = 700;
    canvas.height = 700;

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(700, 0);
    ctx.lineTo(700, 700);
    ctx.lineTo(0, 700);
    ctx.fill();

    var now = 0;
    const update = () => {
      clearRect(ctx, 102, 56, 152, 368, true, 600, 200, now);
      const animation = requestAnimationFrame(update);
      now++;
      if (now > (800 / 1000) * 60) cancelAnimationFrame(animation);
    };
    update();
  }, []);

  useEffect(() => {
    if (!canvasGradation.current) return;
    const canvas: HTMLCanvasElement = canvasGradation.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = 700;
    canvas.height = 700;

    const gradient = ctx.createLinearGradient(102, 56, 152, 428);
    gradient.addColorStop(0, 'rgb(14, 14, 14)');
    gradient.addColorStop(0.5, '#fff');
    gradient.addColorStop(1, 'rgb(37, 37, 37)');
    ctx.fillStyle = gradient;
    ctx.fillRect(102, 56, 50, 368);
  }, []);

  return (
    <>
      <div className="canvasDiv">
        <canvas ref={canvasGradation} width="1920" height="1080"></canvas>
        <canvas ref={canvasCurtain} width="1920" height="1080"></canvas>
        <canvas ref={canvasUpper} width="1920" height="1080"></canvas>
      </div>
      <style jsx>{`
        .canvasDiv {
          display: flex;
          overflow: hidden;
        }
        canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 350px;
          height: 350px;
        }
      `}</style>
    </>
  );
};

export default MainIcon;
