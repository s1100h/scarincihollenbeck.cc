import ReCAPTCHA from 'react-google-recaptcha';


export default FromReCaptcha(props) {
  const { setCatpcah } = props;
  function onChange() {
    console.log(value);
  }
  return <ReCAPTCHA sitekey={process.env.REACT_APP_CATPCHA_KEYS} onChange={onChange} />
/>
} 