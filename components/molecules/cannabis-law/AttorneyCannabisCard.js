import Image from 'next/image';
import { useRouter } from 'next/router';
import { CardCannabisAttorney } from '../../organisms/cannabis-law/AttorneyCannabsCard.style';
import { renderLinkToLocationPractice } from '../../shared/AttorneyCard';
import ContactBoxTemplate from '../../atoms/ContactBox';

const AttorneyCannabisCard = ({
  link, image, name, designation, number, email, width, height, locations, setterId, cardIdHovered, databaseId,
}) => {
  const { push } = useRouter();
  const isCardHovered = () => {
    if (cardIdHovered === databaseId) {
      return 'hovered';
    }
    if (!cardIdHovered) {
      return 'default';
    }
    if (cardIdHovered !== databaseId) {
      return 'blur';
    }
  };
  const handleSetIdCardByHover = () => setterId(databaseId);
  const handleNotHovered = () => setterId(undefined);

  return (
    <CardCannabisAttorney cardIsHovered={isCardHovered()} onMouseLeave={() => handleNotHovered()} onMouseEnter={() => handleSetIdCardByHover()} onClick={() => push(link)}>
      <Image height={height} width={width} src={image} alt={name} />
      <div className="attorney-info">
        <span className="attorney-name">{name}</span>
        <span>{designation}</span>
        {locations && <ul className="d-flex gap-1 m-0 p-0">{renderLinkToLocationPractice(locations)}</ul>}
        <ContactBoxTemplate email={email} number={number} />
      </div>
    </CardCannabisAttorney>
  );
};

export default AttorneyCannabisCard;
