import Image from 'next/image';
import React from 'react';
import {
  AwardCardContent,
  AwardCardImage,
  AwardCardWrapper,
} from 'styles/Awards.style';
import empty from 'is-empty';
import Link from 'next/link';

const AwardCard = ({
  image, label, year, link, isLightVariant,
}) => (
  <AwardCardWrapper
    as={!empty(link) && Link}
    href={!empty(link) ? link : undefined}
    target={!empty(link) && link.includes('https') ? '_blank' : undefined}
    $isLink={!empty(link)}
    $isLightVariant={isLightVariant}
  >
    <AwardCardImage>
      <Image
        src={image?.src}
        alt={image?.alt}
        width={200}
        height={200}
        loading="lazy"
        quality={60}
        sizes="(max-width: 768px) 144px, 200px"
      />
    </AwardCardImage>

    {(!empty(label) || !empty(year)) && (
      <AwardCardContent $isLightVariant={isLightVariant}>
        {!empty(label) && <p title={label}>{label}</p>}
        {!empty(year) && <span>{year}</span>}
      </AwardCardContent>
    )}
  </AwardCardWrapper>
);

export default AwardCard;
