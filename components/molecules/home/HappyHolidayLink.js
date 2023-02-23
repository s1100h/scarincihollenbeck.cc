import Image from 'next/image';
import Link from 'next/link';
import { HolidayLinkBox } from 'styles/HolidayPage.style';

const HappyHolidayLink = () => (
  <HolidayLinkBox>
    <Link href="/happy-holidays" passHref legacyBehavior>
      <h5>Happy Holidays!</h5>
    </Link>
    <Link href="/happy-holidays" passHref>
      <a>
        <Image height={200} width={200} src="/images/holiday-branch.svg" layout="responsive" />
      </a>
    </Link>
  </HolidayLinkBox>
);

export default HappyHolidayLink;
