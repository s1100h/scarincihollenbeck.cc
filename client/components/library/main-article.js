import Image from 'next/image';
import Link from 'next/link';
import fontStyles from 'styles/Fonts.module.css';

export default function MainArticle({
  title, link, description, date, image, author,
}) {
  return (
    <Link href={link}>
      <a className="text-dark">
        <h3>
          <strong>{title}</strong>
        </h3>
        <Image
          src={image}
          alt={title}
          width={750}
          height={350}
        />
        <p className={`${fontStyles.ft12rem} mt-2`}>
          <strong>Author: </strong>
          {' '}
          {author}
          <span className="ml-5">
            <strong>Date:</strong>
            {' '}
            {date}
          </span>
        </p>
        <hr />
        {description}
      </a>
    </Link>
  );
}
