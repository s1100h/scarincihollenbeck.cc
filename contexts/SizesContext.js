import React, { createContext, useState } from 'react';

export const SizesContext = createContext(null);

export const SizesProvider = ({ children }) => {
  const [headerSize, setHeaderSize] = useState({ width: 0, height: 0 });

  const values = { headerSize, setHeaderSize };
  return (
    <SizesContext.Provider value={values}>{children}</SizesContext.Provider>
  );
};
