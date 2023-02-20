import NewsCard from '../home/FirmNews/NewsCard';

export default function FeaturedArticle({ articles }) {
  return articles.map((article) => (
    <NewsCard
      key={article.ID || article.databaseId}
      postSlug={article.link}
      postImage={article.image ? article.image : '/images/no-image-found-diamond-750x350.png'}
      postTitle={article.title}
      postDate={article.date}
      postAuthor={article.author || 'Author not found'}
      postExcerpt={article.excerpt || article.description}
    />
  ));
}
