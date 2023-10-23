import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  CardEntAndMediaAttorney,
  ImageWrapper,
} from 'components/organisms/ent-and-media/AttorneyEntAndMediaCard.style';
import { renderLinkToLocationPractice } from '../../shared/AttorneyCard';
import ContactBoxTemplate from '../../atoms/ContactBox';

const adress = 'Little Falls, NJ, New York';

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
}) => {
  const { push } = useRouter();

  return (
    <CardEntAndMediaAttorney onClick={() => push(link)}>
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
    </CardEntAndMediaAttorney>
  );
};

export default AttorneyEntAndMediaCard;
