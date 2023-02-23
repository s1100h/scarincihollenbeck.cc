import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate, createMarkup } from 'utils/helpers';
import {
  NewsContainer,
  TitleNews,
  NewsWrapper,
  FreshNews,
  LinkContainer,
  ArticleNewsTitle,
  Expert,
  Bottom,
  OtherNewsBox,
} from 'styles/FirmNews.style';
import NewsCard from './NewsCard';

const FirmNews = ({ firmNews }) => {
  const { featuredArticle, olderArticles } = useMemo(() => {
    const sortedResults = firmNews.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
    const featuredArticle = sortedResults[0];
    const olderArticles = sortedResults.filter((_, idx) => idx > 0);

    return {
      featuredArticle,
      olderArticles,
    };
  }, [firmNews]);

  return (
    <NewsContainer>
      <TitleNews>Latest From The Firm</TitleNews>
      <NewsWrapper>
        {featuredArticle && (
          <FreshNews>
            <Link href={featuredArticle?.slug} passHref legacyBehavior>
              <LinkContainer>
                <Image
                  src={featuredArticle?.featuredImage?.sourceUrl}
                  width={750}
                  height={350}
                  layout="intrinsic"
                  alt={featuredArticle.title}
                />
                <ArticleNewsTitle>{featuredArticle?.title}</ArticleNewsTitle>
                <Expert dangerouslySetInnerHTML={createMarkup(featuredArticle?.excerpt)} />
                <Bottom>
                  <span>
                    <strong>Author: </strong>
                    {featuredArticle?.author}
                  </span>
                  <span>
                    <strong>{formatDate(featuredArticle?.date)}</strong>
                  </span>
                </Bottom>
              </LinkContainer>
            </Link>
          </FreshNews>
        )}
        {olderArticles.length > 0 && (
          <OtherNewsBox>
            {olderArticles.map(
              ({
                date, slug, featuredImage, databaseId, title, excerpt, author,
              }) => (
                <NewsCard
                  key={databaseId}
                  postSlug={slug}
                  postImage={featuredImage?.sourceUrl}
                  postTitle={title}
                  postExcerpt={excerpt}
                  postDate={date}
                  postAuthor={author}
                />
              ),
            )}
          </OtherNewsBox>
        )}
      </NewsWrapper>
    </NewsContainer>
  );
};

export default FirmNews;
