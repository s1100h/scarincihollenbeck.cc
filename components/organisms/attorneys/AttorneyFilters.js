import CustomSelect from 'components/common/Select';
import LetterSelector from 'components/molecules/attorneys/Letters';
import AuxiliarySearch from 'components/shared/GlobalSearch/AuxiliarySearch';
import { AttorneysContext } from 'contexts/AttorneysContext';
import { useAttorneysSearch } from 'hooks/useAttornySearch';
import React, { useContext, useRef } from 'react';
import {
  FiltersColumns,
  FiltersHolder,
  FiltersItems,
  FiltersLeftColumn,
  FiltersResults,
  FiltersRightColumn,
} from 'styles/Filters.style';
import empty from 'is-empty';
import { NavbarLink } from 'styles/Navigation.style';
import { useRouter } from 'next/router';
import { ResultsWrapper } from 'styles/Attornyes.style';
import Selection from './Selection';
import FilterResult from './FilterResult';
import Results from './Results';

const AttorneyFilters = ({
  practices,
  locations,
  setShowNavContent,
  setIsSidebarOpen,
  isNavbar,
  attorneyArchives,
}) => {
  const practicesSelectRef = useRef();
  const locationsSelectRef = useRef();
  const {
    handleChange,
    select,
    onSelect,
    userInput,
    clearQuery,
    clearAll,
    onSelectLetter,
    attorneysContext,
  } = useContext(AttorneysContext);
  const { pathname } = useRouter();

  const { attorneysFiltered } = useAttorneysSearch(
    select,
    userInput,
    attorneysContext,
  );

  const handleChangePracticesSelect = (value) => {
    onSelect({ target: { name: 'practices' } }, value);
  };

  const handleChangeLocationsSelect = (value) => {
    onSelect({ target: { name: 'location' } }, value);
  };

  const handleClearSelect = (ref) => {
    if (ref.current) {
      ref.current.clearSelect();
    }
  };

  const clearHandlers = (key) => {
    const obj = {
      location: () => handleClearSelect(locationsSelectRef),
      practices: () => handleClearSelect(practicesSelectRef),
    };

    if (obj[key]) {
      obj[key]();
    }
  };

  const handleClearAll = () => {
    handleClearSelect(practicesSelectRef);
    handleClearSelect(locationsSelectRef);
    clearAll();
  };

  const handleClearQuery = (key) => {
    clearHandlers(key);
    clearQuery(key);
  };

  const handleCloseModal = () => {
    if (setIsSidebarOpen) {
      setIsSidebarOpen(false);
    }

    if (setShowNavContent) {
      setShowNavContent(false);
    }
  };

  return (
    <FiltersHolder>
      <FiltersItems>
        <FiltersColumns>
          <FiltersLeftColumn>
            <AuxiliarySearch
              currentRefinement={userInput}
              refine={handleChange}
              placeholder="Search by Attorney name"
            />

            <CustomSelect
              ref={practicesSelectRef}
              options={practices}
              placeHolder="Filter by Practice"
              onChange={(value) => handleChangePracticesSelect(value)}
              isSearchable
              isMulti
            />

            <CustomSelect
              ref={locationsSelectRef}
              options={locations}
              placeHolder="Filter by Location"
              onChange={(value) => handleChangeLocationsSelect(value)}
              isSearchable
              isMulti
            />
          </FiltersLeftColumn>

          <FiltersRightColumn>
            <LetterSelector
              onSelectLetter={onSelectLetter}
              title="Filter by letters"
              select={select}
              userInput={userInput}
            />

            {pathname !== '/attorneys' && (
              <NavbarLink href="/attorneys" onClick={handleCloseModal}>
                View all
              </NavbarLink>
            )}
          </FiltersRightColumn>
        </FiltersColumns>

        {(userInput.length > 0 || select.length > 0) && (
          <Selection
            select={select}
            clearQuery={handleClearQuery}
            userInput={userInput}
            clearAll={handleClearAll}
          />
        )}
      </FiltersItems>

      {isNavbar
        && attorneysFiltered?.length > 0
        && (!empty(select) || !empty(userInput)) && (
          <FiltersResults>
            {attorneysFiltered.map((attorney) => (
              <FilterResult
                key={attorney.id}
                link={attorney?.link}
                name={attorney?.title}
                designation={attorney?.designation}
                userInput={userInput}
                handleCloseModal={handleCloseModal}
              />
            ))}
          </FiltersResults>
      )}

      <ResultsWrapper>
        {!isNavbar && attorneysContext.length > 0 && (
          <Results
            attorneys={attorneysFiltered}
            attorneysContext={attorneysContext}
            userInput={userInput}
            select={select}
            attorneyArchives={attorneyArchives}
          />
        )}
      </ResultsWrapper>
    </FiltersHolder>
  );
};

export default AttorneyFilters;
