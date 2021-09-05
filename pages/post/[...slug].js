import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getPostContent } from 'pages/api/get-post-content';
import { BASE_API_URL, SITE_URL } from 'utils/constants';
import SiteLoader from 'components/shared/site-loader';
import PostHead from 'components/pages/post/head';
import SingleSubHeader from 'layouts/single-sub-header';
import Body from 'components/pages/post/body';
import Sidebar from 'components/pages/post/sidebar';
import EventSidebar from 'components/pages/post/event-sidebar';

export default function LawFirmInsightsPost({
  post,
  seo,
  categories,
  tags,
  authors,
  category,
  postUrl,
}) {
  const [relatedAttorneys, setRelatedAttorneys] = useState([]);
  const [trendingStories, setTrendingStories] = useState([]);
  const [eventDetails, setEventDetails] = useState([]);
  const [isEvent, setIsEvent] = useState(false);
  const router = useRouter();
  const canonicalUrl = `${SITE_URL}${router.asPath}`;
  const metaAuthorLinks = authors.map((author) => (author.display_name === 'Scarinci Hollenbeck' ? SITE_URL : author.user_url));

  if (router.isFallback) {
    return <SiteLoader />;
  }

  /**
   *  Related attorneys, Event Details, Trending Stories, Related Posts
   *  ;
   */

  useEffect(() => {
    async function getAdditionalPostContent() {
      const url = `${BASE_API_URL}/wp-json/single/post/${postUrl}/${category}`;
      const request = await fetch(url)
        .then((data) => data.json())
        .catch((err) => err);

      setRelatedAttorneys(request.attorneys);
      setTrendingStories(request.posts);

      if (request.eventDetails.length > 0) {
        setIsEvent(true);
        setEventDetails(request.eventDetails);
      }
    }

    if (postUrl && category) {
      getAdditionalPostContent();
    }
  }, [postUrl, category]);

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

export async function getServerSideProps({ params, res, query }) {
  const postUrl = params.slug[params.slug.length - 1];
  const { category } = query;
  const request = await getPostContent(postUrl, category);

  if (request.status === 404) {
    res.statusCode = 404;
    return {
      notFound: true,
    };
  }

  const {
    post, seo, categories, tags, authors,
  } = request;

  return {
    props: {
      post,
      seo,
      categories,
      tags,
      authors,
      category,
      postUrl,
    },
  };
}
