import DisclaimerText from 'components/atoms/DisclaimerText';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';
import { StandardBlueButton } from 'styles/Buttons.style';
import { ContainerDefault } from 'styles/Containers.style';
import {
  LatestPostsHeader,
  LatestPostsHolder,
  LatestPostsWrapper,
} from 'styles/LatestPosts.style';
import { TitleH2 } from 'styles/common/Typography.style';
import empty from 'is-empty';

const LatestPostsTabsRender = dynamic(() => import('./LatestPostsTabsRender'));
const LatestPostsCards = dynamic(() => import('components/common/LatestPostsCards'));

const LatestPostsSection = ({ tabsData, posts }) => {
  if (empty(tabsData) && empty(posts)) return null;

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

          {!empty(tabsData) ? (
            <LatestPostsTabsRender tabsData={tabsData} />
          ) : (
            <LatestPostsCards posts={posts} />
          )}

          <DisclaimerText text="No aspect of the advertisement has been approved by the Supreme Court. Results may vary depending on your particular facts and legal circumstances." />
        </LatestPostsHolder>
      </ContainerDefault>
    </LatestPostsWrapper>
  );
};

export default LatestPostsSection;
