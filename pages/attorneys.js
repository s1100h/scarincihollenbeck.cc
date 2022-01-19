import { useState, useEffect, useContext } from 'react';
import { SectionTitleContext } from 'contexts/SectionTitleContext';
import { sortByKey } from 'utils/helpers';
import { SITE_URL, BASE_API_URL, headers } from 'utils/constants';
import { fetchAPI } from 'utils/api';
import { attorneysPageQuery } from 'utils/graphql-queries';
import AttorneysPage from 'components/pages/AttorneysDirectory';

/** Fetch the page content from WP GRAPHQL API */
const attorneysPageContent = async () => {
  const data = await fetchAPI(attorneysPageQuery, {});
  return data?.pageBy;
};

/** Fetch the office, designations, attorneys, practices data from WP REST API */
const getAttorneysContent = async () => {
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
};

/** Map all the page data to component props */
export async function getStaticProps() {
  const [attorneys, locations, designations, practices] = await getAttorneysContent();
  const page = await attorneysPageContent();
  const { title, seo, attorneyArchives } = page;

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
  const { titles, setTitles } = useContext(SectionTitleContext);
  const [userInput, setUserInput] = useState('');
  const [select, setSelect] = useState([]);
  const canonicalUrl = `${SITE_URL}/attorneys`;
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  /** set section titles to context provider */
  useEffect(() => {
    if (!titles) {
      const orderedTitles = sectionTitles.sort((a, b) => (a.order > b.order ? 1 : -1));
      setTitles(orderedTitles);
    }
  }, [sectionTitles]);

  /* Click Events */
  function onSelect(e, input) {
    const results = {
      selected: input,
      key: e.target.name,
    };

    setSelect(select.filter((a) => a.key !== results.key).concat(results));
  }

  /* Letter Click Event */
  function letterClick(e) {
    const selected = e.target.innerHTML;
    const key = 'letter';
    const results = { selected, key };
    const s = select.filter((a) => a.key !== key);
    const concatResults = s.concat(results);

    // set new results[] to state select
    setSelect(concatResults);
  }

  /* Handle User Input Event */
  function handleChange(e) {
    const input = e.target.value.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
    );
    const results = { selected: userInput, key: 'query' };
    const concatResults = select.concat(results);

    setUserInput(input);
    setSelect(concatResults);
  }

  /** Clear user query */
  function clearQuery(key) {
    const rQuery = select.filter((a) => a.key !== key);

    setUserInput('');
    setSelect(rQuery);
  }

  /** Clear all queries */
  function clearAll() {
    setUserInput('');
    setSelect([]);
  }

  // sort practices, designations, location
  const sPractices = sortByKey(practices, 'title');
  const attorneysPageProps = {
    sPractices,
    clearAll,
    clearQuery,
    handleChange,
    letterClick,
    onSelect,
    userInput,
    setUserInput,
    seo,
    locations,
    designations,
    practices,
    attorneys,
    select,
    setSelect,
    alphabet,
    site,
    canonicalUrl,
  };

  return <AttorneysPage {...attorneysPageProps} />;
};

export default Attorneys;
