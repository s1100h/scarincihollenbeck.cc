import { HolidayContentBox } from 'styles/HolidayPage.style';
import { JSXWithDynamicLinks } from '../../atoms/micro-templates/JSXWithDynamicLinks';

const HolidayContent = ({ content }) => (
  <HolidayContentBox>
    <JSXWithDynamicLinks HTML={content} />
  </HolidayContentBox>
);

export default HolidayContent;
