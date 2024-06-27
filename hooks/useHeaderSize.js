import { useEffect, useContext } from 'react';
import { HeaderSizeContext } from 'contexts/HeaderSizeContext';

const useHeaderSize = (headerRef) => {
  const { setHeaderSize } = useContext(HeaderSizeContext);
  useEffect(() => {
    const updateHeaderSize = () => {
      if (headerRef && headerRef.current) {
        setHeaderSize({
          width: headerRef.current.offsetWidth,
          height: headerRef.current.offsetHeight,
        });
      }
    };

    updateHeaderSize();

    window.addEventListener('resize', updateHeaderSize);
    return () => window.removeEventListener('resize', updateHeaderSize);
  }, []);
};

export default useHeaderSize;
