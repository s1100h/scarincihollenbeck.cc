import { PhotoBlockContainer, PhotoCannabisBox } from '../../../styles/practices-special-style/canabis-law/PhotoBlock.style';
import PhotoCardPolaroid from '../../atoms/PhotoCardPolaroid';
import ArticleCannabis from '../../molecules/cannabis-law/ArticleCannabis';
import { FullHDContainer } from '../../../styles/practices-special-style/commonForSpecial.style';

const PhotoBlock = ({ photoBlockData, anchorIdBlock }) => (
  <PhotoBlockContainer id={anchorIdBlock}>
    <FullHDContainer>
      <div className="photo-article-box">
        <PhotoCannabisBox>
          <PhotoCardPolaroid capture={photoBlockData.photo1.caption} imgUrl={photoBlockData.photo1.sourceUrl} imgAlt={photoBlockData.photo1.altText} />
          <PhotoCardPolaroid capture={photoBlockData.photo2.caption} imgUrl={photoBlockData.photo2.sourceUrl} imgAlt={photoBlockData.photo2.altText} />
        </PhotoCannabisBox>
        <ArticleCannabis titleSize={44} title={photoBlockData.articleBox.title} paragraph={photoBlockData.articleBox.paragraph} />
      </div>
    </FullHDContainer>
  </PhotoBlockContainer>
);

export default PhotoBlock;
