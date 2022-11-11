import Image from 'next/image';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { createMarkup, formatDate } from 'utils/helpers';
import {
  ArticleShortDescription,
  DateOfArticle,
  MainArticleTitle,
} from 'styles/LibraryMainArticle.style';

export default function MainArticle({
  title, link, excerpt, date, image,
}) {
  return (
    <>
      <Link href={link}>
        <a className="text-dark">
          <MainArticleTitle>
            <strong>{title}</strong>
          </MainArticleTitle>
          <Image
            src={image.replace('Feature', 'Body').replace('feature', 'body')}
            alt={title}
            width={750}
            height={350}
          />
        </a>
      </Link>
      <DateOfArticle>
        <strong>Date: </strong>
        {formatDate(date)}
      </DateOfArticle>
      <ArticleShortDescription dangerouslySetInnerHTML={createMarkup(excerpt)} />
      <Button variant="danger">
        <Link href={link}>
          <a className="text-white">Continue Reading</a>
        </Link>
      </Button>
    </>
  );
}
