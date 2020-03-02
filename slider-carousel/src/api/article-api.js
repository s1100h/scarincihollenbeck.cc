import { ADMIN_URL } from './utils'
const superagent = require('superagent')


// header object for authorization
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export async function articleApiEvents() {  
  try {
    const url =`${ADMIN_URL}/wp-json/front-page/events`;
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

export async function articleApiNews() {  
  try {
    const url =`${ADMIN_URL}/wp-json/front-page/news`;
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