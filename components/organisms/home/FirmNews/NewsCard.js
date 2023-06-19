import Image from 'next/legacy/image';
import Link from 'next/link';
import {
  ArticleDescription, BottomSection, OtherNews, TextNews,
} from 'styles/FirmNews.style';
import { createMarkup, formatDate } from 'utils/helpers';

const renderAuthors = (authorItem) => {
  if (Array.isArray(authorItem)) {
    return (
      <ul className="d-flex gap-1 w-100 p-0">
        {authorItem.map((author, idx) => (
          <li key={author.t} className="d-flex ">
            <Link href={author.link} passHref>
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
  postSlug, postImage, postTitle, postExcerpt, postDate, postAuthor, isVertical, isProfile,
}) => (
  <OtherNews isProfile={isProfile?.length > 0 && isVertical} isVertical={isVertical?.length > 0 && isVertical}>
    <Link href={postSlug} passHref>
      <div className="link-wrapper">
        <Image src={postImage.length > 0 ? postImage : '/images/no-image-found-diamond.png'} alt={postTitle} width={750} height={350} layout="intrinsic" />
        <TextNews>
          <h2>{postTitle}</h2>
          {postExcerpt?.length > 0 && <ArticleDescription dangerouslySetInnerHTML={createMarkup(postExcerpt)} />}
          <BottomSection>
            <div>
              <strong>Author: </strong>
              {renderAuthors(postAuthor)}
            </div>
            <span>
              <strong>{formatDate(postDate)}</strong>
            </span>
          </BottomSection>
        </TextNews>
      </div>
    </Link>
  </OtherNews>
);
export default NewsCard;
