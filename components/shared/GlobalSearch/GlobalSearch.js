import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, createConnector } from 'react-instantsearch-dom';
import {
  ALGOLIA_PUBLIC_API,
  ALGOLIA_APP_ID,
  ALGOLIA_SEARCH_INDEX,
} from 'utils/constants';
import empty from 'is-empty';
import MySearchBox from './MySearchBox';
import AuxiliarySearch from './AuxiliarySearch';

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_PUBLIC_API);
function customSortByPost_type(a, b) {
  const order = {
    attorneys: 0,
    practices: 1,
    post: 2,
    client: 3,
  };
  return order[a.post_type] - order[b.post_type];
}
const connectWithQuery = createConnector({
  displayName: 'WidgetWithQuery',
  getProvidedProps(props, searchState, searchResults) {
    if (!empty(searchResults.results?.hits)) {
      searchResults.results.hits = searchResults.results.hits
        .filter(({ post_type }) => post_type !== 'client')
        .sort(customSortByPost_type);
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
connectWithQuery(AuxiliarySearch);

export default function GlobalSearch({ onHandleClickSearch, setIsOpenSearch }) {
  return (
    <InstantSearch indexName={ALGOLIA_SEARCH_INDEX} searchClient={searchClient}>
      <ConnectedSearchBox
        isOpenCloseSearch={onHandleClickSearch}
        placeholder="Search"
        setIsOpenSearch={setIsOpenSearch}
      />
    </InstantSearch>
  );
}
