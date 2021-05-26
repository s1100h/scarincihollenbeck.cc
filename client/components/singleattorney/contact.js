import marginStyles from 'styles/Margins.module.css';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import AttorneyProfileContactForm from 'components/singleattorney/contact-form';

export default function AttorneyProfileContact({ content }) {
  const { profile } = content;
  const {
    name, email, phoneNumber, socialMedia, vizibility,
  } = profile;

  return (
    <div className={marginStyles.mtMinusMd2}>
      <h4 className={grayTitleStyles.title}>
        Get in touch with
        {' '}
        {name}
      </h4>
      <AttorneyProfileContactForm />
    </div>
  );
}
