import { useState, useEffect, useContext } from 'react';
import { SectionTitleContext } from 'contexts/SectionTitleContext';
import { sortByKey } from 'utils/helpers';
import { SITE_URL } from 'utils/constants';
import { getAttorneysPageContent } from 'utils/queries';
import { attorneysPageContent } from 'utils/api';
import AttorneysPage from 'components/pages/AttorneysDirectory';

const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const canonicalUrl = `${SITE_URL}/attorneys`;

export default function Attorneys({
  seo,
  locations,
  designations,
  practices,
  attorneys,
  site,
  sectionTitles,
}) {
  const { titles, setTitles } = useContext(SectionTitleContext);
  const [userInput, setUserInput] = useState('');
  const [select, setSelect] = useState([]);

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
}

export async function getStaticProps() {
  const [attorneys, locations, designations, practices, _] = await getAttorneysPageContent();
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
