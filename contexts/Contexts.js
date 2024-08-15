import React from 'react';
import { LocationProvider } from './LocationContext';
import { FormContextProvider } from './FormsContext';
import { PracticesContextProvider } from './PracticesContext';
import { SizesProvider } from './SizesContext';

const Contexts = ({ children }) => (
  <SizesProvider>
    <LocationProvider>
      <FormContextProvider>
        <PracticesContextProvider>{children}</PracticesContextProvider>
      </FormContextProvider>
    </LocationProvider>
  </SizesProvider>
);

export default Contexts;
