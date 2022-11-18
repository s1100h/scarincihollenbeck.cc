import { useEffect, useContext } from 'react';
import { SectionTitleContext } from 'contexts/SectionTitleContext';
import { sortByKey } from 'utils/helpers';
import { SITE_URL, BASE_API_URL, headers } from 'utils/constants';
import { fetchAPI } from 'utils/api';
import { attorneysPageQuery } from 'utils/graphql-queries';
import AttorneysPage from 'components/pages/AttorneysDirectory';

/** Fetch the page content from WP GRAPHQL API */
export const attorneysPageContent = async () => {
  const data = await fetchAPI(attorneysPageQuery, {});
  return data?.pageBy;
};

/** Fetch the office, designations, attorneys, practices data from WP REST API */
const getAttorneysContent = async () => {
  try {
    const [attorneys, locations, designations, practices] = await Promise.all([
      fetch(`${BASE_API_URL}/wp-json/attorney-search/attorneys`, { headers })
        .then((data) => data.json())
        .catch((err) => err),
      fetch(`${BASE_API_URL}/wp-json/attorney-search/office-locations`, { headers })
        .then((data) => data.json())
        .catch((err) => err),
      fetch(`${BASE_API_URL}/wp-json/attorney-search/designations`, { headers })
        .then((data) => data.json())
        .catch((err) => err),
      fetch(`${BASE_API_URL}/wp-json/attorney-search/practices`, { headers })
        .then((data) => data.json())
        .catch((err) => err),
    ]);

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
      attorneys,
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
    titles,
    setTitles,
    setDataForFilter,
    userInput,
    setUserInput,
    clearQuery,
    setSelect,
    dataForFilter,
  } = useContext(SectionTitleContext);
  const canonicalUrl = `${SITE_URL}/attorneys`;

  /** Clear all queries */
  function clearAll() {
    setUserInput('');
    setSelect([]);
  }

  // sort practices, designations, location
  const sPractices = sortByKey(practices, 'title');

  /** set section titles to context provider */
  useEffect(() => {
    if (!titles || !titles?.every((title) => title?.name === 'Directors')) {
      const orderedTitles = sectionTitles.sort((a, b) => (a.order > b.order ? 1 : -1));
      setTitles(orderedTitles);
    }
  }, []);

  useEffect(() => {
    if (dataForFilter.sPractices.length === 0) {
      setDataForFilter({
        sPractices,
        locations,
        designations,
        clearAll,
      });
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
    clearAll,
    setUserInput,
    seo,
    practices,
    attorneys,
    setSelect,
    site,
    canonicalUrl,
  };

  return <AttorneysPage {...attorneysPageProps} />;
};

export default Attorneys;
