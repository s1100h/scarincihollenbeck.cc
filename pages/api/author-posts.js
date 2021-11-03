import { formatDate, extractDescription, extractFeaturedImage } from 'utils/helpers';

require('dotenv').config();
const mysql = require('mysql2/promise');

const extractMetaContent = (practice, key) => practice.filter((p) => p.meta_key.includes(key));

export const getAuthorContent = async (slug) => {
  const connection = await mysql.createConnection({
    host: process.env.SITE_HOST,
    port: process.env.SITE_PORT,
    user: process.env.SITE_USER,
    password: process.env.SITE_PASSWORD,
    database: process.env.SITE_DATABASE,
    connectionLimit: 20,
  });

  // post, post meta, post categories, and category name
  const categoryByIDQuery = `SELECT term_id, slug, name FROM ${process.env.TERMS_TABLE} WHERE term_id = ?`;
  const popularCategoryQuery = `SELECT term_taxonomy_id, term_id, description, count, parent FROM ${process.env.TERMS_TAXONOMY} WHERE parent = 599 AND taxonomy = 'category' ORDER BY count DESC LIMIT 10`;
  const authorsQuery = `SELECT ${process.env.AUTHORS_TABLE}.ID, ${process.env.AUTHORS_TABLE}.user_nicename, ${process.env.AUTHORS_TABLE}.display_name FROM ${process.env.AUTHORS_TABLE} LEFT JOIN ${process.env.AUTHORSMETA_TABLE} ON (${process.env.AUTHORS_TABLE}.ID = ${process.env.AUTHORSMETA_TABLE}.user_id) WHERE NOT ${process.env.AUTHORS_TABLE}.user_url ='' AND ${process.env.AUTHORSMETA_TABLE}.meta_value = 'a:1:{s:6:"author";b:1;}'`;
  const firstFourPostsFromAuthorQuery = "SELECT ID, post_date, post_content, post_title, post_name FROM sh_db_prod.wp_posts WHERE post_author = ? AND post_status = 'publish' ORDER BY post_date DESC LIMIT 4;";
  const authorsIdQuery = `SELECT ID, user_url FROM ${process.env.AUTHORS_TABLE} WHERE user_nicename = ?`;
  const postContentQuery = `SELECT ID, post_author, post_date, post_title, post_name, post_content FROM ${process.env.POST_TABLE} WHERE ID= ?`;
  const postAuthorMetaQuery = `SELECT meta_key, meta_value FROM ${process.env.AUTHORSMETA_TABLE} WHERE user_id = ?`;

  // get the categories with the most posts
  const [categoryCount] = await connection.execute(popularCategoryQuery);
  const popularCategories = [];

  for (let i = 0; i < categoryCount.length; i++) {
    const [popCategories] = await connection.execute(categoryByIDQuery, [categoryCount[i].term_id]);
    const category = popCategories[0];

    popularCategories.push({
      id: category.term_id,
      slug: category.slug,
      name: category.name,
      postCount: categoryCount[i].count,
    });
  }

  // get authors
  const [authorData] = await connection.execute(authorsQuery);
  if (authorData.length <= 0) {
    return {
      status: 404,
    };
  }

  // get authors id
  const [author] = await connection.execute(authorsIdQuery, [slug]);

  if (author.length <= 0) {
    return {
      status: 404,
    };
  }

  // get the authors first 4 posts
  const authorId = author[0].ID;
  const [authorsFirstFourPosts] = await connection.execute(firstFourPostsFromAuthorQuery, [
    authorId,
  ]);

  if (authorsFirstFourPosts.length <= 0) {
    return {
      status: 404,
    };
  }

  // get author meta data
  const [authorMetaData] = await connection.execute(postAuthorMetaQuery, [authorId]);
  const getFirstName = extractMetaContent(authorMetaData, 'first_name');
  const firstName = getFirstName[0].meta_value;
  const getLastName = extractMetaContent(authorMetaData, 'last_name');
  const lastName = getLastName[0].meta_value;
  const getDescription = extractMetaContent(authorMetaData, 'description');
  const description = getDescription[0].meta_value;
  const getMetaDescription = extractMetaContent(authorMetaData, 'wpseo_metadesc');
  const metaDescription = getMetaDescription[0].meta_value;
  const fullName = `${firstName} ${lastName}`;

  const results = [];
  // get initial post content
  for (let i = 0; i < authorsFirstFourPosts.length; i++) {
    const [postData] = await connection.execute(postContentQuery, [authorsFirstFourPosts[i].ID]);
    const post = postData[0];

    results.push({
      id: post.ID,
      title: post.post_title,
      author: fullName,
      date: formatDate(post.post_date),
      description: extractDescription(post.post_content),
      image: extractFeaturedImage(post.post_content),
      link: `/law-firm-insights/${post.post_name}`,
    });
  }

  const response = {
    status: 200,
    data: {
      slug,
      authorId,
      fullName,
      description,
      seo: {
        title: `Legal Blog Articles by ${fullName}`,
        metaDescription,
      },
      profileUrl: author[0].user_url,
      results,
      relatedCategories: [],
      popularCategories,
      authors: authorData,
    },
  };

  return {
    ...response,
  };
};

export default async (req, res) => {
  try {
    const fetchAuthorContent = await getAuthorContent('jscagnelli');

    if (fetchAuthorContent.status === 404) {
      return res.status(404).send({ ...fetchAuthorContent });
    }

    return res.status(200).send({ ...fetchAuthorContent });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ error });
  }
};
