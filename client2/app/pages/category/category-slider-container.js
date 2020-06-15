import Carousel from '../../components/Carousel';

export default function CategorySliderContainer(props) {
  const { title, slides } = props;

  return (
    <div className="mt-5 category-slider-content">
      <div className="line-header">
        <h3>{title}</h3>
      </div>
      <div className="mt-5">
        <Carousel sliderType="LargeArticle" slides={slides} />
      </div>
    </div>
  );
}