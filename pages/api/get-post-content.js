require('dotenv').config();
const mysql = require('mysql2/promise');
const { formatDate } = require('../../utils/helpers');

export const getPostContent = async (slug, category) => {
  const connection = await mysql.createConnection({
    host: process.env.SITE_HOST,
    port: process.env.SITE_PORT,
    user: process.env.SITE_USER,
    password: process.env.SITE_PASSWORD,
    database: process.env.SITE_DATABASE,
    connectionLimit: 20,
  });

  // post, post meta, post categories, and category name
  const postContentQuery = `SELECT ID, post_author, post_date, post_title, post_content FROM ${process.env.POST_TABLE} WHERE post_name= ?`;
  const postMetaQuery = `SELECT meta_key, meta_value FROM ${process.env.POSTMETA_TABLE} WHERE post_id = ?`;
  const postCategoriesQuery = `SELECT term_taxonomy_id FROM ${process.env.TERM_RELATIONSHIPS_TABLE} WHERE object_id = ?`;
  const currentCategoryFromSlugQuery = `SELECT term_id FROM ${process.env.TERMS_TABLE} WHERE slug = ?`;
  const currentTagsFromIdQuery = `SELECT term_id, name FROM ${process.env.TERMS_TABLE} WHERE term_id = ?`;
  const getTagsFromIdQuery = `SELECT term_id, taxonomy FROM ${process.env.TERMS_TAXONOMY} WHERE term_taxonomy_id = ?`;
  const postAuthorQuery = `SELECT ID, user_url, display_name FROM ${process.env.AUTHORS_TABLE} WHERE user_nicename = ?`;
  const postAuthorMetaQuery = `SELECT meta_key, meta_value FROM ${process.env.AUTHORSMETA_TABLE} WHERE user_id = ?`;

  const [post] = await connection.execute(postContentQuery, [slug]);
  const [postMeta] = await connection.execute(postMetaQuery, [post[0].ID]);
  const [tagsMeta] = await connection.execute(postCategoriesQuery, [post[0].ID]);
  const [catSlug] = await connection.execute(currentCategoryFromSlugQuery, [category]);

  const subTitle = post[0].post_content.match(/<h2(?:.*)>(.*?)<\/h2>/g)[0];
  const featuredImage = post[0].post_content.match(/src="([^"]*)"/g)[0].split('"')[1];
  const featuredImageCaption = post[0].post_content.match(
    /<\s*figcaption(?:.*)>(.*)<\/figcaption>/g,
  );
  const fullImage = post[0].post_content.match(/<figure(?:.*)>(.*?)<\/figure>/g)[0];
  const bodyContent = post[0].post_content.replace(subTitle, '').replace(fullImage, '');

  const postTags = tagsMeta.map((tag) => tag.term_taxonomy_id);

  const allTagsMeta = [];
  const allTags = [];

  /**
   *  Extract all the tag information from id
   */
  for (let i = 0; i < postTags.length; i++) {
    const [row] = await connection.execute(getTagsFromIdQuery, [postTags[i]]);

    allTagsMeta.push(row);
  }

  /**
   *  Get all usable tag information from meta tag ids
   */

  for (let i = 0; i < allTagsMeta.length; i++) {
    const [row] = await connection.execute(currentTagsFromIdQuery, [allTagsMeta[i][0].term_id]);

    allTags.push({
      id: row[0].term_id,
      name: row[0].name,
      label: allTagsMeta[i][0].taxonomy,
    });
  }

  /** *
   *  Get all authors
   */
  const postAuthors = allTags.filter((tag) => tag.label === 'author');
  const authorData = [];

  for (let i = 0; i < postAuthors.length; i++) {
    const authorName = postAuthors[i].name === 'Scarinci Hollenbeck' ? 'scarinci-hollenbeck' : postAuthors[i].name;
    const [author] = await connection.execute(postAuthorQuery, [authorName]);

    // get the authors description
    const [authorMeta] = await connection.execute(postAuthorMetaQuery, [author[0].ID]);

    const authorDescription = authorMeta.filter((meta) => meta.meta_key === 'description')[0]
      .meta_value;

    authorData.push({
      ...author[0],
      authorDescription,
    });
  }

  const categories = allTags.filter((tag) => tag.label === 'category');
  const tags = allTags.filter((tag) => tag.label === 'post_tag');
  const postFound = categories.filter((cat) => cat.id === catSlug[0].term_id);

  const response = {
    status: 200,
    postId: post[0].ID,
    postQueryCategoryId: catSlug[0].term_id,
    post: {
      content: bodyContent,
      title: post[0].post_title,
      date: formatDate(post[0].post_date),
      subTitle: subTitle.replace(/<\/?[^>]+(>|$)/g, '') || '',
      featuredImage,
      featuredImageCaption,
    },
    seo: {
      metaDescription: postMeta.filter((post) => post.meta_key === '_yoast_wpseo_metadesc')[0]
        .meta_value,
      metaTitle: postMeta.filter((post) => post.meta_key === '_yoast_wpseo_title')[0].meta_value,
      readTime: postMeta.filter(
        (post) => post.meta_key === '_yoast_wpseo_estimated-reading-time-minutes',
      )[0].meta_value,
    },
    categories,
    tags,
    authors: authorData,
  };

  if (postFound.length > 0) {
    return response;
  }
  return {
    status: 404,
  };
};

export default async (req, res) => {
  try {
    const fetchPost = await getPostContent(
      'six-from-scarinci-hollenbeck-mentioned-in-cianj-awards',
      'firm-news',
    );

    const dbDetails = {
      host: process.env.SITE_HOST,
      port: process.env.SITE_PORT,
      user: process.env.SITE_USER,
      password: process.env.SITE_PASSWORD,
      database: process.env.SITE_DATABASE,
      connectionLimit: 20,
    };

    res.status(200).send({ fetchPost, dbDetails });
  } catch (error) {
    console.error(error);

    const dbDetails = {
      host: process.env.SITE_HOST,
      port: process.env.SITE_PORT,
      user: process.env.SITE_USER,
      password: process.env.SITE_PASSWORD,
      database: process.env.SITE_DATABASE,
      connectionLimit: 20,
    };
    res.status(500).json({ error, dbDetails });
  }
};
