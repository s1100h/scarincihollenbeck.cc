import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  connectStateResults,
  createConnector,
  Pagination,
} from 'react-instantsearch-dom';
import { HitsStyled, ResultsContainer } from 'styles/GlobalSearch.style';

import { ALGOLIA_PUBLIC_API, ALGOLIA_APP_ID, ALGOLIA_SEARCH_INDEX } from 'utils/constants';
import Hit from './Hit';
import MySearchBox from './MySearchBox';

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_PUBLIC_API);

const RenderSearchResults = connectStateResults(({ searchState }) => (searchState && searchState.attributeForMyQuery ? (
  <ResultsContainer>
    <Pagination totalPages={10} />
    <HitsStyled hitComponent={Hit} />
  </ResultsContainer>
) : null));

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

export default function GlobalSearch() {
  return (
    <InstantSearch indexName={ALGOLIA_SEARCH_INDEX} searchClient={searchClient}>
      <ConnectedSearchBox placeholder="Search" />
      <RenderSearchResults />
    </InstantSearch>
  );
}
