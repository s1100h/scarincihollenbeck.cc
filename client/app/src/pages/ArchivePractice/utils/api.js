/* eslint-disable import/prefer-default-export */
require('es6-promise').polyfill();
require('isomorphic-fetch');

// header object for authorization
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

// get list of all attorneys
export const getPracticePortalContent = () => fetch(`${process.env.ADMIN_SITE}/wp-json/practice-portal/page/`, { headers })
  .then((res) => res.json())
  .then((data) => data);

export const getBlogCategories = () => fetch(`${process.env.ADMIN_SITE}/wp-json/practice-portal/blog-categories`, { headers })
  .then((res) => res.json())
  .then((data) => data);

export const getPosts = (id) => fetch(`${process.env.ADMIN_SITE}/wp-json/wp/v2/posts?categories=${id}`, { headers })
  .then((res) => res.json())
  .then((data) => data);
