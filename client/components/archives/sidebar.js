import TrendingStories from 'components/trending-stories';
import Search from '../search';
import AboutFirm from '../about-firm';

export default function ArchivesSideBar({ trending }) {
  return (
    <div>
      <Search />
      <AboutFirm />
      <TrendingStories title="Trending Stories" content={trending} />
    </div>
  );
}
