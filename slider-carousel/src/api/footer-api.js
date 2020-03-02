import { ADMIN_URL } from './utils'
const superagent = require('superagent')


// header object for authorization
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export async function footerApi() {  
  try {
    const url =`${ADMIN_URL}/wp-json/just-in/posts`;
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