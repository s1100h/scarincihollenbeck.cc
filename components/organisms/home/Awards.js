import Link from 'next/link';
import { AwardsHeader, AwardsHolder, AwardsWrapper } from 'styles/Awards.style';
import { StandardLightBlueButton } from 'styles/Buttons.style';
import { ContainerDefault } from 'styles/Containers.style';
import dynamic from 'next/dynamic';
import React from 'react';
import { TitleH2 } from 'styles/common/Typography.style';
import empty from 'is-empty';

const AwardsSlider = dynamic(() => import('components/molecules/home/AwardsSlider'));

const Awards = ({ awards, anchorId }) => {
  if (empty(awards)) return null;

  return (
    <AwardsWrapper id={anchorId} data-testid="awards" className="margin-scroll">
      <ContainerDefault>
        <AwardsHolder>
          <AwardsHeader>
            <TitleH2 $isWhite>Awards / Accolades</TitleH2>

            <StandardLightBlueButton as={Link} href="/awards">
              Award Methodology
            </StandardLightBlueButton>
          </AwardsHeader>

          <AwardsSlider items={awards} />
        </AwardsHolder>
      </ContainerDefault>
    </AwardsWrapper>
  );
};

export default Awards;
