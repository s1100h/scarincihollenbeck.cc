import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createMarkup } from 'utils/helpers';
import styles from 'styles/Table.module.css';

export default function SingleAttorneyTableTab({ content }) {
  console.log(content);
  return (
    <Row>
      <Col className={styles.content} sm={12}>
        {content.body.map((b) => (
          <>
            <p className="mb-0"><u><strong dangerouslySetInnerHTML={createMarkup(b[0].c)} /></u></p>
            <p>
              <strong dangerouslySetInnerHTML={createMarkup(b[1].c)} />
              {b[2] && (
              <small>
                {' '}
                -
                {' '}
                {b[2].c}
              </small>
              )}
            </p>
          </>
        ))}
      </Col>
    </Row>
  );
}
