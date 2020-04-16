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
router.get('/core-practices', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const practices = yield redis_utils_1.getAsync('corePractices');
        // parse strings to JSON objects
        const parsedPractices = redis_utils_1.parseResults(practices);
        // store results
        const results = [];
        // push formatted results to response results array
        yield parsedPractices.forEach((post) => results.push(post));
        const sortedResults = yield results.sort((a, b) => {
            return a.title.localeCompare(b.title);
        });
        if (results.length > 0) {
            res.status(200).send(sortedResults);
        }
        if (results.length < 0) {
            res.status(400).send({ message: 'Sorry, no articles were found' });
        }
    }
    catch (err) {
        if (err) {
            res.status(400).send(err);
        }
    }
}));
exports.CorePracticesRouter = router;
//# sourceMappingURL=corepractices.js.map