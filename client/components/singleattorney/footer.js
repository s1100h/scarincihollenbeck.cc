import Link from 'next/link';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useSWR from 'swr';
import HomePageLink from 'components/home/page-link';
import lineStyles from 'styles/LineHeader.module.css';

function ClientSection({ slug, clients }) {
  return (
    <>
      <div className={lineStyles.lineHeader}>
        <h3>Clients</h3>
      </div>
      <Row className="mt-2 mb-3">
        {clients.map((article) => (
          <Col sm={12} md={3} key={article.title}>
            <Link href={article.link}>
              <a className="text-center mx-auto d-block">
                <Image
                  alt={article.title}
                  src={
              article.featuredImg || '/images/no-image-found-diamond.png'
            }
                  width={300}
                  height={300}
                  className="rounded"
                />
                <small className="text-dark d-block">
                  <strong>{article.title}</strong>
                </small>
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
        <Col sm={12} md={3} key={article.title}>
          <Link href={article.link}>
            <a className="text-center mx-auto d-block">
              <Image
                alt={article.title}
                src={
              article.image || '/images/no-image-found-diamond.png'
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
      <HomePageLink
        link={`/attorney/${slug}/articles`}
        title="See More Articles"
      />
    </Row>
  );
}

export default function AttorneyProfileFooter({ clients, slug }) {
  const fetcher = (url) => fetch(url).then((data) => data.json());
  const { data, error } = useSWR(`https://wp.scarincihollenbeck.com/wp-json/v2/search/query?offset=1&term=${slug}`, fetcher);

  if (error && clients.length <= 0) {
    return <></>;
  }

  if (error && clients.length > 0) {
    return <ClientSection slug={slug} clients={clients} />;
  }

  if (!data && clients.length <= 0) {
    return (
      <>
        <div className={lineStyles.lineHeader}>
          <h3>News, Events & Articles</h3>
        </div>
        <p>Articles loading...</p>
      </>
    );
  }

  if (!data && clients.length > 0) {
    return (
      <>
        <ClientSection slug={slug} clients={clients} />
        <div className={lineStyles.lineHeader}>
          <h3>News, Events & Articles</h3>
        </div>
        <p>Articles loading...</p>
      </>
    );
  }

  if (data && clients.length <= 0) {
    return (
      <>
        <div className={lineStyles.lineHeader}>
          <h3>News, Events & Articles</h3>
        </div>
        <ArticleSection slug={slug} articles={data.results.filter((_, i) => i <= 3)} />
      </>
    );
  }

  if (data && clients.length > 0) {
    return (
      <>
        <ClientSection slug={slug} clients={clients} />
        <div className={lineStyles.lineHeader}>
          <h3>News, Events & Articles</h3>
        </div>
        <ArticleSection slug={slug} articles={data.results.filter((_, i) => i <= 3)} />
      </>
    );
  }

  // if
  // if (error || clients.length > 0) {
  //   return <ClientSection clients={clients} />
  // }

  // if (!data || clients.length > 0) {
  //   return (
  //     <>
  //       <ClientSection clients={clients} />
  //       <div className={lineStyles.lineHeader}>
  //         <h3>News, Events & Articles</h3>
  //       </div>
  //       <p>Articles loading...</p>
  //     </>
  //   );
  // }

  // if (data || clients.length > 0) {
  //   return (
  //     <>
  //       <ClientSection clients={clients} />
  //       <div className={lineStyles.lineHeader}>
  //         <h3>News, Events & Articles</h3>
  //       </div>
  //       <p>We have articles</p>
  //     </>
  //   );
}
