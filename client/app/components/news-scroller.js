import LatestNewsArticlesCarousel from './carousels/latest-news-articles-carousel';
import { sortByKey } from '../utils/helpers';

export default function NewsScroller(props) {
  const { title, articles } = props;
  const sortedPosts = sortByKey(articles, 'date');

  return (
    <div>
      <div className="line-header">
        <h3>{title}</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 pt-4">
            <LatestNewsArticlesCarousel slides={sortedPosts} />
          </div>
        </div>
      </div>
    </div>
  );
}