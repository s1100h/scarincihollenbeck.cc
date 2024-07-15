import AwardsSlider from 'components/molecules/home/AwardsSlider';
import Link from 'next/link';
import {
  AwardsContainer,
  AwardsSection,
  TitleBlock,
} from 'styles/Awards.style';
import { RedButtonLink } from 'styles/Buttons.style';
import { formatSrcToCloudinaryUrl } from 'utils/helpers';
import DisclaimerText from '../../atoms/DisclaimerText';
import { ContainerDefault } from '../../../styles/Containers.style';

const Awards = ({ awards }) => {
  const formattedAwards = awards
    .map(({
      appearanceOrder, imageHeight, imageWidth, label, awardImage,
    }) => ({
      id: label,
      order: appearanceOrder,
      image: {
        src: formatSrcToCloudinaryUrl(awardImage.sourceUrl),
        alt: label,
        width: imageWidth,
        height: imageHeight,
      },
    }))
    .sort((a, b) => (a.order > b.order ? 1 : -1));

  return (
    <AwardsSection>
      <ContainerDefault>
        <TitleBlock>
          <h2>Awards / Accolades</h2>
          <Link href="/awards" passHref legacyBehavior>
            <RedButtonLink>Award Methodology</RedButtonLink>
          </Link>
        </TitleBlock>
        <AwardsContainer>
          <AwardsSlider images={formattedAwards} />
          <DisclaimerText text="No aspect of the advertisement has been approved by the Supreme Court." />
        </AwardsContainer>
      </ContainerDefault>
    </AwardsSection>
  );
};

export default Awards;
