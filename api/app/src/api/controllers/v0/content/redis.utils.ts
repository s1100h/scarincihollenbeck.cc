import redis = require('redis');

// set up redis client
const client = redis.createClient(process.env.REDIS_URL);

client.auth(process.env.REDIS_PASSWORD);

const { promisify } = require('util');

export const getAsync = promisify(client.get).bind(client);

// parse results
export const parseResults = (str:string) => JSON.parse(str);
