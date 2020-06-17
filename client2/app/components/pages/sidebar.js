import Search from '../Search';
import TrendingStories from '../trending-stories';
import SubscriptionMessage from '../subscription-message';

export default function Sidebar(props) {
  const { posts, covidPage } = props;

  return (
    <>
      <Search />
      <TrendingStories title={(covidPage) ? 'Current Covid-19 News' : 'Trending Stories'} content={posts} />
      <SubscriptionMessage />
    </>
  )

}