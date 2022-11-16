import {
  AboutArticle, AboutBox, LinkButtonAbout, SubTitleAbout,
} from 'styles/AboutFirm.style';
import { createMarkup } from 'utils/helpers';

const AboutFirm = ({
  description, title, linkLabel, linkUrl, subTitle,
}) => (
  <AboutBox>
    <LinkButtonAbout href={linkUrl}>
      {linkLabel}
      <span />
    </LinkButtonAbout>
    <AboutArticle>
      <SubTitleAbout>{subTitle}</SubTitleAbout>
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={createMarkup(description)} style={{ fontSize: '1.1rem' }} />
    </AboutArticle>
  </AboutBox>
);

export default AboutFirm;
