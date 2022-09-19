import { Row, Col } from 'react-bootstrap';
import lineStyles from 'styles/LineHeader.module.css';
import { createMarkup } from 'utils/helpers';

const AboutFirmSection = ({
  description, title, linkLabel, linkUrl, subTitle,
}) => (
  <div className={lineStyles.item}>
    <a href={linkUrl} className={lineStyles.btn}>
      {linkLabel}
      <span />
    </a>
    <div className={lineStyles.itemWrapper}>
      <div className={lineStyles.lineHeader}>
        <span className={lineStyles.subtitle}>{subTitle}</span>
        <h3 className={lineStyles.title}>{title}</h3>
      </div>
      <div className={lineStyles.content}>
        <span dangerouslySetInnerHTML={createMarkup(description)} style={{ fontSize: '1.1rem' }} />
      </div>
    </div>
  </div>
);

export default AboutFirmSection;
