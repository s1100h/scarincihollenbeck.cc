import React from 'react';
import AttorneyFilters from '../attorneys/AttorneyFilters';
import NavbarContentWrapper from './NavbarContentWrapper';

const NavbarAttorneys = ({
  practices,
  locations,
  showNavContent,
  setShowNavContent,
  setIsSidebarOpen,
}) => (
  <NavbarContentWrapper id="attorneys" showNavContent={showNavContent}>
    <AttorneyFilters
      practices={practices}
      locations={locations}
      setShowNavContent={setShowNavContent}
      setIsSidebarOpen={setIsSidebarOpen}
      isNavbar
    />
  </NavbarContentWrapper>
);

export default NavbarAttorneys;
