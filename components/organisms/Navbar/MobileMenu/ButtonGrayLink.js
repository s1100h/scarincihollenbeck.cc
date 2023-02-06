import Link from 'next/link';
import { GrayButtonLink } from '../../../../styles/MobileMenu.style';

const ButtonGrayLink = ({ text, slug, closeMenu }) => (
  <Link href={slug} passHref>
    <GrayButtonLink onClick={closeMenu}>{text}</GrayButtonLink>
  </Link>
);

export default ButtonGrayLink;
