import React, { useCallback, useState } from 'react';
import {
  PracticesTabsCards,
  PracticesTabsOpener,
  PracticesTabsOpeners,
  PracticesTabsWrapper,
} from 'styles/PracticesTabs.style';
import empty from 'is-empty';
import { motion } from 'framer-motion';
import Loader from 'components/atoms/Loader';
import { createOverviewLinks } from 'utils/helpers';
import { BASE_API_URL } from 'utils/constants';
import FilterResult from '../attorneys/FilterResult';

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

const PracticesTabs = ({ practices, isLoadingPractices }) => {
  if (empty(practices) && !isLoadingPractices) return null;
  const [activeTab, setActiveTab] = useState(0);
  const practicesWithChildren = createOverviewLinks(practices?.data, true);
  const activeTabData = practicesWithChildren?.[activeTab];
  const activeTabItems = activeTabData?.childPractice;
  const activeTabIcon = activeTabData?.practiceIcon?.sourceUrl.replace(
    BASE_API_URL,
    '/proxy-image',
  );

  const handleClickTab = useCallback(
    (index) => {
      setActiveTab(index);
    },
    [setActiveTab],
  );

  if (isLoadingPractices) {
    return <Loader />;
  }

  return (
    <PracticesTabsWrapper
      data-testid="practices-tabs"
      className="light-scrollbar"
    >
      <PracticesTabsOpeners>
        {practicesWithChildren?.map((group, index) => (
          <PracticesTabsOpener
            key={`${group?.title}-group-practice`}
            className={activeTab === index ? 'active' : ''}
            onClick={() => handleClickTab(index)}
          >
            {group?.title}
          </PracticesTabsOpener>
        ))}
      </PracticesTabsOpeners>

      {!empty(activeTabItems) && (
        <PracticesTabsCards>
          {activeTabItems?.map((practice, index) => (
            <motion.div
              key={`${practice?.databaseId}-${activeTab}`}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <FilterResult
                link={practice?.uri}
                name={practice?.title}
                titleTag="h3"
                image={activeTabIcon}
              />
            </motion.div>
          ))}
        </PracticesTabsCards>
      )}
    </PracticesTabsWrapper>
  );
};

export default PracticesTabs;
