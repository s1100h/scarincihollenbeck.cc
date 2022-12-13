import { useEffect, useState } from 'react';
import { sizeWindow } from 'styles/sizeWindow.style';
import { useMediaQuery } from 'react-responsive';

export default function useStateScreen() {
  const [isScreenState, setScreenState] = useState({
    isBigTablet: false,
    isTabletScreen: false,
    isDesktopScreen: false,
  });

  const isBigTablet = useMediaQuery({ query: `(max-width: ${sizeWindow.lg})` });
  const isTablet = useMediaQuery({ query: `(max-width: ${sizeWindow.md})` });
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: ${sizeWindow.sm})`,
  });
  useEffect(() => {
    if (isTablet) {
      setScreenState((prev) => ({
        isBigTablet: false,
        isTabletScreen: true,
        isDesktopScreen: prev.isDesktopScreen,
      }));
    }
    if (isDesktopOrLaptop) {
      setScreenState((prev) => ({
        isBigTablet: prev.isBigTablet,
        isTabletScreen: prev.isTabletScreen,
        isDesktopScreen: true,
      }));
    }
    if (isBigTablet) {
      setScreenState((prev) => ({
        isBigTablet: true,
        isTabletScreen: prev.isTabletScreen,
        isDesktopScreen: prev.isDesktopScreen,
      }));
    }
  }, []);
  const { isTabletScreen, isDesktopScreen } = isScreenState;
  return {
    isTabletScreen,
    isDesktopScreen,
    isBigTablet,
  };
}
