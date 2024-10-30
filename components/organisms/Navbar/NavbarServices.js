import React, { useState } from 'react';
import {
  NavbarServicesTabs,
  NavbarServicesTabsButton,
} from 'styles/Navigation.style';
import { NAVBAR_SERVICES_TABS } from 'utils/constants';
import { ContainerDefault } from 'styles/Containers.style';
import NavbarContentWrapper from './NavbarContentWrapper';
import NavbarPractices from './NavbarPractices';
import NavbarIndustries from './NavbarIndustries';

const NavbarServices = ({
  practices,
  industries,
  showNavContent,
  setShowNavContent,
  isScreenLg,
  setIsSidebarOpen,
}) => {
  const [activeTab, setActiveTab] = useState('Practices');

  return (
    <NavbarContentWrapper
      id="services"
      showNavContent={showNavContent}
      handlerContainer={(event) => event.stopPropagation()}
      isHideContainer
      customClass="navbar-services"
    >
      <div className="services-tabs">
        <ContainerDefault className="services-tabs-container">
          <NavbarServicesTabs>
            {NAVBAR_SERVICES_TABS.map((tab) => (
              <li key={`${tab}-navbar-services-tab`}>
                <NavbarServicesTabsButton
                  onClick={() => setActiveTab(tab)}
                  isActive={activeTab === tab}
                >
                  {tab}
                </NavbarServicesTabsButton>
              </li>
            ))}
          </NavbarServicesTabs>
        </ContainerDefault>
      </div>

      {activeTab === 'Practices' && (
        <ContainerDefault className="navbar-container practices-split">
          <NavbarPractices
            practices={practices}
            setShowNavContent={setShowNavContent}
            isScreenLg={isScreenLg}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </ContainerDefault>
      )}

      {activeTab === 'Industries' && (
        <ContainerDefault className="navbar-container">
          <NavbarIndustries
            industries={industries}
            setShowNavContent={setShowNavContent}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </ContainerDefault>
      )}
    </NavbarContentWrapper>
  );
};

export default NavbarServices;
