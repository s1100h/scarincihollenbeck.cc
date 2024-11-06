import { useRouter } from 'next/router';
import { fetchAPI } from 'requests/api';
import { getPracticesQuery } from 'requests/graphql-queries';
import InitEntertainmentFonts from 'styles/practices-special-style/ent-adn-media/InitEntertainmentFonts';
import EntertainmentAndMediaPage from '../../../components/practices-special/entertainment-and-media/EntertainmentAndMediaPage';
import { PRODUCTION_URL } from '../../../utils/constants';
import SiteLoader from '../../../components/shared/SiteLoader';
import {
  getPracticeAttorneys,
  headMetaData,
} from '../../../requests/practices/practice-default';
import { sortByKey } from '../../../utils/helpers';
import ApolloWrapper from '../../../layouts/ApolloWrapper';
import { EntertainmentInfoProvider } from '../../../contexts/EntertainmentInfoContext';

const getPractices = async () => {
  const data = await fetchAPI(getPracticesQuery, {});
  return data.practices.nodes
    .filter(({ practicePortalPageContent }) => practicePortalPageContent?.practicePortalCategories?.includes(
      'Core Practices',
    ))
    .map(({ databaseId, title, uri }) => ({
      databaseId,
      title,
      uri,
    }));
};

/** Set single practice data to page props */
export const getStaticProps = async () => {
  const {
    practice,
    includeAttorney,
    practiceChief,
    keyContactsList,
    corePractices,
  } = await getPracticeAttorneys('/practices/entertainment-and-media');

  const practices = await getPractices();

  if (typeof practice === 'undefined') {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      practice,
      entertainmentAndMediaData:
        practice.practiceContentForEntertainmentLaw.entertainmentMedia,
      chairPractice: practiceChief || [],
      attorneyListPractice: includeAttorney || [],
      keyContactsList,
      attorneysSchemaData: headMetaData(practiceChief, includeAttorney),
      corePractices,
      practiceChildren: practice?.practicesIncluded?.childPractice,
      practices: sortByKey(practices, 'title'),
    },
  };
};

const EnterteimentAndMedia = ({
  practice,
  corePractices,
  practiceChildren,
  attorneysSchemaData,
  chairPractice,
  attorneyListPractice,
  keyContactsList,
  entertainmentAndMediaData,
  practices,
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
    chairPractice,
    attorneyListPractice,
    keyContactsList,
    entertainmentAndMediaData,
    practices,
  };
  return (
    <ApolloWrapper>
      <EntertainmentInfoProvider>
        <InitEntertainmentFonts />
        <EntertainmentAndMediaPage {...propsPage} />
      </EntertainmentInfoProvider>
    </ApolloWrapper>
  );
};

export default EnterteimentAndMedia;
