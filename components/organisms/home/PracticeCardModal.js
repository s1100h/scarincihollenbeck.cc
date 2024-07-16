import Link from 'next/link';
import React from 'react';

import {
  PracticeCardButton,
  PracticeCardContent,
  PracticeCardFooter,
  PracticeCardFooterItem,
  PracticeCardHeader,
  PracticeCardIcon,
  PracticeCardList,
  PracticeCardListItem,
  PracticeCardListLink,
  PracticeCardTitle,
  PracticeCardWrapper,
} from 'styles/PracticeCard.style';
import { getIcon } from 'utils/helpers';
import empty from 'is-empty';

const PracticeCardModal = ({
  icon,
  title,
  list,
  link = '#',
  handleModalOpener,
}) => (
  <PracticeCardWrapper className="light-scrollbar">
    <PracticeCardContent>
      <PracticeCardHeader>
        <PracticeCardIcon className="icon">{getIcon(icon)}</PracticeCardIcon>

        <PracticeCardTitle>{title}</PracticeCardTitle>
      </PracticeCardHeader>

      {!empty(list) && (
        <PracticeCardList>
          {list.map((item) => (
            <PracticeCardListItem key={item?.databaseId}>
              <PracticeCardListLink href={item?.uri}>
                {item?.title}
              </PracticeCardListLink>
            </PracticeCardListItem>
          ))}
        </PracticeCardList>
      )}
    </PracticeCardContent>

    <PracticeCardFooter>
      <PracticeCardFooterItem>
        <PracticeCardButton href={link} as={Link} className="footer-action">
          View practice
        </PracticeCardButton>
      </PracticeCardFooterItem>
      <PracticeCardFooterItem>
        <PracticeCardButton
          className="footer-action"
          onClick={handleModalOpener}
        >
          Free consultation
        </PracticeCardButton>
      </PracticeCardFooterItem>
    </PracticeCardFooter>
  </PracticeCardWrapper>
);

export default PracticeCardModal;
