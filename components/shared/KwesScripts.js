import Script from 'next/script';
import { RECAPTCHA_SITE_KEY } from 'utils/constants';

const KwesScripts = () => (
  <>
    <Script
      strategy="lazyOnload"
      src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
    />
  </>
);

export default KwesScripts;
