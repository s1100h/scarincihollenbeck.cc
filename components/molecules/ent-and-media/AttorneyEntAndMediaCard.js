import Image from 'next/image';
import {
  CardEntAndMediaAttorney,
  ImageWrapper,
} from 'components/organisms/ent-and-media/AttorneyEntAndMediaCard.style';
import Link from 'next/link';
import { renderLinkToLocationPractice } from '../../shared/AttorneyCard';
import ContactBoxTemplate from '../../atoms/ContactBox';

const AttorneyEntAndMediaCard = ({
  link,
  image,
  name,
  designation,
  number,
  email,
  width,
  height,
  locations,
}) => (
  <CardEntAndMediaAttorney>
    <ImageWrapper>
      <Image height={height} width={width} src={image} alt={name} />
    </ImageWrapper>
    <div className="attorney-info">
      <span className="attorney-name">{name}</span>
      <span className="attorney-designation">{designation}</span>
      {locations && (
        <ul className="d-flex gap-1 m-0 p-0">
          {renderLinkToLocationPractice(locations)}
        </ul>
      )}
      <ContactBoxTemplate
        email={email}
        number={number}
        classes="attorney-contact"
      />
    </div>
    <Link className="attorney-link" href={link} />
  </CardEntAndMediaAttorney>
);

export default AttorneyEntAndMediaCard;
