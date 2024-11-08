import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { ContainerDefault } from 'styles/Containers.style';
import { NavbarItemContent } from 'styles/Navigation.style';

const NavbarContentWrapper = ({
  children,
  id,
  showNavContent,
  handlerContainer,
  customClass = '',
  isHideContainer = false,
}) => (
  <AnimatePresence>
    {showNavContent && (
      <NavbarItemContent
        key={`${id}-navbar-content`}
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
        onClick={(e) => handlerContainer && handlerContainer(e)}
        className={`navbar-content ${customClass}`}
      >
        {isHideContainer ? (
          children
        ) : (
          <ContainerDefault className="navbar-container">
            {children}
          </ContainerDefault>
        )}
      </NavbarItemContent>
    )}
  </AnimatePresence>
);

export default NavbarContentWrapper;
