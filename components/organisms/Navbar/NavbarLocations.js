import React from 'react';
import { ContainerDefault } from 'styles/Containers.style';
import { NavbarItemContent } from 'styles/Navigation.style';
import empty from 'is-empty';
import { AnimatePresence, motion } from 'framer-motion';
import { LocationCards } from 'styles/LocationCard.style';
import LocationCard from './LocationCard';
import NavbarContentWrapper from './NavbarContentWrapper';

const NavbarLocations = ({
  locations,
  showNavContent,
  setShowNavContent,
  setIsSidebarOpen,
}) => !empty(locations) && (
<NavbarContentWrapper id="locations" showNavContent={showNavContent}>
  <LocationCards
    as={motion.div}
    initial={{ y: -100, overflow: 'hidden' }}
    animate={{
      y: 0,
      transitionEnd: {
        overflow: 'auto',
      },
    }}
    exit={{ y: -100, overflow: 'hidden' }}
  >
    {locations?.map((location) => (
      <LocationCard
        key={location.databaseId}
        {...location}
        setIsSidebarOpen={setIsSidebarOpen}
        setShowNavContent={setShowNavContent}
      />
    ))}
  </LocationCards>
</NavbarContentWrapper>
);

export default NavbarLocations;
