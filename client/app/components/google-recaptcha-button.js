import ReCAPTCHA from 'react-google-recaptcha';

export default function FormReCaptcha(props) {
  const { setCaptcha } = props;
  function onChange(value) {
    if(value) {
      setCaptcha(false);
    }
  }
  return <div className="d-block w-100"><ReCAPTCHA sitekey="6LeC96QZAAAAACJ64-6i0e-wibaQpwEpRPcnWNdY" className="mb-3" onChange={onChange} /></div>
} 