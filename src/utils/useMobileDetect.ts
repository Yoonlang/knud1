import React, { useEffect, useState } from 'react';
import { throttleByAnimationFrame } from './throttleByAnimationFrame';

const useMobileDetect = (): boolean => {
  const [width, setWidth] = useState<number>(NaN);

  const handleWindowSizeChange = React.useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleWindowSizeChangeWithThrottle = throttleByAnimationFrame(handleWindowSizeChange);

    if (typeof window !== undefined) {
      setWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowSizeChangeWithThrottle);
      return () => {
        window.removeEventListener('resize', handleWindowSizeChangeWithThrottle);
      };
    }
  }, [handleWindowSizeChange]);

  const isMobile = React.useMemo(() => {
    if (!width || isNaN(width)) {
      return false;
    }

    return width <= 1023;
  }, [width]);

  return isMobile;
};

export default useMobileDetect;
