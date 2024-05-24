import { fetchAPI } from '../../requests/api';
import { getCategoriesQuery } from '../../requests/graphql-queries';

let lastFetchTime = 0;
let data;

export default async function handler(req, res) {
  const currentTime = Date.now();
  const timeSinceLastFetch = currentTime - lastFetchTime;
  const cacheDuration = 8600 * 1000; // 8600 seconds

  if (timeSinceLastFetch < cacheDuration) {
    // Return cached data with headers
    res.setHeader('Cache-Control', 's-maxage=8600, stale-while-revalidate');
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ data });
  }

  // Fetch new data
  try {
    data = await fetchAPI(getCategoriesQuery);
    lastFetchTime = currentTime;
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch data' });
  }

  // Return new data with headers
  res.setHeader('Cache-Control', 's-maxage=8600, stale-while-revalidate');
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).json({ data });
}
