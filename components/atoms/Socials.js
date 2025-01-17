import React from 'react';
import {
  SocialsContainer,
  SocialsHr,
  SocialsLabel,
  SocialsLink,
  SocialsLinks,
} from 'styles/Socials.style';
import { SOCIAL_LINKS } from 'utils/constants';
import CopyUrl from './CopyUrl';

const Socials = ({ label = 'Follow us' }) => (
  <SocialsContainer>
    <SocialsHr />

    <SocialsLabel>{label}</SocialsLabel>
    <SocialsLinks>
      {SOCIAL_LINKS.map((item) => (
        <SocialsLink
          aria-label={item?.title}
          key={item?.id}
          href={item?.url}
          target="_blank"
          rel="noreferrer"
          className={`social social--${item?.id}`}
        >
          {item?.icon}
        </SocialsLink>
      ))}
      <CopyUrl />
    </SocialsLinks>
  </SocialsContainer>
);

export default Socials;
