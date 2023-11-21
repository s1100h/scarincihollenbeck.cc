import { BsFillEnvelopePlusFill } from 'react-icons/bs';
import {
  AddressSubscriptionContainer,
  SubscptionHeaderBtn,
} from '../../../styles/Header.style';
import ContactBoxTemplate from '../../atoms/ContactBox';

const AddressSubscription = () => (
  <AddressSubscriptionContainer>
    <ContactBoxTemplate number="201-896-4100" email="info@sh-law.com" />
    <SubscptionHeaderBtn>
      <BsFillEnvelopePlusFill />
    </SubscptionHeaderBtn>
  </AddressSubscriptionContainer>
);

export default AddressSubscription;
