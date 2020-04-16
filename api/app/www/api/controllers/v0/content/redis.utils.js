"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis = require("redis");
// set up redis client
const client = redis.createClient(process.env.REDIS_URL);
client.auth(process.env.REDIS_PASSWORD);
const { promisify } = require('util');
exports.getAsync = promisify(client.get).bind(client);
// parse results
exports.parseResults = (str) => JSON.parse(str);
//# sourceMappingURL=redis.utils.js.map