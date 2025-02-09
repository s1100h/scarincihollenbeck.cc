import {
  NavbarItem,
  NavbarItemOpener,
  NavbarList,
  NavbarWrapper,
} from 'styles/Navigation.style';
import React, { useEffect, useRef, useState } from 'react';
import { NAVIGATION_OPENERS } from 'utils/constants';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const NavbarLocations = dynamic(() => import('./NavbarLocations'));
const NavbarAttorneys = dynamic(() => import('./NavbarAttorneys'));
const NavbarServices = dynamic(() => import('./NavbarServices'));

const getIndexNavbarItem = (name) => NAVIGATION_OPENERS.indexOf(name);

const getActiveClass = (index, pathname) => {
  const routes = {
    '/attorneys': [getIndexNavbarItem('Attorneys')],
    '/services': [getIndexNavbarItem('Services')],
    '/location/[slug]': [getIndexNavbarItem('Locations')],
  };

  return routes[pathname]?.includes(index) ? 'active' : '';
};

const Navigation = ({
  practices,
  locations,
  industries,
  isScreenLg,
  setIsSidebarOpen,
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

  return (
    <NavbarWrapper ref={navRef} className="navbar-wrapper">
      <NavbarList className="navbar-list">
        {NAVIGATION_OPENERS.map((item, index) => (
          <NavbarItem
            key={`navbar-${item}`}
            onClick={(e) => handleEvent(e, index)}
          >
            <NavbarItemOpener
              className={`navbar-opener ${
                showNavContent === index ? 'active' : ''
              } ${getActiveClass(index, pathname)}`}
            >
              {item}
            </NavbarItemOpener>
          </NavbarItem>
        ))}
      </NavbarList>

      <NavbarServices
        practices={practices}
        industries={industries}
        showNavContent={showNavContent === getIndexNavbarItem('Services')}
        setShowNavContent={setShowNavContent}
        isScreenLg={isScreenLg}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <NavbarLocations
        showNavContent={showNavContent === getIndexNavbarItem('Locations')}
        setShowNavContent={setShowNavContent}
        setIsSidebarOpen={setIsSidebarOpen}
        locations={locations}
      />

      <NavbarAttorneys
        practices={practices}
        locations={locations}
        showNavContent={showNavContent === getIndexNavbarItem('Attorneys')}
        setShowNavContent={setShowNavContent}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </NavbarWrapper>
  );
};

export default Navigation;
