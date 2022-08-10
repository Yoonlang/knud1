interface quadraFunc {
  (a: number, b: number, c: number): {
    x1: number;
    x2: number;
  };
}

interface twoPoints {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

interface getRightAngleFunc {
  (x1: number, y1: number, x2: number, y2: number, bold: number): {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  };
}

// x1,y1 에서 x2,y2까지의 거리
const calcDist = ({ x1, y1, x2, y2 }: twoPoints) => {
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
};

const getQuadraTwoX: quadraFunc = (a, b, c) => {
  return {
    x1: (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a),
    x2: (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a),
  };
};

// x1, y1, x2, y2, bold를 받고, x1,y1 점에 대해 직각이고 bold / 2 거리만큼 떨어진 두 점을 반환
const getPosOfRightAnglePoints: getRightAngleFunc = (x1, y1, x2, y2, bold) => {
  // 두 점을 통한 기울기
  const lean = (y2 - y1) / (x2 - x1);
  // y = ax + b
  const a = -1 * (1 / lean);
  const b = y1 - a * x1;
  const myTwoX = getQuadraTwoX(
    a * a + 1,
    -2 * (x1 + a * y1 - a * b),
    x1 * x1 + y1 * y1 + b * b - 2 * b * y1 - (bold / 2) * (bold / 2)
  );
  return {
    x1: myTwoX.x1,
    y1: a * myTwoX.x1 + b,
    x2: myTwoX.x2,
    y2: a * myTwoX.x2 + b,
  };
};

export { calcDist, getPosOfRightAnglePoints };

// interface drawSquareProps extends drawLineProps {
//   bold: number;
// }

// const drawSquare = ({ x1, y1, x2, y2, bold, time, startTime, now }: drawSquareProps) => {
//   if (!ctx) return;
//   const pieces = (time / 1000) * 60;
//   const speed = now - (startTime / 1000) * 60;
//   if (now / 60 < startTime / 1000) return;
//   if (now - (startTime / 1000) * 60 >= pieces) return;

//   ctx.fillStyle = '#000';
//   const beginPosX = x1 * ((pieces - speed) / pieces) + x2 * (speed / pieces),
//     beginPosY = y1 * ((pieces - speed) / pieces) + y2 * (speed / pieces),
//     endPosX = x1 * ((pieces - speed + 1.5) / pieces) + x2 * ((speed - 1.5) / pieces),
//     endPosY = y1 * ((pieces - speed + 1.5) / pieces) + y2 * ((speed - 1.5) / pieces),
//     startPoints = getPosOfRightAnglePoints(beginPosX, beginPosY, x2, y2, bold),
//     endPoints = getPosOfRightAnglePoints(endPosX, endPosY, x2, y2, bold);
//   ctx.beginPath();
//   ctx.moveTo(startPoints.x1, startPoints.y1);
//   ctx.lineTo(startPoints.x2, startPoints.y2);
//   ctx.lineTo(endPoints.x2, endPoints.y2);
//   ctx.lineTo(endPoints.x1, endPoints.y1);
//   ctx.fill();
// };
