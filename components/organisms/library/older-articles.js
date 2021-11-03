import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { BASE_API_URL } from 'utils/constants';

export default function OlderArticles({ initialArticles, query }) {
  const [loading, setLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(2);
  const [url, setUrl] = useState(`${BASE_API_URL}/wp-json/category/posts/${query}/${pageIndex}`);
  const [message, setMessage] = useState('');
  const [articleList, setArticleList] = useState(initialArticles || []);
  const router = useRouter();
  const isAuthor = router.asPath.includes('author');

  useEffect(() => {
    if (isAuthor) {
      setUrl(
        `https://wp.scarincihollenbeck.com/wp-json/author/posts/${router.query.slug}/${pageIndex}`,
      );
    }
  }, [router]);

  async function handleClick() {
    setLoading(true);
    setPageIndex((pi) => (pi += 1));

    const getOlderPosts = await fetch(url)
      .then((data) => data.json())
      .catch((err) => {
        console.error(err);
        setMessage('There was an error loading more posts...');
      });
    if (!getOlderPosts) {
      setLoading(false);
    }

    if (!Object.keys(getOlderPosts).includes('results')) {
      setLoading(false);
      setMessage('There are no more articles for this query...');
    } else {
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
      {message.length > 0 ? (
        <div className="mx-4 mb-4">
          <strong>{message}</strong>
        </div>
      ) : (
        articleList
        && articleList.map((article) => (
          <Col key={article.imgAlt} sm={12} md={10} className="mx-3 mb-3">
            <Link href={article.link}>
              <a className="text-dark">
                <p className="h5 mb-0">
                  <strong>{article.title}</strong>
                </p>
                <p className="d-block mt-1 mb-2">{article.date}</p>
                <p style={{ lineHeight: '1.25', color: '#444' }}>{article.description}</p>
              </a>
            </Link>
          </Col>
        ))
      )}
      <Col sm={12}>
        <Button variant="danger" className="px-4 mx-3 mb-3" onClick={() => handleClick()}>
          {loading ? <>Loading...</> : <>Load more posts</>}
        </Button>
      </Col>
    </Row>
  );
}
