import CustomSelect from 'components/common/Select';
import LetterSelector from 'components/molecules/attorneys/Letters';
import AuxiliarySearch from 'components/shared/GlobalSearch/AuxiliarySearch';
import React, { useRef } from 'react';
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
import NonFiltered from 'components/molecules/attorneys/NonFiltered';
import { useDispatch, useSelector } from 'react-redux';
import Selection from './Selection';
import FilterResult from './FilterResult';
import Results from './Results';
import {
  clearAll,
  clearQuery,
  handleChange,
  onSelect,
  onSelectLetter,
} from '../../../redux/slices/attorneys.slice';
import { useGetAttorneysQuery } from '../../../redux/services/project-api';
import { useAttorneysSearch } from '../../../hooks/useAttornySearch';

const AttorneyFilters = ({
  practices,
  locations,
  setShowNavContent,
  setIsSidebarOpen,
  isNavbar,
  attorneyArchives,
  seoAttorneys,
}) => {
  const { pathname } = useRouter();
  const practicesSelectRef = useRef();
  const locationsSelectRef = useRef();
  const { data: attorneysData } = useGetAttorneysQuery();
  const { userInput, select } = useSelector((state) => state.attorneys);
  const dispatch = useDispatch();
  const attorneys = attorneysData?.data;
  const attorneysCondition = attorneys || [];
  const { attorneysFiltered } = useAttorneysSearch(
    select,
    userInput,
    attorneysCondition,
  );
  const handleChangeDispatch = (e) => {
    const { value } = e.currentTarget;
    dispatch(handleChange({ value }));
  };
  const handleChangePracticesSelect = (value) => {
    dispatch(onSelect({ target: { name: 'practices' }, input: value }));
  };

  const handleChangeLocationsSelect = (value) => {
    dispatch(onSelect({ target: { name: 'location' }, input: value }));
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
    dispatch(clearAll());
  };

  const handleClearQuery = (key) => {
    clearHandlers(key);
    dispatch(clearQuery(key));
  };

  const handleCloseModal = () => {
    if (setIsSidebarOpen) {
      setIsSidebarOpen(false);
    }

    if (setShowNavContent) {
      setShowNavContent(false);
    }
  };

  const handleSelectLetter = (letter) => {
    dispatch(onSelectLetter(letter));
  };

  return (
    <FiltersHolder data-testid="attorneys-filter">
      <FiltersItems>
        <FiltersColumns>
          <FiltersLeftColumn>
            <AuxiliarySearch
              currentRefinement={userInput}
              refine={handleChangeDispatch}
              placeholder="Search by Attorney name"
            />

            <CustomSelect
              ref={practicesSelectRef}
              options={practices}
              placeHolder="Filter by Practice"
              onChange={(value) => handleChangePracticesSelect(value)}
            />

            <CustomSelect
              ref={locationsSelectRef}
              options={locations}
              placeHolder="Filter by Location"
              onChange={(value) => handleChangeLocationsSelect(value)}
            />
          </FiltersLeftColumn>

          <FiltersRightColumn>
            <LetterSelector
              onSelectLetter={handleSelectLetter}
              title="Filter by letters"
              select={select}
              userInput={userInput}
              attorneys={attorneys}
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

      {!isNavbar && (
        <ResultsWrapper>
          {attorneysCondition.length > 0 ? (
            <Results
              attorneys={attorneysFiltered}
              attorneysContext={attorneysCondition}
              userInput={userInput}
              select={select}
              attorneyArchives={attorneyArchives}
            />
          ) : (
            attorneysCondition.length <= 0 && (
              <NonFiltered attorneys={seoAttorneys} />
            )
          )}
        </ResultsWrapper>
      )}
    </FiltersHolder>
  );
};

export default AttorneyFilters;
