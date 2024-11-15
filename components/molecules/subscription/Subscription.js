import { useDispatch } from 'react-redux';
import {
  GradientSubscriptionBox,
  SubscribeBtn,
} from '../../../styles/Subscription.style';
import { handleSubscriptionModalOpener } from '../../../redux/slices/modals.slice';

const Subscription = () => {
  const dispatch = useDispatch();
  return (
    <GradientSubscriptionBox>
      <p className="fs-1_2rem mb-2 subscription-title">
        Sign up to get the latest from our attorneys!
      </p>
      <p>
        Consider subscribing to our Firm Insights mailing list by clicking the
        button below so you can keep up to date with the firm`s latest articles
        covering various legal topics.
      </p>
      <SubscribeBtn
        onClick={() => dispatch(handleSubscriptionModalOpener({ active: true }))}
      >
        <span>Subscribe Now!</span>
      </SubscribeBtn>
    </GradientSubscriptionBox>
  );
};

export default Subscription;
