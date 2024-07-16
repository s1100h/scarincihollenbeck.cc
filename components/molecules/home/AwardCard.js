import Image from 'next/image';
import React from 'react';
import {
  AwardCardContent,
  AwardCardImage,
  AwardCardWrapper,
} from 'styles/Awards.style';

const AwardCard = ({ image, label, year }) => (
  <AwardCardWrapper>
    <AwardCardImage>
      <Image
        src={image?.src}
        alt={image?.alt}
        width={image?.width}
        height={image?.height}
        loading="lazy"
      />
    </AwardCardImage>

    <AwardCardContent>
      <p title={label}>{label}</p>
      <span>{year}</span>
    </AwardCardContent>
  </AwardCardWrapper>
);

export default AwardCard;
