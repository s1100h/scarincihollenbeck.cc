import React, { createContext, useState } from 'react';
import decodeResponse from 'utils/decodeResponse';
import empty from 'is-empty';

export const AttorneysContext = createContext(null);

export const AttorneysProvider = ({ children }) => {
  const [userInput, setUserInput] = useState('');
  const [select, setSelect] = useState([]);
  const [attorneysContext, setAttorneysContext] = useState([]);
  const [dataForFilter, setDataForFilter] = useState({
    sPractices: [],
    locations: [],
    designations: '',
  });
  const [authors, setAuthors] = useState([]);

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

  /* Click Events */
  function onSelectLetter(letter) {
    const results = { selected: letter.toUpperCase(), key: 'letterInLastName' };
    const concatResults = select
      .filter((el) => el.key !== 'letterInLastName')
      .concat(results);
    setSelect(concatResults);
  }

  /** Clear user query */
  function clearQuery(key) {
    const rQuery = select.filter((a) => a.key !== key);
    if (key === 'query') setUserInput('');
    setSelect(rQuery);
  }

  function clearAll() {
    setUserInput('');
    setSelect([]);
  }

  async function getAsyncAuthors() {
    const authors = await fetch('/api/revalidate-authors');
    const resDecoded = await decodeResponse(authors);

    if (!empty(resDecoded?.data)) {
      setAuthors(resDecoded?.data);
    }
  }

  const values = {
    dataForFilter,
    setDataForFilter,
    userInput,
    setUserInput,
    select,
    onSelect,
    handleChange,
    setSelect,
    clearQuery,
    attorneysContext,
    setAttorneysContext,
    clearAll,
    authors,
    getAsyncAuthors,
    onSelectLetter,
  };

  return (
    <AttorneysContext.Provider value={values}>
      {children}
    </AttorneysContext.Provider>
  );
};
