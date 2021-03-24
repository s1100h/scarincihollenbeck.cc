import Link from 'next/link';
import fontStyles from 'styles/Fonts.module.css';

export default function NonGraphQLTrendingStories({ title, content }) {
  return (
    <>
      <p className={fontStyles.ft12rem}>
        <strong>{title}</strong>
      </p>
      <ul>
        {content.map((c) => (
          <li key={c.ID || c.id} className="list-unstyled">
            <Link href={c.slug || c.link || '/'}>
              <a className="text-dark">
                {c.title}
              </a>
            </Link>
            {c.author && <div className="my-0 py-0 d-block"><small><strong>Author: </strong> {c.author}</small></div>}
          </li>
        ))}
      </ul>
      <style jsx>
        {`
        ul {
          margin-left: -2.48em;
          margin-top: -10px;
        }

        ul li {
          margin-bottom: 6px;
          padding-bottom: 10px;
          padding-top: 10px;
          line-height: 1.4;
          color: #444;
        }
        ul li:not(:last-child) {
          border-bottom: .5px solid #e9e9e9;
        }`}
      </style>
    </>
  );
}
