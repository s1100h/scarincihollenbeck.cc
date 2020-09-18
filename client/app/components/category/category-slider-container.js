import LatestNewsArticlesCarousel from '../carousels/latest-news-articles-carousel';

export default function CategorySliderContainer({ title, slides }) {
  return (
    <div className="mt-5 category-slider-content">
      <div className="line-header">
        <h3>{title}</h3>
      </div>
      <div className="mt-5">
        <LatestNewsArticlesCarousel slides={slides} />
      </div>
    </div>
  );
}
