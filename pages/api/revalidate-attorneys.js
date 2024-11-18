import {
  getAttorneys,
  getKaterinTraugh,
  getPracticesWithAttorneys,
} from 'requests/getAttorneys';
import {
  rebuildDataForAttorneysCards,
  setResponseHeaders,
} from 'utils/helpers';

global.cache = global.cache || {};
global.cache.attorneys = global.cache.attorneys || {
  data: [],
  lastFetchTime: 0,
};

export default async function handler(req, res) {
  const currentTime = Date.now();
  const cacheDurationSeconds = 8600;
  const cacheDuration = cacheDurationSeconds * 1000; // 8600 sec

  const { data, lastFetchTime } = global.cache.attorneys;
  const timeSinceLastFetch = currentTime - lastFetchTime;

  if (timeSinceLastFetch < cacheDuration && data?.length > 0) {
    setResponseHeaders(res, cacheDurationSeconds, 'HIT');
    return res.status(200).json({ data });
  }

  try {
    const practicesWithAttorneys = await getPracticesWithAttorneys();
    const attorneys = await getAttorneys();
    const katerinTraugh = await getKaterinTraugh();

    const attorneysRebuildData = rebuildDataForAttorneysCards(
      practicesWithAttorneys,
      attorneys,
    );

    const attorneysWithKaterin = [...attorneysRebuildData, katerinTraugh];

    global.cache.attorneys = {
      data: attorneysWithKaterin,
      lastFetchTime: currentTime,
    };

    setResponseHeaders(res, cacheDurationSeconds, 'MISS');
    return res.status(200).json({ data: attorneysWithKaterin });
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
