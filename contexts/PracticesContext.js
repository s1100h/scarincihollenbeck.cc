import { createContext, useEffect, useState } from 'react';
import empty from 'is-empty';
import { getPractices } from 'requests/getPractices';
import { sortByKey } from '../utils/helpers';

export const PracticesContext = createContext(null);
const filterTune = (practice) => {
  const titleMap = {
    'Employment Defense Attorney': true,
    'Government Strategies': true,
  };

  return !titleMap[practice.title];
};
export const PracticesContextProvider = ({ children, includedAttorneys }) => {
  const [practices, setPractices] = useState([]);
  const values = { practices, setPractices };

  useEffect(() => {
    if (empty(practices) && !includedAttorneys) {
      (async () => {
        const practices = await getPractices();
        const practicesSorted = sortByKey(practices, 'title').filter(
          filterTune,
        );
        setPractices(practicesSorted);
      })();
    }
  }, []);

  return (
    <PracticesContext.Provider value={values}>
      {children}
    </PracticesContext.Provider>
  );
};
