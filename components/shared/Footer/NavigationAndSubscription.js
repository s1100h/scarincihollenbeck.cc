import Link from 'next/link';
import { BsFillEnvelopePlusFill } from 'react-icons/bs';
import { FooterNavigation, NavContainer } from '../../../styles/Footer.style';
import { footerNavList } from '../../../utils/constants';
import SubscriptionModal from '../../molecules/subscription/SubscriptionModal';

const NavigationAndSubscription = () => (
  <NavContainer>
    <FooterNavigation>
      <ul>
        {footerNavList.map(({ linkTitle, link, id }) => (
          <li key={id}>
            <Link href={link}>{linkTitle}</Link>
          </li>
        ))}
      </ul>
    </FooterNavigation>
    <SubscriptionModal customClass="footer-subscription-btn">
      <>
        <BsFillEnvelopePlusFill />
        Join our mailing list
      </>
    </SubscriptionModal>
  </NavContainer>
);

export default NavigationAndSubscription;
