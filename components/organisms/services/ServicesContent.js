import React from 'react';
import { ContainerDefault } from 'styles/Containers.style';
import {
  ServicesContentHolder,
  ServicesContentWrapper,
} from 'styles/services/ServicesContent.style';
import ServicesSections from './ServicesSections';
import ServicesSidebar from './ServicesSidebar';

const ServicesContent = ({ practices, industries }) => (
  <ServicesContentWrapper>
    <ContainerDefault>
      <ServicesContentHolder>
        <ServicesSidebar industries={industries} practices={practices} />

        <ServicesSections practices={practices} />
      </ServicesContentHolder>
    </ContainerDefault>
  </ServicesContentWrapper>
);

export default ServicesContent;
