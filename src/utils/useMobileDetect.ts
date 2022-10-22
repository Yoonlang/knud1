import React, { useEffect, useState } from 'react';

const useMobileDetect = (): boolean => {
  const [width, setWidth] = useState<number>(NaN);

  const handleWindowSizeChange = React.useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
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
