import React, { createContext, useState } from 'react';

export const LocationContextHome = createContext(null);

export const LocationProvidertHome = ({ children }) => {
  const [locations, setLocations] = useState();
  const values = { locations, setLocations };

  return <LocationContextHome.Provider value={values}>{children}</LocationContextHome.Provider>;
};
