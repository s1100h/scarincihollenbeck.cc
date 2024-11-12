import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  createConnector,
  Configure,
  connectRefinementList,
} from 'react-instantsearch-dom';
import {
  ALGOLIA_PUBLIC_API,
  ALGOLIA_APP_ID,
  ALGOLIA_SEARCH_INDEX,
} from 'utils/constants';
import empty from 'is-empty';
import { ResultsContainer } from 'styles/GlobalSearch.style';
import React, { memo } from 'react';
import AuxiliarySearch from './AuxiliarySearch';
import MySearchResults from './MySearchResults';
import MySearchFilters from './MySearchFilters';
import { MySearchBox } from './MySearchBox';

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_PUBLIC_API);

const connectWithQuery = createConnector({
  displayName: 'WidgetWithQuery',
  getProvidedProps(props, searchState) {
    const currentRefinement = searchState.attributeForMyQuery || '';
    return { currentRefinement, ...props };
  },
  refine(props, searchState, nextRefinement) {
    return {
      ...searchState,
      attributeForMyQuery: nextRefinement.currentTarget.value,
      props,
    };
  },
  getSearchParameters(searchParameters, props, searchState) {
    // When the `attributeForMyQuery` state entry changes, we update the query.
    return searchParameters.setQuery(searchState.attributeForMyQuery || '');
  },
  cleanUp(props, searchState) {
    const { attributeForMyQuery, ...nextSearchState } = searchState;

    return { nextSearchState, ...props };
  },
});

const ConnectedSearchBox = connectWithQuery(MySearchBox);
const ConnectedRefinementList = connectRefinementList(MySearchFilters);
connectWithQuery(AuxiliarySearch);

export const GlobalSearch = memo(
  ({
    setIsOpenSearch,
    filterByPostType,
    handleHideSearch,
    inputFocus,
    label,
  }) => {
    const filters = filterByPostType
      ? 'post_type_label:Posts'
      : 'NOT post_type_label:Clients AND NOT post_type_label:"Home Page Awards" AND NOT post_type_label:Pages';

    const optionalFilters = [
      'post_type_label:Attorneys<score=5>',
      'post_type_label:Practices<score=4>',
      'post_type_label:Industries<score=3>',
      'post_type_label:Careers<score=2>',
      'post_type_label:-Posts',
    ];

    return (
      <InstantSearch
        indexName={ALGOLIA_SEARCH_INDEX}
        searchClient={searchClient}
      >
        <Configure filters={filters} optionalFilters={optionalFilters} />
        <ConnectedSearchBox
          placeholder="Search"
          setIsOpenSearch={setIsOpenSearch}
          handleHideSearch={handleHideSearch}
          inputFocus={inputFocus}
          label={label}
        />
        <ResultsContainer className="search-result-container">
          {!filterByPostType && (
            <ConnectedRefinementList attribute="post_type_label" />
          )}
          <MySearchResults
            setIsOpenSearch={setIsOpenSearch}
            handleHideSearch={handleHideSearch}
          />
        </ResultsContainer>
      </InstantSearch>
    );
  },
);
