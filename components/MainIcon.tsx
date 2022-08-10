import { useEffect, useRef } from 'react';
import { getPosOfRightAnglePoints } from '../others/myMath';

interface drawLineFunc {
  (x1: number, y1: number, x2: number, y2: number, bold: number, time: number, startTime: number, now: number): void;
}

interface drawCircleFunc {
  (
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

const MainIcon = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas: HTMLCanvasElement = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 700;
    canvas.height = 700;

    const drawLine: drawLineFunc = (x1, y1, x2, y2, bold, time, startTime, now) => {
      if (!ctx) return;
      const pieces = (time / 1000) * 60;
      const speed = now - (startTime / 1000) * 60;
      if (now / 60 < startTime / 1000) return;
      if (now - (startTime / 1000) * 60 >= pieces) return;
      ctx.fillStyle = '#000';
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

    const drawCircle: drawCircleFunc = (x, y, radius, bold, start, end, time, startTime, now) => {
      if (!ctx) return;
      const pieces = (time / 1000) * 60;
      const speed = now - (startTime / 1000) * 60;
      if (now / 60 < startTime / 1000) return;
      if (now - (startTime / 1000) * 60 >= pieces) return;
      ctx.strokeStyle = '#000';
      ctx.lineWidth = bold;
      ctx.beginPath();
      ctx.arc(x, y, radius, Math.PI * start, (Math.PI * (end * speed)) / pieces);
      ctx.stroke();
    };

    var now = 0;
    const update = () => {
      if (!ctx) return;
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawLine(128, 53, 128, 108, 51, 200, 0, now);
      drawCircle(81, 102, 47, 51, 0, 0.3, 100, 200, now);
      drawLine(116, 132, 56, 204, 51, 200, 300, now);
      const animation = requestAnimationFrame(update);
      now++;

      // cancelAnimationFrame(animation);
    };

    update();
  }, []);

  return (
    <>
      <div className="canvasDiv">
        <canvas ref={canvasRef} width="1920" height="1080"></canvas>
      </div>
      <style jsx>{`
        .canvasDiv {
          display: flex;
          overflow: hidden;
        }
        canvas {
          width: 700px;
          height: 700px;
        }
      `}</style>
    </>
  );
};

export default MainIcon;
