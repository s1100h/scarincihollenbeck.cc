import { setResponseHeaders, sortByKey } from 'utils/helpers';
import { fetchRestAPI } from 'requests/api';

global.cache = global.cache || {};
global.cache.authors = global.cache.authors || { data: [], lastFetchTime: 0 };

export default async function handler(req, res) {
  const currentTime = Date.now();
  const cacheDurationSeconds = 8600;
  const cacheDuration = cacheDurationSeconds * 1000; // 8600 sec

  const { data, lastFetchTime } = global.cache.authors;
  const timeSinceLastFetch = currentTime - lastFetchTime;

  if (timeSinceLastFetch < cacheDuration && data?.length > 0) {
    setResponseHeaders(res, cacheDurationSeconds, 'HIT');
    return res.status(200).json({ data });
  }

  try {
    const { authors } = await fetchRestAPI('authors');
    const sortedAuthors = sortByKey(authors, 'title');

    global.cache.authors = {
      data: sortedAuthors,
      lastFetchTime: currentTime,
    };

    setResponseHeaders(res, cacheDurationSeconds, 'MISS');
    return res.status(200).json({ data: sortedAuthors });
  } catch (err) {
    if (data?.length > 0) {
      setResponseHeaders(res, cacheDurationSeconds, 'HIT');
      return res.status(200).json({ data });
    }

    return res.status(500).json({
      error: `Failed to fetch data and no cached data available; ${err}`,
    });
  }
}
