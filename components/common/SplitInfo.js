import React from 'react';
import { ContainerDefault } from 'styles/Containers.style';
import {
  SplitInfoColumn,
  SplitInfoHolder,
  SplitInfoSection,
} from 'styles/SplitInfo.style';
import LogoSeparator from './LogoSeparator';

const SplitInfo = () => (
  <SplitInfoSection>
    <ContainerDefault>
      <SplitInfoHolder>
        <SplitInfoColumn>
          <p>
            OUR commitment to excellence, combined with our mission to deliver
            outstanding client service, has earned our firm a solid reputation.
          </p>
          <p>
            Scarinci Hollenbeck is a business law firm based in New Jersey, New
            York, and Washington, D.C servicing clients worldwide.
          </p>
          <p>
            Regardless of the size of your business or the scale of the project,
            we embrace the unique complexity that comes with doing business in
            an evolving economy. Contact us today to learn more about how we can
            assist you.
          </p>
          <p>
            Our focus is niche areas of law most often required by corporate
            entities, owners, leaders, and operators. Our prestigious roster of
            attorneys offers the experience and proven results that businesses
            need to move projects forward.
          </p>
        </SplitInfoColumn>

        <LogoSeparator />

        <SplitInfoColumn className="info-bg">
          <p>
            Scarinci Hollenbeck also offers services in a wide range of other
            legal practice areas not listed here. If you have a legal need that
            is not mentioned, please contact us to discuss how we may help you.
            Our experienced attorneys are ready to provide the quality
            representation you deserve.
          </p>

          <p>Contact us today to learn more about how we can assist you.</p>
        </SplitInfoColumn>
      </SplitInfoHolder>
    </ContainerDefault>
  </SplitInfoSection>
);

export default SplitInfo;
