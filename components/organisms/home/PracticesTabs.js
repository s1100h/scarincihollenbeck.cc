import React, { useState } from 'react';
import {
  PracticesTabsCards,
  PracticesTabsModalWrapper,
  PracticesTabsOpener,
  PracticesTabsOpeners,
  PracticesTabsWrapper,
} from 'styles/PracticesTabs.style';
import empty from 'is-empty';
import { motion } from 'framer-motion';
import ModalWindow from 'components/common/ModalWindow';
import {
  PracticeCardContent,
  PracticeCardHeader,
  PracticeCardTitle,
} from 'styles/PracticeCard.style';
import ContactForm from 'components/shared/ContactForm/ContactForm';
import PracticeCard from './PracticeCard';

const PracticesTabs = ({ groupsPractices }) => {
  const groupsWithChildren = groupsPractices?.filter(
    (group) => !empty(group?.practices),
  );
  const [activeTab, setActiveTab] = useState(0);
  const [isShowContactModal, setIsShowContactModal] = useState(false);

  const handleClickTab = (index) => {
    setActiveTab(index);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <PracticesTabsWrapper>
      <PracticesTabsOpeners>
        {groupsWithChildren?.map((group, index) => (
          <PracticesTabsOpener
            key={`${group?.groupPractices}-group-practices`}
            className={activeTab === index ? 'active' : ''}
            onClick={() => handleClickTab(index)}
          >
            {group?.groupPractices}
          </PracticesTabsOpener>
        ))}
      </PracticesTabsOpeners>

      <PracticesTabsCards>
        {groupsWithChildren[activeTab]?.practices?.map((practice, index) => (
          <motion.div
            key={practice?.databaseId}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <PracticeCard
              key={practice?.databaseId}
              icon={groupsWithChildren[activeTab]?.groupIcon}
              title={practice?.title}
              link={practice?.uri}
              text={practice?.practicesIncluded?.description}
              list={practice?.practicesIncluded?.childPractice}
              setIsShowContactModal={setIsShowContactModal}
            />
          </motion.div>
        ))}
      </PracticesTabsCards>

      <PracticesTabsModalWrapper>
        <ModalWindow
          isOpen={isShowContactModal}
          setOpenModal={setIsShowContactModal}
        >
          <PracticeCardContent className="contact-form-container">
            <PracticeCardHeader>
              <PracticeCardTitle as="p">Let`s get in touch!</PracticeCardTitle>
            </PracticeCardHeader>

            <ContactForm blockName="tabs-contact-form" />
          </PracticeCardContent>
        </ModalWindow>
      </PracticesTabsModalWrapper>
    </PracticesTabsWrapper>
  );
};

export default PracticesTabs;
