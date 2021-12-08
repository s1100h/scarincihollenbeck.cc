import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { formatSrcToCloudinaryUrl } from 'utils/helpers';
import ArticlesNonVirtualized from 'components/shared/ArticlesNonVirtualized';
import PaginationButtons from 'components/atoms/PaginationButtons';

// Function to update the query with the new results
const updateQuery = (previousResult, { fetchMoreResult }) => (fetchMoreResult.posts.edges.length ? fetchMoreResult : previousResult);

const PostList = ({ queryPackage }) => {
  const { query, variables } = queryPackage;
  const FEED_QUERY = gql`
    ${query}
  `;
  const {
    data, error, loading, fetchMore,
  } = useQuery(FEED_QUERY, {
    variables,
  });

  const handlePrevPagination = () => {
    const base = {
      first: null,
      last: 8,
      after: null,
      before: data.posts?.pageInfo.startCursor || null,
    };

    if (Object.keys(variables).includes('name')) {
      base.name = variables.name;
    }

    if (Object.keys(variables).includes('id')) {
      base.id = variables.id;
    }

    return fetchMore({
      variables: base,
      updateQuery,
    });
  };

  const handleNextPagination = () => {
    const base = {
      first: 8,
      last: null,
      after: data.posts?.pageInfo.endCursor || null,
      before: null,
    };

    if (Object.keys(variables).includes('name')) {
      base.name = variables.name;
    }

    if (Object.keys(variables).includes('id')) {
      base.id = variables.id;
    }

    fetchMore({
      variables: base,
      updateQuery,
    });
  };

  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  if (loading) {
    return null;
  }

  if (data.posts?.edges.length <= 0) {
    return <div>No posts found...</div>;
  }

  return (
    <div style={{ minHeight: '800px' }}>
      <PaginationButtons
        handleNextPagination={handleNextPagination}
        handlePrevPagination={handlePrevPagination}
      />

      {data.posts?.edges.map(({ node }) => (
        <div className="mb-4" key={node.title}>
          <ArticlesNonVirtualized
            excerpt={node.excerpt}
            date={node.date}
            imgSrc={formatSrcToCloudinaryUrl(node.featuredImage?.node?.sourceUrl)}
            title={node.title}
            slug={node.uri.replace('https://wp/scarinichollenbeck.com', '')}
          />
        </div>
      ))}

      <PaginationButtons
        handleNextPagination={handleNextPagination}
        handlePrevPagination={handlePrevPagination}
      />
    </div>
  );
};

export default PostList;
