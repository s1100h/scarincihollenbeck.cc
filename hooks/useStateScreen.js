import { useEffect, useState } from 'react';
import { sizeWindow } from 'styles/sizeWindow.style';
import { useMediaQuery } from 'react-responsive';

export default function useStateScreen() {
  const [isScreenState, setScreenState] = useState({
    isTabletScreen: false,
    isDesktopScreen: false,
  });

  const isTablet = useMediaQuery({ query: `(max-width: ${sizeWindow.md})` });
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: ${sizeWindow.sm})`,
  });
  useEffect(() => {
    if (isTablet) {
      setScreenState((prev) => ({
        isTabletScreen: true,
        isDesktopScreen: prev.isDesktopScreen,
      }));
    }
    if (isDesktopOrLaptop) {
      setScreenState((prev) => ({
        isTabletScreen: prev.isTabletScreen,
        isDesktopScreen: true,
      }));
    }
  }, []);
  const { isTabletScreen, isDesktopScreen } = isScreenState;
  return {
    isTabletScreen,
    isDesktopScreen,
  };
}
