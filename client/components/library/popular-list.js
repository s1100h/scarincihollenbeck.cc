import Link from 'next/link';
import fontStyles from 'styles/Fonts.module.css';

export default function PopularList({ term, list }) {
  return (
    <>
      <p className={fontStyles.ft12rem}>
        <strong>{term}</strong>
      </p>
      <ul>
        {list.map((item) => (
          <li key={item.id} className="list-unstyled">
            <Link href={`/library?category=${item.slug}&offset=1`}>
              <a className="text-dark">
                {item.name}
                {' '}
                |
                {' '}
                <strong>
                  <small>
                    {item.postCount}
                  </small>
                </strong>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          ul {
            margin-left: -2.6em;
            margin-top: -10px;
          }

          ul li {
            margin-bottom: 6px;
          }`}
      </style>
    </>
  );
}
