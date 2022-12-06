import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatSrcToCloudinaryUrl, formatDate, createMarkup } from 'utils/helpers';
import parse from 'html-react-parser';
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
  OtherNews,
  TextNews,
} from 'styles/FirmNews.style';

const formatPost = (post) => ({
  id: post.id,
  title: post.title.rendered,
  url: post.link.replace('https://scarincihollenbeck.com', ''),
  author: post.yoast_head_json.author,
  date: post.date,
  excerpt: post.excerpt.rendered,
  imageText: post.content.rendered,
});

const FirmNews = () => {
  const [featuredArticle, setFeaturedArticle] = useState();
  const [olderArticles, setOlderArticles] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const url = 'https://wp.scarincihollenbeck.com/wp-json/wp/v2/posts?categories=98,99&per_page=4';
        const res = await fetch(url);
        const resToJson = await res.json();
        const sortedResults = resToJson.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
        const firstArticle = formatPost(sortedResults[0]);
        const restOfArticles = sortedResults
          .filter((_, idx) => idx > 0)
          .map((post) => formatPost(post));
        setFeaturedArticle(firstArticle);
        setOlderArticles(restOfArticles);
      } catch (error) {
        throw new Error(error.message);
      }
    };

    fetchPosts();
  }, []);
  return (
    <NewsContainer>
      <TitleNews>Latest From The Firm</TitleNews>
      <NewsWrapper>
        {featuredArticle && (
          <FreshNews>
            <Link href={featuredArticle.url} passHref>
              <LinkContainer>
                <Image
                  src={formatSrcToCloudinaryUrl(
                    featuredArticle.imageText.slice(
                      featuredArticle.imageText.indexOf('src="'),
                      featuredArticle.imageText.indexOf('" alt="'),
                    ),
                  )}
                  width={750}
                  height={350}
                  layout="intrinsic"
                  alt={featuredArticle.title}
                />
                <ArticleNewsTitle>{featuredArticle.title}</ArticleNewsTitle>
                <Expert dangerouslySetInnerHTML={createMarkup(featuredArticle.excerpt)} />
                <Bottom>
                  <span>
                    <strong>Author: </strong>
                    {featuredArticle.author}
                  </span>
                  <span>
                    <strong>{formatDate(featuredArticle.date)}</strong>
                  </span>
                </Bottom>
              </LinkContainer>
            </Link>
          </FreshNews>
        )}
        {olderArticles.length > 0 && (
          <OtherNewsBox>
            {olderArticles.map((post) => (
              <OtherNews key={post.id}>
                <Link href={post.url}>
                  <a>
                    <div>
                      <Image
                        src={formatSrcToCloudinaryUrl(
                          post.imageText.slice(
                            post.imageText.indexOf('src="'),
                            post.imageText.indexOf('" alt="'),
                          ),
                        )}
                        alt={post.title}
                        width={750}
                        height={350}
                        layout="intrinsic"
                      />
                    </div>
                    <TextNews>
                      <h2>{parse(post.title)}</h2>
                      <section dangerouslySetInnerHTML={createMarkup(post.excerpt)} />
                      <p>
                        <span>
                          <strong>Author : </strong>
                          {post.author}
                        </span>
                        <span>
                          <strong>{formatDate(post.date)}</strong>
                        </span>
                      </p>
                    </TextNews>
                  </a>
                </Link>
              </OtherNews>
            ))}
          </OtherNewsBox>
        )}
      </NewsWrapper>
    </NewsContainer>
  );
};

export default FirmNews;
