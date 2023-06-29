import React, { createContext, useState } from 'react';

export const FormsContext = createContext(null);

export const FormContextProvider = ({ children }) => {
  const [isCheckedDisclaimer, setCheckDisclaimer] = useState(false);

  const handleCheckDisclaimer = (event) => {
    if (typeof event === 'boolean') {
      return setCheckDisclaimer(event);
    }
    const isChecked = event.target.checked;
    setCheckDisclaimer(isChecked);
  };

  const values = {
    handleCheckDisclaimer,
    isCheckedDisclaimer,
  };

  return <FormsContext.Provider value={values}>{children}</FormsContext.Provider>;
};
