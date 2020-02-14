import fetch from 'node-fetch';
import redis from 'redis';

const client = redis.createClient();

// fetch posts from donaldscarinci.com and set it to redis cache
export const fetchContent = async (url:string, key:string) => {
  try {
  return fetch(`${process.env.BACKEND_SITE_URL}/${url}`)
    .then((res) => res.json())
    .then((data) => {
      const success = client.set(key, JSON.stringify(data));

      return success;        
    })
    .catch((err) => err);

  } catch (err) {
    if (err) err;
  }
};