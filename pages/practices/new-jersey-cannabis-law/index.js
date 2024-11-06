import { useRouter } from 'next/router';
import InitCannabisFonts from 'styles/practices-special-style/canabis-law/InitCannabisFonts';
import CannabisLawPage from '../../../components/practices-special/cannabis-law/CannabisLawPage';
import { PRODUCTION_URL } from '../../../utils/constants';
import SiteLoader from '../../../components/shared/SiteLoader';
import {
  getPracticeAttorneys,
  headMetaData,
} from '../../../requests/practices/practice-default';
import ApolloWrapper from '../../../layouts/ApolloWrapper';

/** Set single practice data to page props */
export const getStaticProps = async () => {
  const {
    practice,
    includeAttorney,
    practiceChief,
    keyContactsList,
    corePractices,
  } = await getPracticeAttorneys('/practices/new-jersey-cannabis-law');

  if (typeof practice === 'undefined') {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      practice,
      cannabisLawData: practice?.practiceContentForeCannabisLaw?.cannabisLaw,
      chairPractice: practiceChief || [],
      attorneyListPractice: includeAttorney || [],
      keyContactsList,
      attorneysSchemaData: headMetaData(practiceChief, includeAttorney),
      corePractices,
      practiceChildren: practice?.practicesIncluded?.childPractice,
    },
    revalidate: 86400,
  };
};

const CannabisLaw = ({
  practice,
  corePractices,
  practiceChildren,
  attorneysSchemaData,
  chairPractice,
  attorneyListPractice,
  keyContactsList,
  cannabisLawData,
}) => {
  const router = useRouter();
  const practiceUrl = router.asPath
    .replace('/practices/', '')
    .replace('/practice/', '');
  const canonicalUrl = `${PRODUCTION_URL}/practices/${practice.slug}`;

  if (router.isFallback) {
    return <SiteLoader />;
  }

  const siteTabs = practice.practicesIncluded.contentSection.map(
    (tab, index) => ({
      ...tab,
      id: index,
    }),
  );

  const fullTabs = [
    ...siteTabs,
    {
      id: 99,
      title: 'Related Articles',
      content: '<h4>Related Articles</h4>',
    },
  ];

  const propsPage = {
    industry: practice,
    canonicalUrl,
    attorneysSchemaData,
    corePractices,
    chairIndustry: chairPractice,
    attorneyListIndustry: attorneyListPractice,
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
