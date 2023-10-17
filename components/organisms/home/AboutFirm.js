import {
  AboutArticle,
  AboutBox,
  LinkButtonAbout,
  SubTitleAbout,
} from 'styles/AboutFirm.style';
import { JSXWithDynamicLinks } from '../../atoms/micro-templates/JSXWithDynamicLinks';

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
      <JSXWithDynamicLinks HTML={description} />
    </AboutArticle>
  </AboutBox>
);

export default AboutFirm;
