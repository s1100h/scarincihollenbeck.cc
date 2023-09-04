import Image from 'next/image';
import { ArticleCommonBox } from '../../../styles/practices-special-style/commonForSpecial.style';
import cannabisIcon from '../../../public/images/сannabis-Icon.webp';
import { ArticlePhotoContainer } from '../../../styles/practices-special-style/canabis-law/PhotoBlock.style';
import { convertBooleanToString } from '../../../utils/helpers';

const ArticleCannabis = ({
  title, paragraph, titleSize, isColorWhite,
}) => (
  <ArticlePhotoContainer>
    <ArticleCommonBox isColorWordsWhite={convertBooleanToString(isColorWhite)} titleFontSize={titleSize}>
      <Image src={cannabisIcon} alt="cannabis leaf" />
      <h3 className="article-common-title">{title}</h3>
      <p>{paragraph}</p>
    </ArticleCommonBox>
  </ArticlePhotoContainer>
);

export default ArticleCannabis;
