import CarouselContainer from '../Carousel';

export default function FullWidthContent(props) {
  const { sortedPosts, sortedLocations } = props;

  return (
    <div className="row">
      <div className="col-sm-12 mt-5 px-0">
        <div className="line-header"><h3>News & Events</h3></div>
      </div>
      <div className="col-sm-12 px-0 pt-5">
        {(sortedPosts.length > 0) && <CarouselContainer sliderType="LargeArticle" slides={sortedPosts} />}
      </div>
      <div className="col-sm-12 mt-5 px-0">
        <div className="line-header"><h3>OUR OFFICES</h3></div>
      </div>
      <div className="col-sm-12 px-0 pt-5">
        <div className="location-carousel-container">
          {(sortedLocations.length > 0) && <CarouselContainer sliderType="Location" slides={sortedLocations} />}
        </div>
      </div>
    </div>
  );
}