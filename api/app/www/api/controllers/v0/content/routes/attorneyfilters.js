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
    return Object.assign({ id: obj.ID, title: obj.title }, (obj.children && { children: obj.children }));
};
router.get('/attorney-filters', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const attorneyLocation = yield redis_utils_1.getAsync('attorneyLocation');
        const attorneyDesignation = yield redis_utils_1.getAsync('attorneyDesignation');
        const attorneyPractices = yield redis_utils_1.getAsync('attorneyPractices');
        // parse strings to JSON objects
        const parsedLocation = redis_utils_1.parseResults(attorneyLocation);
        const parsedDesignation = redis_utils_1.parseResults(attorneyDesignation);
        const parsedPractices = redis_utils_1.parseResults(attorneyPractices);
        // store results
        let results = {};
        // push formatted results to response results array
        const locations = yield parsedLocation.map((post) => responseObject(post));
        const designations = yield parsedDesignation.map((post) => responseObject(post));
        const practices = yield parsedPractices.map((post) => responseObject(post));
        results = {
            locations,
            designations,
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
exports.AttorneyFilterRouter = router;
//# sourceMappingURL=attorneyfilters.js.map