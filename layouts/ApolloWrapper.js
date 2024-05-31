import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { GRAPHQL_API_URL } from 'utils/constants';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: GRAPHQL_API_URL,
  }),
  cache: new InMemoryCache(),
  ssrForceFetchDelay: 100,
});

const ApolloWrapper = ({ children }) => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>{children}</ApolloHooksProvider>
  </ApolloProvider>
);

export default ApolloWrapper;
