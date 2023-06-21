import Image from 'next/image';
import { ImageAlbumBox, ImagesList } from '../../../styles/attorney-page/Images.style';

const Images = ({ images }) => (
  <ImagesList>
    {images.map((imageAttorney) => (
      <ImageAlbumBox orientation={imageAttorney.orientationImage} key={imageAttorney.image.databaseId}>
        <div>
          <Image src={imageAttorney.image.sourceUrl} alt={imageAttorney.caption} fill />
        </div>
        <p>{imageAttorney.caption}</p>
      </ImageAlbumBox>
    ))}
  </ImagesList>
);

export default Images;
