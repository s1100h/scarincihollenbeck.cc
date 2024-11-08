import { CareerCard } from 'styles/PositionCard.style';
import {
  BsFillBriefcaseFill,
  BsFillClockFill,
  BsFillGeoAltFill,
} from 'react-icons/bs';

export const checkAllOffices = (location) => {
  if (!location) return null;
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
      {title && <h3 title={title}>{title}</h3>}

      <div className="position-location-box">
        {positionType && (
        <div className="position-type">
          #
          {positionType}
        </div>
        )}
        {positionLocation && (
          <p className="icon-and-info">
            <BsFillGeoAltFill />
            {checkAllOffices(positionLocation)}
          </p>
        )}
      </div>
      {miniDescription && (
        <p className="job-mini-description">{miniDescription}</p>
      )}

      {(startDate || duration) && (
        <div className="d-flex gap-4 mt-auto">
          {startDate && (
            <p className="icon-and-info">
              <BsFillClockFill />
              {startDate}
            </p>
          )}
          {duration && (
            <p className="icon-and-info">
              <BsFillBriefcaseFill />
              {duration}
            </p>
          )}
        </div>
      )}
    </CareerCard>
  );
}
