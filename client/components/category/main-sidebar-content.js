import Image from 'next/image';
import Link from 'next/link';
import { limitTitleLength, createMarkup } from 'utils/helpers';
import styles from 'styles/Fonts.module.css';

export default function CategoryMainSidebar({ latest }) {
  return (
    <ul className="mt-3 p-0 list-unstyled">
      {latest.map((p) => (
        <li key={p.node.id} className="w-100 mb-5">
          <Link href={p.node.link}>
            <a className="text-dark">
              <div className="mx-auto d-block">
                <Image
                  src={
                    p.node.featuredImage !== null
                      ? p.node.featuredImage.node.sourceUrl
                      : '/images/no-image-found-diamond.png'
                  }
                  width={300}
                  height={150}
                  layout="intrinsic"
                  alt={p.node.link}
                />
              </div>
              <h5 className="mt-3 mb-1">
                <strong>{p.node.title}</strong>
              </h5>
              <div
                className={`${styles.smallExcerpt} text-muted`}
                dangerouslySetInnerHTML={createMarkup(
                  limitTitleLength(p.node.excerpt),
                )}
              />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
