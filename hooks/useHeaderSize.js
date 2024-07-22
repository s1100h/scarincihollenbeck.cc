import { useEffect, useContext } from 'react';
import { SizesContext } from 'contexts/SizesContext';
import throttle from 'lodash.throttle';

const useHeaderSize = (headerRef, scrollDirection, viewportWidth) => {
  const { setHeaderSize } = useContext(SizesContext);

  const updateHeaderSize = () => {
    if (headerRef && headerRef.current) {
      const newHeight = scrollDirection === 'down'
        ? viewportWidth >= 768
          ? headerRef.current.offsetHeight - 48
          : headerRef.current.offsetHeight - 38
        : headerRef.current.offsetHeight;
      setHeaderSize({
        width: headerRef.current.offsetWidth,
        height: newHeight,
      });
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
