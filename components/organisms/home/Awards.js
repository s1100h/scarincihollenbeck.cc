import Link from 'next/link';
import {
  AwardsHeader,
  AwardsHolder,
  AwardsTitle,
  AwardsWrapper,
} from 'styles/Awards.style';
import { StandardLightBlueButton } from 'styles/Buttons.style';
import { formatSrcToCloudinaryUrl } from 'utils/helpers';
import { ContainerDefault } from 'styles/Containers.style';
import dynamic from 'next/dynamic';
import React from 'react';

const AwardsSlider = dynamic(
  () => import('components/molecules/home/AwardsSlider'),
  {
    ssr: false,
  },
);

const Awards = React.memo(({ awards }) => {
  const formattedAwards = awards
    ?.map(
      ({
        appearanceOrder,
        imageHeight,
        imageWidth,
        label,
        awardImage,
        year,
      }) => ({
        id: label,
        order: appearanceOrder,
        year,
        label,
        image: {
          src: formatSrcToCloudinaryUrl(awardImage.sourceUrl),
          alt: label,
          width: imageWidth,
          height: imageHeight,
        },
      }),
    )
    .sort((a, b) => (a.order > b.order ? 1 : -1));

  return (
    <AwardsWrapper data-testid="awards">
      <ContainerDefault>
        <AwardsHolder>
          <AwardsHeader>
            <AwardsTitle>Awards / Accolades</AwardsTitle>

            <StandardLightBlueButton as={Link} href="/awards">
              Award Methodology
            </StandardLightBlueButton>
          </AwardsHeader>

          <AwardsSlider items={formattedAwards} />
        </AwardsHolder>
      </ContainerDefault>
    </AwardsWrapper>
  );
});

export default Awards;
