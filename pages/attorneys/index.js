import { useEffect, useContext } from 'react';
import { AttorneysContext } from 'contexts/AttorneysContext';
import { sortByKey } from 'utils/helpers';
import {
  PRODUCTION_URL, BASE_API_URL, headers, SITE_PHONE,
} from 'utils/constants';
import { fetchAPI } from 'utils/api';
import {
  adminKaterinTraughQuery,
  attorneysPageQuery,
  miniOfficeLocationQuery,
} from 'utils/graphql-queries';
import AttorneysPage from 'components/pages/AttorneysDirectory';
import { sanitizeOffices } from 'pages';

/** Fetch the page content from WP GRAPHQL API */
export const attorneysPageContent = async () => {
  const data = await fetchAPI(attorneysPageQuery, {});
  return data?.pageBy;
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
    location_array: location,
    uri,
    better_featured_image: sourceUrl,
  };
};

/** Fetch the office, designations, attorneys, practices data from WP REST API */
const getAttorneysContent = async () => {
  try {
    const [attorneys, locationsArr, designations, practices] = await Promise.all([
      fetch(`${BASE_API_URL}/wp-json/attorney-search/attorneys`, { headers })
        .then((data) => data.json())
        .catch((err) => err),
      fetchAPI(miniOfficeLocationQuery, {}),
      fetch(`${BASE_API_URL}/wp-json/attorney-search/designations`, { headers })
        .then((data) => data.json())
        .catch((err) => err),
      fetch(`${BASE_API_URL}/wp-json/attorney-search/practices`, { headers })
        .then((data) => data.json())
        .catch((err) => err),
    ]);

    const locations = sanitizeOffices(locationsArr.officeLocations.nodes);

    return [attorneys, locations, designations, practices];
  } catch (error) {
    console.error(error);
  }
};

/** Map all the page data to component props */
export async function getStaticProps() {
  const [attorneys, locations, designations, practices] = await getAttorneysContent();
  const page = await attorneysPageContent();
  const { title, seo, attorneyArchives } = page;
  const katerinTraugh = await getKaterinTraugh();

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
      practices,
      attorneys: [...attorneys, katerinTraugh],
      site: {
        title,
        description: attorneyArchives?.description,
      },
      sectionTitles: attorneyArchives?.designationSectionTitles,
    },
    revalidate: 86400,
  };
}

/* Attorneys page component */
const Attorneys = ({
  seo, locations, designations, practices, attorneys, site, sectionTitles,
}) => {
  const {
    attorneysTitles,
    setAttorneysTitles,
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
    if (!attorneysTitles) {
      const orderedTitles = sectionTitles.sort((a, b) => (a.order > b.order ? 1 : -1));
      setAttorneysTitles(orderedTitles);
    }
  }, []);

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
  };

  return <AttorneysPage {...attorneysPageProps} />;
};

export default Attorneys;
