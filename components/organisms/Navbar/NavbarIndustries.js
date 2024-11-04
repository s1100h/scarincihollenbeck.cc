import Link from 'next/link';
import React from 'react';
import { FiltersResults } from 'styles/Filters.style';
import { NavbarIndustriesHolder } from 'styles/Navigation.style';
import empty from 'is-empty';
import FilterResult from '../attorneys/FilterResult';

const NavbarIndustries = ({
  industries,
  setShowNavContent,
  setIsSidebarOpen,
}) => {
  const handleCloseModal = () => {
    if (setIsSidebarOpen) {
      setIsSidebarOpen(false);
    }

    if (setShowNavContent) {
      setShowNavContent(false);
    }
  };

  return (
    <NavbarIndustriesHolder>
      <Link href="/practices" className="underlined" onClick={handleCloseModal}>
        Open industries page
      </Link>

      {!empty(industries) && (
        <FiltersResults>
          {industries.map((industry) => (
            <FilterResult
              key={industry?.databaseId}
              link={industry?.uri}
              name={industry?.title}
              designation={industry?.description}
              icon={industry?.icon}
              handleCloseModal={handleCloseModal}
            />
          ))}
        </FiltersResults>
      )}
    </NavbarIndustriesHolder>
  );
};

export default NavbarIndustries;
