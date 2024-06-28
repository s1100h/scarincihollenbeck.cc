import { useState, useEffect } from 'react';
import { sizeWindow } from 'styles/sizeWindow.style';

export const useResize = () => {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width >= sizeWindow.sm,
    isScreenMd: width >= sizeWindow.md,
    isScreenLg: width >= sizeWindow.lg,
    isScreenXl: width >= sizeWindow.xl,
    isScreenXxl: width >= sizeWindow.xxl,
  };
};
