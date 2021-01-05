import TrendingStories from 'components/non-graphql-trending-stories';
import Search from 'components/search';
import AboutFirm from 'components/about-firm';

export default function ArchivesSideBar({ trending }) {
  return (
    <div>
      <Search />
      <AboutFirm />
      <TrendingStories title="Trending Stories" content={trending} />
    </div>
  );
}
