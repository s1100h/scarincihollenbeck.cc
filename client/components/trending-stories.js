import Link from 'next/link';
import styled from 'styled-components';
import styles from 'styles/SidebarTitle.module.css';
import fontStyles from 'styles/Fonts.module.css';

const ArticleContainer = styled.div`
  height: 470px;
  overflow: hidden;
  overflow-y: auto;
`;

export default function TrendingStories({ title, content }) {
  return (
    <div className="w-100 mt-4">
      <div className={styles.header}>{title}</div>
      <ArticleContainer className="off-white">
        <ul className="px-4 py-2">
          {content.map((c) => (
            <li key={c.node.id} className="mb-2">
              <Link href={c.node.link}>
                <a className={`${styles.lh22px} text-dark`}>
                  <strong>{c.node.title}</strong>
                </a>
              </Link>
              {(c.node.hasOwnProperty('author')) && (
                <span className={`${fontStyles.smallExcerpt} d-block`}>
                  <strong>
                    Author:
                  </strong>
                  {' '}
                  <Link href={(c.node.author.node.uri === '/author/scarinci-hollenbeck/') ? '/' : c.node.author.node.uri}>
                    <a className="text-dark">
                      {c.node.author.node.name}
                    </a>
                  </Link>
                </span>
              )}
            </li>
          ))}
        </ul>
        {/* {content.length > 0 ? (
          content.map((p) => (
            <div key={p.ID || addRandomKey(p.title)} className="p-2">
              <strong>
                <Link href={p.link}>
                  <a className="text-dark d-block">{p.title}</a>
                </Link>
              </strong>
              {(p.hasOwnProperty('author')
                || p.author === 'Scarinci Hollenbeck') && (
                <>
                  {typeof p.author === 'string' && (
                    <>
                      <strong>Author: </strong>
                      <Link href={`/author/${createUserName(p.author)}`}>
                        <a className="text-dark">{p.author}</a>
                      </Link>
                    </>
                  )}
                  {typeof p.author === 'object' && p.author.length > 0 && (
                    <>
                      <strong>Author: </strong>
                      <Link
                        href={`/author/${createUserName(p.author[0].name)}`}
                      >
                        <a className="text-dark">{p.author[0].name}</a>
                      </Link>
                    </>
                  )}
                </>
              )}
              {p.hasOwnProperty('pubDate') && (
                <p className="my-0">{formatDate(p.pubDate)}</p>
              )}
              {p.hasOwnProperty('source') && (
                <div
                  className="mt-0"
                  dangerouslySetInnerHTML={createMarkup(p.source)}
                />
              )}
            </div>
          ))
        ) : (
          <div className="mx-5 p-5">
            <p>Articles loading...</p>
          </div>
        )} */}
      </ArticleContainer>
    </div>
  );
}
