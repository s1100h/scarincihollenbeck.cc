import {
  BASE_API_URL,
  GRAPHQL_API_URL,
  NEXT_PUBLIC_WP_REST_KEY,
  headers as restApiHeaders,
} from 'utils/constants';
import decodeResponse from 'utils/decodeResponse';

export const headers = {
  'Content-Type': 'application/json',
  'User-Agent':
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
  Accept: 'application/json; charset=UTF-8',
};

export async function fetchAPI(query, { variables } = {}) {
  try {
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
    return json.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch API');
  }
}

export async function fetchRestAPI(query) {
  try {
    const res = await fetch(
      `${BASE_API_URL}/wp-json/wcra/v1/${query}/?secret_key=${NEXT_PUBLIC_WP_REST_KEY}`,
      restApiHeaders,
    );

    const decodedRes = await decodeResponse(res);
    return decodedRes?.data;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch from ${query} rest API`);
  }
}
