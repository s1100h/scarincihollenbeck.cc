import dynamic from 'next/dynamic';
import { Col, Row } from 'react-bootstrap';
import { NewsTitle } from 'styles/attorney-page/AttorneyProfile.style';

const NewsCard = dynamic(() => import('../home/FirmNews/NewsCard'));

const ProfileFooter = ({ attorneyFooterNewsArticles }) => (
  <>
    <NewsTitle>News & Press Releases</NewsTitle>
    <Row className="mb-2">
      {attorneyFooterNewsArticles.map(({
        databaseId, date, featuredImage, title, uri, author,
      }) => (
        <Col sm={12} md={4} key={databaseId}>
          <NewsCard
            postSlug={uri}
            postImage={featuredImage}
            postTitle={title}
            postDate={date}
            postAuthor={author}
            isVertical="true"
          />
        </Col>
      ))}
    </Row>
  </>
);

export default ProfileFooter;
