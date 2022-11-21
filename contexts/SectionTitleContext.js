import React, { createContext, useState } from 'react';

export const SectionTitleContext = createContext(null);

export const SectionTitleProvider = ({ children }) => {
  const [attorneysTitles, setAttorneysTitles] = useState();
  const [firmOverviewTitles, setFirmOverviewTitles] = useState();
  const [userInput, setUserInput] = useState('');
  const [select, setSelect] = useState([]);
  const [dataForFilter, setDataForFilter] = useState({
    sPractices: [],
    locations: '',
    designations: '',
    clearAll: () => {},
  });

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

  /* Click Events */
  function onSelect(e, input) {
    const results = {
      selected: input,
      key: e.target.name,
    };

    setSelect(select.filter((a) => a.key !== results.key).concat(results));
  }

  /** Clear user query */
  function clearQuery(key) {
    const rQuery = select.filter((a) => a.key !== key);
    if (key === 'query') setUserInput('');
    setSelect(rQuery);
  }

  const values = {
    attorneysTitles,
    setAttorneysTitles,
    firmOverviewTitles,
    setFirmOverviewTitles,
    dataForFilter,
    setDataForFilter,
    userInput,
    setUserInput,
    select,
    onSelect,
    handleChange,
    setSelect,
    clearQuery,
  };

  return <SectionTitleContext.Provider value={values}>{children}</SectionTitleContext.Provider>;
};
