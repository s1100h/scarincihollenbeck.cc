import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import decodeResponse from 'utils/decodeResponse';
import empty from 'is-empty';
import { HeaderSizeContext } from './HeaderSizeContext';

export const AttorneysContext = createContext(null);

export const AttorneysProvider = ({ children }) => {
  const [userInput, setUserInput] = useState('');
  const [select, setSelect] = useState([]);
  const [attorneysContext, setAttorneysContext] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [containerRefer, setContainerRefer] = useState(null);
  const { headerSize } = useContext(HeaderSizeContext);

  // Scroll to ref container when selected filters
  function scrollToRef() {
    if (containerRefer) {
      setTimeout(() => {
        const offsetTop = containerRefer.offsetTop - headerSize?.height;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      });
    }
  }

  /* Click Events */
  function onSelect(e, input) {
    const results = {
      selected: input,
      key: e.target.name,
    };
    setSelect(select.filter((a) => a.key !== results.key).concat(results));
    scrollToRef();
  }

  /* Click Events */
  function onSelectLetter(letter) {
    const results = { selected: letter.toUpperCase(), key: 'letterInLastName' };
    const concatResults = select
      .filter((el) => el.key !== 'letterInLastName')
      .concat(results);
    setSelect(concatResults);
    scrollToRef();
  }

  /** Clear user query */
  function clearQuery(key) {
    const rQuery = select.filter((a) => a.key !== key);
    if (key === 'query') setUserInput('');
    setSelect(rQuery);
    scrollToRef();
  }

  /* Handle User Input Event */
  function handleChange(e) {
    if (e.currentTarget && e.currentTarget.value.length === 0) {
      setUserInput('');
      clearQuery('query');
    } else {
      const input = e.target.value.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
      );
      const results = { selected: userInput, key: 'query' };
      const concatResults = select.concat(results);
      setUserInput(input);
      setSelect(concatResults);

      scrollToRef();
    }
  }

  function clearAll() {
    setUserInput('');
    setSelect([]);
    scrollToRef();
  }

  function setReference(ref) {
    setContainerRefer(ref);
  }

  async function getAsyncAuthors() {
    const authors = await fetch('/api/revalidate-authors');
    const resDecoded = await decodeResponse(authors);

    if (!empty(resDecoded?.data)) {
      setAuthors(resDecoded?.data);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const attorneys = await fetch('/api/revalidate-attorneys');
      const resDecoded = await decodeResponse(attorneys);
      if (!empty(resDecoded?.data)) {
        setAttorneysContext(resDecoded?.data);
      }
    };

    if (empty(attorneysContext)) {
      fetchData();
    }
  }, []);

  const values = {
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
    setReference,
  };

  return (
    <AttorneysContext.Provider value={values}>
      {children}
    </AttorneysContext.Provider>
  );
};
