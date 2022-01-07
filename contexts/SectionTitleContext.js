import React, { createContext, useState } from 'react';

export const SectionTitleContext = createContext(null);

export const SectionTitleProvider = ({ children }) => {
  const [titles, setTitles] = useState();
  const values = { titles, setTitles };

  return <SectionTitleContext.Provider value={values}>{children}</SectionTitleContext.Provider>;
};
