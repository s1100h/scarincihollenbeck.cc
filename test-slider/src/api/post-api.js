
// header object for authorization
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const API_URL = 'https://admin.scarincilies.com';

export async function postApi() { 
  return await fetch(`${API_URL}/wp-json/just-in/posts`, { headers })
    .then((res) => res.json())
    .then((body) => ({
      status: 200,
      body
    }))
    .catch((err) => err);
}
