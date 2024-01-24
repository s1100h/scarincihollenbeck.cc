import React, { createContext, useState } from 'react';

export const FormsContext = createContext(null);

export const FormContextProvider = ({ children }) => {
  const [isCheckedDisclaimer, setCheckDisclaimer] = useState('');

  const handleCheckDisclaimer = (event) => {
    if (typeof event === 'boolean') {
      return setCheckDisclaimer(event);
    }
    setCheckDisclaimer(event);
  };

  const values = {
    handleCheckDisclaimer,
    isCheckedDisclaimer,
  };

  return (
    <FormsContext.Provider value={values}>{children}</FormsContext.Provider>
  );
};
