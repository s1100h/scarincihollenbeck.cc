import { AboutContainer } from 'styles/AboutFirm.style';
import lineStyles from 'styles/LineHeader.module.css';
import { createMarkup } from 'utils/helpers';

const AboutFirm = ({
  description, title, linkLabel, linkUrl, subTitle,
}) => (
  <AboutContainer>
    <a href={linkUrl} className={lineStyles.btn}>
      {linkLabel}
      <span />
    </a>
    <div className={lineStyles.itemWrapper}>
      <span className={lineStyles.subtitle}>{subTitle}</span>
      <h3 className={lineStyles.title}>{title}</h3>
      <div className={lineStyles.content}>
        <span dangerouslySetInnerHTML={createMarkup(description)} style={{ fontSize: '1.1rem' }} />
      </div>
    </div>
  </AboutContainer>
);

export default AboutFirm;
