
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AttorneyCard from 'components/attorney-card';
import { filterByKey } from 'utils/helpers';
import textStyles from 'styles/Text.module.css'


export default function Filtered({
  attorneys,
}) {

  return (
    <Row>
      {aFiltered.map((a) => (
        <Col sm={12} md={6} lg={4} key={a.title} className="mb-3">
          <AttorneyCard
            link={`/attorney/${a.slug}`}
            image={a.featuredImage.node.sourceUrl}
            name={a.title}
            title={a.attorneyMainInformation.designation}
            number={a.attorneyMainInformation.phoneNumber}
            email={a.attorneyMainInformation.email}
            width="80px"
            height="112px"
            type="/attorney/[slug]"
          />
        </Col>
      ))}
      {(aFiltered.length < 1) && (
        <h3 className={`${textStyles.redTitle} text-center d-block mx-auto my-4`}>
          <strong>
            Sorry, no attorneys found according to this query.
          </strong>
        </h3>
      )}
    </Row>
  );
}
