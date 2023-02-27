import Image from 'next/image';
import Link from 'next/link';
import { SITE_TITLE } from 'utils/constants';
import { LogoWrapper, DiamondWrapper } from 'styles/SiteLogo.style';
import SHLogo from '../../../public/images/sh-logo-diamond.svg';
import SHDiamond from '../../../public/images/sh-mini-diamond-PNG.png';

const Logo = () => (
  <>
    <LogoWrapper>
      <Link href="/" passHref>
        <Image alt={`${SITE_TITLE}, LLC`} width={360} height={65} src={SHLogo} />
      </Link>
    </LogoWrapper>
    <DiamondWrapper>
      <Link href="/" passHref>
        <Image alt={`${SITE_TITLE}, LLC`} width={102} height={85} src={SHDiamond} />
      </Link>
    </DiamondWrapper>
  </>
);

export default Logo;
