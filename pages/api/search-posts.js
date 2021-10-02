require('dotenv').config();
const mysql = require('mysql2/promise');

export const getPostsFromSearch = async (query, page) => {
  const connection = await mysql.createConnection({
    host: process.env.SITE_HOST,
    port: process.env.SITE_PORT,
    user: process.env.SITE_USER,
    password: process.env.SITE_PASSWORD,
    database: process.env.SITE_DATABASE,
    connectionLimit: 20,
  });

  // post, post meta, post categories, and category name
  const params = 'ID, post_title, post_name, post_author, post_date';
  const postContentQuery = `SELECT ${params} FROM ${process.env.POST_TABLE} WHERE post_content LIKE ? AND post_status = 'publish' ORDER BY post_date DESC LIMIT 30 OFFSET ?`;
  const [posts] = await connection.execute(postContentQuery, [`%${query}%`, page]);

  if (posts.length <= 0) {
    return {
      status: 404,
    };
  }

  const response = {
    query,
    status: 200,
    posts,
  };

  return {
    response,
  };
};

export default async (req, res) => {
  try {
    if (req.method === 'POST') {
      const { query, page } = req.body;

      const executeSearch = await getPostsFromSearch(query, page);
      if (executeSearch.status === 404) {
        return res.status(404).send({ ...executeSearch });
      }

      return res.status(200).send({ ...executeSearch });
    }
    return res.status(500).json({ message: 'Method POST enabled for this route' });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ error });
  }
};
