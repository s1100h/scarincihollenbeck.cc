import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { formatSrcToCloudinaryUrl, formatDate, createMarkup } from 'utils/helpers';
import lineStyles from 'styles/LineHeader.module.css';
import parse from 'html-react-parser';

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
  const [featuredArticle, setFeaturedArticle] = useState({});
  const [olderArticles, setOlderArticles] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const url = 'https://wp.scarincihollenbeck.com/wp-json/wp/v2/posts?categories=98,99&per_page=4';
      const request = await fetch(url)
        .then((data) => data.json())
        .catch((err) => err.json());
      const sortedResults = request.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
      const firstArticle = formatPost(sortedResults[0]);
      const restOfArticles = sortedResults.filter((_, i) => i > 0).map((post) => formatPost(post));

      setFeaturedArticle(firstArticle);
      setOlderArticles(restOfArticles);
    };

    const featuredArticlesEmpty = Object.keys(featuredArticle).length === 0;
    const olderArticlesEmpty = olderArticles.length === 0;
    if (featuredArticlesEmpty && olderArticlesEmpty) {
      fetchPosts();
    }
  }, []);

  return (
    <div className="wrapper-section">
      <h3 className="title-block">Latest From The Firm</h3>
      <div className={lineStyles.firmNews}>
        {Object.keys(featuredArticle).length > 0 && (
          <div className={`${lineStyles.shadow} ${lineStyles.pItem} `}>
            <Link href={featuredArticle.url}>
              <a className={lineStyles.featuredArticle}>
                <img
                  src={formatSrcToCloudinaryUrl(
                    featuredArticle.imageText.slice(
                      featuredArticle.imageText.indexOf('src="'),
                      featuredArticle.imageText.indexOf('" alt="'),
                    ),
                  )}
                  alt={featuredArticle.title}
                />
                <h4>{featuredArticle.title}</h4>
                <div
                  className={lineStyles.excerpt}
                  dangerouslySetInnerHTML={createMarkup(featuredArticle.excerpt)}
                />
                <div className={lineStyles.bottom}>
                  <span className={lineStyles.author}>
                    <strong>Author: </strong>
                    {featuredArticle.author}
                  </span>
                  <span className={lineStyles.date}>
                    <strong>{formatDate(featuredArticle.date)}</strong>
                  </span>
                </div>
              </a>
            </Link>
          </div>
        )}
        {olderArticles.length > 0 && (
          <div className={lineStyles.itemSmollWrapper}>
            {olderArticles.map((post) => (
              <div key={post.id} className={`${lineStyles.shadow} ${lineStyles.pItem}`}>
                <Link href={post.url}>
                  <a className={`${lineStyles.itemSmoll} text-dark`}>
                    <Image
                      src={formatSrcToCloudinaryUrl(
                        post.imageText.slice(
                          post.imageText.indexOf('src="'),
                          post.imageText.indexOf('" alt="'),
                        ),
                      )}
                      alt={post.title}
                      width={350}
                      height={150}
                      layout="intrinsic"
                    />
                    <div className={lineStyles.itemSmollText}>
                      <h4 className={lineStyles.itemSmollTitle}>{parse(post.title)}</h4>
                      <div className={lineStyles.itemSmollTextBot}>
                        <span>
                          <strong>Author : </strong>
                          {post.author}
                        </span>
                        <span>
                          <strong>{formatDate(post.date)}</strong>
                        </span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FirmNews;
