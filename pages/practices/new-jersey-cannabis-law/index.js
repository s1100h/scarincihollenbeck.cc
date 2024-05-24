import { useRouter } from 'next/router';
import CannabisLawPage from '../../../components/practices-special/cannabis-law/CannabisLawPage';
import { PRODUCTION_URL } from '../../../utils/constants';
import SiteLoader from '../../../components/shared/SiteLoader';
import {
  getPracticeAttorneys,
  headMetaData,
} from '../../../requests/practices/practice-default';
import { getSlugFromUrl } from '../../../utils/helpers';
import ApolloWrapper from '../../../layouts/ApolloWrapper';

/** Set single practice data to page props */
export const getServerSideProps = async ({ res, resolvedUrl, query }) => {
  res.setHeader(
    'Cache-Control',
    'max-age=0, s-maxage=60, stale-while-revalidate',
  );
  const slug = getSlugFromUrl(resolvedUrl).split('?')[0];

  const {
    practice,
    includeAttorney,
    practiceChief,
    keyContactsList,
    corePractices,
  } = await getPracticeAttorneys(resolvedUrl.split('?')[0]);

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
      slug,
      currentPage: query?.page || 1,
    },
  };
};
const CannabisLaw = ({
  practice,
  corePractices,
  practiceChildren,
  slug,
  attorneysSchemaData,
  chairPractice,
  attorneyListPractice,
  keyContactsList,
  cannabisLawData,
  currentPage,
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
    corePractices,
    practice,
    practiceChildren,
    attorneysSchemaData,
    practiceUrl,
    canonicalUrl,
    tabs: fullTabs,
    slug,
    chairPractice,
    attorneyListPractice,
    keyContactsList,
    cannabisLawData,
    currentPage,
  };
  return (
    <ApolloWrapper>
      <CannabisLawPage {...propsPage} />
    </ApolloWrapper>
  );
};

export default CannabisLaw;
