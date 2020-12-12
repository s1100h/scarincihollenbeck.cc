import { createMarkup } from 'utils/helpers';
import ContactForm from '../contact-form';

export default function PagesBody({ content }) {
  return (
    <>
      <div dangerouslySetInnerHTML={createMarkup(content)} />
      <div className="mt-5 w-100">
        <h4 className="bg-light-gray">Contact A Firm Reprepresentative</h4>
        <ContactForm />
      </div>
    </>
  );
}
