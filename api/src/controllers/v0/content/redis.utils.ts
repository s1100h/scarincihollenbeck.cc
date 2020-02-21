require('dotenv').config()
import redis from 'redis';

// set up redis client
const client = redis.createClient();

// auth redis
client.auth('Ix1sH41F/lKT3zQHFIoNzwoi/T3YQCkjaUyWlyVOzsIWS13+vmW5j9qGmnVVBC1ewoFDA5WaPFZd6MbR');

const { promisify } = require('util');

export const getAsync = promisify(client.get).bind(client);

// parse results
export const parseResults = (str:string) => JSON.parse(str);
