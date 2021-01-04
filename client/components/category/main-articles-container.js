import Link from 'next/link';
import Image from 'next/image';
import { createMarkup } from 'utils/helpers';
import fontStyles from 'styles/Fonts.module.css';

export default function CategoryMainArticlesContainer({ main }) {
  return (
    <article>
      <Link href={main.link.replace('https://scarincihollenbeck.com', '')}>
        <a>
          <Image
            src={main.image || '/images/no-image-found-diamond-750x350.png'}
            width={750}
            height={350}
            layout="intrinsic"
            alt={main.title}
          />
        </a>
      </Link>
      <p className="mt-5 mb-4">
        <Link href={main.category.link}>
          <a className="text-muted ft-01 text-uppercase">{main.category.name}</a>
        </Link>
      </p>
      <h2 className="mb-4 mt-3 display-4">{main.title}</h2>
      <div
        className="text-muted mt-4 mb-4 mr-4"
        dangerouslySetInnerHTML={createMarkup(main.excerpt)}
      />
      <hr />
      <p className={`${fontStyles.ft12rem} mt-4 mb-4`}>
        <strong>BY: </strong>
        {' '}
        {main.author.map((a) => (
          <Link key={a.name} href={a.link.replace('https://scarincihollenbeck.com', '')}>
            <a className="text-dark">{a.name}</a>
          </Link>
        ))}
      </p>
    </article>
  );
}
