import { getPractices } from 'requests/getPractices';
import {
  filterTunePractices,
  setResponseHeaders,
  sortByKey,
} from 'utils/helpers';

global.cache = global.cache || {};
global.cache.practices = global.cache.practices || {
  data: null,
  lastFetchTime: 0,
};

export default async function handler(req, res) {
  const currentTime = Date.now();
  const cacheDurationSeconds = 8600;
  const cacheDuration = cacheDurationSeconds * 1000; // 8600 sec

  const { data, lastFetchTime } = global.cache.practices;
  const timeSinceLastFetch = currentTime - lastFetchTime;

  if (timeSinceLastFetch < cacheDuration && data?.length > 0) {
    setResponseHeaders(res, cacheDurationSeconds, 'HIT');
    return res.status(200).json({ data });
  }

  try {
    const practices = await getPractices();
    const filteredPractices = sortByKey(practices, 'title').filter(
      filterTunePractices,
    );

    global.cache.practices = {
      data: filteredPractices,
      lastFetchTime: currentTime,
    };

    setResponseHeaders(res, cacheDurationSeconds, 'MISS');
    return res.status(200).json({ data: filteredPractices });
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
