/* eslint-disable max-len */
import React from 'react';

const EEOpportunityContent = () => (
  <div>
    <div className="line-header">
      <h3>EQUAL EMPLOYMENT OPPORTUNITY</h3>
    </div>
    <div className="container article-container mt-4">
      <div className="row">
        <div className="col-sm-12 ft-12">
          <p>Scarinci Hollenbeck is an equal opportunity employer. It is Scarinci Hollenbeck’s policy to consider all applicants for employment solely on the basis of their qualifications for the job without regard to race, color, creed, sex, sexual orientation, gender identity or expression, marital status, age, religion, ancestry, national origin, citizenship, disability, atypical hereditary cellular or blood trait, arrest record, liability for service in the armed forces of the United States or unfavorable military discharge.</p>
          <p>In addition, the Firm attempts to comply with all applicable state and local laws and regulations governing nondiscrimination in employment and employment-related decision making. This policy applies to decisions regarding employment, placement, promotion, termination, layoff, recall, transfer, leave of absence, compensation and training.</p>
          <p>The Firm is committed to making reasonable accommodations upon request to ensure applicants with disabilities can be accepted for employment consistent with their full capabilities.</p>
          <p className="proxima-bold">
            TO READ ABOUT SCARINCI HOLLENBECK’S COMMITMENT TO DIVERSITY,
            {' '}
            <a href={`${window.location.host}/diversity`} className="red-title proxima-bold">
              <u>
                CLICK HERE.
              </u>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default EEOpportunityContent;
