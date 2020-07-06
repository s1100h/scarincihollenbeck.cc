import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo, NewsArticleJsonLd } from 'next-seo';
import ErrorPage from 'next/error';
import BarLoader from 'react-spinners/BarLoader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from 'components/navbar';
import Footer from 'components/footer';
import SingleSubHeader from 'layouts/single-sub-header';
import ThreeColMiniSidebar from 'layouts/three-col-mini-sidebar';
import Body from 'components/post/body';
import Sidebar from 'components/post/sidebar';
import SocialShareSidebar from 'components/post/social-share-sidebar';
import { headers } from 'utils/helpers';
import { blogHeaderJPG, shDiamondPNG } from 'utils/next-gen-images';

export default function CyberSecurityClientAlert({ slides, post }) {
  const router = useRouter();

  if (!router.isFallback && post.id === null) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {(post === undefined && router.isFallback) ? (
        <Container>
          <Row id="page-loader-container" className="justify-content-center align-self-center">
            <BarLoader color="#DB2220" />
          </Row>
        </Container>

      ) : (
        <>
          <NextSeo
            title={post.seo.title}
            description={post.seo.metaDescription}
            canonical={`https://scarincihollenbeck.com/client-alert/${post.seo.canonicalLink}`}
            openGraph={{
              url: `https://scarincihollenbeck.com/client-alert/${post.seo.canonicalLink}`,
              title: 'Scarinci Hollenbeck',
              description: post.seo.metaDescription,
              type: 'article',
              article: {
                publishedTime: post.seo.publishedDate,
                modifiedTime: post.seo.updatedDate,
                authors: post.seo.authors,
                tags: (post.seo.tags !== undefined && post.seo.tags.length > 0) ? post.seo.tags.map((t) => t.name) : [],
              },
              images: [
                {
                  url: (post.seo.featuredImg) ? post.seo.featuredImg : shDiamondPNG,
                  width: 750,
                  height: 350,
                  alt: post.seo.title,
                },
              ],
            }}
            twitter={{
              handle: '@S_H_Law',
              site: `https://scarincihollenbeck.com/client-alert/${post.seo.canonicalLink}`,
              cardType: post.seo.metaDescription,
            }}
          />
          <NewsArticleJsonLd
            url={`https://scarincihollenbeck.com/client-alert/${post.seo.canonicalLink}`}
            title={`${post.seo.title}`}
            images={(post.seo.featuredImg) ? [post.seo.featuredImg] : [shDiamondPNG]}
            datePublished={post.seo.publishedDate}
            dateModified={post.seo.updatedDate}
            authorName={post.seo.author}
            publisherName="Scarinci Hollenbeck, LLC"
            publisherLogo="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/sh-logo-2020-compressor.png"
            description={`${post.seo.metaDescription}`}
            body={post.content}
          />
          <SingleSubHeader
            image={blogHeaderJPG}
            title={post.title}
            subtitle={post.subTitle}
          />
          <div id="single">
            <ThreeColMiniSidebar
              body={(
                <Body
                  featuredImage={post.featuredImage}
                  caption={post.featuredImageCaption}
                  content={post.content}
                  eventCat={post.isEventCategory}
                  title={post.title}
                  subTitle={post.subTitle}
                  author={post.author}
                  date={post.date}
                  tags={post.tags}
                />
                )}
              OneSidebar={(<SocialShareSidebar title={post.title} />)}
              TwoSidebar={(
                <Sidebar
                  posts={post.posts}
                  attorneys={post.attorneys}
                />
)}
            />
          </div>
          <Footer slides={slides} />
        </>
      )}
    </>
  );
}

export async function getServerSideProps({ params }) {
  const [post, slides] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/single/post/${params.slug[params.slug.length - 1]}`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then((data) => data.json()),
  ]);

  return {
    props: {
      slides,
      post,
    },
  };
}
