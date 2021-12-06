import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import PostList from 'components/organisms/PostList';
import { GRAPHQL_API_URL } from 'utils/constants';

// https://codesandbox.io/s/wpgraphql-apollo-forward-backward-pagination-example-spq53?from-embed=&file=/list.js:58-104

const client = new ApolloClient({
  link: new HttpLink({
    uri: GRAPHQL_API_URL,
  }),
  cache: new InMemoryCache(),
});

const ArticleFeed = ({ query }) => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <PostList queryPackage={query} />
    </ApolloHooksProvider>
  </ApolloProvider>
);

export default ArticleFeed;
