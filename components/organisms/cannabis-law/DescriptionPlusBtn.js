import { useDispatch } from 'react-redux';
import { SubscribeBtn } from 'styles/Subscription.style';
import { DescrBtnContainer } from '../../../styles/practices-special-style/DescriptionPlusBtn.style';
import { handleSubscriptionModalOpener } from '../../../redux/slices/modals.slice';

const DescriptionPlusBtn = ({ text, modalClassName }) => {
  const dispatch = useDispatch();

  return (
    <DescrBtnContainer>
      <p>{text}</p>
      <SubscribeBtn
        onClick={() => dispatch(
          handleSubscriptionModalOpener({
            active: true,
            className: modalClassName,
          }),
        )}
      >
        <span>Subscribe Now!</span>
      </SubscribeBtn>
    </DescrBtnContainer>
  );
};

export default DescriptionPlusBtn;
