import Link from 'next/link';
import { ContainerDefault } from 'styles/Containers.style';
import { ButtonRed } from 'styles/Buttons.style';
import MailingListIcon from 'components/common/icons/MailingListIcon';
import {
  FooterNavigation,
  NavHolder,
  NavWrapper,
} from '../../../styles/Footer.style';
import { footerNavList } from '../../../utils/constants';
import SubscriptionModal from '../../molecules/subscription/SubscriptionModal';

const NavigationAndSubscription = () => (
  <NavWrapper className="d-print-none" data-testid="footer-nav">
    <ContainerDefault>
      <NavHolder>
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
          <ButtonRed as="span">
            <MailingListIcon />
            Join our mailing list
          </ButtonRed>
        </SubscriptionModal>
      </NavHolder>
    </ContainerDefault>
  </NavWrapper>
);

export default NavigationAndSubscription;
