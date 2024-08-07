import Image from 'next/image';
import { SITE_TITLE } from 'utils/constants';
import { CombinedLogo } from 'styles/SiteLogo.style';
import SHDiamond from '../../../public/images/sh-mini-diamond-PNG.svg';
import LogoLetters from '../../../public/images/lattersLogo.png';
import LogoLettersBlack from '../../../public/images/lettarsLogoblack.png';

const Logo = ({ whiteVariant }) => (
  <>
    <CombinedLogo href="/" passHref>
      <Image
        className="logo-diamond"
        alt={`${SITE_TITLE}, LLC`}
        width={170}
        height={147}
        priority
        src={SHDiamond}
      />
      {whiteVariant ? (
        <Image
          className="logo-letters"
          alt={`${SITE_TITLE}, LLC`}
          width={320}
          height={50}
          priority
          src={LogoLetters}
        />
      ) : (
        <Image
          className="logo-letters"
          alt={`${SITE_TITLE}, LLC`}
          width={320}
          height={50}
          priority
          src={LogoLettersBlack}
        />
      )}
    </CombinedLogo>
  </>
);

export default Logo;
