import Link from 'next/link';
import Image from 'next/image';
import { createMarkup } from 'utils/helpers';
import fontStyles from 'styles/Fonts.module.css';

export default function CategoryMainArticlesContainer({ main }) {
  let getFeaturedImage = '/images/no-image-found-diamond-750x350.png';

  if (main) {
    if (main.node.featuredImage) {
      if (main.node.featuredImage.node.sourceUrl.indexOf('Feature.png') > 0) {
        getFeaturedImage = main.node.featuredImage.node.sourceUrl.replace(
          'Feature.png',
          'Body.png',
        );
      } else {
        getFeaturedImage = main.node.featuredImage.node.sourceUrl;
      }
    }
  }

  const category = main.node.categories.nodes[0];

  return (
    <article>
      <Link href={main.node.link}>
        <a>
          <Image
            src={getFeaturedImage}
            width={750}
            height={350}
            layout="intrinsic"
            alt={main.node.title}
          />
        </a>
      </Link>
      <p className="mt-5 mb-4">
        <Link href={category.uri}>
          <a className="text-muted ft-01 text-uppercase">{category.name}</a>
        </Link>
      </p>
      <h2 className="mb-4 mt-3 display-4">{main.node.title}</h2>
      <div
        className="text-muted mt-4 mb-4 mr-4"
        dangerouslySetInnerHTML={createMarkup(
          main.node.excerpt.replace('[', '').replace(']', ''),
        )}
      />
      <hr />
      <p className={`${fontStyles.ft12rem} mt-4 mb-4`}>
        <strong>BY: </strong>
        {' '}
        <Link href={main.node.author.node.url || '/'}>
          <a className="text-dark">{main.node.author.node.name}</a>
        </Link>
      </p>
    </article>
  );
}
