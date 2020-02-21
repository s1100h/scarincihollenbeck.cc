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
router.get('/office-locations', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const officeLocations = yield redis_utils_1.getAsync('officeLocations');
        // // parse strings to JSON objects
        const parsedOfficeLocations = redis_utils_1.parseResults(officeLocations);
        if (Object.keys(parsedOfficeLocations).length > 0) {
            res.status(200).send(parsedOfficeLocations);
        }
        if (Object.keys(parsedOfficeLocations).length < 0) {
            res.status(400).send({ message: 'Sorry, no articles were found' });
        }
    }
    catch (err) {
        if (err) {
            res.status(400).send(err);
        }
    }
}));
exports.OfficeRouter = router;
//# sourceMappingURL=officelocations.js.map