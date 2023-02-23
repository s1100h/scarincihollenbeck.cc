import Image from 'next/image';
import Link from 'next/link';
import { SITE_TITLE } from 'utils/constants';
import { LogoWrapper, DiamondWrapper } from 'styles/SiteLogo.style';
import SHLogo from '../../../public/images/sh-logo-diamond.svg';
import SHDiamond from '../../../public/images/sh-mini-diamond-PNG.png';

const Logo = () => (
  <>
    <LogoWrapper>
      <Link href="/" legacyBehavior>
        <a>
          <Image
            alt={`${SITE_TITLE}, LLC`}
            width={360}
            height={65}
            layout="intrinsic"
            src={SHLogo}
          />
        </a>
      </Link>
    </LogoWrapper>
    <DiamondWrapper>
      <Link href="/" legacyBehavior>
        <a>
          <Image
            alt={`${SITE_TITLE}, LLC`}
            width={102}
            height={85}
            layout="fixed"
            src={SHDiamond}
          />
        </a>
      </Link>
    </DiamondWrapper>
  </>
);

export default Logo;
