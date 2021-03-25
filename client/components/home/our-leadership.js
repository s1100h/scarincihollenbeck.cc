import Link from 'next/link';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lineStyles from 'styles/LineHeader.module.css';
import styles from 'styles/AttorneyCard.module.css';

function AttorneyProfile({ attorney }) {
  return (
    <Col sm={12} md={3} className="my-4">
      <Link
        href={attorney.link.replace('https://wp.scarincihollenbeck.com', '')}
      >
        <a className="text-dark text-center">
          <div className="mx-auto d-block text-center">
            <Image
              src={attorney.image}
              alt={attorney.name}
              width={106}
              height={146}
              fill="responsive"
              className={styles.circle}
            />
          </div>
          <p className="mb-0">
            <strong>{attorney.name}</strong>
          </p>
          {attorney.title.indexOf('Managing Partner') > -1 ? (
            <p>
              <strong>{attorney.title[0]}</strong>
            </p>
          ) : (
            <p>
              <strong>
                Chair,
                {' '}
                {attorney.title.join(', ')}
              </strong>
            </p>
          )}
        </a>
      </Link>
    </Col>
  );
}
export default function HomeOurLeadership({ attorneys }) {
  return (
    <Row className="mt-5">
      <Col sm={12} className="my-5">
        <div className={lineStyles.lineHeader}>
          <h3>Our Leadership</h3>
        </div>
      </Col>
      {attorneys.map((attorney) => (
        <AttorneyProfile key={attorney.name} attorney={attorney} />
      ))}
    </Row>
  );
}
