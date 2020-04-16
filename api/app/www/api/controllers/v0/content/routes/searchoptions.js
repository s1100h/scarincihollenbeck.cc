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
    return {
        title: obj.title || obj.name
    };
};
router.get('/search-options', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogCategories = yield redis_utils_1.getAsync('blogCategories');
        const attorneyPractice = yield redis_utils_1.getAsync('attorneyPractices');
        const attorneysList = yield redis_utils_1.getAsync('attorneyList');
        // parse strings to JSON objects
        const parsedCategories = redis_utils_1.parseResults(blogCategories);
        const parsedPractice = redis_utils_1.parseResults(attorneyPractice);
        const parsedAttorneys = redis_utils_1.parseResults(attorneysList);
        // store results
        let results = {};
        // push formatted results to response results array
        const categories = yield parsedCategories.map((post) => responseObject(post));
        const attorneys = yield parsedAttorneys.map((post) => responseObject(post));
        const practices = yield parsedPractice.map((post) => responseObject(post));
        results = {
            categories,
            attorneys,
            practices
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
exports.SearchOptionsRouter = router;
//# sourceMappingURL=searchoptions.js.map