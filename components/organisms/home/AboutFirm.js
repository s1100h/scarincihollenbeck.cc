import {
  AboutBlock,
  AboutBlocks,
  AboutCard,
  AboutCardContent,
  AboutCardDescription,
  AboutCardImage,
  AboutCardTitle,
  AboutDescription,
  AboutSection,
} from 'styles/AboutFirm.style';
import { ContainerDefault } from 'styles/Containers.style';
import Image from 'next/image';
import LogoSeparator from 'components/common/LogoSeparator';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import empty from 'is-empty';
import { TitleH2 } from 'styles/common/Typography.style';

const AboutFirm = ({
  title,
  heroProfileLink = {
    url: '/attorneys',
    title: 'attorneys',
  },
  aboutHero,
  arcticle,
  heroPhoto,
}) => (
  <AboutSection data-testid="who-we-are">
    <ContainerDefault>
      <AboutBlocks>
        <AboutBlock>
          <TitleH2 $isWhite>{title}</TitleH2>
          {!empty(arcticle) && (
            <AboutDescription>
              <JSXWithDynamicLinks HTML={arcticle} />
            </AboutDescription>
          )}
        </AboutBlock>
        <LogoSeparator />
        <AboutBlock>
          <AboutCard>
            {heroPhoto && (
              <AboutCardImage>
                <Image
                  src={heroPhoto?.sourceUrl}
                  width={280}
                  height={420}
                  alt={heroPhoto?.altText || 'image'}
                  sizes="(max-width: 576px) 100vw, 280px"
                />
              </AboutCardImage>
            )}
            <AboutCardContent>
              {!empty(aboutHero) && (
                <AboutCardDescription>
                  <JSXWithDynamicLinks HTML={aboutHero} />
                </AboutCardDescription>
              )}

              <AboutCardTitle href={heroProfileLink?.url}>
                {heroProfileLink?.title}
              </AboutCardTitle>
            </AboutCardContent>
          </AboutCard>
        </AboutBlock>
      </AboutBlocks>
    </ContainerDefault>
  </AboutSection>
);

export default AboutFirm;
