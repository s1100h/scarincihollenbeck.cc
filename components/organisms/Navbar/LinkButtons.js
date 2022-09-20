import Link from 'next/link';
import { SITE_PHONE, SITE_EMAIL } from 'utils/constants';
import { ButtonLink } from 'styles/LinkButtons.style';

import { BsFillTelephoneFill, BsFillCreditCard2BackFill } from 'react-icons/bs';

const LinkButtons = () => (
  <>
    <Link href="/contact" passHref>
      <ButtonLink>
        <span>Contact us</span>
        <BsFillTelephoneFill />
      </ButtonLink>
    </Link>
    <ButtonLink
      href="https://secure.lawpay.com/pages/scarincihollenbeck/operating"
      target="_blank"
      rel="noreferrer"
    >
      <span>Make payment</span>
      <BsFillCreditCard2BackFill />
    </ButtonLink>
  </>
);

// BsFillTelephoneFill

export default LinkButtons;
