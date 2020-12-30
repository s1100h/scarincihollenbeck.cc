import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import Footer from 'components/footer';
import SingleSubHeader from 'layouts/single-sub-header';
import ThreeColMiniSidebar from 'layouts/three-col-mini-sidebar';
import Body from 'components/post/body';
import Sidebar from 'components/post/sidebar';
import SocialShareSidebar from 'components/post/social-share-sidebar';
import client from 'utils/graphql-client';
import { headers, urlWithOutBaseUrl } from 'utils/helpers';
import { parseBlogBodyContent } from 'utils/post-parser';
import { fetchFirmPosts } from 'utils/fetch-firm-posts';
import { getListOfPostsByName, getPostBySlug } from 'queries/posts';

export default function Covid19Alerts({
  post, posts, authors, attorneys,
}) {
  const [featuredImage, setFeaturedImage] = useState('');
  const [postContent, setPostContent] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [mounted, setMounted] = useState(true);
  const router = useRouter();

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
        TwoSidebar={<Sidebar posts={posts} attorneys={attorneys} />}
      />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const res = await client.query(getListOfPostsByName('covid-19-alerts'), {});
  const slugs = urlWithOutBaseUrl(res.data.posts.nodes, 'covid-19-alerts');

  return {
    paths: slugs || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = await fetchFirmPosts();
  const res = await client.query(
    getPostBySlug(params.slug[params.slug.length - 1]),
    {},
  );

  // retrieve the authors for the post
  const [restResponse] = await Promise.all([
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/single/post/${
        params.slug[params.slug.length - 1]
      }/covid-19-alerts`,
      { headers },
    )
      .then((data) => data.json())
      .catch((err) => err),
  ]);

  return {
    props: {
      post: res.data.posts.nodes[0],
      posts,
      authors: restResponse.author,
      attorneys: restResponse.attorneys,
    },
    revalidate: 1,
  };
}
