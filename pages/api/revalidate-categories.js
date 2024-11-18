import { setResponseHeaders } from 'utils/helpers';
import empty from 'is-empty';
import { fetchAPI } from '../../requests/api';
import { getCategoriesQuery } from '../../requests/graphql-queries';

global.cache = global.cache || {};
global.cache.categories = global.cache.categories || {
  data: null,
  lastFetchTime: 0,
};

export default async function handler(req, res) {
  const currentTime = Date.now();
  const cacheDurationSeconds = 8600;
  const cacheDuration = cacheDurationSeconds * 1000; // 8600 seconds in milliseconds

  const { data, lastFetchTime } = global.cache.categories;
  const timeSinceLastFetch = currentTime - lastFetchTime;

  if (timeSinceLastFetch < cacheDuration && !empty(data)) {
    setResponseHeaders(res, cacheDurationSeconds, 'HIT');
    return res.status(200).json({ data });
  }

  try {
    const categories = await fetchAPI(getCategoriesQuery);
    const formattedData = categories.subscriptions.nodes?.categories?.map(
      (category) => ({
        id: category.databaseId,
        name: category.name,
      }),
    );

    global.cache.categories = {
      data: formattedData,
      lastFetchTime: currentTime,
    };

    setResponseHeaders(res, cacheDurationSeconds, 'MISS');
    return res.status(200).json({ data: formattedData });
  } catch (err) {
    if (!empty(data)) {
      setResponseHeaders(res, cacheDurationSeconds, 'HIT');
      return res.status(200).json({ data });
    }

    return res.status(500).json({
      error: `Failed to fetch data and no cached data available; ${err}`,
    });
  }
}
