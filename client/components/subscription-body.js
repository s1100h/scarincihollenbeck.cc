import textStyles from 'styles/Text.module.css';
import SubscriptionFormColumn from 'components/subscription-form-column';

export default function SubscriptionBody() {
  return (
    <>
      <div className="w-100 my-4">
        <h1>
          <strong>Scarinci Hollenbeck Mailing List</strong>
        </h1>
        <h2 className={`${textStyles.redTitle} my-4`}>
          <strong>
            As the legal world continues to evolve, it is important to stay
            aware of its various and regular updates.
          </strong>
        </h2>
        <p className="h4">Be the the first to know when: </p>
        <ul className="h4 my-4">
          <li className="mb-2">
            When our
            <strong> attorney&apos;s blog posts</strong>
          </li>
          <li className="mb-2">
            Various
            {' '}
            <strong>legal updates</strong>
            {' '}
            that may pertain to your
            business
          </li>
          <li className="mb-3">
            Any annoucements and press releases from the attorneys at the firm
          </li>
        </ul>
        <h4 className={`${textStyles.redTitle} mb-4`}>
          <strong>Sign up Today!</strong>
        </h4>
      </div>
      <SubscriptionFormColumn />
    </>
  );
}
