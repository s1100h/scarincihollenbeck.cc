import { CareerCard } from 'styles/PositionCard.style';
import {
  BsFillBriefcaseFill,
  BsFillClockFill,
  BsFillGeoAltFill,
} from 'react-icons/bs';

const checkAllOffices = (location) => {
  const splitLocs = location.split(',').filter((i) => i.trim() !== 'NJ');

  if (splitLocs.length > 1) {
    return 'Multiple locations';
  }

  return location;
};

export default function PositionCard({
  handleClickToCareer,
  slug,
  title,
  miniDescription,
  positionLocation,
  positionType,
  startDate,
  duration,
}) {
  return (
    <CareerCard onClick={() => handleClickToCareer(slug)}>
      <h3 title={title}>{title}</h3>
      <div className="position-location-box">
        <div className="position-type">
          #
          {positionType}
        </div>
        <p className="icon-and-info">
          <BsFillGeoAltFill />
          {checkAllOffices(positionLocation)}
        </p>
      </div>
      <p className="job-mini-description">{miniDescription}</p>
      <div className="d-flex gap-4">
        <p className="icon-and-info">
          <BsFillClockFill />
          {startDate}
        </p>
        <p className="icon-and-info">
          <BsFillBriefcaseFill />
          {duration}
        </p>
      </div>
    </CareerCard>
  );
}
