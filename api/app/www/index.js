"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const CronJob = require('cron').CronJob;
const fetch_1 = require("./fetch");
const url = __importStar(require("./urls"));
const keys = __importStar(require("./keys"));
/** Once a day tasks */
// 0 0 * * *
new CronJob('0 0 * * *', () => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch_1.fetchContent(url.ADMIN_ARCHIVE_API_URL, keys.ADMIN_ARCHIVE_KEY);
    yield fetch_1.fetchContent(url.ATTORNEY_FILTERS_LOCATION_API_URL, keys.ATTORNEY_FILTERS_LOCATION_KEY);
    yield fetch_1.fetchContent(url.ATTORNEY_FILTERS_DESIGNATIONS_API_URL, keys.ATTORNEY_FILTERS_DESIGNATIONS_KEY);
    yield fetch_1.fetchContent(url.ATTORNEY_FILTERS_PRACTICES_API_URL, keys.ATTORNEY_FILTERS_PRACTICES_KEY);
    yield fetch_1.fetchContent(url.OFFICES_API_URL, keys.OFFICES_KEY);
    yield fetch_1.fetchContent(url.FIRM_OVERVIEW_URL, keys.FIRM_OVERVIEW_KEY);
    yield fetch_1.fetchContent(url.CORE_PRACTICES_URL, keys.CORE_PRACTICES_KEY);
    console.log('Once a day tasks completed');
}), null, true, 'America/New_York');
/** Once every 30 minute tasks */
// */30 * * * *
new CronJob('*/30 * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch_1.fetchContent(url.ATTORNEY_LIST_API_URL, keys.ATTORNEY_LIST_KEY);
    yield fetch_1.fetchContent(url.PAGE_API_URL, keys.PAGE_KEY);
    yield fetch_1.fetchContent(url.CATEGORIES_API_URL, keys.CATEGORIES_KEY);
    yield fetch_1.fetchContent(url.PRACTICE_PAGE_URL, keys.PRACTICE_PAGE_KEY);
    yield fetch_1.fetchContent(url.FIRM_NEWS_URL, keys.FIRM_NEWS_KEY);
    yield fetch_1.fetchContent(url.FIRM_EVENTS_URL, keys.FIRM_EVENTS_KEY);
    yield fetch_1.fetchContent(url.FIRM_INSIGHTS_URL, keys.FIRM_INSIGHTS_KEY);
    console.log('Once every 30 minute tasks completed');
}), null, true, 'America/New_York');
//# sourceMappingURL=index.js.map