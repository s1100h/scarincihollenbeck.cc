import { ButtonLink } from 'styles/LinkButtons.style';
import { BsFillTelephoneFill, BsFillCreditCard2BackFill } from 'react-icons/bs';

const LinkButtons = ({ handleClickAndClose }) => (
  <>
    <ButtonLink onClick={handleClickAndClose} href="/contact" passHref>
      <BsFillTelephoneFill />
      <span>Contact us</span>
    </ButtonLink>
    <ButtonLink
      onClick={handleClickAndClose}
      href="https://secure.lawpay.com/pages/scarincihollenbeck/operating"
      target="_blank"
      rel="noreferrer"
    >
      <BsFillCreditCard2BackFill />
      <span>Make payment</span>
    </ButtonLink>
  </>
);

export default LinkButtons;
