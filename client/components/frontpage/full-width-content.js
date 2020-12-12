import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lineStyles from 'styles/LineHeader.module.css';
import CarouselsLatestNews from 'components/carousels/latest-news';
import CarouselsOfficeLocations from 'components/carousels/office-locations';

export default function FrontPageFullWidthContent({ sortedPosts, sortedLocations }) {
  return (
    <Row className="mb-5">
      <Col sm={12} className="mt-5 px-0">
        <div className={lineStyles.lineHeader}>
          <h3>News & Events</h3>
        </div>
      </Col>
      <Col sm={12} className="px-0 pt-5">
        {sortedPosts.length > 0 && (
          <CarouselsLatestNews slides={sortedPosts} />
        )}
      </Col>
      <Col sm={12} className="mt-5 px-0">
        <div className={lineStyles.lineHeader}>
          <h3>OUR OFFICES</h3>
        </div>
      </Col>
      <Col sm={12} className="px-0 pt-5">
        <div className="location-carousel-container">
          {sortedLocations.length > 0 && (
            <CarouselsOfficeLocations slides={sortedLocations} />
          )}
        </div>
      </Col>
    </Row>
  );
}
