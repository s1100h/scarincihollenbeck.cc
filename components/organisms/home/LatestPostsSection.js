import DisclaimerText from 'components/atoms/DisclaimerText';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { useState } from 'react';
import { StandardBlueButton } from 'styles/Buttons.style';
import { ContainerDefault } from 'styles/Containers.style';
import {
  LatestPostsContent,
  LatestPostsHeader,
  LatestPostsHolder,
  LatestPostsTab,
  LatestPostsTabs,
  LatestPostsWrapper,
} from 'styles/LatestPosts.style';
import { TitleH2 } from 'styles/common/Typography.style';
import { latestPostTabs } from 'utils/constants';

const LatestPostsSlider = dynamic(() => import('./LatestPostsSlider'));

const LatestPostsSection = ({ tabsData }) => {
  const [activeTabId, setActiveTabId] = useState(latestPostTabs[0]?.id);
  const activeTabData = tabsData?.[activeTabId];

  return (
    <LatestPostsWrapper data-testid="latest-posts">
      <ContainerDefault>
        <LatestPostsHolder>
          <LatestPostsHeader>
            <TitleH2>Latest from the firm</TitleH2>

            <StandardBlueButton href="/library/category/client-alert" as={Link}>
              Open library
            </StandardBlueButton>
          </LatestPostsHeader>

          <LatestPostsTabs>
            {latestPostTabs?.map((tab) => (
              <LatestPostsTab
                key={`${tab?.label}-latest-posts-tab`}
                className={activeTabId === tab?.id ? 'active' : ''}
                onClick={() => setActiveTabId(tab?.id)}
              >
                {tab?.label}
              </LatestPostsTab>
            ))}
          </LatestPostsTabs>

          <AnimatePresence exitBeforeEnter>
            <LatestPostsContent
              key={`${activeTabId}-slider`}
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LatestPostsSlider
                activeTabData={activeTabData}
                activeTabId={activeTabId}
              />
            </LatestPostsContent>
          </AnimatePresence>

          <DisclaimerText text="No aspect of the advertisement has been approved by the Supreme Court. Results may vary depending on your particular facts and legal circumstances." />
        </LatestPostsHolder>
      </ContainerDefault>
    </LatestPostsWrapper>
  );
};

export default LatestPostsSection;
