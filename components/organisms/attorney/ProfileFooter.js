import dynamic from 'next/dynamic';
import { Col, Row } from 'react-bootstrap';

const NewsCard = dynamic(() => import('../home/FirmNews/NewsCard'));

const ProfileFooter = ({ attorneyFooterNewsArticles }) => (
  <>
    {attorneyFooterNewsArticles?.length > 0 && (
      <Row className="mt-5 mb-2 w-70">
        {attorneyFooterNewsArticles.map(
          ({
            databaseId, date, featuredImage, title, slug, author,
          }) => (
            <Col sm={12} md={4} key={databaseId}>
              <NewsCard
                postSlug={slug}
                postImage={featuredImage}
                postTitle={title}
                postDate={date}
                postAuthor={author}
                isVertical="true"
              />
            </Col>
          ),
        )}
      </Row>
    )}
  </>
);

export default ProfileFooter;
