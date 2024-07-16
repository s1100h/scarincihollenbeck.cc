import React, { useState } from 'react';
import {
  PracticesTabsCards,
  PracticesTabsOpener,
  PracticesTabsOpeners,
  PracticesTabsWrapper,
} from 'styles/PracticesTabs.style';
import empty from 'is-empty';
import { motion } from 'framer-motion';
import PracticeCard from './PracticeCard';

const PracticesTabs = ({ groupsPractices }) => {
  const groupsWithChildren = groupsPractices?.filter(
    (group) => !empty(group?.practices),
  );
  const [activeTab, setActiveTab] = useState(0);

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
              databaseId={practice?.databaseId}
              icon={groupsWithChildren[activeTab]?.groupIcon}
              title={practice?.title}
              link={practice?.uri}
              text={practice?.practicesIncluded?.description}
              list={practice?.practicesIncluded?.childPractice}
            />
          </motion.div>
        ))}
      </PracticesTabsCards>
    </PracticesTabsWrapper>
  );
};

export default PracticesTabs;
