/* eslint-disable import/prefer-default-export */
import moment from 'moment';

export function setUserCookie() {
  // get the user cookie
  const currentCookies = document.cookie;
  const userCookie = currentCookies.indexOf('shpuser=') > -1;

  // no cookie
  if (!userCookie) {
    const userID = Math.random().toString(36).substring(7);
    const expDate = moment().add(7, 'days').format('ddd, D MMM YYYY h:mm:ss');
    document.cookie = `shpuser=${userID}; expires=${expDate} GMT`;
    return true;
  }

  return false;
}
