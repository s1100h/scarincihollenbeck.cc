import {
  NavbarItem,
  NavbarItemOpener,
  NavbarList,
  NavbarWrapper,
} from 'styles/Navigation.style';
import React, { useEffect, useRef, useState } from 'react';
import { NAVIGATION_OPENERS } from 'utils/constants';
import { useRouter } from 'next/router';
import NavbarPractices from './NavbarPractices';
import NavbarLocations from './NavbarLocations';
import NavbarAttorneys from './NavbarAttorneys';

const Navigation = React.memo(
  ({
    practices, locations, isScreenLg, setIsSidebarOpen,
  }) => {
    const [showNavContent, setShowNavContent] = useState(null);
    const navRef = useRef(null);
    const { pathname } = useRouter();

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

    const getActiveClass = (index, pathname) => {
      const routes = {
        '/attorneys': [0],
        '/practices': [1],
        '/industries': [2],
        '/location/[slug]': [3],
      };

      return routes[pathname]?.includes(index) ? 'active' : '';
    };

    return (
      <NavbarWrapper ref={navRef} className="navbar-wrapper">
        <NavbarList className="navbar-list">
          {NAVIGATION_OPENERS.map((item, index) => (
            <NavbarItem
              key={`navbar-${item}`}
              onClick={(e) => handleEvent(e, index)}
            >
              <NavbarItemOpener
                className={`navbar-opener 
                ${showNavContent === index ? 'active' : ''} 
                ${getActiveClass(index, pathname)}
              `}
              >
                {item}
              </NavbarItemOpener>
            </NavbarItem>
          ))}
        </NavbarList>

        {pathname !== '/practices' && (
          <NavbarPractices
            practices={practices}
            showNavContent={showNavContent === 1}
            setShowNavContent={setShowNavContent}
            isScreenLg={isScreenLg}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        )}

        {pathname !== '/location/[slug]' && (
          <NavbarLocations
            showNavContent={showNavContent === 3}
            setShowNavContent={setShowNavContent}
            setIsSidebarOpen={setIsSidebarOpen}
            locations={locations}
          />
        )}

        {pathname !== '/attorneys' && (
          <NavbarAttorneys
            practices={practices}
            locations={locations}
            showNavContent={showNavContent === 0}
            setShowNavContent={setShowNavContent}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        )}
      </NavbarWrapper>
    );
  },
);

export default Navigation;
