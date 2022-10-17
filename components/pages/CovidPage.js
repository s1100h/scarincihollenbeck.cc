import { Container, Row, Col } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import ContactForm from 'components/shared/ContactForm';
import { createMarkup, formatPageImageToCloudinaryUrl } from 'utils/helpers';
import pageContentStyles from 'styles/PageContent.module.css';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SingleSubHeader from 'layouts/SingleSubHeader';
import { categoryPostsByIdQuery } from 'utils/graphql-queries';
import useApolloQuery from 'hooks/useApolloQuery';
import ContentTitle from 'components/atoms/ContentTitle';
import {
  FirstColumn,
  BottomContainer,
  SecondColumn,
  TwoColumnsContainer,
} from 'styles/Containers.style';

const PostList = dynamic(import('components/molecules/PostList'));
const Sidebar = dynamic(import('components/organisms/covid/Sidebar'));

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

  // replace image url from post content
  const modPage = formatPageImageToCloudinaryUrl(bodyContent);

  return (
    <>
      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDescription}
        canonicalUrl={canonicalUrl}
      />
      <SingleSubHeader title={title} subtitle={subTitle} span={8} offset={0} />
      <TwoColumnsContainer>
        <FirstColumn>
          <div className={pageContentStyles.p} dangerouslySetInnerHTML={createMarkup(modPage)} />
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
          <ContentTitle title="Contact A Firm Representative" />
          <ContactForm />
        </FirstColumn>
        <SecondColumn>
          <Sidebar />
        </SecondColumn>
      </TwoColumnsContainer>
    </>
  );
};

export default CovidPage;
