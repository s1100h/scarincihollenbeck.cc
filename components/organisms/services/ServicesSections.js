import React from 'react';
import empty from 'is-empty';
import { ServicesLinksSections } from 'styles/services/ServicesBlock.style';
import ServicesLinksSection from './ServicesLinksSection';

const ServicesSections = ({ practices }) => {
  if (empty(practices)) return null;
  return (
    <ServicesLinksSections>
      {practices.map((practice) => (
        <ServicesLinksSection
          key={practice?.databaseId}
          title={practice?.title}
          links={practice?.childPractice}
          anchorId={`${practice?.databaseId}`}
        />
      ))}
    </ServicesLinksSections>
  );
};

export default ServicesSections;
