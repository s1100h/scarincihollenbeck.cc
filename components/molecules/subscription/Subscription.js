import { SITE_TITLE } from 'utils/constants';
import SubscriptionModal from 'components/molecules/subscription/SubscriptionModal';

const Subscription = () => (
  <div>
    <p className="fs-1_2rem mb-2">
      <strong>Get the latest from our attorneys!</strong>
    </p>
    <p>
      Please fill out our short form to get the latest articles from the
      {' '}
      {SITE_TITLE}
      attorneys weekly on the cutting-edge legal topics.
    </p>
    <SubscriptionModal />
  </div>
);

export default Subscription;
