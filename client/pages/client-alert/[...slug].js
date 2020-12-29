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
import { fetchFirmPosts } from 'utils/fetch-firm-posts';
import { getListOfPostsByName, getPostBySlug } from 'queries/posts';

export default function ClientAlert({
  post, posts, authors, attorneys,
}) {
  const router = useRouter();

  // extract h2 tag content from text
  const findH2TagsInContent = post.content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  let pageSubTitle = '';

  if (findH2TagsInContent) {
    pageSubTitle = findH2TagsInContent[0].replace(/<(?:.|\s)*?>/g, '');
  }

  // extract featured image from text
  const imgRex = /<img.*?src="(.*?)"[^>]+>/g;
  const findImgTagsInContent = imgRex.exec(post.content);

  // extract featured image caption
  const captionRex = /<figcaption(?:.*)>(.*)<\/figcaption>|Ui/g;
  const findCaptionTagsInContent = captionRex.exec(post.content);
  // check if is event page
  const isEventCategory = router.asPath.indexOf('/firm-events/') > -1;

  // page content
  let pageContent = post.content;

  if (findH2TagsInContent) {
    pageContent = pageContent
      .replace(findH2TagsInContent[0], '');
  }

  if (findImgTagsInContent) {
    pageContent = pageContent
      .replace(findImgTagsInContent[0], '');
  }

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
              url: post.featuredImage || '/images/no-image-found-diamond-750x350.png',
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
        images={[post.featuredImage || '/images/no-image-found-diamond-750x350.png']}
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
        subtitle={pageSubTitle}
      />
      <ThreeColMiniSidebar
        body={(
          <Body
            featuredImage={(findImgTagsInContent) ? findImgTagsInContent[1] : '/images/no-image-found-diamond-750x350.png'}
            caption={findCaptionTagsInContent}
            content={pageContent}
            eventCat={isEventCategory}
            title={post.title}
            subTitle={pageSubTitle}
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
  const res = await client.query(getListOfPostsByName('client-alert'), {});
  const slugs = urlWithOutBaseUrl(res.data.posts.nodes, 'client-alert');

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
      }/client-alert`,
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
