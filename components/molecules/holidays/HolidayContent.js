import { HolidayContentBox } from 'styles/HolidayPage.style';
import { createMarkup, formatPageImageToCloudinaryUrl } from 'utils/helpers';

const HolidayContent = ({ content }) => (
  <HolidayContentBox
    dangerouslySetInnerHTML={createMarkup(formatPageImageToCloudinaryUrl(content))}
  />
);

export default HolidayContent;
