import Link from 'next/link';
import styled from 'styled-components';
import styles from 'styles/SidebarTitle.module.css';
import { addRandomKey, createMarkup, urlify } from 'utils/helpers';

const ArticleContainer = styled.div`
  height: 470px;
  overflow: hidden;
  overflow-y: auto;
`;

function formatDate(date) {
  return date.substring(0, 17);
}

function createUserName(username) {
  const userArr = username.split(' ');
  const userName = userArr[0][0] + userArr[userArr.length - 1];
  return urlify(userName.toLowerCase());
}

export default function NonGraphQLTrendingStories({ title, content }) {
  return (
    <div className="w-100 mt-4">
      <div className={styles.header}>{title}</div>
      <ArticleContainer className="off-white">
        {content.length > 0 ? (
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
          <div>
            <p className="text-center my-5 py-5">
              <strong>
                Sorry, no articles available
              </strong>
            </p>
          </div>
        )}
      </ArticleContainer>
    </div>
  );
}
