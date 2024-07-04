import {
  NavbarItem,
  NavbarItemOpener,
  NavbarList,
  NavbarWrapper,
} from 'styles/Navigation.style';
import { useEffect, useRef, useState } from 'react';
import { NAVIGATION_OPENERS } from 'utils/constants';
import NavbarPractices from './NavbarPractices';
import NavbarLocations from './NavbarLocations';
import NavbarAttorneys from './NavbarAttorneys';

const Navigation = ({
  practices, locations, isScreenLg, setIsSidebarOpen,
}) => {
  const [showNavContent, setShowNavContent] = useState(null);
  const navRef = useRef(null);

  const handleEvent = (e, index) => {
    e.preventDefault();
    setShowNavContent((prevIndex) => (prevIndex === index ? null : index));

    if (setIsSidebarOpen && isScreenLg) {
      setIsSidebarOpen(false);
    }
  };

  const handleEventOutside = (event) => {
    if (
      navRef.current
      && !navRef.current.contains(event.target)
      && isScreenLg
    ) {
      setShowNavContent(null);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && isScreenLg) {
      setShowNavContent(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleEventOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleEventOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <NavbarWrapper ref={navRef} className="navbar-wrapper">
      <NavbarList className="navbar-list">
        {NAVIGATION_OPENERS.map((item, index) => (
          <NavbarItem
            key={`navbar-${item}`}
            onClick={(e) => handleEvent(e, index)}
          >
            <NavbarItemOpener
              className={
                showNavContent === index
                  ? 'navbar-opener active'
                  : 'navbar-opener'
              }
            >
              {item}
            </NavbarItemOpener>
          </NavbarItem>
        ))}
      </NavbarList>

      <NavbarPractices
        practices={practices}
        showNavContent={showNavContent === 1}
        setShowNavContent={setShowNavContent}
        isScreenLg={isScreenLg}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <NavbarLocations
        showNavContent={showNavContent === 3}
        setShowNavContent={setShowNavContent}
        setIsSidebarOpen={setIsSidebarOpen}
        locations={locations}
      />

      <NavbarAttorneys
        practices={practices}
        locations={locations}
        showNavContent={showNavContent === 0}
        setShowNavContent={setShowNavContent}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </NavbarWrapper>
  );
};

export default Navigation;
