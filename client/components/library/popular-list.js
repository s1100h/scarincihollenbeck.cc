import Link from 'next/link';
import fontStyles from 'styles/Fonts.module.css';

export default function PopularList({ term, list }) {
  // if the title of the item in the list is in the url
  // then apply a bold to the text to show its selected
  
  return (
    <>
      <p className={fontStyles.ft12rem}>
        <strong>{term}</strong>
      </p>
      <ul>
        {list.map((item) => (
          <li key={item.id} className="list-unstyled">
            <Link href={`/library?category=${item.slug}`}>
              <a className="text-dark">
                {item.name}
                {' '}
                |
                {' '}
                <strong>
                  <small>{item.postCount}</small>
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
          }
        `}
      </style>
    </>
  );
}
