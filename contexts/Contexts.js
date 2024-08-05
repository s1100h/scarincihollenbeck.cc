import React from 'react';
import { AttorneysProvider } from './AttorneysContext';
import { LocationProvider } from './LocationContext';
import { FormContextProvider } from './FormsContext';
import { PracticesContextProvider } from './PracticesContext';
import { SizesProvider } from './SizesContext';

const Contexts = ({ children }) => (
  <SizesProvider>
    <AttorneysProvider>
      <LocationProvider>
        <FormContextProvider>
          <PracticesContextProvider>{children}</PracticesContextProvider>
        </FormContextProvider>
      </LocationProvider>
    </AttorneysProvider>
  </SizesProvider>
);

export default Contexts;
