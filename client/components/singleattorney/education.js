import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import { createMarkup } from 'utils/helpers';

export default function AttorneyProfileEducation({ content }) {
  const {
    additionalInformation, barAdmissions, education,
  } = content;

  return (
    <Row className="mt-4">
      {education.length > 0 && (
        <Col sm={12}>
          <h4 className={grayTitleStyles.title}>Education</h4>
          <div className="content" dangerouslySetInnerHTML={createMarkup(education)} />
        </Col>
      )}
      {barAdmissions.length > 0 && (
        <Col sm={12} className="mt-3">
          <h4 className={grayTitleStyles.title}>Bar Admissions</h4>
          <div className="content" dangerouslySetInnerHTML={createMarkup(barAdmissions)} />
        </Col>
      )}
      {additionalInformation.length > 0 && (
      <Col sm={12} className="mt-3">
        <h4 className={grayTitleStyles.title}>Additional Information & Affiliations</h4>
        {additionalInformation.map((info) => (
          <div key={info.content}>
            {info.title && <strong>{info.title}</strong>}
            <div className="content" dangerouslySetInnerHTML={createMarkup(info.content)} />
          </div>
        ))}
      </Col>
      )}
      <style jsx>{' div.content { margin-top: 0; margin-bottom: 0; }'}</style>
    </Row>
  );
}
