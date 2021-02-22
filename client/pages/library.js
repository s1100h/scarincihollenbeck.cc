import algoliasearch from 'algoliasearch';

export default function Library({ results }) {
  // get page two of results, then we need a mechanism to load more posts on click
  return (
    <>
      New powerhouse Firm Article Library will go here...
    </>
  );
}

export async function getServerSideProps() {
  const client = algoliasearch(process.env.NEXT_PUBLISH_ALGOLIA_APP_ID, process.env.NEXT_PUBLISH_ALGOLIA_API_KEY);
  const index = client.initIndex('wp_searchable_posts');

  // everything should be powered by algio search
  index
    .search('Donald Scarinci')
    .then(({ hits }) => {
      console.log(hits.length);
    })
    .catch((err) => {
      console.log(err);
    });

  /**
   * Standard queries - authors
   */
  return {
    props: {
      results: [],
    },
  };
}
