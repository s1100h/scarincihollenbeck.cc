import React, { createContext, useState } from 'react';

export const HeaderSizeContext = createContext(null);

export const HeaderSizeProvider = ({ children }) => {
  const [headerSize, setHeaderSize] = useState({ width: 0, height: 0 });

  const values = { headerSize, setHeaderSize };
  return (
    <HeaderSizeContext.Provider value={values}>
      {children}
    </HeaderSizeContext.Provider>
  );
};
