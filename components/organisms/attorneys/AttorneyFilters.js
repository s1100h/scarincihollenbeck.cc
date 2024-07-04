import CustomSelect from 'components/common/Select';
import Filtered from 'components/molecules/attorneys/Filtered';
import LetterSelector from 'components/molecules/attorneys/Letters';
import AuxiliarySearch from 'components/shared/GlobalSearch/AuxiliarySearch';
import { AttorneysContext } from 'contexts/AttorneysContext';
import React, { useContext, useState } from 'react';
import {
  FiltersHolder,
  FiltersLeftColumn,
  FiltersResults,
  FiltersRightColumn,
} from 'styles/Filters.style';
import { sanitizePracticesByChildren } from 'utils/helpers';

const AttorneyFilters = ({ practices, locations, attorneys }) => {
  const {
    handleChange,
    select,
    onSelect,
    userInput,
    clearQuery,
    clearAll,
    onSelectLetter,
    setReference,
  } = useContext(AttorneysContext);

  const handleChangePracticesSelect = (e) => {
    console.log(e);
  };

  const handleChangeLocationsSelect = (e) => {
    console.log(e);
  };

  return (
    <FiltersHolder>
      <FiltersLeftColumn>
        <AuxiliarySearch
          currentRefinement={userInput}
          refine={handleChange}
          placeholder="Search by Attorney name"
        />

        <CustomSelect
          options={practices}
          placeHolder="Please select..."
          onChange={(e) => handleChangePracticesSelect(e)}
          isSearchable
          isMulti
        />

        <CustomSelect
          options={locations}
          placeHolder="Filter by Location"
          onChange={(e) => handleChangeLocationsSelect(e)}
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
      </FiltersRightColumn>

      {attorneys?.length > 0 && (
        <FiltersResults>
          <Filtered
            select={select}
            attorneys={attorneys}
            userInput={userInput}
          />
        </FiltersResults>
      )}

      {/* <Filters
        practices={sPractices}
        locations={locations}
        designation={designations}
        userInput={userInput}
        handleChange={handleChange}
        onSelect={onSelect}
        onSelectLetter={onSelectLetter}
        select={select}
        headerSize={headerSize}
      >
        {(userInput.length > 0 || select.length > 0) && (
          <Selection
            select={select}
            clearQuery={clearQuery}
            userInput={userInput}
            clearAll={clearAll}
          />
        )}
      </Filters> */}
    </FiltersHolder>
  );
};

export default AttorneyFilters;
