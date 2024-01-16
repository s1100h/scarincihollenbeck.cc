import React, { createContext, useEffect, useState } from 'react';
import empty from 'is-empty';
import { getOfficesData } from '../requests/getOfficesData';

export const LocationContext = createContext(null);

export const LocationProvider = ({ children }) => {
  const [locations, setLocations] = useState();

  const values = { locations, setLocations };

  useEffect(() => {
    if (empty(locations)) {
      (async () => {
        setLocations(await getOfficesData());
      })();
    }
  }, []);

  return (
    <LocationContext.Provider value={values}>
      {children}
    </LocationContext.Provider>
  );
};
