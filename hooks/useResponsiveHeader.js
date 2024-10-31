import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setHeaderSize } from '../redux/slices/sizes.slice';

const useResponsiveHeader = (headerRef, scrollDirection) => {
  const dispatch = useDispatch();
  const { isScreenMd } = useSelector((state) => state.sizes.viewportSize);

  useEffect(() => {
    if (headerRef && headerRef.current) {
      const newHeight = scrollDirection === 'down'
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
  }, [scrollDirection, isScreenMd]);
};

export default useResponsiveHeader;
