import marginStyles from 'styles/Margins.module.css';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import AttorneyProfileContactForm from 'components/singleattorney/contact-form';

export default function AttorneyProfileContact({ content, forwardEmail }) {
  const { profile } = content;
  const { name } = profile;

  return (
    <div className={marginStyles.mtMinusMd2}>
      <h4 className={grayTitleStyles.title}>
        Get in touch with
        {name}
      </h4>
      <AttorneyProfileContactForm forwardEmail={forwardEmail} currentAttorney={name} />
    </div>
  );
}
