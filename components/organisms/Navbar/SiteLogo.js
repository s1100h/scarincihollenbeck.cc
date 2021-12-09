import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import SHLogo from '../../../public/images/sh-logo-diamond.svg';
import SHDiamond from '../../../public/images/sh-mini-diamond-PNG.png';

const SiteLogo = ({ scrollTop }) => {
  if (!scrollTop) {
    return (
      <>
        <LogoWrapper>
          <Link href="/">
            <a>
              <Image
                alt="Scarinci Hollenbeck, LLC"
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
              <Image
                alt="Scarinci Hollenbeck, LLC"
                width={52}
                height={45}
                layout="fixed"
                src={SHDiamond}
              />
            </a>
          </Link>
        </DiamondWrapper>
      </>
    );
  }
  return <></>;
};

const LogoWrapper = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: initial;
  }
`;

const DiamondWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: inline;
    position: absolute;
    z-index: 1;
    left: 16px;
    top: -4px;
  }
  @media (min-width: 1200px) {
    display: none;
  }
`;
export default SiteLogo;
