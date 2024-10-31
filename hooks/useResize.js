import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'utils/helpers';
import { sizeWindow } from 'styles/sizeWindow.style';
import { setWindowSize } from '../redux/slices/sizes.slice';

export const useResize = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = debounce(() => {
      const viewportWidth = window.innerWidth;
      dispatch(
        setWindowSize({
          width: viewportWidth,
          height: window.innerHeight,
          isScreenSm: viewportWidth >= sizeWindow.sm,
          isScreenMd: viewportWidth >= sizeWindow.md,
          isScreenLg: viewportWidth >= sizeWindow.lg,
          isScreenXl: viewportWidth >= sizeWindow.xl,
          isScreenXxl: viewportWidth >= sizeWindow.xxl,
        }),
      );
    }, 300);

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
};
