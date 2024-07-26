import empty from 'is-empty';
import Link from 'next/link';
import {
  CardFooterBox,
  NewsCardBlock,
} from '../../styles/attorney-page/AttorneyProfile.style';
import { formatDate } from '../../utils/helpers';
import { videoRender } from '../../utils/videoRender';

const SimpleNewsCard = ({
  title, textPost, author, date, link, video,
}) => {
  const Component = empty(video) ? Link : 'div';
  const conditionLayoutProps = empty(video)
    ? { href: link, passHref: true }
    : null;
  return (
    <NewsCardBlock>
      <Component {...conditionLayoutProps}>
        {!empty(video) ? (
          videoRender(video, author)
        ) : (
          <div className="article-box">
            <h6 className="news-card-title">{title}</h6>
            {!empty(textPost) && <p className="news-card-text">{textPost}</p>}
          </div>
        )}
        <CardFooterBox>
          <p className="author-name">{author}</p>
          <time dateTime={date} className="post-date">
            {formatDate(date)}
          </time>
        </CardFooterBox>
      </Component>
    </NewsCardBlock>
  );
};

export default SimpleNewsCard;
