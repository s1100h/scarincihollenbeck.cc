import Router from 'next/router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import NewsScroller from 'components/news-scroller';

export default function Body({
  results,
  pages,
  currentPage,
  news,
  insight,
  events,
  pathname,
  q,
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
    <Container>
      <Row>
        <Col sm={12} md={6}>
          {results.map((r, i) => (i < 5) && (
            <div className="p-2" key={r.id}>
              <a href={r.link} className="top-article">
                <h5 className="mb-0">{r.title}</h5>
                <p className="mt-0 mb-3 text-muted small-excerpt">
                  {r.description}
                </p>
              </a>
            </div>
          ))}
        </Col>
        <Col sm={12} md={6}>
          {results.map((r, i) => (i > 5) && (
            <div className="p-2" key={r.id}>
              <a href={r.link} className="top-article">
                <h5 className="mb-0">{r.title}</h5>
                <p className="mt-0 mb-3 text-muted small-excerpt">
                  {r.description}
                </p>
              </a>
            </div>
          ))}
        </Col>
        <Col sm={12}>
          <Pagination>
            <Pagination.First rel="prev" onClick={(e) => handlePagination(e, 1)} />
            <Pagination.Prev rel="prev" onClick={(e) => handlePagination(e, prev)} />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item onClick={(e) => handlePagination(e, pages)}>{pages}</Pagination.Item>
            <Pagination.Next rel="next" onClick={(e) => handlePagination(e, next)} />
            <Pagination.Last rel="next" onClick={(e) => handlePagination(e, pages)} />
          </Pagination>
        </Col>
        <Col sm={12}>
          <NewsScroller title="Firm News" articles={news} />
          <NewsScroller title="Firm Events" articles={insight} />
          <NewsScroller title="Firm Insights" articles={events} />
        </Col>
      </Row>
    </Container>
  );
}
