import Search from '../search';
import AboutFirm from '../about-firm';
import TrendingStories from '../trending-stories';

export default function ArchivesSideBar({ trending }) {
  return (
    <div>
      <Search />
      <AboutFirm />
      <TrendingStories title="Trending Stories" content={trending} />
    </div>
  );
}
