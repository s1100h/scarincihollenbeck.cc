import {
  AboutArticle,
  AboutBox,
  AboutContainer,
  LinkButtonAbout,
  SubTitleAbout,
} from 'styles/AboutFirm.style';
import { useId, useMemo } from 'react';
import { JSXWithDynamicLinks } from '../../atoms/micro-templates/JSXWithDynamicLinks';

const AboutFirm = ({ infos, linksBtn }) => {
  const content = useMemo(() => ({ infos, linksBtn }), [infos, linksBtn]);
  return (
    <AboutContainer>
      <div className="links-box">
        {content.linksBtn.map((link) => (
          <LinkButtonAbout key={useId()} href={link.linkUrl}>
            {link.linkLabel}
          </LinkButtonAbout>
        ))}
      </div>
      <AboutBox>
        {content.infos.map((info) => (
          <AboutArticle key={info.title}>
            <SubTitleAbout>{info.subTitle}</SubTitleAbout>
            <h3>{info.title}</h3>
            <JSXWithDynamicLinks HTML={info.description} />
          </AboutArticle>
        ))}
      </AboutBox>
    </AboutContainer>
  );
};

export default AboutFirm;
