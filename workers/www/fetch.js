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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const node_fetch_1 = __importDefault(require("node-fetch"));
const redis_1 = __importDefault(require("redis"));
// fetch posts from donaldscarinci.com and set it to redis cache
exports.fetchContent = (url, key) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = redis_1.default.createClient();
        client.auth('Ix1sH41F/lKT3zQHFIoNzwoi/T3YQCkjaUyWlyVOzsIWS13+vmW5j9qGmnVVBC1ewoFDA5WaPFZd6MbR');
        return yield node_fetch_1.default(`${process.env.ADMIN_SITE}/${url}`)
            .then((res) => res.json())
            .then((data) => {
            const success = client.set(key, JSON.stringify(data));
            return success;
        })
            .catch((err) => err);
    }
    catch (err) {
        if (err)
            err;
    }
});
//# sourceMappingURL=fetch.js.map