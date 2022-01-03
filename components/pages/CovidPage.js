import { Container, Row, Col } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import ContactForm from 'components/shared/contact-form';
import { createMarkup } from 'utils/helpers';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import pageContentStyles from 'styles/PageContent.module.css';
import SubscriptionMessage from 'components/molecules/subscription/subscription-message';
import CommonSidebarLinks from 'components/molecules/common-sidebar-links';
import PopularList from 'components/organisms/library/popular-list';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SingleSubHeader from 'layouts/single-sub-header';
import { CLIENT_ALERTS } from 'utils/constants';
import { categoryPostsByIdQuery } from 'utils/graphql-queries';
import useApolloQuery from 'hooks/useApolloQuery';

const PostList = dynamic(import('components/molecules/PostList'));

const sidebar = (
  <>
    <SubscriptionMessage />
    <CommonSidebarLinks />
    <hr />
    <PopularList term="Client Alerts" list={CLIENT_ALERTS} displayCount={false} />
  </>
);

const CovidPage = ({
  title, seo, bodyContent, canonicalUrl, subTitle, contentId,
}) => {
  /** Handle Article Archive Query */
  const {
    handleNextPagination, handlePrevPagination, data, loading, error,
  } = useApolloQuery(
    categoryPostsByIdQuery,
    {
      first: 6,
      last: null,
      after: null,
      before: null,
      id: contentId,
    },
  );
  return (
    <>
      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDescription}
        canonicalUrl={canonicalUrl}
      />
      <SingleSubHeader title={title} subtitle={subTitle} span={8} offset={0} />
      <Container>
        <Row>
          <Col sm={12} md={9}>
            <div
              className={pageContentStyles.p}
              dangerouslySetInnerHTML={createMarkup(bodyContent)}
            />
            <div className="border-top border-top pt-4">
              <h4 className="mb-5">
                <strong className="text-capitalize">COVID-19 Articles</strong>
              </h4>
              <PostList
                content={{
                  handleNextPagination,
                  handlePrevPagination,
                  data,
                  loading,
                  error,
                }}
              />
            </div>
            <h4 className={grayTitleStyles.title}>Contact A Firm Representative</h4>
            <ContactForm />
          </Col>
          <Col sm={12} md={3}>
            {sidebar}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CovidPage;
