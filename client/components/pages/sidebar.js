import Search from 'components/search';
import TrendingStories from 'components/trending-stories';
import NonGraphQLTrendingStories from 'components/non-graphql-trending-stories';
import SubscriptionMessage from 'components/subscription-message';

export default function CovidSidebar({ posts, covidPage }) {
  return (
    <>
      <Search />
      {covidPage ? (
        <NonGraphQLTrendingStories
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
