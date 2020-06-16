import LatestNewsArticlesCarousel from '../../components/carousels/latest-news-articles-carousel';

export default function CategorySliderContainer(props) {
  const { title, slides } = props;

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