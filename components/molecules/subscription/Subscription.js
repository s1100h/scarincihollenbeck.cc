import SubscriptionModal from 'components/molecules/subscription/SubscriptionModal';
import { GradientSubscriptionBox } from '../../../styles/Subscription.style';

const Subscription = () => (
  <GradientSubscriptionBox>
    <h5 className="fs-1_2rem mb-2">Sign up to get the latest from our attorneys!</h5>
    <p>
      Consider subscribing to our Firm Insights mailing list by clicking the button below so you can
      keep up to date with the firm`s latest articles covering various legal topics.
    </p>
    <SubscriptionModal />
  </GradientSubscriptionBox>
);

export default Subscription;
