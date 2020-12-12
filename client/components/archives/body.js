import Router from 'next/router';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import styles from 'styles/Archives.module.css';
import fontStyles from 'styles/Fonts.module.css';
import { createMarkup, limitTitleLength } from 'utils/helpers';
import NewsScroller from '../news-scroller';

function ArticleDetails({ uri, title, excerpt }) {
  return (
    <Link href={uri}>
      <a className={styles.topArticle}>
        <h5 className="mb-0">{title}</h5>
        <div
          className={`${fontStyles.smallExcerpt} mt-1 mb-3 text-muted`}
          dangerouslySetInnerHTML={createMarkup(limitTitleLength(excerpt))}
        />
      </a>
    </Link>
  );
}
export default function ArchivesBody({
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
    const isAuthorPage = pathname.indexOf('author') > -1;

    if (!isAuthorPage) {
      Router.push({
        pathname,
        query: { q, page },
      });
    }

    if (isAuthorPage) {
      Router.push({
        query: {
          name: pathname.split('/')[2],
          page,
        },
      });
    }
  }

  const next = parseInt(currentPage, 10) + 1;
  const prev = parseInt(currentPage, 10) - 1;

  return (
    <Container className="px-0">
      <Row>
        <Col sm={12} md={6} className="px-0">
          {results.map(
            (r, i) => i < 5 && (
            <div className="p-2" key={r.node.id}>
              <ArticleDetails
                uri={r.node.uri}
                title={r.node.title}
                excerpt={r.node.excerpt}
              />
            </div>
            ),
          )}
        </Col>
        <Col sm={12} md={6} className="px-0">
          {results.map(
            (r, i) => i > 5 && (
            <div className="p-2" key={r.node.id}>
              <ArticleDetails
                uri={r.node.uri}
                title={r.node.title}
                excerpt={r.node.excerpt}
              />
            </div>
            ),
          )}
        </Col>
        <Col sm={12}>
          <Pagination>
            <Pagination.First
              rel="prev"
              onClick={(e) => handlePagination(e, 1)}
            />
            <Pagination.Prev
              rel="prev"
              onClick={(e) => handlePagination(e, prev)}
            />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item onClick={(e) => handlePagination(e, pages)}>
              {pages}
            </Pagination.Item>
            <Pagination.Next
              rel="next"
              onClick={(e) => handlePagination(e, next)}
            />
            <Pagination.Last
              rel="next"
              onClick={(e) => handlePagination(e, pages)}
            />
          </Pagination>
        </Col>
        <Col sm={12}>
          <NewsScroller
            title="Firm News"
            articles={news.data.category.posts.edges}
          />
          <NewsScroller
            title="Firm Events"
            articles={events.data.category.posts.edges}
          />
          <NewsScroller
            title="Firm Insights"
            articles={insight.data.category.posts.edges}
          />
        </Col>
      </Row>
    </Container>
  );
}
