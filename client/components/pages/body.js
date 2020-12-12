import { createMarkup } from 'utils/helpers';
import ContactForm from 'components/contact-form';
import styles from 'styles/BasicContent.module.css';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

export default function PagesBody({ content }) {
  return (
    <>
      <div className={styles.content} dangerouslySetInnerHTML={createMarkup(content)} />
      <div className="mt-5 w-100">
        <h4 className={grayTitleStyles.title}>Contact A Firm Reprepresentative</h4>
        <ContactForm />
      </div>
    </>
  );
}
