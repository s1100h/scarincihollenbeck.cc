import CarouselLatestNews from 'components/carousels/latest-news';
import styles from 'styles/LineHeader.module.css'

export default function CategorySliderContainer({ title, slides }) {
  console.log(slides)
  return (
    <div className="mt-5 category-slider-content">
      <div className={styles.lineHeader}>
        <h3>{title}</h3>
      </div>
      <div className="mt-5">
        {/* <CarouselLatestNews slides={slides} /> */}
      </div>
    </div>
  );
}
