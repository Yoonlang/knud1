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

const drawLine: drawLineFunc = (ctx, x1, y1, x2, y2, bold, time, startTime, now, gradient) => {
  if (!ctx) return;
  const pieces = (time / 1000) * 60;
  const speed = now - (startTime / 1000) * 60;
  if (now / 60 < startTime / 1000) return;
  if (now - (startTime / 1000) * 60 >= pieces) return;
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
    Math.PI * ((start * (pieces - speed - 1.25)) / pieces + (end * (speed + 1.25)) / pieces),
    reverse
  );
  ctx.stroke();
};

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
    Math.PI * ((start * (pieces - speed - 1.25)) / pieces + (end * (speed + 1.25)) / pieces),
    reverse
  );
  ctx.stroke();
};

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

interface drawFunc {
  (ctx: CanvasRenderingContext2D, now: number): void;
}

const drawOne: drawFunc = (ctx, now) => {
  drawLine(ctx, 556, 0, 556, 206, 140, 200, 0, now);
  drawCircle(ctx, 486, 208, 70, 140, 0, 0.3, 100, 200, now);
  drawLine(ctx, 544, 248, 272, 604, 140, 200, 300, now);
};

const drawTwentySix: drawFunc = (ctx, now) => {
  drawLine(ctx, 708, 366, 840, 366, 40, 100, 250, now);
  drawCircle(ctx, 841, 387, 20, 42, -0.5, 0.1, 50, 350, now);
  drawLine(ctx, 862, 386, 862, 436, 40, 100, 400, now);
  drawCircle(ctx, 841, 437, 20, 42, 0, 0.5, 50, 500, now);
  drawLine(ctx, 842, 458, 748, 458, 40, 100, 550, now);
  drawCircle(ctx, 747, 479, 20, 42, -0.5, -1, 50, 650, now, true);
  drawLine(ctx, 726, 476, 726, 556, 40, 100, 700, now);
  drawLine(ctx, 708, 540, 816, 540, 40, 50, 800, now);

  const gradient = ctx.createLinearGradient(816, 540, 1016, 540);
  gradient.addColorStop(0, '#fff');
  gradient.addColorStop(0.5, '#000');
  gradient.addColorStop(1, '#fff');
  drawLine(ctx, 816, 540, 1010, 540, 40, 150, 850, now, gradient);

  drawLine(ctx, 1010, 540, 1046, 540, 40, 50, 1000, now);
  drawCircle(ctx, 1047, 561, 20, 42, -0.5, 0, 50, 1050, now);
  drawLine(ctx, 1068, 558, 1068, 604, 40, 50, 1100, now);
  drawCircle(ctx, 1047, 605, 20, 42, 0, 0.5, 50, 1150, now);
  drawLine(ctx, 1048, 626, 940, 626, 40, 100, 1200, now);
  drawCircle(ctx, 941, 605, 20, 42, 0.5, 1, 50, 1300, now);
  drawLine(ctx, 920, 606, 920, 478, 40, 100, 1350, now);
  drawCircle(ctx, 941, 479, 20, 42, 1, 1.5, 50, 1450, now);
  drawLine(ctx, 940, 458, 1074, 458, 40, 100, 1500, now);
};

export { drawLine, drawCircle, drawEllipse, clearRect };
export { drawOne, drawTwentySix };
