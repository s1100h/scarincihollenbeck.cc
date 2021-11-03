import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleSubHeader from 'layouts/single-sub-header';
import BodyHeader from 'components/organisms/library/body-header';
import MainArticle from 'components/organisms/library/main-article';
import FeaturedArticle from 'components/organisms/library/featured-article';
import PopularList from 'components/organisms/library/popular-list';
import FirmAuthors from 'components/organisms/library/firm-authors';
import ArticleArchives from 'components/organisms/library/article-archives';

import { CLIENT_ALERTS } from 'utils/constants';

const filterNoPosts = (category) => category.filter((item) => item.postCount > 1);

const getLastWord = (words) => {
  const n = words.split(' ');
  return n[n.length - 1];
};

export default function LibraryPage({
  results,
  authors,
  popularCategories,
  childrenOfCurrentCategory,
  categoryName,
  description,
  seo,
  categoryId,
}) {
  const mainArticle = results[0];
  const featuredArticles = results.slice(1, results.length);

  const sortedAuthors = authors
    .map((author) => ({
      username: author.user_nicename,
      fullName: author.display_name,
      lastName: getLastWord(author.display_name),
    }))
    .sort((a, b) => (a.lastName > b.lastName ? 1 : -1));

  return (
    <>
      {Object.keys(seo).length > 0 && (
        <NextSeo title={seo.title} description={seo.metaDescription} canonical={seo.canonicalUrl} />
      )}
      <SingleSubHeader span={7} offset={2} title={categoryName} subtitle={description} />
      <Container className="border mb-5">
        <Row>
          <BodyHeader />
          <Col sm={12} md={9} className="mt-4">
            <MainArticle
              title={mainArticle.title}
              link={mainArticle.link}
              description={mainArticle.description}
              date={mainArticle.date}
              image={
                mainArticle.image ? mainArticle.image : '/images/no-image-found-diamond-750x350.png'
              }
              author={mainArticle.author}
            />
            <ul className="list-unstyled border-top pt-5 mt-5">
              <FeaturedArticle articles={featuredArticles} />
            </ul>
            <div className="border-top border-top pt-4">
              <ArticleArchives categoryId={categoryId} />
            </div>
          </Col>
          <Col sm={12} md={3} className="d-flex flex-column justify-content-start mt-3">
            {childrenOfCurrentCategory.length > 0 && (
              <PopularList
                term="Related Categories"
                list={filterNoPosts(childrenOfCurrentCategory)}
                displayCount
              />
            )}
            <PopularList
              term="Popular Categories"
              list={filterNoPosts(popularCategories)}
              displayCount
            />
            <PopularList term="Client Alerts" list={CLIENT_ALERTS} displayCount={false} />
            <FirmAuthors authors={sortedAuthors} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
