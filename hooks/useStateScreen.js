import { useEffect, useState } from 'react';
import { sizeWindow } from 'styles/sizeWindow.style';
import { useMediaQuery } from 'react-responsive';

export default function useStateScreen() {
  const [isScreenState, setScreenState] = useState({
    isBigTabletScreen: false,
    isTabletScreen: false,
    isDesktopScreen: false,
    isMobileScreen: false,
  });

  const isBigTablet = useMediaQuery({ query: `(max-width: ${sizeWindow.lg}px)` });
  const isTablet = useMediaQuery({ query: `(max-width: ${sizeWindow.md}px)` });
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: ${sizeWindow.sm}px)`,
  });
  const isMobile = useMediaQuery({ query: `(max-width: ${sizeWindow.sm}px)` });
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
        isBigTabletScreen: true,
        isTabletScreen: prev.isTabletScreen,
        isDesktopScreen: prev.isDesktopScreen,
      }));
    }
    if (isMobile) {
      setScreenState((prev) => ({
        isBigTabletScreen: prev.isBigTabletScreen,
        isTabletScreen: prev.isTabletScreen,
        isDesktopScreen: prev.isDesktopScreen,
        isMobileScreen: true,
      }));
    }
  }, []);
  const {
    isTabletScreen, isDesktopScreen, isBigTabletScreen, isMobileScreen,
  } = isScreenState;
  return {
    isMobileScreen,
    isTabletScreen,
    isDesktopScreen,
    isBigTabletScreen,
  };
}
