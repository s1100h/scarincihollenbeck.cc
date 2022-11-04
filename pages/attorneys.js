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
    titles, setTitles, setDataForFilter, userInput, setUserInput, select, setSelect,
  } = useContext(SectionTitleContext);
  const canonicalUrl = `${SITE_URL}/attorneys`;

  /** Clear all queries */
  function clearAll() {
    setUserInput('');
    setSelect([]);
  }

  /** Clear user query */
  function clearQuery(key) {
    const rQuery = select.filter((a) => a.key !== key);
    if (key === 'query') setUserInput('');
    setSelect(rQuery);
  }

  /* Click Events */
  function onSelect(e, input) {
    const results = {
      selected: input,
      key: e.target.name,
    };

    setSelect(select.filter((a) => a.key !== results.key).concat(results));
  }

  /* Handle User Input Event */
  function handleChange(e) {
    if (e.currentTarget && e.currentTarget.value.length === 0) {
      setUserInput('');
    } else {
      const input = e.target.value.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
      );
      const results = { selected: userInput, key: 'query' };
      const concatResults = select.concat(results);
      setUserInput(input);
      setSelect(concatResults);
    }
  }

  // sort practices, designations, location
  const sPractices = sortByKey(practices, 'title');

  /** set section titles to context provider */
  useEffect(() => {
    if (!titles) {
      const orderedTitles = sectionTitles.sort((a, b) => (a.order > b.order ? 1 : -1));
      setTitles(orderedTitles);
    }
  }, [sectionTitles]);

  useEffect(() => {
    setDataForFilter({
      sPractices,
      locations,
      designations,
      handleChange,
      onSelect,
      clearQuery,
      clearAll,
    });
  }, []);

  useEffect(() => {
    if (!userInput) clearQuery('query');
  }, [userInput]);

  const attorneysPageProps = {
    sPractices,
    locations,
    designations,
    userInput,
    handleChange,
    onSelect,
    select,
    clearQuery,
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
