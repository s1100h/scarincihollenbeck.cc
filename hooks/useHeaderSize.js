import { useEffect, useContext } from 'react';
import { SizesContext } from 'contexts/SizesContext';
import throttle from 'lodash.throttle';

const useHeaderSize = (headerRef, scrollDirection, viewportWidth) => {
  const { setHeaderSize } = useContext(SizesContext);
  useEffect(() => {
    const updateHeaderSize = throttle(() => {
      if (headerRef && headerRef.current && scrollDirection === 'down') {
        setHeaderSize({
          width: headerRef.current.offsetWidth,
          height:
            viewportWidth >= 768
              ? headerRef.current.offsetHeight - 48
              : headerRef.current.offsetHeight - 38,
        });
      } else if (scrollDirection === 'up') {
        setHeaderSize({
          width: headerRef.current.offsetWidth,
          height: headerRef.current.offsetHeight,
        });
      }
    }, 200);

    updateHeaderSize();

    window.addEventListener('resize', updateHeaderSize);
    return () => window.removeEventListener('resize', updateHeaderSize);
  }, [scrollDirection]);
};

export default useHeaderSize;
