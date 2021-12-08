import Image from 'next/image';
import Link from 'next/link';
import SHLogo from '../../../public/images/sh-logo-diamond.svg';

export default function SiteLogo({ scrollTop }) {
  if (!scrollTop) {
    return (
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
    );
  }
  return <></>;
}
