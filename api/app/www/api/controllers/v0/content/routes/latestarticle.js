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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const redis_utils_1 = require("../redis.utils");
// set up express router
const router = express_1.Router();
const responseObject = (obj) => {
    const { ID, title, link, image } = obj;
    return {
        ID,
        title,
        link,
        image
    };
};
router.get('/latest-articles', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // redis keys
        const firmNewsKey = yield redis_utils_1.getAsync('firmNews');
        const firmEventsKey = yield redis_utils_1.getAsync('firmEvents');
        const firmInsightsKey = yield redis_utils_1.getAsync('firmInsights');
        // parse strings to JSON objects
        const parsedFirmNews = redis_utils_1.parseResults(firmNewsKey);
        const parsedFirmEvents = redis_utils_1.parseResults(firmEventsKey);
        const parsedFirmInsights = redis_utils_1.parseResults(firmInsightsKey);
        // store results
        let results = {};
        // push formatted results to response results array
        const firmNewsMain = yield parsedFirmNews.main.map((post) => responseObject(post));
        const firmNewsLatest = yield parsedFirmNews.latest.map((post) => responseObject(post));
        const firmEventsMain = yield parsedFirmEvents.main.map((post) => responseObject(post));
        const firmEventsLatest = yield parsedFirmEvents.latest.map((post) => responseObject(post));
        const firmInsightsMain = yield parsedFirmInsights.main.map((post) => responseObject(post));
        const firmInsightsLatest = yield parsedFirmInsights.latest.map((post) => responseObject(post));
        results = {
            firmNews: [
                ...firmNewsMain,
                ...firmNewsLatest
            ],
            firmEvents: [
                ...firmEventsMain,
                ...firmEventsLatest
            ],
            firmInsights: [
                ...firmInsightsMain,
                ...firmInsightsLatest
            ]
        };
        if (Object.keys(results).length > 0) {
            res.status(200).send(results);
        }
        if (Object.keys(results).length < 0) {
            res.status(400).send({ message: 'Sorry, no articles were found' });
        }
    }
    catch (err) {
        if (err) {
            res.status(400).send(err);
        }
    }
}));
exports.LatestArticlesRouter = router;
//# sourceMappingURL=latestarticle.js.map