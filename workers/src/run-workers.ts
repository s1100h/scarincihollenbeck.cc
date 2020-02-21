import { fetchContent } from './fetch';
import * as url from './urls';
import * as keys from './keys';

(async () => {
  await fetchContent(url.ADMIN_ARCHIVE_API_URL, keys.ADMIN_ARCHIVE_KEY);
  await fetchContent(url.ATTORNEY_FILTERS_LOCATION_API_URL, keys.ATTORNEY_FILTERS_LOCATION_KEY);
  await fetchContent(url.ATTORNEY_FILTERS_DESIGNATIONS_API_URL, keys.ATTORNEY_FILTERS_DESIGNATIONS_KEY);
  await fetchContent(url.ATTORNEY_FILTERS_PRACTICES_API_URL, keys.ATTORNEY_FILTERS_PRACTICES_KEY);
  await fetchContent(url.OFFICES_API_URL, keys.OFFICES_KEY);
  await fetchContent(url.FIRM_OVERVIEW_URL, keys.FIRM_OVERVIEW_KEY);
  await fetchContent(url.CORE_PRACTICES_URL, keys.CORE_PRACTICES_KEY);
  await fetchContent(url.ATTORNEY_LIST_API_URL, keys.ATTORNEY_LIST_KEY);
  await fetchContent(url.PAGE_API_URL, keys.PAGE_KEY);
  await fetchContent(url.CATEGORIES_API_URL, keys.CATEGORIES_KEY);
  await fetchContent(url.PRACTICE_PAGE_URL, keys.PRACTICE_PAGE_KEY);
  await fetchContent(url.FIRM_NEWS_URL, keys.FIRM_NEWS_KEY);
  await fetchContent(url.FIRM_EVENTS_URL, keys.FIRM_EVENTS_KEY);
  await fetchContent(url.FIRM_INSIGHTS_URL, keys.FIRM_INSIGHTS_KEY);
  console.log('all content has been fetched and is stored in redis db!')
})();
