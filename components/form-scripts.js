import Script from 'next/script';

export default function FormScripts() {
  return (
    <>
      <Script src="https://kwesforms.com/v2/kwes-script.js" />
      <Script src="https://www.google.com/recaptcha/api.js?render=6LeC96QZAAAAACJ64-6i0e-wibaQpwEpRPcnWNdY" />
    </>
  );
}
