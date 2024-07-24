import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getAppApi: builder.query({
      query: (slug) => `${slug}`,
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
export const { useGetAppApiQuery, useAppApiMutation } = appApi;
