import { Row, Col } from 'react-bootstrap';
import lineStyles from 'styles/LineHeader.module.css';
import { createMarkup } from 'utils/helpers';

const AboutFirmSection = ({ description, title }) => (
  <div className={lineStyles.wrapper}>
    <div className={lineStyles.item}>
      <a href="/attorneys" className={lineStyles.btn}>
        Find your attorney
        <span />
      </a>
      <div className={lineStyles.itemWrapper}>
        <div className={lineStyles.lineHeader}>
          <span className={lineStyles.subtitle}>Distinct Vision</span>
          <h3 className={lineStyles.title}>{title}</h3>
        </div>
        <div>
          <span
            dangerouslySetInnerHTML={createMarkup(description)}
            style={{ fontSize: '1.1rem' }}
          />
        </div>
      </div>
    </div>
    <div className={lineStyles.item}>
      <a href="/practices" className={lineStyles.btn}>
        See our practices
        <span />
      </a>
      <div className={lineStyles.itemWrapper}>
        <div className={lineStyles.lineHeader}>
          <span className={lineStyles.subtitle}>Distinct Vision</span>
          <h3 className={lineStyles.title}>{title}</h3>
        </div>
        <div>
          <span
            dangerouslySetInnerHTML={createMarkup(description)}
            style={{ fontSize: '1.1rem' }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default AboutFirmSection;
