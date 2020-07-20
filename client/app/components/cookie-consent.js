import Link from 'next/link';
import CookieConsent, { Cookies } from 'react-cookie-consent';


function CookieConsentContainer() {
  return (
    <CookieConsent
      enableDeclineButton
      onDecline={() => Cookies.remove('shpuser')}
    >
      This website uses cookies to enhance the user experience. If you have further concerns please review our
      {' '}
      <Link href="/privacy-policy">
        <a>
          privacy policy.
        </a>
      </Link>
    </CookieConsent>
  );
}


export default CookieConsentContainer;
