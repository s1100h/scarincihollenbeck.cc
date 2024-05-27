import React, { createContext, useEffect, useState } from 'react';
import empty from 'is-empty';
import decodeResponse from 'utils/decodeResponse';

export const LocationContext = createContext(null);

export const LocationProvider = ({ children }) => {
  const [locations, setLocations] = useState();

  const values = { locations, setLocations };

  useEffect(() => {
    const fetchData = async () => {
      const locations = await fetch('/api/revalidate-locations');
      const resDecoded = await decodeResponse(locations);

      if (!empty(resDecoded?.data)) {
        setLocations(resDecoded?.data);
      }
    };

    if (empty(locations)) {
      fetchData();
    }
  }, []);

  return (
    <LocationContext.Provider value={values}>
      {children}
    </LocationContext.Provider>
  );
};
