import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createMarkup } from 'utils/helpers';
import styles from 'styles/Table.module.css';

export default function AttorneyProfileTab({ content }) {
  return (
    <Row className="mt-4">
      <Col className={styles.content} sm={12}>
        {content.body.map((b) => (
          <div key={b[0].c} className="mb-3">
            <p className="mb-0">
              <strong>
                <u>
                  <span dangerouslySetInnerHTML={createMarkup(b[0].c)} />
                </u>
              </strong>
            </p>
            <p className="mb-2">
              <span dangerouslySetInnerHTML={createMarkup(b[1].c)} />
              {b[2] && b[1] && ' - '}
              {b[2] && <small>{b[2].c}</small>}
            </p>
          </div>
        ))}
      </Col>
    </Row>
  );
}
