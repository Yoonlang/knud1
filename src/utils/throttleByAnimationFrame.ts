export const throttleByAnimationFrame = (callback: () => void): (() => void) => {
  let ticking = false;

  const requestThrottle = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };

  return requestThrottle;
};
