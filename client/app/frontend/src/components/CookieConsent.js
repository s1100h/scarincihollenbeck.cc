import React from 'react';
import { Link } from 'react-router-dom';
import CookieConsent, { Cookies } from 'react-cookie-consent';


function CookieConsentContainer() {
  return (
    <CookieConsent
      enableDeclineButton
      onDecline={() => Cookies.remove('shpuser')}
    >
      This website uses cookies to enhance the user experience. If you have further concerns please review our
      {' '}
      <Link to="/privacy-policy">privacy policy.</Link>
    </CookieConsent>
  );
}


export default CookieConsentContainer;
