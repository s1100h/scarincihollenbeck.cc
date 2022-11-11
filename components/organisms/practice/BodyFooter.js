import React from 'react';
import RelatedAttorneys from 'components/molecules/practice/RelatedAttorneys';
import ClientSlider from 'components/molecules/practice/ClientSlider';

const BodyFooter = ({
  attorneyList, highlightReal, chair, handleLink,
}) => (
  <>
    {attorneyList.length > 0 && (
      <RelatedAttorneys
        members={attorneyList}
        chair={chair}
        handleLink={handleLink}
        title="Chair"
      />
    )}
    {highlightReal.length > 0 && (
      <div className="mt-5">
        <h3 className="my-4">Representative Clients</h3>
        <ClientSlider content={highlightReal} />
      </div>
    )}
  </>
);

export default BodyFooter;
