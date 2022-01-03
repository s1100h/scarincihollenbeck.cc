import Link from 'next/link';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';
import ClientSlider from 'components/molecules/attorney/ClientSlider';
import FooterArticles from 'components/molecules/attorney/FooterArticles';
import HomePageLink from 'components/organisms/home/page-link';
import lineStyles from 'styles/LineHeader.module.css';

function ArticleSection({
  articles, slug, title, type,
}) {
  return (
    <Row className="mt-5 mb-3">
      {articles.map((article) => (
        <Col sm={12} md={3} key={article.title} className="mb-4">
          <Link href={article.link}>
            <a className="text-center mx-auto d-block">
              <Image
                alt={article.title}
                src={article.featuredImg || '/images/no-image-found-diamond.png'}
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
      <HomePageLink link={`/attorney/${slug}/content/${type}`} title={`More ${title}`} />
    </Row>
  );
}

const ProfileFooter = ({ clients, attorneyFooterBlogArticles, attorneyFooterNewsArticles }) => (
  <>
    {clients && (
      <>
        <div className={`${lineStyles.lineHeader} mb-5`}>
          <h3>Clients</h3>
        </div>
        <ClientSlider clients={clients} />
      </>
    )}
    {attorneyFooterNewsArticles && (
      <>
        <div className={lineStyles.lineHeader}>
          <h3>News & Press Releases</h3>
        </div>
        <FooterArticles articles={attorneyFooterNewsArticles} />
      </>
    )}
    {attorneyFooterBlogArticles && (
      <>
        <div className={lineStyles.lineHeader}>
          <h3>Blogs & Client Alerts</h3>
        </div>
        <FooterArticles articles={attorneyFooterBlogArticles} />
      </>
    )}
  </>
);

export default ProfileFooter;
