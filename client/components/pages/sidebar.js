import Search from 'components/search';
import TrendingStories from 'components/non-graphql-trending-stories';
import SubscriptionMessage from 'components/subscription-message';

export default function PagesSidebar({ posts, covidPage }) {
  return (
    <>
      <Search />
      {covidPage ? (
        <TrendingStories
          title="Current Covid-19 News"
          content={posts}
        />
      ) : (
        <TrendingStories title="Trending Stories" content={posts} />
      )}
      <br />
      <SubscriptionMessage />
    </>
  );
}
