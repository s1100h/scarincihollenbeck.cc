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
import AuxiliarySearch from './AuxiliarySearch';
import MySearchResults from './MySearchResults';
import MySearchFilters from './MySearchFilters';
import { MySearchBox } from './MySearchBox';

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_PUBLIC_API);

const connectWithQuery = createConnector({
  displayName: 'WidgetWithQuery',
  getProvidedProps(props, searchState, searchResults, resultsFacetValues) {
    if (!empty(searchResults.results?.hits)) {
      searchResults.results.hits = searchResults.results.hits.filter(
        ({ post_type }) => post_type !== 'client',
      );
    }

    searchResults = {
      ...searchResults,
      results: {
        ...searchResults.results,
      },
    };

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

export const GlobalSearch = ({
  setIsOpenSearch,
  filterByPostType,
  handleHideSearch,
  inputFocus,
}) => {
  const filters = filterByPostType ? 'post_type_label:Posts' : undefined;

  return (
    <InstantSearch indexName={ALGOLIA_SEARCH_INDEX} searchClient={searchClient}>
      <Configure filters={filters} />
      <ConnectedSearchBox
        placeholder="Search"
        setIsOpenSearch={setIsOpenSearch}
        handleHideSearch={handleHideSearch}
        inputFocus={inputFocus}
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
};
