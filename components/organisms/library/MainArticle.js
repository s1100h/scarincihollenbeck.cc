import Image from 'next/image';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { createMarkup, formatDate } from 'utils/helpers';
import fontStyles from 'styles/Fonts.module.css';

export default function MainArticle({
  title, link, excerpt, date, image,
}) {
  return (
    <>
      <Link href={link}>
        <a className="text-dark">
          <h3 className={`mb-4 ${fontStyles.ft22rem}`}>
            <strong>{title}</strong>
          </h3>
          <Image
            src={image.replace('Feature', 'Body').replace('feature', 'body')}
            alt={title}
            width={750}
            height={350}
          />
        </a>
      </Link>
      <p className={`${fontStyles.ft12rem} my-3`}>
        <strong>Date: </strong>
        {formatDate(date)}
      </p>
      <div
        className={`${fontStyles.ft11rem} pr-4 mb-3`}
        dangerouslySetInnerHTML={createMarkup(excerpt)}
      />
      <Button variant="danger" className={`${fontStyles.ft12rem} px-4`}>
        <Link href={link}>
          <a>Continue Reading</a>
        </Link>
      </Button>
    </>
  );
}
