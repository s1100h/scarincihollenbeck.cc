import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import throttle from 'lodash.throttle';
import { setHeaderSize, setScrollDirection } from '../redux/slices/sizes.slice';

const useResponsiveHeader = (headerRef) => {
  const dispatch = useDispatch();
  const { isScreenMd } = useSelector((state) => state.sizes.viewportSize);
  const { scrollDirection } = useSelector((state) => state.sizes);

  const updateHeaderSize = (direction) => {
    if (headerRef && headerRef.current) {
      const newHeight = direction === 'down'
        ? isScreenMd
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
    let lastScrollY = window.scrollY;

    const handleScroll = throttle(() => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';

      if (
        direction !== scrollDirection
        && (scrollY - lastScrollY > 6 || scrollY - lastScrollY < -6)
      ) {
        dispatch(setScrollDirection(direction));
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    }, 50);

    updateHeaderSize(scrollDirection);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollDirection, isScreenMd]);

  return scrollDirection;
};

export default useResponsiveHeader;
