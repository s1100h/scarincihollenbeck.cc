import Image from 'next/legacy/image';
import Link from 'next/link';
import {
  ArticleDescription,
  BottomSection,
  NewsLink,
  OtherNews,
  TextNews,
} from 'styles/FirmNews.style';
import { createMarkup, formatDate } from 'utils/helpers';
import empty from 'is-empty';

const cutAllBeforeAttorneys = (url) => url.replace(/.*?\/attorneys/, '/attorneys');

const renderAuthors = (authorItem) => {
  if (authorItem.node) {
    if (empty(authorItem.node.url)) {
      return <div>{authorItem.node.name}</div>;
    }
    return (
      <Link href={cutAllBeforeAttorneys(authorItem.node.url)} passHref>
        {authorItem.node.name}
      </Link>
    );
  }

  if (Array.isArray(authorItem)) {
    return (
      <ul className="d-flex gap-1 w-100 p-0">
        {authorItem.map((author, idx) => (
          <li key={author.t} className="d-flex ">
            <Link href={cutAllBeforeAttorneys(author.link)} passHref>
              <div>{author.name}</div>
            </Link>
            {authorItem.length > 1 && idx !== authorItem.length - 1 && ','}
          </li>
        ))}
      </ul>
    );
  }

  return <span>{authorItem}</span>;
};
const NewsCard = ({
  postSlug,
  postImage,
  postTitle,
  postExcerpt,
  postDate,
  postAuthor,
  isVertical,
  isProfile,
  classNameProp,
}) => (
  <OtherNews
    isProfile={isProfile?.length > 0 && isVertical}
    isVertical={isVertical?.length > 0 && isVertical}
    className={classNameProp}
  >
    <NewsLink href={postSlug} passHref title={postTitle}>
      <span className="sr-only">{`Link to post with title - "${postTitle}"`}</span>
    </NewsLink>
    <div className="link-wrapper">
      <Image
        src={
          postImage.length > 0
            ? postImage
            : '/images/no-image-found-diamond.png'
        }
        alt={postTitle}
        width={750}
        height={350}
      />
      <TextNews>
        <h3>{postTitle}</h3>
        {postExcerpt?.length > 0 && (
          <ArticleDescription
            dangerouslySetInnerHTML={createMarkup(postExcerpt)}
          />
        )}
        <BottomSection>
          <div className="news-card-footer">
            <strong>Author: </strong>
            {renderAuthors(postAuthor)}
          </div>
          <span>
            <strong>{formatDate(postDate)}</strong>
          </span>
        </BottomSection>
      </TextNews>
    </div>
  </OtherNews>
);
export default NewsCard;
