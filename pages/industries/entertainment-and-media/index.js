import InitEntertainmentFonts from 'styles/practices-special-style/ent-adn-media/InitEntertainmentFonts';
import { getIndustryContent } from 'requests/industries/industry-default';
import { entertainmentAndMediaIndustryQuery } from 'requests/industries/industry-queries';
import { headMetaData } from 'requests/practices/practice-default';
import EntertainmentAndMediaPage from '../../../components/practices-special/entertainment-and-media/EntertainmentAndMediaPage';
import { PRODUCTION_URL } from '../../../utils/constants';
import { sortByKey } from '../../../utils/helpers';
import ApolloWrapper from '../../../layouts/ApolloWrapper';
import { EntertainmentInfoProvider } from '../../../contexts/EntertainmentInfoContext';

export const getStaticProps = async () => {
  const {
    industry,
    includeAttorney,
    industryChief,
    keyContactsList,
    corePractices,
  } = await getIndustryContent(entertainmentAndMediaIndustryQuery);

  if (typeof industry === 'undefined') {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      industry,
      entertainmentAndMediaData: industry?.entertainmentAndMediaIndustry,
      chairIndustry: industryChief || [],
      attorneyListIndustry: includeAttorney || [],
      keyContactsList,
      attorneysSchemaData: headMetaData(industryChief, includeAttorney),
      practices: sortByKey(corePractices, 'title'),
    },
  };
};

const EnterteimentAndMedia = ({
  industry,
  entertainmentAndMediaData,
  chairIndustry,
  attorneyListIndustry,
  attorneysSchemaData,
  practices,
}) => {
  const canonicalUrl = `${PRODUCTION_URL}/industries/${industry.slug}`;

  const propsPage = {
    industry,
    canonicalUrl,
    attorneysSchemaData,
    chairIndustry,
    attorneyListIndustry,
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
