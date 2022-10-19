import Link from 'next/link';
import { CardContainer, TitlePosition } from 'styles/PositionCard.style';

const checkAllOffices = (location) => {
  const splitLocs = location.split(',').filter((i) => i.trim() !== 'NJ');

  if (splitLocs.length > 1) {
    return 'Multiple locations';
  }

  return location;
};

export default function PositionCard({
  slug, title, positionLocation, positionType, startDate,
}) {
  return (
    <Link href="/career/[slug]" as={`/career${slug}`}>
      <a className="text-dark text-decoration-none">
        <CardContainer>
          <TitlePosition>{title}</TitlePosition>
          <p className="my-0">
            <strong className="mr-1">Location:</strong>
            {checkAllOffices(positionLocation)}
          </p>
          <p className="my-0">
            <strong className="mr-1">Type:</strong>
            {positionType}
          </p>
          <p className="my-0">
            <strong className="mr-1">Start:</strong>
            {startDate}
          </p>
        </CardContainer>
      </a>
    </Link>
  );
}
