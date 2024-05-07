import { Col, Container, Row } from 'react-bootstrap';
import { NewsTitle } from 'styles/RecommendedPosts.style';
import { useId } from 'react';
import NewsCard from '../organisms/home/FirmNews/NewsCard';

const RecommendedPosts = ({
  titleGeneralBlock,
  attorneyFooterNewsArticles,
}) => (
  <Container className="d-print-none">
    <NewsTitle>{titleGeneralBlock}</NewsTitle>
    <Row className="mb-2">
      {attorneyFooterNewsArticles.map(
        ({
          databaseId, date, featuredImage, title, uri, author,
        }) => (
          <Col sm={12} md={4} key={databaseId || useId()}>
            <NewsCard
              postSlug={uri}
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
    <p className="content">
      No Aspect of the advertisement has been approved by the Supreme Court.
      Results may vary depending on your particular facts and legal.
    </p>
  </Container>
);

export default RecommendedPosts;
