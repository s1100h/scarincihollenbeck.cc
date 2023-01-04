import Image from 'next/image';
import Link from 'next/link';
import { OtherNews, TextNews } from 'styles/FirmNews.style';
import { createMarkup, formatDate } from 'utils/helpers';

const NewsCard = ({
  postSlug,
  postImage,
  postTitle,
  postExcerpt,
  postDate,
  postAuthor,
  isVertical,
}) => (
  <OtherNews isVertical={isVertical?.length > 0 && isVertical}>
    <Link href={postSlug}>
      <a>
        <div>
          <Image src={postImage} alt={postTitle} width={750} height={350} layout="intrinsic" />
        </div>
        <TextNews>
          <h2>{postTitle}</h2>
          {postExcerpt?.length > 0 && (
            <section dangerouslySetInnerHTML={createMarkup(postExcerpt)} />
          )}
          <p>
            <span>
              <strong>Author : </strong>
              {postAuthor}
            </span>
            <span>
              <strong>{formatDate(postDate)}</strong>
            </span>
          </p>
        </TextNews>
      </a>
    </Link>
  </OtherNews>
);

export default NewsCard;
