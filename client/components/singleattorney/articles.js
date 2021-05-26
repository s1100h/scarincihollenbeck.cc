/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import marginStyles from 'styles/Margins.module.css';

export default function AttorneyProfileArticles({ initalArticles, term }) {
  const [loading, setLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(11);
  const [error, setError] = useState(false);
  const [articleList, setArticleList] = useState(initalArticles.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1)) || []);

  async function handleClick() {
    setLoading(true);
    setPageIndex(pageIndex => pageIndex += 11);
    setLoading(false);
  }

  return (
    <Row className={marginStyles.mtMinusMd2}>
      <Col sm={12}>
        <h4 className={grayTitleStyles.title}>News, Events, & Articles</h4>
      </Col>
      {error ? (
        <p>
          <strong>There was an error loading more posts...</strong>
        </p>
      ) : articleList.filter((_, i) => i <= pageIndex).map((article) => (
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
