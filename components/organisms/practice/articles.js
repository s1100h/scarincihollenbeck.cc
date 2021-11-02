/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ClipLoader from 'react-spinners/ClipLoader';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

const removeDuplicates = (arr) => arr.filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i);

const ArticleTitle = ({ title }) => <p className={grayTitleStyles.title}>{title}</p>;

export default function PracticeArticles({ initalArticles, title, articleLoading }) {
  const [loading, setLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(11);

  async function handleClick() {
    setLoading(true);
    setPageIndex((pi) => (pi += 11));
    setLoading(false);
  }

  if (articleLoading) {
    return (
      <Row className="mt-3">
        <Col sm={12} className="mx-auto mt-3 my-5 text-center">
          <ArticleTitle title={title} />
          <ClipLoader size={32} color="#DB0222" />
        </Col>
      </Row>
    );
  }

  if (initalArticles.length > 0) {
    return (
      <Col sm={12} className="my-3">
        <ArticleTitle title={title} />
        <Row>
          {removeDuplicates(initalArticles)
            .filter((_, i) => i <= pageIndex)
            .map((article) => (
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
          {initalArticles.length > 0 && (
            <Col sm={12}>
              <Button variant="danger" className="px-4 mx-3 mb-3" onClick={() => handleClick()}>
                Load more posts
              </Button>
            </Col>
          )}
        </Row>
      </Col>
    );
  }

  return (
    <Col sm={12} className="my-3">
      <ArticleTitle title={title} />
      <p className="text-center">
        <strong>Thare are no articles or blow posts for this practice area.</strong>
      </p>
    </Col>
  );
}
