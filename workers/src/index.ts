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
 * NEW https://scarincihollenbeck.com/wp-json/core-practices/list -> /core-practices (Category, Front Page)
 * NEW https://scfarincihollenbeck.com/wp-json/firm-pages/list -> /firm-pages (Routes)
 * 
 * 
 *  
 * 
 */

const CronJob = require('cron').CronJob;
import { fetchContent } from './fetch';
import * as url from './urls';
import * as key from './keys';

/** 0 12 * * 1 **/
new CronJob('* * * * *', async () => {

  console.log('request made on monday at 12:00');
}, null, true, 'America/New_York' );
