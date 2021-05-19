/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function AttorneyProfileArticles({ initalArticles, term }) {
  const [loading, setLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(2);
  const [error, setError] = useState(false);
  const [articleList, setArticleList] = useState(initalArticles.filter((_, i) => i <= 5) || []);

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

  return (
    <Row className="mt-2">
      {error ? (
        <p>
          <strong>There was an error loading more posts...</strong>
        </p>
      ) : articleList.map((article) => (
        <Col sm={12} md={4} key={article.title} className="my-3">
          <Link href={article.link}>
            <a className="text-center mx-auto d-block">
              <Image
                alt={article.title}
                src={
                    article.image || article.featuredImg || '/images/no-image-found-diamond.png'
                  }
                width={300}
                height={150}
                className="rounded"
              />
              <small className="text-dark d-block">
                <strong>{article.title}</strong>
              </small>
            </a>
          </Link>
        </Col>
      ))}
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
