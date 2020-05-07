"use strict";
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
const fetch_1 = require("./fetch");
const url = __importStar(require("./urls"));
const keys = __importStar(require("./keys"));
function getAllData() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch_1.fetchContent(url.ADMIN_ARCHIVE_API_URL, keys.ADMIN_ARCHIVE_KEY);
        yield fetch_1.fetchContent(url.ATTORNEY_FILTERS_LOCATION_API_URL, keys.ATTORNEY_FILTERS_LOCATION_KEY);
        yield fetch_1.fetchContent(url.ATTORNEY_FILTERS_DESIGNATIONS_API_URL, keys.ATTORNEY_FILTERS_DESIGNATIONS_KEY);
        yield fetch_1.fetchContent(url.ATTORNEY_FILTERS_PRACTICES_API_URL, keys.ATTORNEY_FILTERS_PRACTICES_KEY);
        yield fetch_1.fetchContent(url.OFFICES_API_URL, keys.OFFICES_KEY);
        yield fetch_1.fetchContent(url.FIRM_OVERVIEW_URL, keys.FIRM_OVERVIEW_KEY);
        yield fetch_1.fetchContent(url.CORE_PRACTICES_URL, keys.CORE_PRACTICES_KEY);
        yield fetch_1.fetchContent(url.ATTORNEY_LIST_API_URL, keys.ATTORNEY_LIST_KEY);
        yield fetch_1.fetchContent(url.PAGE_API_URL, keys.PAGE_KEY);
        yield fetch_1.fetchContent(url.CATEGORIES_API_URL, keys.CATEGORIES_KEY);
        yield fetch_1.fetchContent(url.PRACTICE_PAGE_URL, keys.PRACTICE_PAGE_KEY);
        yield fetch_1.fetchContent(url.FIRM_NEWS_URL, keys.FIRM_NEWS_KEY);
        yield fetch_1.fetchContent(url.FIRM_EVENTS_URL, keys.FIRM_EVENTS_KEY);
        yield fetch_1.fetchContent(url.FIRM_INSIGHTS_URL, keys.FIRM_INSIGHTS_KEY);
    });
}
exports.fetchData = getAllData;
//# sourceMappingURL=run-workers.js.map