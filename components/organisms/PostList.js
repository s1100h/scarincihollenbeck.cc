import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

// Function to update the query with the new results
const updateQuery = (previousResult, { fetchMoreResult }) => (fetchMoreResult.posts.edges.length ? fetchMoreResult : previousResult);

const PostList = ({ queryPackage }) => {
  const { query, variables } = queryPackage;

  const {
    data, error, loading, fetchMore,
  } = useQuery(
    gql`
      ${query}
    `,
    {
      variables,
    },
  );

  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  if (loading) {
    return null;
  }

  if (data.posts?.edges.length <= 0) {
    return <div>No posts found...</div>;
  }

  return <div>{JSON.stringify(data.posts?.edges)}</div>;
};

export default PostList;
