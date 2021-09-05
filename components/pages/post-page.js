import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostHead from 'components/organisms/post/head';
import SingleSubHeader from 'layouts/single-sub-header';
import Body from 'components/organisms/post/body';
import Sidebar from 'components/organisms/post/sidebar';
import EventSidebar from 'components/organisms/post/event-sidebar';

export default function PostPage({
  post,
  seo,
  categories,
  tags,
  canonicalUrl,
  metaAuthorLinks,
  relatedAttorneys,
  eventDetails,
  isEvent,
  trendingStories,
  authors,
}) {
  return (
    <>
      <PostHead
        seo={seo}
        canonicalUrl={canonicalUrl}
        metaAuthorLinks={metaAuthorLinks}
        post={post}
        authors={authors}
      />
      <SingleSubHeader
        title={post.title}
        subtitle={post.subTitle}
        isBlog
        offset={0}
        span={8}
        authors={authors}
        date={post.date}
      />
      <Container>
        <Row>
          <Col sm={12} md={9}>
            <Body
              featuredImage={post.featuredImage}
              caption={post.featuredImageCaption}
              content={post.content}
              isEvent={isEvent}
              title={post.title}
              subTitle={post.subTitle}
              authors={authors}
              date={post.date}
              tags={tags}
              categories={categories}
            />
          </Col>
          <Col sm={12} md={3}>
            {isEvent && eventDetails.length > 0 ? (
              <EventSidebar
                eventDetails={eventDetails}
                title={post.title}
                attorneys={relatedAttorneys}
              />
            ) : (
              <Sidebar posts={trendingStories} title={post.title} attorneys={relatedAttorneys} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
