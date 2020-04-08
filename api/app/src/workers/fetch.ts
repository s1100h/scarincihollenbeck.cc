
const fetch = require('node-fetch');
import redis = require('redis');

// fetch posts from donaldscarinci.com and set it to redis cache
export const fetchContent = async (url:string, key:string) => {
  const client = redis.createClient(process.env.REDIS_URL);
  client.auth(process.env.REDIS_PASSWORD);

  try {
    const response = await fetch(`${process.env.ADMIN_SITE}/${url}`);
    const body = await response.json();
    const success = client.set(key, JSON.stringify(body));
    return success

  }catch(err) {
    console.log(err);
    return err;
  }
 }
