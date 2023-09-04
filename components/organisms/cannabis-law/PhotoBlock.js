import Image from 'next/image';
import { PhotoBlockContainer, PhotoCannabisBox } from '../../../styles/practices-special-style/canabis-law/PhotoBlock.style';
import scarinci from '../../../public/images/Scarinci_word.webp';
import hollenbeck from '../../../public/images/Hollenbeck_word.webp';
import wordsPicture from '../../../public/images/Helping_Cannabis_words.webp';
import PhotoCardPolaroid from '../../atoms/PhotoCardPolaroid';
import ArticleCannabis from '../../molecules/cannabis-law/ArticleCannabis';

const PhotoBlock = ({ photoBlockData, anchorIdBlock }) => (
  <PhotoBlockContainer id={anchorIdBlock}>
    <PhotoCannabisBox>
      <PhotoCardPolaroid capture={photoBlockData.photo1.caption} imgUrl={photoBlockData.photo1.sourceUrl} imgAlt={photoBlockData.photo1.altText}>
        <Image src={scarinci} alt="Scarinci word" />
      </PhotoCardPolaroid>
      <PhotoCardPolaroid capture={photoBlockData.photo2.caption} imgUrl={photoBlockData.photo2.sourceUrl} imgAlt={photoBlockData.photo2.altText}>
        <Image src={hollenbeck} alt="Hollenback word" />
      </PhotoCardPolaroid>
      <Image className="words-picture" src={wordsPicture} alt="Helping Cannabis Businesses Navigate Complex Laws" />
    </PhotoCannabisBox>
    <ArticleCannabis titleSize={44} title={photoBlockData.articleBox.title} paragraph={photoBlockData.articleBox.paragraph} />
  </PhotoBlockContainer>
);

export default PhotoBlock;
