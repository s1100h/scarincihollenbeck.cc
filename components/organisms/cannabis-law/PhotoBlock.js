import Image from 'next/image';
import { PhotoBlockContainer, PhotoCannabisBox } from '../../../styles/practices-special-style/canabis-law/PhotoBlock.style';

const PhotoBlock = ({ photoBlockData }) => (
  <PhotoBlockContainer>
    <PhotoCannabisBox>
      <figure>
        <Image src={photoBlockData.first.url} alt={photoBlockData.first.alt} width={360} height={400} />
        <caption>{photoBlockData.first.caption}</caption>
      </figure>
      <figure>
        <Image src={photoBlockData.last.url} alt={photoBlockData.last.alt} width={360} height={400} />
        <caption>{photoBlockData.last.caption}</caption>
      </figure>
    </PhotoCannabisBox>
  </PhotoBlockContainer>
);

export default PhotoBlock;
