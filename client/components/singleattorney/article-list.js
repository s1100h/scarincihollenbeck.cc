import React, { useState } from 'react';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { createMarkup } from 'utils/helpers';

function ArticleDetails({ uri, title, excerpt, date }) {
  return (
    <Link href={uri}>
      <a className="text-dark">
        <h5 className="mb-0">
          <strong>{title}</strong>
        </h5>
        {date && <p className="mb-0"><small>{date}</small></p>}
        <div
          className="mt-1 mb-3"
          dangerouslySetInnerHTML={createMarkup(excerpt)}
        />
      </a>
    </Link>
  );
}

export default function AttorneyArticleList({initalArticles, term }) {
  const [loading, setLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(2);
  const [error, setError] = useState(false);
  const [articleList, setArticleList] = useState(initalArticles || []);

  async function handleClick() {
    setLoading(true);
    setPageIndex((newIndex) => (newIndex += 1));
    const url = `https://wp.scarincihollenbeck.com/wp-json/v2/search/query?offset=${pageIndex}&term=${term}`;

    const getOlderPosts = await fetch(url)
      .then((data) => data.json())
      .catch((err) => setError(err));

    if (!getOlderPosts) {
      setLoading(false);
    }

    if (getOlderPosts.results) {
      getOlderPosts.results.shift();
      setLoading(false);
      setArticleList((articles) => [...articles, ...getOlderPosts.results]);
    }
  }

  console.log('articleList');
  console.log('===========');
  console.log(articleList);

  return (
    <Row>
      {error ? (
        <p>
          <strong>There was an error loading more posts...</strong>
        </p>
      ) : (
        articleList
        && articleList.map((article) => (
          <Col key={article.title} sm={12} md={10} className="mx-3 mb-2">
            <ArticleDetails
              uri={article.link}
              title={article.title}
              excerpt={article.description}
              date={article.date}
            />
          </Col>
        ))
      )}
      <Col sm={12}>
        <Button
          variant="danger"
          className="px-4 mx-3 mb-3"
          onClick={() => handleClick()}
        >
          {loading ? <>Loading...</> : <>Load more posts</>}
        </Button>
      </Col>
    </Row>
  );
}