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
import { blogArticlesQuery } from 'queries/home';

export default function ClientAlert({ post, posts }) {
  const router = useRouter();

  // extract h2 tag content from text
  const findH2TagsInContent = post.content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const pageSubTitle = findH2TagsInContent[0].replace(/<(?:.|\s)*?>/g, '');

  // extract featured image from text
  const imgRex = /<img.*?src="(.*?)"[^>]+>/g;
  const findImgTagsInContent = imgRex.exec(post.content);

  // extract featured image caption
  const captionRex = /<figcaption(?:.*)>(.*)<\/figcaption>|Ui/g
  const findCaptionTagsInContent = captionRex.exec(post.content);

  // check if is event page
  const isEventCategory = router.asPath.indexOf('/firm-events/') > -1;

  // page content 
  const pageContent = post.content.replace(findH2TagsInContent[0], '').replace(findImgTagsInContent[0], '');

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
              url: post.featuredImage.node.sourceUrl || '/images/sh-mini-diamond-PNG.png',
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
        images={[post.featuredImage.node.sourceUrl || '/images/sh-mini-diamond-PNG.png']}
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
            featuredImage={findImgTagsInContent[1]}
            caption={findCaptionTagsInContent}
            content={pageContent}
            eventCat={isEventCategory}
            title={post.title}
            subTitle={pageSubTitle}
            author={post.author.node}
            date={post.date}
            tags={post.tags.nodes}
          />
        )}
        OneSidebar={<SocialShareSidebar title={post.title} />}
        TwoSidebar={<Sidebar posts={posts} attorneys={post.attorneys} />}
      />
      <Footer />
    </>
  );
}
export async function getStaticPaths() {
  const res = await client.query(getListOfPostsByName('client-alert'), {});
  
  // check if url doesn't contain /client-alert/
  const urlWithOutBaseUrl = res.data.posts.nodes.map((u) => {
    if (u.uri.indexOf('/client-alert/') < 0) {
      const uriSplit = u.uri.split('/').filter((a) => a !== '');
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
  const firmNewsContent = await client.query(blogArticlesQuery(98), {});
  const firmEventsContent = await client.query(blogArticlesQuery(99), {});
  const firmInsightsContent = await client.query(blogArticlesQuery(599), {});

  const posts = [].concat(
    firmNewsContent.data.category.posts.edges,
    firmEventsContent.data.category.posts.edges,
    firmInsightsContent.data.category.posts.edges,
  );
  
  return {
    props: {
      post: res.data.posts.nodes[0],
      posts
    },
    revalidate: 1
  };
}
