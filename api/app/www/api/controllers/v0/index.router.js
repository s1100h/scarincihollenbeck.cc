"use strict";
/**
 * Routes
 * https://scarincihollenbeck.com/wp-json/attorney-search/office-locations -> /attorney-filters (Pages: Archive Attorney, Page, QuickNews, Search, Single)
 * https://scarincihollenbeck.com/wp-json/attorney-search/designations -> /attorney-filters (Pages: Archive Attorney, Page, QuickNews, Search, Single)
 * https://scarincihollenbeck.com/wp-json/attorney-search/practices -> /attorney-filters (Pages: Archive Attorney, QuickNews, Search, Single)
 * https://scarincihollenbeck.com/wp-json/location-portal/offices -> /office-locations (Pages: Archive Locations, Front Page)
 * https://scarincihollenbeck.com/wp-json/practice-portal/page/ -> /practices (Pages: Archive Practice)
 * https://scarincihollenbeck.com/wp-json/firm-overview/content -> firm-overview (Pages: Firm Overview)
 * https://scarincihollenbeck.com/wp-json/wp/v2/categories?per_page=100 -> /all-categories (Pages: Page, QuickNews, Search, Single)
 * NEW https://scarincihollenbeck.com/wp-json/core-practices/list -> /core-practices (Pages: Category, Front Page)
 * NEW https://scfarincihollenbeck.com/wp-json/firm-pages/list -> /firm-pages (Pages: Routes(index.js))
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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminarchive_1 = require("./content/routes/adminarchive");
const searchoptions_1 = require("./content/routes/searchoptions");
const attorneyfilters_1 = require("./content/routes/attorneyfilters");
const corepractices_1 = require("./content/routes/corepractices");
const firmoverview_1 = require("./content/routes/firmoverview");
const firmpages_1 = require("./content/routes/firmpages");
const officelocations_1 = require("./content/routes/officelocations");
const practices_1 = require("./content/routes/practices");
const latestarticle_1 = require("./content/routes/latestarticle");
const router = express_1.Router();
router.use('/cached', adminarchive_1.AdminRouter);
router.use('/cached', searchoptions_1.SearchOptionsRouter);
router.use('/cached', attorneyfilters_1.AttorneyFilterRouter);
router.use('/cached', corepractices_1.CorePracticesRouter);
router.use('/cached', firmoverview_1.FirmOverviewRouter);
router.use('/cached', firmpages_1.FirmPageRouter);
router.use('/cached', officelocations_1.OfficeRouter);
router.use('/cached', practices_1.PracticePageRouter);
router.use('/cached', latestarticle_1.LatestArticlesRouter);
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('/cached/');
}));
exports.IndexRouter = router;
//# sourceMappingURL=index.router.js.map