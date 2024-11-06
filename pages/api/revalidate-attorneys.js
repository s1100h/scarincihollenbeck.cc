import {
  getAttorneys,
  getKaterinTraugh,
  getPracticesWithAttorneys,
} from 'requests/getAttorneys';
import {
  rebuildDataForAttorneysCards,
  setResponseHeaders,
} from 'utils/helpers';

let lastFetchTime = 0;
let data = [];

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
    const practicesWithAttorneys = await getPracticesWithAttorneys();
    const attorneys = await getAttorneys();
    const katerinTraugh = await getKaterinTraugh();

    const attorneysRebuildData = rebuildDataForAttorneysCards(
      practicesWithAttorneys,
      attorneys,
    );

    const attorneysWithKaterin = [...attorneysRebuildData, katerinTraugh];
    data = attorneysWithKaterin;
    lastFetchTime = currentTime;
    // Return new data with headers
    setResponseHeaders(res, cacheDurationSeconds, 'MISS');
    return res.status(200).json({ data });
  } catch (err) {
    if (data?.length > 0) {
      // Return cached data if fetch fails
      setResponseHeaders(res, cacheDurationSeconds, 'HIT');
      return res.status(200).json({ data });
    }
    // Return error if no cached data available
    return res
      .status(500)
      .json({
        error: `Failed to fetch data and no cached data available; ${err}`,
      });
  }
}
