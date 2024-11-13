import empty from 'is-empty';
import { useId } from 'react';
import Image from 'next/image';
import { HelpArticleBlockContainer } from '../../../styles/practices-special-style/canabis-law/HelpArticleBlock.style';
import cannabisIcon from '../../../public/images/сannabis-Icon.webp';

const HelpArticleBlock = ({ helpArticleBlockData }) => (
  <HelpArticleBlockContainer>
    <article className="attorneys-article-box">
      <Image
        className="mb-4"
        width={56}
        height={62}
        src={cannabisIcon}
        alt="cannabis leaf"
      />
      {!empty(helpArticleBlockData.title) && (
        <h2>{helpArticleBlockData.title}</h2>
      )}
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
