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
const fetch = require('node-fetch');
const redis = require("redis");
// fetch posts from scarincihollenbeck.com and set it to redis cache
exports.fetchContent = (url, key) => __awaiter(void 0, void 0, void 0, function* () {
    const client = redis.createClient(process.env.REDIS_URL);
    client.auth(process.env.REDIS_PASSWORD);
    try {
        console.log('url: ', `${process.env.ADMIN_SITE}/${url}`);
        const response = yield fetch(`${process.env.ADMIN_SITE}/${url}`);
        const body = yield response.json();
        const success = client.set(key, JSON.stringify(body));
        console.log('url');
        console.log(url);
        console.log('success');
        console.log(success);
        return success;
    }
    catch (err) {
        return err;
    }
});
//# sourceMappingURL=fetch.js.map