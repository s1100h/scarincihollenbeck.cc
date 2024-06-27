import React from 'react';
import { AttorneysProvider } from './AttorneysContext';
import { LocationProvider } from './LocationContext';
import { FormContextProvider } from './FormsContext';
import { PracticesContextProvider } from './PracticesContext';
import { HeaderSizeProvider } from './HeaderSizeContext';

const Contexts = ({ children }) => (
  <HeaderSizeProvider>
    <AttorneysProvider>
      <LocationProvider>
        <FormContextProvider>
          <PracticesContextProvider>{children}</PracticesContextProvider>
        </FormContextProvider>
      </LocationProvider>
    </AttorneysProvider>
  </HeaderSizeProvider>
);

export default Contexts;
