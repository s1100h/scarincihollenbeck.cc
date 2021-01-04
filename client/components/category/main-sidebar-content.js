import Image from 'next/image';
import Link from 'next/link';
import { createMarkup } from 'utils/helpers';
import styles from 'styles/Fonts.module.css';

export default function CategoryMainSidebar({ latest }) {
  return (
    <ul className="mt-3 p-0 list-unstyled">
      {latest.map((p) => (
        <li key={p.ID} className="w-100 mb-5">
          <Link href={p.link.replace('https://scarincihollenbeck.com', '')}>
            <a className="text-dark">
              <div className="mx-auto d-block">
                <Image
                  src={p.image || '/images/no-image-found-diamond.png'}
                  width={300}
                  height={150}
                  layout="intrinsic"
                  alt={p.tite}
                />
              </div>
              <h5 className="mt-3 mb-1">
                <strong>{p.title}</strong>
              </h5>
              <div
                className={`${styles.smallExcerpt} text-muted`}
                dangerouslySetInnerHTML={createMarkup(p.excerpt)}
              />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
