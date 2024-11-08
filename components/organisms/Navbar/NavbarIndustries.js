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
      <Link
        href="/services#industries"
        className="underlined"
        onClick={handleCloseModal}
      >
        Open industries page
      </Link>

      {!empty(industries) && (
        <FiltersResults>
          {industries.map((industry) => (
            <FilterResult
              key={industry?.databaseId}
              link={industry?.uri}
              name={industry?.title}
              designation={industry?.industryContent?.description}
              icon={industry?.industryContent?.industryIcon?.selectedIcon}
              image={
                industry?.industryContent?.industryIcon?.uploadedIcon?.sourceUrl
              }
              handleCloseModal={handleCloseModal}
              titleTag="p"
              descriptionTag="div"
            />
          ))}
        </FiltersResults>
      )}
    </NavbarIndustriesHolder>
  );
};

export default NavbarIndustries;
