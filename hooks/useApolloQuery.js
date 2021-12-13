import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

// Function to update the query with the new results
const updateQuery = (previousResult, { fetchMoreResult }) => (fetchMoreResult.posts.edges.length ? fetchMoreResult : previousResult);

const useApolloQuery = (query, variables) => {
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

  return {
    handleNextPagination,
    handlePrevPagination,
    data,
    loading,
    error,
  };
};

export default useApolloQuery;
