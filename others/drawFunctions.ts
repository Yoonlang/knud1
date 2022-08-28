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
    now: number,
    gradient?: CanvasGradient
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

const drawLine: drawLineFunc = (ctx, x1, y1, x2, y2, bold, time, startTime, now, gradient) => {
  if (!ctx) return;
  time /= 2;
  startTime /= 2;
  const pieces = (time / 1000) * 60;
  const speed = now - (startTime / 1000) * 60;
  if (now / 60 < startTime / 1000) return;
  if (now - (startTime / 1000) * 60 >= pieces) return;
  x1 *= 2;
  y1 *= 2;
  x2 *= 2;
  y2 *= 2;
  bold = bold * 2;
  ctx.strokeStyle = gradient ? gradient : '#fff';
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
  time /= 2;
  startTime /= 2;
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
  time /= 2;
  startTime /= 2;
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
  time /= 2;
  startTime /= 2;
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

export { drawLine, drawCircle, drawEllipse, clearRect };
