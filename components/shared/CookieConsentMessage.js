import Link from 'next/link';
import CookieConsent, { Cookies } from 'react-cookie-consent';

const CookieConsentMessage = () => (
  <div className="d-print-none">
    <CookieConsent
      className="d-print-none"
      enableDeclineButton
      onDecline={() => Cookies.remove('shpuser')}
    >
      This website uses cookies to enhance the user experience. If you have
      further concerns please review our
      {' '}
      <Link href="/privacy-policy" passHref>
        <u>privacy policy.</u>
      </Link>
    </CookieConsent>
  </div>
);

export default CookieConsentMessage;
