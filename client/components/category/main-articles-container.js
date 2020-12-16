import Link from 'next/link';
import Image from 'next/image';
import { createMarkup } from 'utils/helpers';

export default function CategoryMainArticlesContainer({ main }) {
  console.log(main.node.link);
  const getFeaturedImage = main.node.featuredImage.node.sourceUrl.replace('Feature.png', 'Body.png');
  const category = main.node.categories.nodes[0];

  return (
    <article>
      <Link href={main.node.link}>
        <a>
          <Image
            src={
                  getFeaturedImage
                  || '/image/no-image-found-diamond.png'
                }
            width={750}
            height={350}
            layout="intrinsic"
            alt={main.node.title}
          />
        </a>
      </Link>
      <p className="mt-5 mb-4">
        <Link href={category.uri}>
          <a className="text-muted ft-01 text-uppercase">
            {category.name}
          </a>
        </Link>
      </p>
      <h2 className="mb-4 mt-3 display-4">
        {main.node.title}
      </h2>
      <div
        className="text-muted mt-4 mb-4 mr-4"
        dangerouslySetInnerHTML={createMarkup(main.node.excerpt.replace('[', '').replace(']', ''))}
      />
      <hr />
      <p className="mt-4 mb-4">
        <strong>BY: </strong>
        <Link href={(main.node.author.node.url || '/')}>
          <a className="text-dark">
            {main.node.author.node.name}
          </a>
        </Link>
      </p>
    </article>
  );
}
