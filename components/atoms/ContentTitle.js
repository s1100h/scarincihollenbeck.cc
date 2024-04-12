import { BigGrayTitle } from 'styles/BigGrayTitle.style';

const ContentTitle = ({ title, children }) => (
  <BigGrayTitle>
    {title}
    {children}
  </BigGrayTitle>
);
export default ContentTitle;
