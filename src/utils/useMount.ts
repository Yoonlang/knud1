import { useEffect } from 'react';

export const useMount = (callback: () => void): void => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, []);
};
