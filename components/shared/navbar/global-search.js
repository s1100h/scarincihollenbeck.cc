import { useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits, SearchBox } from 'react-instantsearch-dom';

import { ALGOLIA_PUBLIC_API, ALGOLIA_APP_ID } from 'utils/constants';

function Hit({ hit }) {
  return (
    <div>
      <a href={hit.permalink.replace('https://wp.scarincihollenbeck.com', '')}>{hit.post_title}</a>
    </div>
  );
}

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_PUBLIC_API);

export default function GlobalSearch() {
  const [displayHits, setDisplayHits] = useState(false);
  return (
    <>
      <InstantSearch indexName="wp_searchable_posts" searchClient={searchClient}>
        <SearchBox onFocus={() => setDisplayHits(true)} />
        {displayHits && (
          <div className="position-absolute bg-white" style={{ zIndex: '1' }}>
            <button onClick={() => setDisplayHits(false)}>Close</button>
            <Hits hitComponent={Hit} />
          </div>
        )}
      </InstantSearch>
    </>
  );
}
