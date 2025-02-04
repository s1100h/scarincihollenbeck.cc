import Image from 'next/legacy/image';
import { HolidayBox } from 'styles/Holiday.style';

const HappyHoliday = () => (
  <HolidayBox>
    <Image height={200} width={200} src="/images/holiday-branch.svg" />
  </HolidayBox>
);

export default HappyHoliday;
