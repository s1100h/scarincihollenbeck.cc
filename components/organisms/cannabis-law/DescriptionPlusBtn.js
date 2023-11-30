import SubscriptionModal from 'components/molecules/subscription/SubscriptionModal';
import { DescrBtnContainer } from '../../../styles/practices-special-style/DescriptionPlusBtn.style';

const DescriptionPlusBtn = ({ text, labelForBtn }) => (
  <DescrBtnContainer>
    <p>{text}</p>
    <SubscriptionModal />
  </DescrBtnContainer>
);

export default DescriptionPlusBtn;
