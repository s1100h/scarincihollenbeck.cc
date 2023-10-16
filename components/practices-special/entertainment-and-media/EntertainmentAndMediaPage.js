import empty from 'is-empty';
import { ColStyled } from 'styles/attorney-page/AttorneyProfile.style';
import { Container, Row } from 'react-bootstrap';
import AttorneysListBox from 'components/common/AttorneysListBox';
import BasicSiteHead from '../../shared/head/BasicSiteHead';
import SubHeader from '../../../layouts/SubHeader/SubHeader';
import useApolloQuery from '../../../hooks/useApolloQuery';
import { categoryPostsByIdQuery } from '../../../requests/graphql-queries';
import ArticlesBlock from '../../organisms/cannabis-law/ArticlesBlock';

const EntertainmentAndMediaPage = ({
  practice,
  canonicalUrl,
  attorneysSchemaData,
  corePractices,
  chairPractice,
  attorneyListPractice,
  keyContactsList,
  entAndMediaData,
}) => {
  const {
    handleNextPagination, handlePrevPagination, data, loading, error,
  } = useApolloQuery(
    categoryPostsByIdQuery,
    {
      first: 3,
      last: null,
      after: null,
      before: null,
      categoryId: 911,
    },
    // skipOrGo,
  );

  const paginationDataProps = {
    handleNextPagination,
    handlePrevPagination,
    data,
    loading,
    error,
  };

  return (
    <>
      <BasicSiteHead
        title={practice.seo.title}
        metaDescription={practice.seo.metaDescription}
        canonicalUrl={canonicalUrl}
        personDataForSchema={attorneysSchemaData}
      />
      <SubHeader title={practice.title} subtitle={entAndMediaData.subTitle} />

      {(!empty(chairPractice) || !empty(attorneyListPractice)) && (
        <Container>
          <Row>
            <ColStyled sm={12}>
              <AttorneysListBox
                attorneys={{
                  chairs: chairPractice,
                  attorneysList: attorneyListPractice,
                }}
              />
            </ColStyled>
          </Row>
        </Container>
      )}
      <ArticlesBlock paginationData={paginationDataProps} />
    </>
  );
};

export default EntertainmentAndMediaPage;
