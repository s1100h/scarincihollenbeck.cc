import { Col, Container, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import PostSiteHead from 'components/shared/head/PostSiteHead';
import SubHeader from 'layouts/SubHeader/SubHeader';
import PostBody from 'components/organisms/post/PostBody';
import Sidebar from 'components/organisms/post/PostSidebar';
import { changePostLink } from 'utils/helpers';
import { PRODUCTION_URL } from 'utils/constants';
import empty from 'is-empty';
import { SideBarContainer } from '../../styles/Sidebar.style';
import RelatedPosts from '../organisms/post/RelatedPosts';
import RecommendedPosts from '../common/RecommendedPosts';
import CrashedContent from '../common/CrashedContent';

const PrintOnlyBody = dynamic(() => import('components/organisms/post/PrintOnlyBody'));

const PostPage = ({
  post,
  seo,
  categories,
  canonicalUrl,
  authors,
  keyContacts,
  corePractices,
  relatedPosts,
  posts,
}) => {
  const sideBarProps = {
    keyContacts,
    corePractices,
  };

  return (
    <>
      {empty(post?.content) ? (
        <>
          <PostSiteHead
            seo={seo}
            canonicalUrl={`${PRODUCTION_URL}${changePostLink(canonicalUrl)}`}
            post={post}
            authors={authors}
          />
          <SubHeader
            title={post.title}
            subtitle={post.subTitle}
            offset={0}
            span={8}
            authors={authors}
            date={post.date}
            isBlog
          />
          <Container className="d-print-none">
            <Row className="gap-4 d-flex justify-content-center">
              <Col sm={12} lg={7}>
                <PostBody
                  content={post.content}
                  title={post.title}
                  subTitle={post.subTitle}
                  date={post.date}
                  categories={categories}
                />
              </Col>
              <Col sm={10} lg={4} className="d-print-none px-0">
                <SideBarContainer>
                  <Sidebar {...sideBarProps} />
                </SideBarContainer>
                <RelatedPosts posts={relatedPosts} />
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
          <RecommendedPosts
            titleGeneralBlock="Firm News & Press Releases"
            attorneyFooterNewsArticles={posts}
          />
        </>
      ) : (
        <CrashedContent />
      )}
    </>
  );
};

export default PostPage;
