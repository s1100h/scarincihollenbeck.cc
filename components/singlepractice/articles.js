/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ClipLoader from 'react-spinners/ClipLoader';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
const sortedArticles = articles => articles.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
const pruneArticles = articles => articles.filter((a, b) => {
  if (a.link.indexOf('practices') > 0) {
    return false;
  }

  if (a.link.indexOf('careers') > 0) {
    return false;
  }

  return true;
});

export default function AttorneyProfilePractice({ initalArticles, term }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pageIndex, setPageIndex] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [articleList, setArticleList] = useState(sortedArticles(initalArticles) || []);


  async function handleClick(term) {
    await setPageIndex(pageIndex => pageIndex + 1);
    await setLoading(true);

    const request = await fetch(`https://wp.scarincihollenbeck.com/wp-json/v2/search/query?offset=${pageIndex}&term=${term}`)
      .then((data) => data.json())
      .catch((err) => setError(err));
    
    const prunedArticles = await pruneArticles([...articleList, ...request.results]);
    const prunedArticlesOfDuplicates = await prunedArticles.filter((thing, index, self) =>
      index === self.findIndex((t) => (
        t.id === thing.id
      ))
    );

    await setTotalPages(request.pages);
    await setArticleList(prunedArticlesOfDuplicates);
    await setLoading(false);
  };

  if (error) {
    return (
      <Row>
        <Col sm={12} className="my-3">
          <p className="text-center">
            <strong>{error}</strong>
          </p>
        </Col>
      </Row>
    )
  } else {
    return (
      <Row>
        <Col sm={12}>
          <h4 className={grayTitleStyles.title}>News, Events, & Articles</h4>
        </Col>
        {initalArticles.length <= 0 ? (
          <Col sm={12} className="my-3">
            <p className="text-center">
              <strong>This attorney does not have any published articles or blog posts.</strong>
            </p>
          </Col>
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
        {pageIndex <= totalPages && (
          <Col sm={12}>
            <Button
              variant="danger"
              className="px-4 mx-3 mb-3"
              onClick={() => handleClick(term)}
            >
              {loading ? <ClipLoader loading={loading} size={12} color="#FFF" /> : <>Load more posts</>}
            </Button>
          </Col>
        )}
      </Row>
    );
  }


}
