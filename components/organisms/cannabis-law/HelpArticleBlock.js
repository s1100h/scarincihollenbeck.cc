import empty from 'is-empty';
import { useId } from 'react';
import { HelpArticleBlockContainer } from '../../../styles/practices-special-style/canabis-law/HelpArticleBlock.style';

const HelpArticleBlock = ({ helpArticleBlockData }) => (
  <HelpArticleBlockContainer>
    <article className="attorneys-article-box">
      {!empty(helpArticleBlockData.title) && <h3>{helpArticleBlockData.title}</h3>}
      {!empty(helpArticleBlockData.paragraphs) && (
        <>
          {helpArticleBlockData.paragraphs.map(({ paragraph }) => (
            <p key={useId()}>{paragraph}</p>
          ))}
        </>
      )}
    </article>
  </HelpArticleBlockContainer>
);

export default HelpArticleBlock;
