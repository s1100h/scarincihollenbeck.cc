import { SITE_TITLE } from 'utils/constants';
import SubscriptionModal from 'components/molecules/subscription/SubscriptionModal';
import { GradientSubscriptionBox } from '../../../styles/Subscription.style';

const Subscription = () => (
  <GradientSubscriptionBox>
    <h5 className="fs-1_2rem mb-2">Get the latest from our attorneys!</h5>
    <p>
      Please fill out our short form to get the latest articles from the
      {' '}
      {SITE_TITLE}
      attorneys weekly on the cutting-edge legal topics.
    </p>
    <SubscriptionModal />
  </GradientSubscriptionBox>
);

export default Subscription;
