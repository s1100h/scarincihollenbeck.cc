import React, { createContext, useState } from 'react';

export const SectionTitleContext = createContext(null);

export const SectionTitleProvider = ({ children }) => {
  const [titles, setTitles] = useState();
  const [userInput, setUserInput] = useState('');
  const [select, setSelect] = useState([]);
  const [dataForFilter, setDataForFilter] = useState({
    sPractices: [],
    locations: '',
    designations: '',
    handleChange: () => {},
    onSelect: () => {},
    clearQuery: () => {},
    clearAll: () => {},
  });

  const values = {
    titles,
    setTitles,
    dataForFilter,
    setDataForFilter,
    userInput,
    setUserInput,
    select,
    setSelect,
  };

  return <SectionTitleContext.Provider value={values}>{children}</SectionTitleContext.Provider>;
};
