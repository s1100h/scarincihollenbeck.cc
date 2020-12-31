import ReCAPTCHA from 'react-google-recaptcha';

export default function GoogleRecaptchButton({ setCaptcha }) {
  function onChange(value) {
    if (value) {
      setCaptcha(false);
    }
  }
  return (
    <div className="d-block w-100">
      <ReCAPTCHA
        sitekey="6Ld5QKgZAAAAAJgItlSz9xTxB1zay1u48kEOkhT1"
        className="mb-3"
        onChange={onChange}
      />
    </div>
  );
}
