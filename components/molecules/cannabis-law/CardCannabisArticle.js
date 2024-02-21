import { CardCannabis } from '../../../styles/practices-special-style/canabis-law/CardsBlock.style';
import { ArticleCommonBox } from '../../../styles/practices-special-style/commonForSpecial.style';

const CardCannabisArticle = ({ number, title, paragraph }) => (
  <CardCannabis>
    <div className="circle-number">{number < 10 ? `0${number}` : number}</div>
    <ArticleCommonBox mbTitle={20} titleFontSize={32} paragraphFontSize={20}>
      <h3 className="article-common-title">{title}</h3>
      <p>{paragraph}</p>
    </ArticleCommonBox>
  </CardCannabis>
);

export default CardCannabisArticle;
