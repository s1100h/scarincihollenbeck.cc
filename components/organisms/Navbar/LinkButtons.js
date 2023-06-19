import Link from 'next/link';
import { ButtonLink } from 'styles/LinkButtons.style';

import { BsFillTelephoneFill, BsFillCreditCard2BackFill } from 'react-icons/bs';

const LinkButtons = () => (
  <>
    <Link href="/contact" passHref legacyBehavior>
      <ButtonLink>
        <BsFillTelephoneFill />
        <span>Contact us</span>
      </ButtonLink>
    </Link>
    <ButtonLink href="https://secure.lawpay.com/pages/scarincihollenbeck/operating" target="_blank" rel="noreferrer">
      <BsFillCreditCard2BackFill />
      <span>Make payment</span>
    </ButtonLink>
  </>
);

export default LinkButtons;
