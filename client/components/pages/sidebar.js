import Search from 'components/search';
import TrendingStories from 'components/trending-stories';
import SubscriptionMessage from 'components/subscription-message';

export default function CovidSidebar({ posts, covidPage }) {
  return (
    <>
      <Search />
      <TrendingStories
        title={covidPage ? 'Current Covid-19 News' : 'Trending Stories'}
        content={posts}
      />
      <SubscriptionMessage />
    </>
  );
}
