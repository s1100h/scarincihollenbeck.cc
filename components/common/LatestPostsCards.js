import React from 'react';
import { LatestPostsCardsWrapper } from 'styles/LatestPosts.style';
import empty from 'is-empty';
import LatestPostsCard from 'components/organisms/home/LatestPostsCard';
import { StandardBlueButton } from 'styles/Buttons.style';
import Link from 'next/link';

const LatestPostsCards = ({
  posts,
  isRenderDiscoveryButton,
  linkDiscovery,
  isBig,
}) => {
  if (empty(posts)) return null;

  return (
    <LatestPostsCardsWrapper>
      <>
        {posts?.map((article, indexChunkArticle) => (
          <LatestPostsCard
            key={article?.databaseId}
            article={article}
            isBig={!!(isBig && indexChunkArticle === 0)}
          />
        ))}
        {isRenderDiscoveryButton && (
          <StandardBlueButton
            as={Link}
            href={linkDiscovery}
            className="discovery-button"
          >
            Discovery more...
          </StandardBlueButton>
        )}
      </>
    </LatestPostsCardsWrapper>
  );
};

export default LatestPostsCards;
