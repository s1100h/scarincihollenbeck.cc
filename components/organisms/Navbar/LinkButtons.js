import { ButtonLink, SpecialButtonLink } from 'styles/LinkButtons.style';
import { BsFillTelephoneFill, BsFillCreditCard2BackFill } from 'react-icons/bs';
import { MAKE_A_PAYMENT } from '../../../utils/constants';

export const userPageTabFactory = {
  default: ButtonLink,
  special: SpecialButtonLink,
};

const LinkButtons = ({ handleClickAndClose, variant }) => {
  const Component = userPageTabFactory[variant];

  return (
    <>
      <Component onClick={handleClickAndClose} href="/contact" passHref>
        <BsFillTelephoneFill />
        <span>Contact us</span>
      </Component>
      <Component onClick={handleClickAndClose} href={MAKE_A_PAYMENT} target="_blank" rel="noreferrer">
        <BsFillCreditCard2BackFill />
        <span>Make payment</span>
      </Component>
    </>
  );
};

export default LinkButtons;
