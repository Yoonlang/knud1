import { useEffect, useRef } from 'react';

const MainIcon = () => {
  const canvasRef = useRef<>();

  return (
    <>
      <div className="canvasDiv">
        <canvas ref={canvasRef}></canvas>
      </div>
      <style jsx>{`
        .canvasDiv {
          display: flex;
          overflow: hidden;
        }
        canvas {
          width: 500px;
          height: 500px;
        }
      `}</style>
    </>
  );
};

export default MainIcon;
