import Search from '../../components/search';
import AboutFirm from '../../components/about-firm';
import TrendingStories from '../../components/trending-stories';

export default function SideBar(props) {
  const { trending } = props;

  return (
    <div>
      <Search />
      <AboutFirm />
      <TrendingStories title="Trending Stories" content={trending} />
    </div>
  );
}