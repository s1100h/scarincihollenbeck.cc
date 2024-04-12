import AwardsSlider from 'components/molecules/home/AwardsSlider';
import Link from 'next/link';
import { AwardsContainer, TitleBlock } from 'styles/Awards.style';
import { RedButtonLink } from 'styles/Buttons.style';
import { formatSrcToCloudinaryUrl } from 'utils/helpers';

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
    <section className="wrapper-section">
      <TitleBlock>
        <h2>AWARDS & ACCOLADES</h2>
        <Link href="/awards" passHref legacyBehavior>
          <RedButtonLink>Award Methodology</RedButtonLink>
        </Link>
      </TitleBlock>
      <AwardsContainer>
        <AwardsSlider images={formattedAwards} />
        <p className="slider-warning">
          No aspect of the advertisement has been approved by the Supreme Court
        </p>
      </AwardsContainer>
    </section>
  );
};

export default Awards;
