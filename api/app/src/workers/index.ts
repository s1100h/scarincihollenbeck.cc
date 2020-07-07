/**
 * Fetch Urls
 * 
 * CHRON Workers
 * ======================================================
 * 
 * https://scarincihollenbeck.com/wp-json/admin-search/admin/ -> /admin-archive (Archive Admin)
 * https://scarincihollenbeck.com/wp-json/attorney-search/office-locations -> /attorney-filters ( Archive Attorney, Page, QuickNews, Search, Single)
 * https://scarincihollenbeck.com/wp-json/attorney-search/designations -> /attorney-filters (Archive Attorney, Page, QuickNews, Search, Single)
 * https://scarincihollenbeck.com/wp-json/attorney-search/practices -> /attorney-filters (Archive Attorney, QuickNews, Search, Single)
 * https://scarincihollenbeck.com/wp-json/location-portal/offices -> /office-locations (Archive Locations, Front Page)
 * https://scarincihollenbeck.com/wp-json/practice-portal/page/ -> /practices (Archive Practice)
 * https://scarincihollenbeck.com/wp-json/firm-overview/content -> firm-overview (Firm Overview)
 * https://scarincihollenbeck.com/wp-json/wp/v2/categories?per_page=100 -> /all-categories (use in Page, QuickNews, Search, Single)
 * https://scarincihollenbeck.com/wp-json/core-practices/list -> /core-practices (Category, Front Page)
 * https://scfarincihollenbeck.com/wp-json/firm-pages/list -> /firm-pages (Routes)
 * 
 * 
 *  
 * 
 */

require('dotenv').config();
const CronJob = require('cron').CronJob;
import { fetchContent } from './fetch';
import * as url from './urls';
import * as keys from './keys';



async function callWorkers() {
  /** Once a day tasks */
  // 0 0 * * *
  await new CronJob('0 0 * * *', async () => {    
    await fetchContent(url.ATTORNEY_FILTERS_LOCATION_API_URL, keys.ATTORNEY_FILTERS_LOCATION_KEY);
    await fetchContent(url.ATTORNEY_FILTERS_DESIGNATIONS_API_URL, keys.ATTORNEY_FILTERS_DESIGNATIONS_KEY);
    await fetchContent(url.ATTORNEY_FILTERS_PRACTICES_API_URL, keys.ATTORNEY_FILTERS_PRACTICES_KEY);
    await fetchContent(url.OFFICES_API_URL, keys.OFFICES_KEY);
    await fetchContent(url.FIRM_OVERVIEW_URL, keys.FIRM_OVERVIEW_KEY);
    await fetchContent(url.CORE_PRACTICES_URL, keys.CORE_PRACTICES_KEY);
  }, null, true, 'America/New_York' );

  /** Once every 30 minute tasks */
  // */30 * * * *
  await new CronJob('*/30 * * * *', async () => {
    await fetchContent(url.ADMIN_ARCHIVE_API_URL, keys.ADMIN_ARCHIVE_KEY);
    await fetchContent(url.ATTORNEY_LIST_API_URL, keys.ATTORNEY_LIST_KEY);
    await fetchContent(url.PAGE_API_URL, keys.PAGE_KEY);
    await fetchContent(url.CATEGORIES_API_URL, keys.CATEGORIES_KEY);
    await fetchContent(url.PRACTICE_PAGE_URL, keys.PRACTICE_PAGE_KEY);
    await fetchContent(url.FIRM_NEWS_URL, keys.FIRM_NEWS_KEY);
    await fetchContent(url.FIRM_EVENTS_URL, keys.FIRM_EVENTS_KEY);
    await fetchContent(url.FIRM_INSIGHTS_URL, keys.FIRM_INSIGHTS_KEY);
  }, null, true, 'America/New_York' );
}

export const executeWorkers: any = callWorkers;


