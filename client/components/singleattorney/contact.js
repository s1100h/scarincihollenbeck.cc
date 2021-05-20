import AttorneyProfileContactForm from 'components/singleattorney/contact-form';

export default function AttorneyProfileContact({ content }) {
  const { profile } = content;
  const { email, phoneNumber, socialMedia, vizibility } = profile;
  return (
    <>

      <p>
        <strong>
          {' '}
          Contact:
          {' '}
        </strong>
        { phoneNumber} | {email} | {socialMedia.map((social) => <a key={social.channel} href={social.url}>{social.channel} </a>)} | <a href={vizibility}>Vizibility Card</a>
      </p>
      <AttorneyProfileContactForm />
    </>
  );
}
