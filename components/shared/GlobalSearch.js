import Form from 'react-bootstrap/Form';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  connectStateResults,
  createConnector,
  Hits,
  Pagination,
} from 'react-instantsearch-dom';
import globalSearch from 'styles/GlobalSearch.module.css';

import { ALGOLIA_PUBLIC_API, ALGOLIA_APP_ID, ALGOLIA_SEARCH_INDEX } from 'utils/constants';

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_PUBLIC_API);

function Hit({ hit }) {
  return (
    <div className="border-bottom">
      <a href={hit.permalink.replace('https://wp.scarincihollenbeck.com', '')}>
        <p className="post-type">{hit.post_type_label}</p>
        <p className="title">
          <strong>{hit.post_title}</strong>
        </p>
        <p className="details">
          {hit.post_type === 'post' && <>{hit.post_author.display_name}</>}
          {hit.post_type === 'post' && (
            <>
              <span className="mx-1">|</span>
              {hit.post_date_formatted}
            </>
          )}
        </p>
      </a>
      <style jsx>
        {`
          a {
            color: inherit;
            padding: 13px 0;
            display: block;
          }
          p {
            margin-bottom: 0;
          }
          .red-border {
            height: auto;
            width: 4px;
            background-color: #db2220;
            margin-right: 7px;
          }
          .post-type {
            color: #db2220;
            font-size: 15px;
            line-height: 1.2;
            font-weight: 700;
          }
          .details {
            font-size: 15px;
          }
          .title {
            font-size: 16px;
            line-height: 1.25;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
}

const Results = connectStateResults(({ searchState }) => (searchState && searchState.attributeForMyQuery ? (
  <div className="search-container position-absolute shadow rounded p-1">
    <Pagination totalPages={10} />
    <Hits hitComponent={Hit} />
  </div>
) : null));

const connectWithQuery = createConnector({
  displayName: 'WidgetWithQuery',
  getProvidedProps(props, searchState) {
    const currentRefinement = searchState.attributeForMyQuery || '';
    return { currentRefinement };
  },
  refine(props, searchState, nextRefinement) {
    return {
      ...searchState,
      attributeForMyQuery: nextRefinement,
    };
  },
  getSearchParameters(searchParameters, props, searchState) {
    // When the `attributeForMyQuery` state entry changes, we update the query
    return searchParameters.setQuery(searchState.attributeForMyQuery || '');
  },
  cleanUp(props, searchState) {
    const { attributeForMyQuery, ...nextSearchState } = searchState;

    return nextSearchState;
  },
});

const MySearchBox = ({ currentRefinement, refine }) => (
  <Form className={`${globalSearch.form} position-relative scroll-search`}>
    <Form.Group controlId="siteSearch">
      <svg
        className={`${globalSearch.inputSvg}`}
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.70833 14.8533C12.2061 14.8533 15.0417 12.0533 15.0417 8.59927C15.0417 5.14527 12.2061 2.34526 8.70833 2.34526C5.21053 2.34526 2.375 5.14527 2.375 8.59927C2.375 12.0533 5.21053 14.8533 8.70833 14.8533Z"
          stroke="#656565"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.6254 16.4171L13.1816 13.0165"
          stroke="#656565"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <Form.Label className="sr-only">Site Search</Form.Label>
      <Form.Control
        type="input"
        value={currentRefinement}
        onChange={(e) => refine(e.currentTarget.value)}
        placeholder="Search"
        className={`${globalSearch.input} py-0`}
      />
    </Form.Group>
  </Form>
);

const ConnectedSearchBox = connectWithQuery(MySearchBox);

export default function GlobalSearch() {
  return (
    <InstantSearch indexName={ALGOLIA_SEARCH_INDEX} searchClient={searchClient}>
      <ConnectedSearchBox />
      <Results />
    </InstantSearch>
  );
}
