import React from 'react';
import RelatedAttorneys from 'components/molecules/practice/RelatedAttorneys';
import ClientSlider from 'components/molecules/practice/ClientSlider';
import lineStyles from 'styles/LineHeader.module.css';

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
        <div className={`${lineStyles.lineHeader} my-4`}>
          <h3>Representative Clients</h3>
        </div>
        <ClientSlider content={highlightReal} />
      </div>
    )}
  </>
);

export default BodyFooter;
