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
const responseObject = (obj) => obj.title.rendered.replace('&#038;', '&');
router.get('/firm-pages', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pageList = yield redis_utils_1.getAsync('pageList');
        // // parse strings to JSON objects
        const parsedPageList = redis_utils_1.parseResults(pageList);
        // store results
        const results = [];
        // push formatted results to response results array
        yield parsedPageList.forEach((post) => results.push(responseObject(post)));
        if (parsedPageList.length > 0) {
            res.status(200).send(results);
        }
        if (parsedPageList.length < 0) {
            res.status(400).send({ message: 'Sorry, no articles were found' });
        }
    }
    catch (err) {
        if (err) {
            res.status(400).send(err);
        }
    }
}));
exports.FirmPageRouter = router;
//# sourceMappingURL=firmpages.js.map