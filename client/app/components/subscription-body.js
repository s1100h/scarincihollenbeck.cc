import SubscriptionPageForm from './subscription-page-form';


export default function SubscriptionBody() {
  return (
    <>
      <div className="w-100">
        <h1>Scarinci Hollenbeck Mailing List</h1>
        <h2 className="text-dark my-4 font-normal red-title ft-17">As the legal world continues to evolve, it is important to stay aware of its various and regular updates.</h2>
        <p className="h4">Be the the first to know when: </p>
        <ul className="h4 my-4">
          <li className="mb-4">
            When our
            <strong> attorney's blog posts</strong>
          </li>
          <li className="mb-4">
            Various
            {' '}
            <strong>legal updates</strong>
            {' '}
            that may pertain to your business
          </li>
          <li className="mb-4">Any annoucements and press releases from the attorneys at the firm</li>
        </ul>
        <h4 className="red-title mb-4">Sign up Today!</h4>
      </div>
      <SubscriptionPageForm />
    </>
  );
}
