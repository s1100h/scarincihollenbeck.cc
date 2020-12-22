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
              {c.node.hasOwnProperty('author') && (
                <span className={`${fontStyles.smallExcerpt} d-block`}>
                  <strong>Author:</strong>
                  {' '}
                  <Link
                    href={
                      c.node.author.node.uri === '/author/scarinci-hollenbeck/'
                        ? '/'
                        : c.node.author.node.uri
                    }
                  >
                    <a className="text-dark">{c.node.author.node.name}</a>
                  </Link>
                </span>
              )}
            </li>
          ))}
        </ul>
      </ArticleContainer>
    </div>
  );
}
