import fetch from 'node-fetch';
import redis from 'redis';

const client = redis.createClient();

// fetch posts from donaldscarinci.com and set it to redis cache
export const fetchContent = async (url:string, key:string) => {
  const results: any = [];
  try {
   await fetch(`${process.env.BACKEND_SITE_URL}/${url}`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((post:any) => {
        results.push(post)
      });        
    })
    .catch((err) => err);

    const success = client.set(key, JSON.stringify(results));
    
    return success;
  } catch (err) {
    if (err) err;
  }
};