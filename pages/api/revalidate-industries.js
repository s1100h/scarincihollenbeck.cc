import { getIndustries } from 'requests/getIndustries';
import { setResponseHeaders, sortByKey } from 'utils/helpers';

global.cache = global.cache || {};
global.cache.industries = global.cache.industries || {
  data: [],
  lastFetchTime: 0,
};

export default async function handler(req, res) {
  const currentTime = Date.now();
  const cacheDurationSeconds = 8600;
  const cacheDuration = cacheDurationSeconds * 1000; // 8600 sec

  const { data, lastFetchTime } = global.cache.industries;
  const timeSinceLastFetch = currentTime - lastFetchTime;

  if (timeSinceLastFetch < cacheDuration && data?.length > 0) {
    setResponseHeaders(res, cacheDurationSeconds, 'HIT');
    return res.status(200).json({ data });
  }

  try {
    const industries = await getIndustries();
    const sortedIndustries = sortByKey(industries, 'title');

    global.cache.industries = {
      data: sortedIndustries,
      lastFetchTime: currentTime,
    };

    setResponseHeaders(res, cacheDurationSeconds, 'MISS');
    return res.status(200).json({ data: sortedIndustries });
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
