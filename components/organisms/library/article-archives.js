import { useState, useEffect } from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ClipLoader from 'react-spinners/ClipLoader';
import Axios from 'axios';
import { BASE_API_URL } from 'utils/constants';
import { formatDate, createMarkup, extractDescription } from 'utils/helpers';
import ArticlePagination from 'components/molecules/library/pagination';

export default function ArticleArchives({ categoryId }) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [nrofpages, setNumberofpage] = useState(1);

  useEffect(() => {
    const url = `${BASE_API_URL}/wp-json/wp/v2/posts/?categories=${categoryId}`;
    Axios.get(url, {
      params: { page },
    }).then((response) => {
      setNumberofpage(response.headers['x-wp-totalpages']);
      if (page === 1) {
        const modResults = response.data.slice(4, response.data.length);
        setPosts(modResults);
      } else {
        setPosts(response.data);
      }
    });
  }, [page, setPosts, categoryId]);

  const handlePrevPage = () => setPage(page - 1 ? page - 1 : 1);
  const handleNextPage = () => setPage(page < nrofpages ? page + 1 : nrofpages);

  return (
    <Row>
      <Col sm={12}>
        <h4 className="mb-3 mx-3">
          <strong className="text-capitalize">Older Articles</strong>
        </h4>
      </Col>
      {posts.length > 0 ? (
        <>
          <Col sm={12}>
            <ArticlePagination
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
              setPage={setPage}
              page={page}
              nrofpages={nrofpages}
            />
          </Col>
          {posts.map((post) => (
            <Col key={post.id} sm={12} md={10} className="mx-3 mb-4">
              <Link href={post.link.replace('https://wp.scarincihollenbeck.com', '')}>
                <a className="text-dark">
                  <p className="h5 mb-0">
                    <strong>{post.title.rendered}</strong>
                  </p>
                  <p className="d-block mt-1 mb-2">{formatDate(post.date)}</p>
                  <div
                    style={{ lineHeight: '1.25', color: '#444' }}
                    dangerouslySetInnerHTML={createMarkup(
                      extractDescription(post.excerpt.rendered),
                    )}
                  />
                </a>
              </Link>
            </Col>
          ))}
          <Col sm={12}>
            <ArticlePagination
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
              setPage={setPage}
              page={page}
              nrofpages={nrofpages}
            />
          </Col>
        </>
      ) : (
        <div className="w-100 text-center m-4">
          <ClipLoader size={32} color="#DB2220" />
        </div>
      )}
    </Row>
  );
}
