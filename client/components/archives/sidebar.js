import TrendingStories from 'components/non-graphql-trending-stories';
import AboutFirm from 'components/about-firm';

export default function ArchivesSideBar({ trending }) {
  return (
    <div>
      <AboutFirm />
      <TrendingStories title="Trending Stories" content={trending} />
    </div>
  );
}
