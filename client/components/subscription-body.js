import SubscriptionFormColumn from 'components/subscription-form-column';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
// import textStyles from 'styles/Text.module.css';

export default function SubscriptionBody() {
  return (
    <>
      <div className="w-100 my-4">
        {/* <p className="h4">Be the the first to know when: </p>
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
        </ul> */}
        <p className="lead py-3 mb-2 text-center">
          <strong>Be the the first to know when,</strong> our attorney's publish blog posts
        </p>
        <p className="lead py-4 mb-0 text-center border-top">
          or when there legal updates that may <strong>impact to your business</strong>
        </p>
        <p className="lead border-top border-bottom py-4 mb-5 text-center">
          or any <strong>announcements and press releases</strong> from the attorneys at Scarinci Hollenbeck
        </p>
        <h4 className={`${grayTitleStyles.title} mb-5`}>
            Sign up today!
        </h4>
        <style jsx>{`p {font-size: 1.5rem}`}</style>
      </div>
      <SubscriptionFormColumn />
    </>
  );
}
