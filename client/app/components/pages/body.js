import ContactForm from '../contact-form';
import { createMarkup } from 'utils/helpers';

export default function Body(props) {
  const { content } = props;

  return (
    <>
      <div className="post-content" dangerouslySetInnerHTML={createMarkup(content)} />
      <div className="mt-5 w-100">
        <h4 className="bg-light-gray">
          Contact A Firm Reprepresentative
        </h4>
        <ContactForm />
      </div>
    </>
  );
}
