import { Form } from 'react-bootstrap';
import { BsSearch, BsXLg } from 'react-icons/bs';
import {
  HitsStyled,
  ResultsContainer,
  SearchForm,
  SearchInput,
  ResultBox,
} from 'styles/GlobalSearch.style';
import { connectStateResults, Pagination } from 'react-instantsearch-dom';
import { useEffect, useRef } from 'react';
import Hit from './Hit';

function MySearchBox(props) {
  const searchInputRef = useRef(null);
  const handleClear = (e) => {
    props.refine({
      currentTarget: {
        value: '',
      },
    });
    searchInputRef?.current?.focus();

    if (props.handleHideSearch) {
      props.handleHideSearch();
    }
  };

  useEffect(() => {
    if (props.inputFocus) {
      searchInputRef?.current?.focus();
    }
  }, [props.inputFocus]);

  const CustomHit = ({ hit }) => (
    <Hit
      hit={hit}
      setIsOpenSearch={props.setIsOpenSearch}
      handleClear={handleClear}
    />
  );

  const RenderSearchResults = connectStateResults(({ searchResults }) => (
    <>
      {searchResults?.query.length > 0 && searchResults?.hits.length > 0 && (
        <ResultsContainer className="search-result-container">
          <ResultBox onClick={handleClear} className="results-container">
            <HitsStyled hitComponent={CustomHit} />
          </ResultBox>
          <Pagination totalPages={10} />
        </ResultsContainer>
      )}
    </>
  ));

  return (
    <>
      <SearchForm>
        <Form.Group className="form-group" controlId="siteSearch">
          {props?.handleHideSearch ? (
            <BsXLg role="button" onClick={handleClear} />
          ) : !props.currentRefinement ? (
            <BsSearch />
          ) : (
            <BsXLg role="button" onClick={handleClear} />
          )}
          <SearchInput
            type="text"
            value={props.currentRefinement}
            onChange={props.refine}
            placeholder={props.placeholder}
            ref={searchInputRef}
          />
        </Form.Group>
      </SearchForm>
      <RenderSearchResults />
    </>
  );
}

export default MySearchBox;
