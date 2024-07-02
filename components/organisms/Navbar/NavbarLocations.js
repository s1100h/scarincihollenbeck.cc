import React from 'react';
import { ContainerDefault } from 'styles/Containers.style';
import { NavbarItemContent } from 'styles/Navigation.style';
import empty from 'is-empty';
import { AnimatePresence } from 'framer-motion';
import { LocationCards } from 'styles/LocationCard.style';
import LocationCard from './LocationCard';

const NavbarLocations = ({
  locations,
  showNavContent,
  setShowNavContent,
  setIsSidebarOpen,
}) => (
  <AnimatePresence>
    {showNavContent && !empty(locations) && (
      <NavbarItemContent
        key="locations-navbar-content"
        initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
        onClick={(event) => event.stopPropagation()}
      >
        <ContainerDefault className="navbar-container">
          <LocationCards>
            {locations?.map((location) => (
              <LocationCard
                key={location.databaseId}
                {...location}
                setIsSidebarOpen={setIsSidebarOpen}
                setShowNavContent={setShowNavContent}
              />
            ))}
          </LocationCards>
        </ContainerDefault>
      </NavbarItemContent>
    )}
  </AnimatePresence>
);

export default NavbarLocations;
