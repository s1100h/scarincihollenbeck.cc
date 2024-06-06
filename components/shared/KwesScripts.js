import Script from 'next/script';

const KwesScripts = () => (
  <>
    <Script
      strategy="lazyOnload"
      src="https://www.google.com/recaptcha/api.js?render=6LeuFw8TAAAAAERdYOpu1cVVC-vum-6Ie-oU_8SA"
    />
  </>
);

export default KwesScripts;
