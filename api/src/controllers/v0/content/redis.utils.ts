import redis from 'redis';

// set up redis client
const client = redis.createClient();

const { promisify } = require('util');

export const getAsync = promisify(client.get).bind(client);

// parse results
export const parseResults = (str:string) => JSON.parse(str);