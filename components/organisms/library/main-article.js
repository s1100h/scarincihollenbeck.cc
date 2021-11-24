import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import { createMarkup } from 'utils/helpers';
import fontStyles from 'styles/Fonts.module.css';

export default function MainArticle({
  title, link, excerpt, date, image, author, category,
}) {
  const router = useRouter();

  return (
    <>
      <Link href={link}>
        <a className="text-dark">
          <h3 className={`mb-4 ${fontStyles.ft22rem}`}>
            <strong>{title}</strong>
          </h3>
          <Image src={image} alt={title} width={750} height={350} />
        </a>
      </Link>
      <p className={`${fontStyles.ft12rem} my-3`}>
        <strong>Author: </strong>
        {' '}
        {author.map((a, index) => (
          <Link href={a.link} key={a.name}>
            <a className="text-dark">
              {a.name}
              {index < author.length - 1 ? ', ' : ''}
            </a>
          </Link>
        ))}
        <span className="ml-3">
          <strong>Date: </strong>
          {date}
        </span>
      </p>
      <div
        className={`${fontStyles.ft11rem} pr-4 mb-3`}
        dangerouslySetInnerHTML={createMarkup(excerpt)}
      />
      <Button variant="danger" className={`${fontStyles.ft12rem} px-4`}>
        <Link href={link}>
          <a className="text-white">Continue Reading</a>
        </Link>
      </Button>
    </>
  );
}
