import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { formatSrcToCloudinaryUrl, formatDate, createMarkup } from 'utils/helpers';
import lineStyles from 'styles/LineHeader.module.css';

const formatPost = (post) => ({
  id: post.id,
  title: post.title.rendered,
  url: post.link.replace('https://scarincihollenbeck.com', ''),
  author: post.yoast_head_json.author,
  date: post.date,
  excerpt: post.excerpt.rendered,
  image: formatSrcToCloudinaryUrl(post.better_featured_image.source_url.replace('Feature', 'Body')),
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
              <a className="text-dark">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  width={750}
                  height={350}
                  layout="intrinsic"
                />
                <p className="h5">
                  <strong>{featuredArticle.title}</strong>
                </p>
                <div dangerouslySetInnerHTML={createMarkup(featuredArticle.excerpt)} />
              </a>
            </Link>
            <p>{formatDate(featuredArticle.date)}</p>
          </div>
        )}
        {olderArticles.length > 0 && (
          <div>
            {olderArticles.map((post) => (
              <div
                key={post.id}
                className={`${lineStyles.shadow} ${lineStyles.pItem} d-flex flex-column mb-4`}
              >
                <Link href={post.url}>
                  <a className={`${lineStyles.itemSmoll} text-dark`}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={350}
                      height={150}
                      layout="intrinsic"
                    />
                    <p className="mb-0">
                      <strong>{post.title}</strong>
                      <strong>Author: </strong>
                      {post.author}
                      <strong>{formatDate(post.date)}</strong>
                    </p>
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
