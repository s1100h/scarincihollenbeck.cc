import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import React from 'react';

const ServicesPage = ({
  title, content, industries, practices,
}) => (
  <>
    <SubHeaderDefault
      title={title}
      subtitle={content?.description}
      backgroundImage={content?.pageImage?.sourceUrl}
      industries={industries}
      customClass="sub-header sub-header--slider"
    />
  </>
);

export default ServicesPage;
