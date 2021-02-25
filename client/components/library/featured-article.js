import Link from 'next/link';
import styles from 'styles/ArticleHero.module.css';

export default function FeaturedArticle({ articles }) {
  return articles.map((article) => (
    <li key={article.id} className="d-flex mb-5">
      <Link href={article.link}>
        <a className={`${styles.link} ${styles.list}`}>
          <img
            src={(article.image) ? article.image : '/images/no-image-found-diamond-750x350.png'}
            alt={article.title}
            width="300px"
            height="139px"
            layout="intrinsic"
            className="rounded"
          />
          <div className={styles.listArticleTitle}>
            <h4 className="mb-1">
              <strong>{article.title}</strong>
            </h4>
            <p className="mt-0 pt-0">
              {article.description}
            </p>
          </div>
        </a>
      </Link>
    </li>
  ));
}
