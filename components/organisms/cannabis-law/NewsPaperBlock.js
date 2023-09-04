import { NewsPaperBox, NewsPaperContainer } from '../../../styles/practices-special-style/canabis-law/NewsPeperBlock.style';
import PhotoCardPolaroid from '../../atoms/PhotoCardPolaroid';
import ArticleCannabis from '../../molecules/cannabis-law/ArticleCannabis';

const NewsPaperBlock = ({ newsPepperArticle, article }) => (
  <NewsPaperContainer>
    <ArticleCannabis titleSize={44} isColorWhite title={article.title} paragraph={article.paragraph} />
    <NewsPaperBox>
      <p>{newsPepperArticle.newspaperArticle}</p>
      <PhotoCardPolaroid imgUrl={newsPepperArticle.newspaperPhotoBox.sourceUrl} isBlackBack capture={newsPepperArticle.newspaperPhotoBox.caption} imgAlt={newsPepperArticle.newspaperPhotoBox.altText} />
    </NewsPaperBox>
  </NewsPaperContainer>
);

export default NewsPaperBlock;
