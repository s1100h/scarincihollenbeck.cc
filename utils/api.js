import { GRAPHQL_API_URL } from 'utils/constants';
import { homePageLocationsQuery } from './graphql-queries';

export async function fetchAPI(query, { variables } = {}) {
  const headers = {
    'Content-Type': 'application/json',
    'User-Agent': '*',
    Accept: 'application/json; charset=UTF-8',
  };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers.Authorization = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(GRAPHQL_API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

/** Get locations for home page */
export async function homePageLocations() {
  const data = await fetchAPI(homePageLocationsQuery, {});

  return data?.officeLocations?.edges;
}
