import { HolidayContentBox } from 'styles/HolidayPage.style';
import { useMemo } from 'react';
import { JSXWithDynamicLinks } from '../../atoms/micro-templates/JSXWithDynamicLinks';

const HolidayContent = ({ content }) => {
  const memoContentForHydrationSolving = useMemo(() => content, []);
  return (
    <HolidayContentBox>
      <JSXWithDynamicLinks HTML={memoContentForHydrationSolving} isHoliday />
    </HolidayContentBox>
  );
};

export default HolidayContent;
