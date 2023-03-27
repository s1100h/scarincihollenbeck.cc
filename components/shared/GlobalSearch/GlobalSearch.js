import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, createConnector } from 'react-instantsearch-dom';

import { ALGOLIA_PUBLIC_API, ALGOLIA_APP_ID, ALGOLIA_SEARCH_INDEX } from 'utils/constants';
import MySearchBox from './MySearchBox';
import PracticeSearch from './PracticeSearch';

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
connectWithQuery(PracticeSearch);

export default function GlobalSearch() {
  return (
    <InstantSearch indexName={ALGOLIA_SEARCH_INDEX} searchClient={searchClient}>
      <ConnectedSearchBox placeholder="Search" />
    </InstantSearch>
  );
}
