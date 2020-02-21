require('dotenv').config();
import fetch from 'node-fetch';
import redis from 'redis';

// fetch posts from donaldscarinci.com and set it to redis cache
export const fetchContent = async (url:string, key:string) => {
  try {
  const client = redis.createClient();
  client.auth('Ix1sH41F/lKT3zQHFIoNzwoi/T3YQCkjaUyWlyVOzsIWS13+vmW5j9qGmnVVBC1ewoFDA5WaPFZd6MbR');
  
  return await fetch(`${process.env.ADMIN_SITE}/${url}`)
    .then((res) => res.json())
    .then((data) => {
      const success = client.set(key, JSON.stringify(data));

      return success;        
    })
    .catch((err) => err);

  } catch (err) {
    if (err) err;
  }
 }
