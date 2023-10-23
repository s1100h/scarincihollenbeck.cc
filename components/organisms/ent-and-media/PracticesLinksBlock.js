import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ContainerContent } from 'styles/practices-special-style/commonForSpecial.style';
import {
  PracticesContent,
  PracticesImage,
  PracticesLinks,
  PracticesPreview,
  PracticesSection,
  PracticesTitle,
} from 'styles/practices-special-style/ent-adn-media/PracticesLinksBlock';

const PracticesLinksBlock = ({ practices, practicesFooterImage }) => (
  <PracticesSection>
    <ContainerContent>
      <PracticesContent>
        <PracticesPreview>
          <PracticesTitle>Practices</PracticesTitle>
          <PracticesImage>
            <Image
              src={practicesFooterImage?.sourceUrl}
              alt={practicesFooterImage?.altText}
              width={practicesFooterImage?.width}
              height={practicesFooterImage?.height}
            />
          </PracticesImage>
        </PracticesPreview>
        <PracticesLinks>
          {practices.map(({ databaseId, title, uri }) => (
            <li key={databaseId}>
              <Link href={uri}>{title}</Link>
            </li>
          ))}
        </PracticesLinks>
      </PracticesContent>
    </ContainerContent>
  </PracticesSection>
);

export default PracticesLinksBlock;
