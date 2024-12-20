import {
  CareerCard,
  CareerCardContent,
  CareerCardDescription,
  CareerCardDuration,
  CareerCardFooter,
  CareerCardLocation,
  CareerCardTitle,
} from 'styles/PositionCard.style';
import { BsFillBriefcaseFill } from 'react-icons/bs';

export const checkAllOffices = (location) => {
  if (!location) return null;
  const splitLocs = location.split(',').filter((i) => i.trim() !== 'NJ');

  if (splitLocs.length > 1) {
    return 'Multiple locations';
  }

  return location;
};

export default function PositionCard({
  title,
  miniDescription,
  positionLocation,
  duration,
  href,
}) {
  return (
    <CareerCard href={href}>
      <CareerCardContent>
        {title && <CareerCardTitle title={title}>{title}</CareerCardTitle>}
        {miniDescription && (
          <CareerCardDescription>{miniDescription}</CareerCardDescription>
        )}
      </CareerCardContent>

      {(positionLocation || duration) && (
        <CareerCardFooter>
          {positionLocation && (
            <CareerCardLocation>
              {checkAllOffices(positionLocation)}
            </CareerCardLocation>
          )}
          {duration && (
            <CareerCardDuration>
              <BsFillBriefcaseFill />
              {duration}
            </CareerCardDuration>
          )}
        </CareerCardFooter>
      )}
    </CareerCard>
  );
}
