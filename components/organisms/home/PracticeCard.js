import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import Link from 'next/link';
import React, { useState } from 'react';

import {
  PracticeCardButton,
  PracticeCardContactModal,
  PracticeCardContent,
  PracticeCardDescription,
  PracticeCardFooter,
  PracticeCardFooterItem,
  PracticeCardHeader,
  PracticeCardIcon,
  PracticeCardModalsWrapper,
  PracticeCardTitle,
  PracticeCardWrapper,
} from 'styles/PracticeCard.style';
import { getIcon } from 'utils/helpers';
import empty from 'is-empty';
import ModalWindow from 'components/common/ModalWindow';
import ContactForm from 'components/shared/ContactForm/ContactForm';
import PracticeCardModal from './PracticeCardModal';

const PracticeCard = ({
  icon, title, text, link = '#', list,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [childShowModal, setChildShowModal] = useState(false);

  const handleChildModalOpener = () => {
    if (showModal) {
      setShowModal(false);
    }
    setChildShowModal(true);
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
            View practice area
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
              onClick={handleChildModalOpener}
            >
              Book free consultation
            </PracticeCardButton>
          )}
        </PracticeCardFooterItem>

        <PracticeCardModalsWrapper>
          <ModalWindow isOpen={showModal} setOpenModal={setShowModal}>
            <PracticeCardModal
              icon={icon}
              title={title}
              list={list}
              link={link}
              handleModalOpener={handleChildModalOpener}
            />
          </ModalWindow>

          <ModalWindow isOpen={childShowModal} setOpenModal={setChildShowModal}>
            <PracticeCardContent className="contact-form-container">
              <PracticeCardHeader>
                <PracticeCardTitle>Let`s get in touch!</PracticeCardTitle>
              </PracticeCardHeader>

              <ContactForm blockName="practice-card-modal-contact-form" />
            </PracticeCardContent>
          </ModalWindow>
        </PracticeCardModalsWrapper>
      </PracticeCardFooter>
    </PracticeCardWrapper>
  );
};

export default PracticeCard;
