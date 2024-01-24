import Image from 'next/image';
import React from 'react';
import {
  WhyChooseUsCardContent,
  WhyChooseUsCardImage,
  WhyChooseUsCardWrapper,
} from 'styles/practices/WhyChooseUs.style';

const WhyChooseUsCard = ({ title, text, image }) => (
  <WhyChooseUsCardWrapper>
    <WhyChooseUsCardContent>
      <h4>{title}</h4>
      <p>{text}</p>
    </WhyChooseUsCardContent>
    <WhyChooseUsCardImage>
      <Image
        src={image.src}
        alt={title}
        width={image.width}
        height={image.height}
      />
    </WhyChooseUsCardImage>
  </WhyChooseUsCardWrapper>
);

export default WhyChooseUsCard;
