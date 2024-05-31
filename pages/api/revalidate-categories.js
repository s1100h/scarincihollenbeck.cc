import { setResponseHeaders } from 'utils/helpers';
import empty from 'is-empty';
import { fetchAPI } from '../../requests/api';
import { getCategoriesQuery } from '../../requests/graphql-queries';

let lastFetchTime = 0;
let data;

export default async function handler(req, res) {
  const currentTime = Date.now();
  const timeSinceLastFetch = currentTime - lastFetchTime;
  const cacheDurationSeconds = 8600;
  const cacheDuration = cacheDurationSeconds * 1000; // 8600 seconds in milliseconds

  if (timeSinceLastFetch < cacheDuration && !empty(data)) {
    // Return cached data with headers
    setResponseHeaders(res, cacheDurationSeconds, 'HIT');
    return res.status(200).json({ data });
  }

  // Fetch new data
  try {
    const categories = await fetchAPI(getCategoriesQuery);
    data = categories.subscriptions.nodes?.categories?.map((category) => ({
      id: category.databaseId,
      name: category.name,
    }));
    lastFetchTime = currentTime;
    // Return new data with headers
    setResponseHeaders(res, cacheDurationSeconds, 'MISS');
    return res.status(200).json({ data });
  } catch (err) {
    if (!empty(data)) {
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
