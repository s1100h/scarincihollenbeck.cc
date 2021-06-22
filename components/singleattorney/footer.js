import Link from 'next/link';
import Image from 'next/image';
import SiteLoader from 'components/site-loader';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomePageLink from 'components/home/page-link';
import lineStyles from 'styles/LineHeader.module.css';

function ClientSection({ slug, clients }) {
  return (
    <>
      <div className={lineStyles.lineHeader}>
        <h3>Clients</h3>
      </div>
      <Row className="mt-2">
        {clients.map((article) => (
          <Col sm={12} md={4} key={article.title}>
            <Link href={article.link}>
              <a className="text-center mx-auto d-block">
                <Image
                  alt={article.title}
                  src={
                    article.featuredImg || '/images/no-image-found-diamond.png'
                  }
                  width={200}
                  height={200}
                  className="rounded"
                />
              </a>
            </Link>
          </Col>
        ))}
        <HomePageLink
          link={`/attorney/${slug}/clients`}
          title="See More Clients"
        />
      </Row>
    </>
  );
}

function ArticleSection({ articles, slug }) {
  return (
    <Row className="mt-5 mb-3">
      {articles.map((article) => (
        <Col sm={12} md={3} key={article.title} className="mb-4">
          <Link href={article.link}>
            <a className="text-center mx-auto d-block">
              <Image
                alt={article.title}
                src={article.image || '/images/no-image-found-diamond.png'}
                width={300}
                height={150}
                className="rounded"
              />
            </a>
          </Link>
        </Col>
      ))}
      <HomePageLink
        link={`/attorney/${slug}/articles`}
        title="See More Articles"
      />
    </Row>
  );
}

export default function AttorneyProfileFooter({ clients, articles, slug }) {
   if (articles.length <= 0 && clients.length <= 0) {
    return (
      <div style={{ minHeight: '20vh'}}>
        <SiteLoader />
      </div>
    );
  }

  if (articles.length <= 0 && clients.length > 0) {
    return <ClientSection slug={slug} clients={clients} />;
  }

  if (articles.length > 0 && clients.length <= 0) {
    return (
      <>
        <div className={lineStyles.lineHeader}>
          <h3>News, Events & Articles</h3>
        </div>
        <ArticleSection
          slug={slug}
          articles={articles}
        />
      </>
    );
  }

  if (articles.length > 0 && clients.length > 0) {
    return (
      <>
        <ClientSection slug={slug} clients={clients} />
        <br />
        <div className={lineStyles.lineHeader}>
          <h3>News, Events & Articles</h3>
        </div>
        <ArticleSection
          slug={slug}
          articles={articles}
        />
      </>
    );
  }
}
