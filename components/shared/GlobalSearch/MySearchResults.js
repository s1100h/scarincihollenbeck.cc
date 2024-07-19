import React from 'react';
import { connectStateResults, Pagination } from 'react-instantsearch-dom';
import { HitsStyled, ResultBox } from 'styles/GlobalSearch.style';
import Hit from './Hit';

const MySearchResults = ({ setIsOpenSearch, handleHideSearch, refine }) => {
  const handleClear = () => {
    if (handleHideSearch) {
      handleHideSearch();
    }
  };

  const CustomHit = ({ hit }) => (
    <Hit
      hit={hit}
      setIsOpenSearch={setIsOpenSearch}
      handleClear={handleClear}
    />
  );

  const RenderSearchResults = connectStateResults(
    ({ searchResults }) => searchResults?.query.length > 0
      && searchResults?.hits.length > 0 && (
        <>
          <ResultBox onClick={handleClear} className="results-container">
            <HitsStyled hitComponent={CustomHit} />
          </ResultBox>
          <Pagination totalPages={10} />
        </>
    ),
  );

  return <RenderSearchResults />;
};
export default MySearchResults;
