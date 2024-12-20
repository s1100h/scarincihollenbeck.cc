import React from 'react';
import empty from 'is-empty';
import Link from 'next/link';
import {
  ServicesLinksBlock,
  ServicesLinksList,
  ServicesLinksListItem,
} from 'styles/services/ServicesBlock.style';
import { Title32 } from 'styles/common/Typography.style';

const ServicesLinksSection = ({ title, links, anchorId }) => {
  if (empty(links)) return null;
  return (
    <ServicesLinksBlock id={anchorId}>
      {!empty(title) && <Title32>{title}</Title32>}
      <ServicesLinksList>
        {links.map((link) => (
          <ServicesLinksListItem key={link?.databaseId}>
            <Link href={link?.uri}>{link?.title}</Link>
          </ServicesLinksListItem>
        ))}
      </ServicesLinksList>
    </ServicesLinksBlock>
  );
};

export default ServicesLinksSection;
