import { createContext, useEffect, useState } from 'react';
import empty from 'is-empty';
import decodeResponse from 'utils/decodeResponse';

export const PracticesContext = createContext(null);

export const PracticesContextProvider = ({ children, includedAttorneys }) => {
  const [practices, setPractices] = useState([]);
  const values = { practices, setPractices };

  useEffect(() => {
    const fetchData = async () => {
      const practices = await fetch('/api/revalidate-practices');
      const resDecoded = await decodeResponse(practices);
      if (!empty(resDecoded?.data)) {
        setPractices(resDecoded?.data);
      }
    };

    if (empty(practices) && !includedAttorneys) {
      fetchData();
    }
  }, []);

  return (
    <PracticesContext.Provider value={values}>
      {children}
    </PracticesContext.Provider>
  );
};
