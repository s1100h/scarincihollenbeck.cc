import React, { useState } from 'react';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { createMarkup } from 'utils/helpers';

function ArticleDetails({ uri, title, excerpt }) {
  return (
    <Link href={uri}>
      <a className="text-dark">
        <h5 className="mb-0"><strong>{title}</strong></h5>
        <div
          className="mt-1 mb-3"
          dangerouslySetInnerHTML={createMarkup(excerpt)}
        />
      </a>
    </Link>
  );
}

export default function OlderArticles({ term, initialArticles }) {
  const [pageIndex, setPageIndex] = useState(2);
  const [error, setError] = useState(false);
  const [articleList, setArticleList] = useState(initialArticles || []);

  async function handleClick() {
    setPageIndex(newIndex => newIndex += 1);
    const getOlderPosts = await fetch(`https://wp.scarincihollenbeck.com/wp-json/search/query/${(term) || 'firm-news'}/${pageIndex}`)
      .then((data) => data.json())
      .catch((error) => {
        console.log(new Error(error));
        setError(true);
      });
    if (getOlderPosts.results) {
      getOlderPosts.results.shift();
      setArticleList((articles) => [...articles, ...getOlderPosts.results]);
    }
  }

  return (
    <Row>
      <Col sm={12}>
        <h4 className="mt-2 mb-4 mx-3">
          <strong className="text-capitalize">
            {term.replace(/-/g, ' ')}
            {' '}
            Archives
          </strong>
        </h4>
      </Col>
      {error ? (
        <p><strong>There was an error loading more posts...</strong></p>
      ) : articleList && articleList.map((article) => (
        <Col key={article.imgAlt} sm={12} md={10} className="mx-3 mb-3">
          <ArticleDetails uri={article.link} title={article.title} excerpt={article.description} />
        </Col>
      ))}
      <Col sm={12}>
        <Button
          variant="danger"
          className="px-4 mx-3 mb-3"
          onClick={() => handleClick()}
        >
          Load more posts
        </Button>
      </Col>
    </Row>
  );
}
