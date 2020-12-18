import { useRouter } from 'next/router';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import BarLoader from 'react-spinners/BarLoader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Footer from 'components/footer';
import SingleSubHeader from 'layouts/single-sub-header';
import ThreeColMiniSidebar from 'layouts/three-col-mini-sidebar';
import Body from 'components/post/body';
import Sidebar from 'components/post/sidebar';
import SocialShareSidebar from 'components/post/social-share-sidebar';
import client from 'utils/graphql-client';
import { getListOfPostsByName, getPostBySlug } from 'queries/posts';

export default function ClientAlert({ post }) {
  console.log(post);
  
  return (
    <>
      {/* <NextSeo
        title={post.seo.title}
        description={post.seo.metaDesc}
        canonical={post.uri}
        openGraph={{
          url: post.uri,
          title: post.seo.title,
          description: post.seo.metaDescription,
          type: 'article',
          article: {
            publishedTime: post.seo.publishedDate,
            modifiedTime: post.seo.updatedDate,
            authors: post.seo.authors,
            tags:
                  post.seo.tags !== undefined && post.seo.tags.length > 0
                    ? post.seo.tags.map((t) => t.name)
                    : [],
          },
          images: [
            {
              url: post.seo.featuredImg
                ? post.seo.featuredImg
                : '/images/sh-mini-diamond-PNG.png',
              width: 750,
              height: 350,
              alt: post.seo.title,
            },
          ],
        }}
      /> */}
      {/* <NextSeo
        title={post.seo.title}
        description={post.seo.metaDescription}
        canonical={`https://scarincihollenbeck.com/client-alert/${post.seo.canonicalLink}`}
        openGraph={{
          url: `https://scarincihollenbeck.com/client-alert/${post.seo.canonicalLink}`,
          title: post.seo.title,
          description: post.seo.metaDescription,
          type: 'article',
          article: {
            publishedTime: post.seo.publishedDate,
            modifiedTime: post.seo.updatedDate,
            authors: post.seo.authors,
            tags:
                  post.seo.tags !== undefined && post.seo.tags.length > 0
                    ? post.seo.tags.map((t) => t.name)
                    : [],
          },
          images: [
            {
              url: post.seo.featuredImg
                ? post.seo.featuredImg
                : 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/sh-mini-diamond-PNG.png',
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
      <ArticleJsonLd
        url={`https://scarincihollenbeck.com/client-alert/${post.seo.canonicalLink}`}
        title={`${post.seo.title}`}
        images={
              post.seo.featuredImg
                ? [post.seo.featuredImg]
                : [
                  'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/sh-mini-diamond-PNG.png',
                ]
            }
        datePublished={post.seo.publishedDate}
        dateModified={post.seo.updatedDate}
        authorName={post.seo.author}
        publisherName="Scarinci Hollenbeck, LLC"
        publisherLogo="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/sh-logo-2020-compressor.png"
        description={`${post.seo.metaDescription}`}
      />
      <SingleSubHeader
        image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Legal-Research-1800x400-JPG.jpg"
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
          OneSidebar={<SocialShareSidebar title={post.title} />}
          TwoSidebar={
            <Sidebar posts={post.posts} attorneys={post.attorneys} />
              }
        />
        <Footer />
      </div> */}
      We'll get here:)
    </>
  );
}
export async function getStaticPaths() {
  const res = await client.query(getListOfPostsByName('client-alert'), {});

  // check if url doesn't contain /client-alert/
  const urlWithOutBaseUrl = res.data.posts.nodes.map((u) => {
    if (u.uri.indexOf('/client-alert/') < 0) {
      const uriSplit = u.uri.split('/').filter((a) => a !== "");
      const slug = uriSplit[uriSplit.length - 1];

      return `/client-alert/${slug}`;
    }
    return u.uri.replace('https://scarincihollenbeck.com', '');
  });

  return {
    paths: urlWithOutBaseUrl || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await client.query(getPostBySlug(params.slug[params.slug.length - 1]), {});
  return {
    props: {
      post: res.data.posts.nodes[0],
    },
  };
}
