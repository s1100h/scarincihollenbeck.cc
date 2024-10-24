import { setResponseHeaders, sortByKey } from 'utils/helpers';
import {
  BASE_API_URL,
  headers,
  NEXT_PUBLIC_WP_REST_KEY,
} from '../../utils/constants';
import decodeResponse from '../../utils/decodeResponse';

const lastFetchTime = 0;
const data = [];

export default async function handler(req, res) {
  const currentTime = Date.now();
  const timeSinceLastFetch = currentTime - lastFetchTime;
  const cacheDurationSeconds = 8600;
  const cacheDuration = cacheDurationSeconds * 1000; // 8600 seconds in milliseconds

  if (timeSinceLastFetch < cacheDuration && data?.length > 0) {
    // Return cached data with headers
    setResponseHeaders(res, cacheDurationSeconds, 'HIT');
    return res.status(200).json({ data });
  }

  // Fetch new data
  try {
    const authorsRes = await fetch(
      `${BASE_API_URL}/wp-json/wcra/v1/authors/?secret_key=${NEXT_PUBLIC_WP_REST_KEY}`,
      headers,
    );
    const decodedAuthorsRes = await decodeResponse(authorsRes);
    return res
      .status(200)
      .json({ data: sortByKey(decodedAuthorsRes.data.authors, 'title') });
  } catch (err) {
    if (data?.length > 0) {
      // Return cached data if fetch fails
      setResponseHeaders(res, cacheDurationSeconds, 'HIT');
      return res.status(200).json({ data });
    }
    // Return error if no cached data available
    return res
      .status(500)
      .json({ error: 'Failed to fetch data and no cached data available' });
  }
}
