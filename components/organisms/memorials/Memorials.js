import React from 'react';
import { ContainerDefault } from 'styles/Containers.style';
import { MemorialsSection } from 'styles/Memorials.style';
import MemorialsCards from './MemorialsCards';

const Memorials = ({ memorials }) => {
  if (!memorials) return null;
  return (
    <MemorialsSection>
      <ContainerDefault>
        <MemorialsCards memorials={memorials} />
      </ContainerDefault>
    </MemorialsSection>
  );
};

export default Memorials;
