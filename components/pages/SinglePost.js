import { Container, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import PostSiteHead from 'components/shared/head/PostSiteHead';
import SingleSubHeader from 'layouts/SingleSubHeader';
import Body from 'components/organisms/post/body';
import Sidebar from 'components/organisms/post/sidebar';

const PrintOnlyBody = dynamic(() => import('components/organisms/post/print-only-body'));

export default function PostPage({
  post,
  seo,
  categories,
  tags,
  canonicalUrl,
  category,
  postUrl,
  authors,
}) {
  return (
    <>
      <PostSiteHead seo={seo} canonicalUrl={canonicalUrl} post={post} authors={authors} />
      <span className="d-print-none">
        <SingleSubHeader
          title={post.title}
          subtitle={post.subTitle}
          isBlog
          offset={0}
          span={8}
          authors={authors}
          date={post.date}
        />
      </span>
      <Container className="d-print-none">
        <Row>
          <Body
            featuredImage={post.featuredImage}
            caption={post.featuredImageCaption}
            content={post.content}
            title={post.title}
            subTitle={post.subTitle}
            authors={authors}
            date={post.date}
            tags={tags}
            categories={categories}
          />
          <Sidebar category={category} postUrl={postUrl} />
        </Row>
      </Container>
      <PrintOnlyBody
        featuredImage={post.featuredImage}
        content={post.content}
        title={post.title}
        subTitle={post.subTitle}
        authors={authors}
        date={post.date}
      />
    </>
  );
}
