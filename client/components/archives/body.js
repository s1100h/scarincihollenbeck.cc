import Router from 'next/router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import NewsScroller from '../news-scroller';
import styles from 'styles/Archives.module.css';
import fontStyles from 'styles/Fonts.module.css'

export default function Body({
  results,
  pages,
  currentPage,
  news,
  insight,
  events,
  pathname,
  q
}) {

  function handlePagination(e, page) {
    e.preventDefault();

    Router.push({
      pathname,
      query: { q, page },
    });
  }

  const next = parseInt(currentPage, 10) + 1;
  const prev = parseInt(currentPage, 10) - 1;

  return (
    <Container className="px-0">
      <Row>
        <Col sm={12} md={6} className="px-0">
          {results.map((r, i) => (i < 5) && (
            <div className="p-2" key={r.id}>
              <a href={r.link} className={styles.topArticle}>
                <h5 className="mb-0">{r.title}</h5>
                <p className={`${fontStyles.smallExcerpt} mt-0 mb-3 text-muted`}>
                  {r.description}
                </p>
              </a>
            </div>
          ))}
        </Col>
        <Col sm={12} md={6} className="px-0">
          {results.map((r, i) => (i > 5) && (
            <div className="p-2" key={r.id}>
              <a href={r.link} className={styles.topArticle}>
                <h5 className="mb-0">{r.title}</h5>
                <p className={`${fontStyles.smallExcerpt} mt-0 mb-3 text-muted`}>
                  {r.description}
                </p>
              </a>
            </div>
          ))}
        </Col>
        <Col sm={12}>
          <Pagination>
            <Pagination.First rel="prev" onClick={(e) => handlePagination(e, 1)} />
            <Pagination.Prev  rel="prev" onClick={(e) => handlePagination(e, prev)} />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item onClick={(e) => handlePagination(e, pages)}>{pages}</Pagination.Item>
            <Pagination.Next rel="next" onClick={(e) => handlePagination(e, next)} />
            <Pagination.Last rel="next" onClick={(e) => handlePagination(e, pages)} />
          </Pagination>
        </Col>
        <Col sm={12}>
          <NewsScroller title="Firm News" articles={news} />
          <NewsScroller title="Firm Events" articles={events} />
          <NewsScroller title="Firm Insights" articles={insight} />
        </Col>
      </Row>
    </Container>
  );
}
