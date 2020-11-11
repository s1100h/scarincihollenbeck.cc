import LatestNewsArticlesCarousel from '../carousels/latest-news-articles-carousel';

export default function HighlightReal({ highlightReal }) {
  return (
    <div className="mt-4 w-100 d-block practice-news-list">
      <LatestNewsArticlesCarousel slides={highlightReal} />
    </div>
  );
}
