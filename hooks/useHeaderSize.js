import { useEffect } from 'react';
import throttle from 'lodash.throttle';
import { useDispatch } from 'react-redux';
import { setHeaderSize } from '../redux/slices/sizes.slice';

const useHeaderSize = (headerRef, scrollDirection, viewportWidth) => {
  const dispatch = useDispatch();

  const updateHeaderSize = () => {
    if (headerRef && headerRef.current) {
      const newHeight = scrollDirection === 'down'
        ? viewportWidth >= 768
          ? headerRef.current.offsetHeight - 48
          : headerRef.current.offsetHeight - 38
        : headerRef.current.offsetHeight;
      dispatch(
        setHeaderSize({
          width: headerRef.current.offsetWidth,
          height: newHeight,
        }),
      );
    }
  };

  useEffect(() => {
    const throttledUpdateHeaderSize = throttle(updateHeaderSize, 200);

    throttledUpdateHeaderSize();

    window.addEventListener('resize', throttledUpdateHeaderSize);
    return () => window.removeEventListener('resize', throttledUpdateHeaderSize);
  }, [scrollDirection]);
};

export default useHeaderSize;
