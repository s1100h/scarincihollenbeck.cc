import { CACHED_URL } from './utils'
const superagent = require('superagent')


// header object for authorization
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export async function locationApi() {  
  try {
    const url =`${CACHED_URL}/cached/office-locations`;
    return await superagent.get(url)
      .set(headers)
      .then((res) => {
        return {
          status: res.status,
          body: JSON.parse(res.text)
        }
      })

  } catch (err) {
    return new Error(`Something went wrong: ${err}`);
  }
}