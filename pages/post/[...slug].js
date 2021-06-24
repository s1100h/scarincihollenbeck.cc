import { useRouter } from 'next/router';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SiteLoader from 'components/site-loader';
import SingleSubHeader from 'layouts/single-sub-header';
import Body from 'components/post/body';
import Sidebar from 'components/post/sidebar';
import EventSidebar from 'components/post/event-sidebar';
import { headers } from 'utils/helpers';

export default function LawFirmInsightsPost({
  title,
  postContent,
  subTitle,
  posts,
  featuredImage,
  featuredImageCaption,
  seo,
  tags,
  authorLinks,
  date,
  authors,
  attorneys,
  eventDetails,
}) {
  const router = useRouter();

  if (router.isFallback) {
    return <SiteLoader />;
  }

  // check if is event page
  const isEventCategory = router.asPath.indexOf('/firm-events/') > -1;

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescription}
        canonical={router.asPath}
        openGraph={{
          url: router.asPath,
          title: seo.title,
          description: seo.metaDescription,
          type: 'article',
          article: {
            publishedTime: seo.publishedDate,
            modifiedTime: seo.updatedDate,
            authors: authorLinks,
          },
          images: [
            {
              url: featuredImage,
              width: 750,
              height: 350,
              alt: seo.title,
            },
          ],
        }}
        twitter={{
          handle: '@S_H_Law',
          site: router.asPath,
          cardType: seo.metaDescription,
        }}
      />
      <ArticleJsonLd
        url={router.asPath}
        title={seo.title}
        images={[featuredImage]}
        datePublished={seo.publishedDate}
        dateModified={seo.updatedDate}
        authorName={authors.map((author) => author.name)}
        publisherName="Scarinci Hollenbeck, LLC"
        publisherLogo="/images/sh-logo-2020-compressor.png"
        description={`${seo.metaDescription}`}
      />
      <SingleSubHeader
        title={title}
        subtitle={subTitle}
        isBlog
        offset={0}
        span={8}
      />
      <Container>
        <Row>
          <Col sm={12} md={9}>
            <Body
              featuredImage={featuredImage}
              caption={featuredImageCaption}
              content={postContent}
              eventCat={isEventCategory}
              title={title}
              subTitle={subTitle}
              author={authors}
              date={date}
              tags={tags}
            />
          </Col>
          <Col sm={12} md={3}>
            {isEventCategory && eventDetails.length > 0 ? (
              <EventSidebar
                eventDetails={eventDetails}
                title={title}
                attorneys={attorneys}
              />
            ) : (
              <Sidebar posts={posts} title={title} attorneys={attorneys} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export async function getServerSideProps({ params, res, query }) {
  // retrieve the authors for the post
  const [restResponse] = fetch(
      `https://wp.scarincihollenbeck.com/wp-json/single/post/${
        params.slug[params.slug.length - 1]
      }/${query.category}`,
      { headers },
    )
      .then((data) => data.json())
      .catch((err) => err)

  if (restResponse.status === 404) {
    res.statusCode = 404;
    return {
      notFound: true,
    };
  }

  const defaultTag = [
    {
      term_id: 157,
      name: 'Scarinci Hollenbeck',
      slug: 'scarinci-hollenbeck',
      term_group: 0,
      term_taxonomy_id: 163,
      taxonomy: 'post_tag',
      description: '',
      parent: 0,
      count: 1202,
      filter: 'raw',
    },
  ];

  return {
    props: {
      seo: restResponse.seo,
      title: restResponse.title,
      subTitle: restResponse.subTitle,
      tags: restResponse.seo.tags || defaultTag,
      date: restResponse.date,
      featuredImage:
        restResponse.featuredImage
        || '/images/no-image-found-diamond-750x350.png',
      featuredImageCaption: restResponse.featuredImageCaption,
      postContent: restResponse.content,
      authorLinks: restResponse.author.map((author) => author.link) || [
        'https://scarincihollenbeck.com',
      ],
      posts: restResponse.posts,
      authors: restResponse.author || [],
      attorneys: restResponse.attorneys || [],
      eventDetails: restResponse.eventDetails || [],
    },
  };
}
