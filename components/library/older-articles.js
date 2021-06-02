import React, { useState } from 'react';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function OlderArticles({ initialArticles, query }) {
  const [loading, setLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(2);
  const [error, setError] = useState(false);
  const [articleList, setArticleList] = useState(initialArticles || []);

  async function handleClick() {
    setLoading(true);
    setPageIndex((newIndex) => (newIndex += 1));
    const url = `https://wp.scarincihollenbeck.com/wp-json/v2/search/query?offset=${pageIndex}&${query}`;

    const getOlderPosts = await fetch(url)
      .then((data) => data.json())
      .catch((err) => setError(err));

    if (!getOlderPosts) {
      setLoading(false);
    }

    console.log('articleList');
    console.log(articleList);

    if (getOlderPosts.results) {
      getOlderPosts.results.shift();
      setLoading(false);
      setArticleList((articles) => [...articles, ...getOlderPosts.results]);
    }
  }
  return (
    <Row>
      <Col sm={12}>
        <h4 className="mt-2 mb-4 mx-3">
          <strong className="text-capitalize">Archives</strong>
        </h4>
      </Col>
      {error ? (
        <p>
          <strong>There was an error loading more posts...</strong>
        </p>
      ) : (
        articleList
        && articleList.map((article) => (
          <Col key={article.imgAlt} sm={12} md={10} className="mx-3 mb-3">
            <Link href={article.link}>
              <a className="text-dark">
                <h5 className="mb-0">
                  <strong>{article.title}</strong>
                </h5>
                <p className="d-block mt-1 mb-2">{article.date}</p>
                <p style={{ lineHeight: '1.25', color: '#444' }}>
                  {article.description}
                </p>
              </a>
            </Link>
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
