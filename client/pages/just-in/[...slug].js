import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import SiteLoader from 'components/site-loader';
import SingleSubHeader from 'layouts/single-sub-header';
import ThreeColMiniSidebar from 'layouts/three-col-mini-sidebar';
import Body from 'components/post/body';
import Sidebar from 'components/post/sidebar';
import SocialShareSidebar from 'components/post/social-share-sidebar';
import { headers } from 'utils/helpers';

export default function JustIn({
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
            tags: tags.split('').map((tag) => tag),
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
        image="/images/Legal-Research-1800x400-JPG.jpg"
        title={title}
        subtitle={subTitle}
      />
      <ThreeColMiniSidebar
        body={(
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
        )}
        OneSidebar={<SocialShareSidebar title={title} />}
        TwoSidebar={<Sidebar posts={posts} attorneys={attorneys} />}
      />
    </>
  );
}

export async function getServerSideProps({ params, res }) {
  // retrieve the authors for the post
  const [restResponse] = await Promise.all([
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/single/post/${
        params.slug[params.slug.length - 1]
      }/just-in`,
      { headers },
    )
      .then((data) => data.json())
      .catch((err) => err),
  ]);

  if (restResponse.status === 404) {
    res.statusCode = 404;
    return {
      notFound: true,
    };
  }

  return {
    props: {
      seo: restResponse.seo,
      title: restResponse.title,
      subTitle: restResponse.subTitle,
      tags: restResponse.tags,
      date: restResponse.date,
      featuredImage: restResponse.featuredImage || '/images/no-image-found-diamond-750x350.png',
      featuredImageCaption: restResponse.featuredImageCaption,
      postContent: restResponse.content,
      authorLinks: restResponse.author.map((author) => author.link) || ['https://scarincihollenbeck.com'],
      posts: restResponse.posts,
      authors: restResponse.author || [],
      attorneys: restResponse.attorneys || [],
    },
  };
}
