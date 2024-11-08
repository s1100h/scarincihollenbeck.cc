import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getLocations: builder.query({
      query: () => 'revalidate-locations',
    }),
    getPractices: builder.query({
      query: () => 'revalidate-practices',
    }),
    getAttorneys: builder.query({
      query: () => 'revalidate-attorneys',
    }),
    getAuthors: builder.query({
      query: () => 'revalidate-authors',
    }),
    getIndustries: builder.query({
      query: () => 'revalidate-industries',
    }),
    appApi: builder.mutation({
      query: (request) => ({
        url: `${request.route}`,
        method: request?.method || 'POST',
        body: request?.payload,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetLocationsQuery,
  useGetPracticesQuery,
  useGetAttorneysQuery,
  useGetAuthorsQuery,
  useGetIndustriesQuery,
} = appApi;
