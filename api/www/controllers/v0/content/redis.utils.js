"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const redis_1 = __importDefault(require("redis"));
// set up redis client
const client = redis_1.default.createClient();
// auth redis
client.auth('Ix1sH41F/lKT3zQHFIoNzwoi/T3YQCkjaUyWlyVOzsIWS13+vmW5j9qGmnVVBC1ewoFDA5WaPFZd6MbR');
const { promisify } = require('util');
exports.getAsync = promisify(client.get).bind(client);
// parse results
exports.parseResults = (str) => JSON.parse(str);
//# sourceMappingURL=redis.utils.js.map