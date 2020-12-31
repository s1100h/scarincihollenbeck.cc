import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import Footer from 'components/footer';
import SiteLoader from 'components/site-loader';
import SingleSubHeader from 'layouts/single-sub-header';
import ThreeColMiniSidebar from 'layouts/three-col-mini-sidebar';
import Body from 'components/post/body';
import EventSidebar from 'components/post/event-sidebar';
import SocialShareSidebar from 'components/post/social-share-sidebar';
import client from 'utils/graphql-client';
import { headers } from 'utils/helpers';
import { parseBlogBodyContent } from 'utils/post-parser';
import { getPostBySlug } from 'queries/posts';

export default function FirmEvents({
  post, authors, eventDetails, attorneys,
}) {
  const [featuredImage, setFeaturedImage] = useState('');
  const [postContent, setPostContent] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [mounted, setMounted] = useState(true);
  const router = useRouter();

  if (router.isFallback) {
    return <SiteLoader />;
  }

  // check if is event page
  const isEventCategory = router.asPath.indexOf('/firm-events/') > -1;

  useEffect(() => {
    function parseAndSetBlogPostContent() {
      const blogPostElms = parseBlogBodyContent(post.content);

      setSubTitle(blogPostElms.h2TagText);
      setCaption(blogPostElms.captionText);
      setPostContent(blogPostElms.postContent);
      setFeaturedImage(blogPostElms.imgSrc);
      setMounted(false);
    }

    if (mounted) {
      parseAndSetBlogPostContent();
    }
  });

  return (
    <>
      <NextSeo
        title={post.seo.title}
        description={post.seo.metaDesc}
        canonical={post.uri}
        openGraph={{
          url: post.uri,
          title: post.seo.title,
          description: post.seo.metaDesc,
          type: 'article',
          article: {
            publishedTime: post.seo.publishedDate,
            modifiedTime: post.seo.updatedDate,
            authors: [post.author.node.url || 'https://scarincihollenbeck.com'],
            tags: post.tags.nodes.map((tag) => tag.name),
          },
          images: [
            {
              url: featuredImage,
              width: 750,
              height: 350,
              alt: post.seo.title,
            },
          ],
        }}
        twitter={{
          handle: '@S_H_Law',
          site: post.uri,
          cardType: post.seo.metaDesc,
        }}
      />
      <ArticleJsonLd
        url={post.uri}
        title={post.seo.title}
        images={[featuredImage]}
        datePublished={post.seo.publishedDate}
        dateModified={post.seo.updatedDate}
        authorName={post.author.node.name}
        publisherName="Scarinci Hollenbeck, LLC"
        publisherLogo="/images/sh-logo-2020-compressor.png"
        description={`${post.seo.metaDesc}`}
      />
      <SingleSubHeader
        image="/images/Legal-Research-1800x400-JPG.jpg"
        title={post.title}
        subtitle={subTitle}
      />
      <ThreeColMiniSidebar
        body={(
          <Body
            featuredImage={featuredImage}
            caption={caption}
            content={postContent}
            eventCat={isEventCategory}
            title={post.title}
            subTitle={subTitle}
            author={authors}
            date={post.date}
            tags={post.tags.nodes}
          />
        )}
        OneSidebar={<SocialShareSidebar title={post.title} />}
        TwoSidebar={
          <EventSidebar eventDetails={eventDetails} attorneys={attorneys} />
        }
      />
      <Footer />
    </>
  );
}

// export async function getStaticPaths() {
//   const res = await client.query(getListOfPostsByName('firm-events'), {});
//   const slugs = urlWithOutBaseUrl(res.data.posts.nodes, 'firm-events');

//   return {
//     paths: slugs || [],
//     fallback: true,
//   };
// }

export async function getServerSideProps({ params, res }) {
  const graphQLResponse = await client.query(
    getPostBySlug(params.slug[params.slug.length - 1]),
    {},
  );

  // retrieve the authors for the post
  const [restResponse] = await Promise.all([
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/single/post/${
        params.slug[params.slug.length - 1]
      }/firm-events`,
      { headers },
    )
      .then((data) => data.json())
      .catch((err) => err),
  ]);

  if (!graphQLResponse.data.posts.nodes[0]) {
    res.statusCode = 404;
    return {
      notFound: true,
    };
  }

  if (restResponse.status === 404) {
    res.statusCode = 404;
    return {
      notFound: true,
    };
  }

  // , revalidate: 1,
  return {
    props: {
      post: graphQLResponse.data.posts.nodes[0],
      authors: restResponse.author,
      eventDetails: restResponse.eventDetails,
      attorneys: restResponse.attorneys,
    },
  };
}
