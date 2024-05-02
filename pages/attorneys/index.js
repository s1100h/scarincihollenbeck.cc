import { useEffect, useContext } from 'react';
import { AttorneysContext } from 'contexts/AttorneysContext';
import {
  rebuildDataForAttorneysCards,
  sanitizePracticesByChildren,
  sortAttorneysByCategory,
  sortByKey,
} from 'utils/helpers';
import {
  PRODUCTION_URL,
  BASE_API_URL,
  headers,
  SITE_PHONE,
} from 'utils/constants';
import { fetchAPI } from 'requests/api';
import {
  adminKaterinTraughQuery,
  attorneysPageQuery,
  attorneysQuery,
  getPracticesWithAttorneysQuery,
  miniOfficeLocationQuery,
} from 'requests/graphql-queries';
import AttorneysPage from 'components/pages/AttorneysDirectory';
import { sanitizeOffices } from 'pages';
import useNotFoundNotification from 'hooks/useNotFoundNotification';

/** Fetch the page content from WP GRAPHQL API */
export const attorneysPageContent = async () => {
  const data = await fetchAPI(attorneysPageQuery, {});
  return data?.pageBy;
};

export const getPracticesWithAttorneys = async () => {
  const { practices: nodes } = await fetchAPI(getPracticesWithAttorneysQuery);
  return nodes.nodes;
};

export const getKaterinTraugh = async () => {
  const data = await fetchAPI(adminKaterinTraughQuery);
  const {
    title,
    databaseId,
    administration: {
      designation,
      email,
      phoneExtension,
      location,
      featuredImage: { sourceUrl },
    },
    uri,
  } = data.administration;

  return {
    id: databaseId,
    title,
    designation,
    email,
    phone: `${SITE_PHONE} ${phoneExtension}`,
    location_array: location.map(
      ({
        id, uri, title, officeMainInformation,
      }) => ({
        id,
        uri,
        title,
        officeMainInformation: officeMainInformation.addressLocality,
      }),
    ),
    uri,
    better_featured_image: sourceUrl,
  };
};

export const getAttorneys = async () => {
  const { attorneyProfiles } = await fetchAPI(attorneysQuery, {});

  attorneyProfiles.nodes.forEach((attorneyItem, idx) => {
    if (attorneyItem.attorneyMainInformation.designation === 'The Firm') {
      attorneyProfiles.nodes.splice(idx, 1);
    }
  });

  const sanitaizedAttorneys = attorneyProfiles?.nodes.map(
    ({
      title,
      uri,
      databaseId,
      attorneyMainInformation,
      attorneyPrimaryRelatedPracticesLocationsGroups,
    }) => {
      attorneyPrimaryRelatedPracticesLocationsGroups.officeLocation = attorneyPrimaryRelatedPracticesLocationsGroups.officeLocation.map(
        ({
          id, uri, title, officeMainInformation,
        }) => ({
          id,
          uri,
          title,
          officeMainInformation: officeMainInformation.addressLocality,
        }),
      );

      attorneyPrimaryRelatedPracticesLocationsGroups.relatedPractices = attorneyPrimaryRelatedPracticesLocationsGroups.relatedPractices?.map(
        ({ title }) => title,
      );
      return {
        id: databaseId,
        lastName: attorneyMainInformation.lastName,
        title,
        designation: attorneyMainInformation.designation,
        email: attorneyMainInformation.email,
        phone: attorneyMainInformation.phoneNumber,
        practices_array:
          attorneyPrimaryRelatedPracticesLocationsGroups.relatedPractices || [],
        location_array:
          attorneyPrimaryRelatedPracticesLocationsGroups.officeLocation,
        link: uri,
        better_featured_image: attorneyMainInformation.profileImage.sourceUrl,
        profileImage: attorneyMainInformation.profileImage.sourceUrl,
      };
    },
  );

  return sortByKey(sanitaizedAttorneys, 'lastName');
};

/** Fetch the office, designations, attorneys, practices data from WP REST API */
const getAttorneysContent = async () => {
  try {
    const [locationsArr, designations, practices] = await Promise.all([
      fetchAPI(miniOfficeLocationQuery, {}),
      fetch(`${BASE_API_URL}/wp-json/attorney-search/designations`, { headers })
        .then((data) => data.json())
        .catch((err) => err),
      fetch(`${BASE_API_URL}/wp-json/attorney-search/practices`, { headers })
        .then((data) => data.json())
        .catch((err) => err),
    ]);

    const locations = sanitizeOffices(locationsArr.officeLocations.nodes);

    return [locations, designations, practices];
  } catch (error) {
    console.error(error);
  }
};

/** Map all the page data to component props */
export async function getStaticProps() {
  const [locations, designations, practices] = await getAttorneysContent();
  const attorneys = await getAttorneys();
  const page = await attorneysPageContent();
  const { title, seo, attorneyArchives } = page;
  const katerinTraugh = await getKaterinTraugh();
  const practicesWithAttorneys = await getPracticesWithAttorneys();
  const sanitizedPracticesByChildren = sanitizePracticesByChildren(
    practicesWithAttorneys,
  );
  const attorneysRebuildData = rebuildDataForAttorneysCards(
    practicesWithAttorneys,
    attorneys,
  );
  // Here we move sort attorneys by category on server side from client side, but data size when building is biggest limit in 128Kb(attorneys.json) and we have warning.
  // Commit 02.05.2024
  // TODO fix this problem with rendering on server, if rendering on client this problem doesn't exist
  const attorneysWithKaterin = [...attorneysRebuildData, katerinTraugh];
  const sortedTitlesByOrder = sortByKey(
    attorneyArchives?.designationSectionTitles,
    'order',
  );
  const sortedAttorneysByCategory = sortAttorneysByCategory(
    attorneysWithKaterin,
    sortedTitlesByOrder,
  );

  if (!page) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      seo,
      locations,
      designations,
      practices: sanitizedPracticesByChildren,
      attorneys: attorneysWithKaterin,
      sortedAttorneys: sortedAttorneysByCategory,
      site: {
        title,
        description: attorneyArchives?.description,
      },
    },
    revalidate: 86400,
  };
}

/* Attorneys page component */
const Attorneys = ({
  seo,
  locations,
  designations,
  practices,
  attorneys,
  sortedAttorneys,
  site,
}) => {
  const {
    setDataForFilter,
    userInput,
    setUserInput,
    clearQuery,
    setSelect,
    dataForFilter,
    setAttorneysContext,
  } = useContext(AttorneysContext);
  const canonicalUrl = `${PRODUCTION_URL}/attorneys`;

  // sort practices, designations, location
  const sPractices = sortByKey(practices, 'title');

  /** set section titles to context provider */
  useEffect(() => {
    if (dataForFilter.sPractices.length === 0) {
      setDataForFilter({
        sPractices,
        locations,
        designations,
      });
      setAttorneysContext(attorneys);
    }
  }, []);

  useEffect(() => {
    if (!userInput) clearQuery('query');
  }, [userInput]);

  useNotFoundNotification('The selected profile no longer exists.');

  const attorneysPageProps = {
    sPractices,
    locations,
    designations,
    userInput,
    setUserInput,
    seo,
    practices,
    setSelect,
    site,
    canonicalUrl,
    attorneys,
    sortedAttorneys,
  };

  return <AttorneysPage {...attorneysPageProps} />;
};

export default Attorneys;
