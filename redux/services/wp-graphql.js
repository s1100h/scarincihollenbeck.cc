// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GRAPHQL_API_URL } from '../../utils/constants';

// Define a service using a base URL and expected endpoints
export const wpGraphQl = createApi({
  reducerPath: 'graphqlApi',
  baseQuery: fetchBaseQuery({ baseUrl: GRAPHQL_API_URL }),
  endpoints: (builder) => ({
    getDataFromWPGraphQL: builder.mutation({
      query: (graphQLData) => ({
        url: '/',
        method: 'POST',
        body: graphQLData,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDataFromWPGraphQLQuery } = wpGraphQl;
