import FirmOverviewPage from 'components/pages/FirmOverview';
import {
  firmOverViewTitles,
  SITE_PHONE,
  PRODUCTION_URL,
} from 'utils/constants';
import { fetchAPI } from 'requests/api';
import { firmOverviewQuery } from 'requests/graphql-queries';
import { sortAttorneysByCategory, sortByKey } from 'utils/helpers';
import empty from 'is-empty';

/** Fetch the firm overview page content WP GRAPHQL API */
export async function getFirmOverviewContent() {
  const data = await fetchAPI(firmOverviewQuery);
  return data?.pageBy;
}

const sanitizeMembers = (members) => members.map((member) => ({
  title: member.title,
  uri: member.attorneyMainInformation
    ? `attorneys/${member.slug}`
    : `administration/${member.slug}`,
  better_featured_image:
      member.attorneyMainInformation?.profileImage?.sourceUrl
      || member.administration?.featuredImage?.sourceUrl,
  phone:
      member.attorneyMainInformation?.phoneNumber
      || `${SITE_PHONE} #${member.administration?.phoneExtension}`,
  email:
      member.attorneyMainInformation?.email || member.administration?.email,
  designation:
      (member.attorneyMainInformation?.designation
        !== 'Firm Managing Partner'
      && member.attorneyMainInformation?.designation
        !== 'Deputy Managing Partner'
      && member.attorneyMainInformation?.designation !== 'NYC Managing Partner'
        ? member.attorneyChairCoChair
        : member.attorneyMainInformation.designation)
      || member.administration?.title,
  location_array: !empty(
    member.attorneyPrimaryRelatedPracticesLocationsGroups,
  )
    ? member.attorneyPrimaryRelatedPracticesLocationsGroups?.officeLocation?.map(
      ({ id, title }) => ({
        id,
        officeMainInformation: title,
      }),
    )
    : !empty(member.administration)
      ? member.administration?.location?.map(
        ({ id, officeMainInformation }) => ({
          id,
          officeMainInformation: officeMainInformation.addressLocality,
        }),
      )
      : [],
}));

export const getStaticProps = async () => {
  const pageRequest = await getFirmOverviewContent();

  const {
    title, seo, pagesFields, firmOverviewTabs, featuredImage,
  } = pageRequest;

  const { directors, firmLeaders } = firmOverviewTabs;

  const restFirmMembers = [
    ...sanitizeMembers(firmLeaders),
    ...sanitizeMembers(directors),
  ];

  const sortedTitlesByOrder = sortByKey(firmOverViewTitles, 'order');

  const sorteredFirmMembers = sortAttorneysByCategory(
    restFirmMembers,
    sortedTitlesByOrder,
  );

  return {
    props: {
      title,
      seo,
      pagesFields,
      firmOverviewTabs,
      firmMembers: sorteredFirmMembers,
      subHeaderImage: featuredImage.node.sourceUrl,
    },
    revalidate: 86400,
  };
};

/** The Firm Overview page component */
const FirmOverview = ({
  title,
  seo,
  pagesFields,
  firmOverviewTabs,
  firmMembers,
  subHeaderImage,
}) => {
  const { description, sections } = pagesFields;
  const canonicalUrl = `${PRODUCTION_URL}/firm-overview`;

  const firmOverviewProps = {
    title,
    seo,
    canonicalUrl,
    sections,
    subTitle: description,
    firmOverviewTabs,
    firmMembers,
    subHeaderImage,
  };

  return <FirmOverviewPage {...firmOverviewProps} />;
};

export default FirmOverview;
