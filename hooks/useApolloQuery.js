import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

// Function to update the query with the new results
const updateQuery = (previousResult, { fetchMoreResult }) => (fetchMoreResult.posts.edges.length ? fetchMoreResult : previousResult);

const fetchMoreGrouped = (
  numberOfArticles,
  reqData,
  variablesObj,
  fetchMoreCallBack,
  nextMode,
) => {
  const queryVariables = {
    first: nextMode ? numberOfArticles || 8 : null,
    last: !nextMode ? numberOfArticles || 8 : null,
    after: nextMode ? reqData.posts?.pageInfo.endCursor : null,
    before: !nextMode ? reqData.posts?.pageInfo.startCursor : null,
  };

  Object.keys(variablesObj).forEach((prop) => {
    if (!queryVariables.hasOwnProperty(prop)) {
      queryVariables[prop] = variablesObj[prop];
    }
  });

  return fetchMoreCallBack({
    variables: queryVariables,
    updateQuery,
  });
};
const useApolloQuery = (query, variables, skip) => {
  const FEED_QUERY = gql`
    ${query}
  `;
  const {
    data, error, loading, fetchMore,
  } = useQuery(FEED_QUERY, {
    variables,
    skip,
    refresh: false,
  });

  const handlePrevPagination = (numbersArticles) => fetchMoreGrouped(numbersArticles, data, variables, fetchMore, false);

  const handleNextPagination = (numbersArticles) => fetchMoreGrouped(numbersArticles, data, variables, fetchMore, true);

  return {
    handleNextPagination,
    handlePrevPagination,
    data,
    loading,
    error,
  };
};

export default useApolloQuery;
