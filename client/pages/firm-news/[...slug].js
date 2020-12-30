import { useRouter } from 'next/router';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import Footer from 'components/footer';
import SingleSubHeader from 'layouts/single-sub-header';
import ThreeColMiniSidebar from 'layouts/three-col-mini-sidebar';
import Body from 'components/post/body';
import Sidebar from 'components/post/sidebar';
import SocialShareSidebar from 'components/post/social-share-sidebar';
import client from 'utils/graphql-client';
import {
  headers, urlWithOutBaseUrl, extractH2FromText, extractImgFromText,
} from 'utils/helpers';
import { fetchFirmPosts } from 'utils/fetch-firm-posts';
import { getListOfPostsByName, getPostBySlug } from 'queries/posts';

export default function FirmNews({
  post, posts, authors, attorneys,
}) {
  const router = useRouter();

  // get h2 tag text
  const extractH2Text = extractH2FromText(post.content);

  // get featured image
  const extractFeaturedImg = extractImgFromText(post.content);

  // extract featured image caption
  const captionRex = /<figcaption(?:.*)>(.*)<\/figcaption>|Ui/g;
  const findCaptionTagsInContent = captionRex.exec(post.content);

  // check if is event page
  const isEventCategory = router.asPath.indexOf('/firm-events/') > -1;

  // page content
  const pageContent = post.content;

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
              url: (post.featuredImage) ? post.featuredImage.node.sourceUrl : '/images/no-image-found-diamond-750x350.png',
              width: 350,
              height: 150,
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
        images={[(post.featuredImage) ? post.featuredImage.node.sourceUrl : '/images/no-image-found-diamond-750x350.png']}
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
        subtitle={extractH2Text}
      />
      <ThreeColMiniSidebar
        body={(
          <Body
            featuredImage={(extractFeaturedImg.source) ? extractFeaturedImg.source : '/images/no-image-found-diamond-750x350.png'}
            caption={findCaptionTagsInContent}
            content={pageContent}
            eventCat={isEventCategory}
            title={post.title}
            subTitle={extractH2Text}
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
  const res = await client.query(getListOfPostsByName('firm-news'), {});
  const slugs = urlWithOutBaseUrl(res.data.posts.nodes, 'firm-news');

  return {
    paths: slugs || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await client.query(
    getPostBySlug(params.slug[params.slug.length - 1]),
    {},
  );
  const posts = await fetchFirmPosts();

  // retrieve the authors for the post
  const [restResponse] = await Promise.all([
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/single/post/${
        params.slug[params.slug.length - 1]
      }/firm-news`,
      { headers },
    )
      .then((data) => data.json())
      .catch((err) => err),
  ]);

  if (res.data.posts.nodes.length <= 0) {
    return {
      notFound: true,
    };
  }

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
