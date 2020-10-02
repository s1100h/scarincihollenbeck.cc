import Link from 'next/link';
import styled from 'styled-components';
import { addRandomKey, createMarkup, urlify } from '../utils/helpers';

const ArticleContainer = styled.div`
  height: 470px;
  overflow:hidden;
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

export default function TrendingStories({ title, content }) {

  return (
    <div className="w-100 mt-4">
      <div className="sidebar-title">
        {title}
      </div>
      <ArticleContainer className="off-white">
        {(content !== undefined && content.length > 0) ? content.map((p) => (
          <div key={p.ID || addRandomKey(p.title)} className="p-2">
            <a href={p.link} className="top-article">
              <p className="proxima-bold mb-0">{p.title}</p>
            </a>
            {(p.hasOwnProperty('author') || p.author === 'Scarinci Hollenbeck') && (
            <>
              {(typeof p.author === 'string') && (
              <>
                <strong>Author: </strong>
                <Link href={`/author/${createUserName(p.author)}`}>
                  <a>
                    {p.author}
                  </a>
                </Link>
              </>
              )}
              {(typeof p.author === 'object' && p.author.length > 0) && (
              <>
                <strong>Author: </strong>
                <Link href={`/author/${createUserName(p.author[0].name)}`}>
                  <a>
                    {p.author[0].name}
                  </a>
                </Link>
              </>
              )}
            </>
            )}
            {(p.hasOwnProperty('pubDate')) && <p className="my-0">{formatDate(p.pubDate)}</p>}
            {(p.hasOwnProperty('source')) && <div className="mt-0" dangerouslySetInnerHTML={createMarkup(p.source)} />}
          </div>
        ))
          : <div className="mx-5 p-5"><p>Articles loading...</p></div>}
      </ArticleContainer>
    </div>
  );
}
