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
  AboutTitle,
} from 'styles/AboutFirm.style';
import { ContainerDefault } from 'styles/Containers.style';
import Image from 'next/image';
import LogoSeparator from 'components/common/LogoSeparator';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';

const AboutFirm = ({
  title,
  heroProfileLink,
  aboutHero,
  arcticle,
  heroPhoto,
}) => (
  <AboutSection>
    <ContainerDefault>
      <AboutBlocks>
        <AboutBlock>
          <AboutTitle>{title}</AboutTitle>
          <AboutDescription>
            <JSXWithDynamicLinks HTML={arcticle} />
          </AboutDescription>
        </AboutBlock>
        <LogoSeparator />
        <AboutBlock>
          <AboutCard>
            <AboutCardImage>
              <Image
                src={heroPhoto?.sourceUrl}
                width={280}
                height={374}
                alt={heroPhoto?.altText}
              />
            </AboutCardImage>
            <AboutCardContent>
              <AboutCardDescription>
                {aboutHero.split('\n').map((paragraph, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <p key={`${aboutHero}-${index}`}>{paragraph}</p>
                ))}
              </AboutCardDescription>

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
