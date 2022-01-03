import { Row, Col } from 'react-bootstrap';
import Accolade from 'components/molecules/home/Accolade';
import lineStyles from 'styles/LineHeader.module.css';

export default function HomeReviews({ awards }) {
  const formattedAwards = awards
    .map(({ node }) => ({
      id: node.homePageAwards.appearanceOrder,
      order: node.homePageAwards.appearanceOrder,
      image: {
        src: node.homePageAwards.image.sourceUrl,
        alt: node.homePageAwards.label,
        width: node.homePageAwards.imageWidth,
        height: node.homePageAwards.imageHeight,
      },
    }))
    .sort((a, b) => (a.order > b.order ? 1 : -1));

  return (
    <Row className="mt-5 px-2">
      <Col sm={12} className="mt-5 mb-0 pb-0">
        <div className={lineStyles.lineHeader}>
          <h3>Awards & Accolades</h3>
        </div>
      </Col>
      {formattedAwards.map((award) => (
        <Accolade key={award.id} image={award.image} colSize={formattedAwards.length > 4 ? 4 : 3} />
      ))}
    </Row>
  );
}
