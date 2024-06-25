import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import Image from 'next/image';
import React from 'react';
import {
  TileContactBody,
  TileContactHeader,
  TileContactIcon,
  TileContactTitle,
  TileContactWrapper,
} from 'styles/ContactUs.style';
import empty from 'is-empty';

const TileContact = ({
  title, textContent, icon, image = '', alt = '',
}) => (
  <TileContactWrapper>
    <TileContactHeader>
      {!empty(icon) && <TileContactIcon>{icon}</TileContactIcon>}
      {!empty(title) && <TileContactTitle>{title}</TileContactTitle>}
    </TileContactHeader>

    <TileContactBody>
      {!empty(textContent) && (
        <p>
          <JSXWithDynamicLinks HTML={textContent} />
        </p>
      )}

      {!empty(image) && (
        <Image
          src={image}
          alt={title || alt}
          blurDataURL={image}
          width={700}
          height={300}
        />
      )}
    </TileContactBody>
  </TileContactWrapper>
);

export default TileContact;
