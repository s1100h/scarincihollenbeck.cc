import AuxiliarySearch from 'components/shared/GlobalSearch/AuxiliarySearch';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  FiltersColumns,
  FiltersItems,
  FiltersLeftColumn,
  FiltersRightColumn,
} from 'styles/Filters.style';
import CustomSelect from 'components/common/Select';
import LetterSelector from 'components/molecules/attorneys/Letters';
import { UnderlinedLink } from 'styles/common/Typography.style';
import {
  clearAll,
  clearQuery,
  handleChange,
  onSelect,
  onSelectLetter,
} from '../../../redux/slices/attorneys.slice';
import Selection from './Selection';

const Filters = ({
  userInput,
  practices,
  locations,
  select,
  attorneys,
  setShowNavContent,
  handleCloseModal,
}) => {
  const { pathname } = useRouter();
  const dispatch = useDispatch();
  const practicesSelectRef = useRef();
  const locationsSelectRef = useRef();

  const handleHideAttorneysNavbar = () => {
    if (
      pathname === '/attorneys'
      && setShowNavContent
      && window
      && window.innerWidth > 992
    ) {
      setShowNavContent(false);
    }
  };

  const handleChangeDispatch = (e) => {
    const { value } = e.currentTarget;
    dispatch(handleChange({ value }));
  };

  const handleChangePracticesSelect = (value) => {
    dispatch(onSelect({ target: { name: 'practices' }, input: value }));
    handleHideAttorneysNavbar();
  };

  const handleChangeLocationsSelect = (value) => {
    dispatch(onSelect({ target: { name: 'location' }, input: value }));
    handleHideAttorneysNavbar();
  };

  const handleSelectLetter = (letter) => {
    dispatch(onSelectLetter(letter));
    handleHideAttorneysNavbar();
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
    handleHideAttorneysNavbar();
  };

  const handleClearQuery = (key) => {
    clearHandlers(key);
    dispatch(clearQuery(key));
    handleHideAttorneysNavbar();
  };

  return (
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
            inputValue={select.find((a) => a.key === 'practices')?.selected}
            placeHolder="Filter by Practice"
            onChange={(value) => handleChangePracticesSelect(value)}
          />

          <CustomSelect
            ref={locationsSelectRef}
            options={locations}
            inputValue={select.find((a) => a.key === 'location')?.selected}
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
            <UnderlinedLink
              href="/attorneys"
              onClick={handleCloseModal}
              $isWhite
            >
              View all
            </UnderlinedLink>
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
  );
};

export default Filters;
