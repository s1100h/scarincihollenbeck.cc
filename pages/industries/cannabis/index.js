import InitCannabisFonts from 'styles/practices-special-style/canabis-law/InitCannabisFonts';
import { cannabisIndustryQuery } from 'requests/industries/industry-queries';
import { getIndustryContent } from 'requests/industries/industry-default';
import { headMetaData } from 'requests/practices/practice-default';
import CannabisLawPage from '../../../components/practices-special/cannabis-law/CannabisLawPage';
import { PRODUCTION_URL } from '../../../utils/constants';
import ApolloWrapper from '../../../layouts/ApolloWrapper';

export const getStaticProps = async () => {
  const {
    industry,
    includeAttorney,
    industryChief,
    keyContactsList,
    corePractices,
  } = await getIndustryContent(cannabisIndustryQuery);

  if (typeof industry === 'undefined') {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      industry,
      cannabisLawData: industry?.cannabisLawIndustry,
      chairIndustry: industryChief || [],
      attorneyListIndustry: includeAttorney || [],
      keyContactsList,
      attorneysSchemaData: headMetaData(industryChief, includeAttorney),
      corePractices,
    },
    revalidate: 86400,
  };
};

const CannabisLaw = ({
  industry,
  cannabisLawData,
  chairIndustry,
  attorneyListIndustry,
  keyContactsList,
  attorneysSchemaData,
  corePractices,
}) => {
  const canonicalUrl = `${PRODUCTION_URL}/industries/${industry.slug}`;

  const propsPage = {
    industry,
    canonicalUrl,
    attorneysSchemaData,
    corePractices,
    chairIndustry,
    attorneyListIndustry,
    keyContactsList,
    cannabisLawData,
  };
  return (
    <ApolloWrapper>
      <InitCannabisFonts />
      <CannabisLawPage {...propsPage} />
    </ApolloWrapper>
  );
};

export default CannabisLaw;
