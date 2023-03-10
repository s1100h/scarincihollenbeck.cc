import { Col, Container, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import PostSiteHead from 'components/shared/head/PostSiteHead';
import SingleSubHeader from 'layouts/SingleSubHeader';
import PostBody from 'components/organisms/post/PostBody';
import Sidebar from 'components/organisms/post/PostSidebar';
import AboutAuthorCard from '../common/AboutAuthorCard';
import { ColSideBar } from '../../styles/Sidebar.style';
import Subscription from '../molecules/subscription/Subscription';
import RelatedPosts from '../organisms/post/RelatedPosts';

const PrintOnlyBody = dynamic(() => import('components/organisms/post/PrintOnlyBody'));

const PostPage = ({
  post,
  seo,
  categories,
  canonicalUrl,
  authors,
  corePractices,
  relatedPosts,
}) => {
  const sideBarProps = {
    authorsForCards: authors,
    corePractices,
  };

  return (
    <>
      <PostSiteHead seo={seo} canonicalUrl={canonicalUrl} post={post} authors={authors} />
      <SingleSubHeader
        title={post.title}
        subtitle={post.subTitle}
        isBlog
        offset={0}
        span={8}
        authors={authors}
        date={post.date}
      />
      <Container className="d-print-none">
        <Row className="gap-4">
          <Col sm={12} lg={7}>
            <PostBody
              content={post.content}
              title={post.title}
              subTitle={post.subTitle}
              date={post.date}
              categories={categories}
            />
          </Col>
          <Col sm={12} lg={4} className="d-print-none px-0">
            <ColSideBar sm={12} lg={4} className="d-print-none px-0">
              <Sidebar {...sideBarProps} />
            </ColSideBar>
            <RelatedPosts posts={relatedPosts} />
          </Col>
          <Col className="d-flex flex-column gap-4" sm={12} lg={9}>
            <AboutAuthorCard authors={authors} />
            <Subscription />
          </Col>
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
};

export default PostPage;
