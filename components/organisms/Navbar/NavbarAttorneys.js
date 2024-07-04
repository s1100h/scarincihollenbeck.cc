import React from 'react';
import { ContainerDefault } from 'styles/Containers.style';
import { NavbarItemContent } from 'styles/Navigation.style';
import empty from 'is-empty';
import { AnimatePresence } from 'framer-motion';
import { LocationCards } from 'styles/LocationCard.style';
import LocationCard from './LocationCard';
import AttorneyFilters from '../attorneys/AttorneyFilters';

const NavbarAttorneys = ({
  practices,
  locations,
  showNavContent,
  setShowNavContent,
  setIsSidebarOpen,
}) => (
  <AnimatePresence>
    {showNavContent && (
      <NavbarItemContent
        key="attorneys-navbar-content"
        initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
        animate={{
          opacity: 1,
          height: 'auto',
          transitionEnd: {
            overflow: 'visible',
          },
        }}
        exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
      >
        <ContainerDefault className="navbar-container">
          <AttorneyFilters practices={practices} locations={locations} />
        </ContainerDefault>
      </NavbarItemContent>
    )}
  </AnimatePresence>
);

export default NavbarAttorneys;
