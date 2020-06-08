/* eslint-disable import/prefer-default-export */
require('es6-promise').polyfill();
require('isomorphic-fetch');

// header object for authorization
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
