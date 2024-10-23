import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  PracticeCardButton,
  PracticeCardContent,
  PracticeCardDescription,
  PracticeCardFooter,
  PracticeCardFooterItem,
  PracticeCardHeader,
  PracticeCardIcon,
  PracticeCardTitle,
  PracticeCardWrapper,
} from 'styles/PracticeCard.style';
import { getIcon } from 'utils/helpers';
import empty from 'is-empty';
import ModalWindow from 'components/common/ModalWindow';
import { PracticesTabsModalWrapper } from 'styles/PracticesTabs.style';
import PracticeCardModal from './PracticeCardModal';

const PracticeCard = ({
  icon,
  title,
  text,
  link = '#',
  list,
  setIsShowContactModal,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleContactModalOpener = () => {
    if (showModal) {
      setShowModal(false);
    }
    setIsShowContactModal(true);
  };

  return (
    <PracticeCardWrapper>
      <PracticeCardContent>
        <PracticeCardHeader>
          <PracticeCardIcon className="icon">{getIcon(icon)}</PracticeCardIcon>

          <PracticeCardTitle>{title}</PracticeCardTitle>
        </PracticeCardHeader>

        {!empty(text) && (
          <PracticeCardDescription>
            <JSXWithDynamicLinks HTML={text} />
          </PracticeCardDescription>
        )}
      </PracticeCardContent>

      <PracticeCardFooter>
        <PracticeCardFooterItem>
          <PracticeCardButton href={link} as={Link} className="footer-action">
            View practice
          </PracticeCardButton>
        </PracticeCardFooterItem>

        <PracticeCardFooterItem>
          {!empty(list) ? (
            <PracticeCardButton
              className="footer-action"
              onClick={() => setShowModal(true)}
            >
              View services
            </PracticeCardButton>
          ) : (
            <PracticeCardButton
              className="footer-action"
              onClick={handleContactModalOpener}
            >
              Free consultation
            </PracticeCardButton>
          )}
        </PracticeCardFooterItem>

        {!empty(list) && (
          <PracticesTabsModalWrapper>
            <ModalWindow isOpen={showModal} setOpenModal={setShowModal}>
              <PracticeCardModal
                icon={icon}
                title={title}
                list={list}
                link={link}
                handleModalOpener={handleContactModalOpener}
              />
            </ModalWindow>
          </PracticesTabsModalWrapper>
        )}
      </PracticeCardFooter>
    </PracticeCardWrapper>
  );
};

export default PracticeCard;
