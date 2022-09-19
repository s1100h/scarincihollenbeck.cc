import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { SITE_TITLE } from 'utils/constants';
import SHLogo from '../../../public/images/sh-logo-diamond.svg';
import SHDiamond from '../../../public/images/sh-mini-diamond-PNG.png';

const SiteLogo = () => (
  <>
    <LogoWrapper>
      <Link href="/">
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
      <Link href="/">
        <a>
          <Image alt={`${SITE_TITLE}, LLC`} width={52} height={45} layout="fixed" src={SHDiamond} />
        </a>
      </Link>
    </DiamondWrapper>
  </>
);

const LogoWrapper = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: initial;
  }
`;

const DiamondWrapper = styled.div`
  @media (min-width: 100px) {
    display: inline;
    position: absolute;
    z-index: 1;
    left: 0px;
    top: 9px;
  }
  @media (min-width: 1200px) {
    display: none;
  }
`;
export default SiteLogo;
