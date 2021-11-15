import {
  urlify, formatDate, extractDescription, extractFeaturedImage,
} from 'utils/helpers';

require('dotenv').config();
const mysql = require('mysql2/promise');

export const getLibraryContent = async (slug) => {
  const connection = await mysql.createConnection({
    host: process.env.SITE_HOST,
    port: process.env.SITE_PORT,
    user: process.env.SITE_USER,
    password: process.env.SITE_PASSWORD,
    database: process.env.SITE_DATABASE,
    connectionLimit: 20,
  });

  // post, post meta, post categories, and category name
  const categoryQuery = `SELECT term_id, name FROM ${process.env.TERMS_TABLE} WHERE slug = ?`;
  const categoryByIDQuery = `SELECT term_id, slug, name FROM ${process.env.TERMS_TABLE} WHERE term_id = ?`;
  const checkCategoryTaxonomyQuery = `SELECT term_id FROM ${process.env.TERMS_TAXONOMY} WHERE term_id = ? AND taxonomy = 'category'`;
  const categoryTaxonomyQuery = `SELECT term_taxonomy_id, description, count, parent FROM ${process.env.TERMS_TAXONOMY} WHERE term_id = ?`;
  const popularCategoryQuery = `SELECT term_taxonomy_id, term_id, description, count, parent FROM ${process.env.TERMS_TAXONOMY} WHERE parent = 599 AND taxonomy = 'category' ORDER BY count DESC LIMIT 10`;
  const childrenCategoryQuery = `SELECT term_taxonomy_id, term_id, description, count, parent FROM ${process.env.TERMS_TAXONOMY} WHERE parent = ?`;
  const authorsQuery = `SELECT ${process.env.AUTHORS_TABLE}.ID, ${process.env.AUTHORS_TABLE}.user_nicename, ${process.env.AUTHORS_TABLE}.display_name FROM ${process.env.AUTHORS_TABLE} LEFT JOIN ${process.env.AUTHORSMETA_TABLE} ON (${process.env.AUTHORS_TABLE}.ID = ${process.env.AUTHORSMETA_TABLE}.user_id) WHERE NOT ${process.env.AUTHORS_TABLE}.user_url ='' AND ${process.env.AUTHORSMETA_TABLE}.meta_value = 'a:1:{s:6:"author";b:1;}'`;
  const authorMetaQuery = `SELECT display_name FROM ${process.env.AUTHORS_TABLE} WHERE ID = ?`;
  const postContentQuery = `SELECT ID, post_author, post_date, post_title, post_name, post_content FROM ${process.env.POST_TABLE} WHERE ID= ? AND post_status='publish'`;
  const categoryFirstFourPostIdQuery = `SELECT ID
      FROM ${process.env.POST_TABLE}
      LEFT JOIN ${process.env.TERM_RELATIONSHIPS_TABLE} ON (${process.env.POST_TABLE}.ID = ${process.env.TERM_RELATIONSHIPS_TABLE}.object_id)
      LEFT JOIN ${process.env.TERMS_TAXONOMY} ON (${process.env.TERM_RELATIONSHIPS_TABLE}.term_taxonomy_id = ${process.env.TERMS_TAXONOMY}.term_taxonomy_id)
      WHERE ${process.env.TERMS_TAXONOMY}.term_taxonomy_id = ?
      GROUP BY ${process.env.POST_TABLE}.ID
      ORDER BY post_date DESC
      LIMIT 4;`;

  const [category] = await connection.execute(categoryQuery, [slug]);

  if (category.length < 0) {
    return {
      status: 404,
    };
  }

  let categoryId = 0;
  for (let i = 0; i < category.length; i++) {
    const [categoryMeta] = await connection.execute(checkCategoryTaxonomyQuery, [
      category[i].term_id,
    ]);
    if (categoryMeta.length > 0) {
      categoryId = categoryMeta[0].term_id;
    }
  }

  // get the category description and term taxonomy id
  const [taxonomy] = await connection.execute(categoryTaxonomyQuery, [categoryId]);

  if (taxonomy.length < 0) {
    return {
      status: 404,
    };
  }

  const taxonomyId = taxonomy[0].term_taxonomy_id;

  // get the post parent
  const parentId = taxonomy[0].parent;
  let parent = null;

  if (parentId !== 0) {
    const [parentCategory] = await connection.execute(categoryByIDQuery, [parentId]);

    parent = {
      name: parentCategory[0].name,
      slug: parentCategory[0].slug,
    };
  }

  // get the post ids for the category
  const [postIds] = await connection.execute(categoryFirstFourPostIdQuery, [taxonomyId]);

  if (postIds.length <= 0) {
    return {
      status: 404,
    };
  }

  // title, image, imgAlt, link, id, date, description, author
  const posts = [];
  // get initial post content
  for (let i = 0; i < postIds.length; i++) {
    const [postData] = await connection.execute(postContentQuery, [postIds[i].ID]);
    const post = postData[0];

    const [authorMeta] = await connection.execute(authorMetaQuery, [post.post_author]);

    posts.push({
      id: post.ID,
      title: post.post_title,
      author: authorMeta[0].display_name,
      date: formatDate(post.post_date),
      description: extractDescription(post.post_content),
      image: extractFeaturedImage(post.post_content),
      link: `${parent ? `/${parent.slug}` : ''}/${slug}/${post.post_name}`,
    });
  }

  // get the categories with the most posts
  const [categoryCount] = await connection.execute(popularCategoryQuery);

  if (postIds.length <= 0) {
    return {
      status: 404,
    };
  }

  const popularCategories = [];

  for (let i = 0; i < categoryCount.length; i++) {
    const [popCategories] = await connection.execute(categoryByIDQuery, [categoryCount[i].term_id]);
    const category = popCategories[0];

    popularCategories.push({
      id: category.term_id,
      slug: category.slug,
      name: category.name.replace('&amp;', '&'),
      postCount: categoryCount[i].count,
    });
  }

  // get the child categories of the current category
  const [childCat] = await connection.execute(childrenCategoryQuery, [categoryId]);

  const childrenOfCurrentCategory = [];

  for (let i = 0; i < childCat.length; i++) {
    const [childCategories] = await connection.execute(categoryByIDQuery, [childCat[i].term_id]);
    const category = childCategories[0];

    childrenOfCurrentCategory.push({
      id: category.term_id,
      slug: category.slug,
      name: category.name.replace('&amp;', '&'),
      postCount: childCat[i].count,
    });
  }

  // get authors
  const [authorData] = await connection.execute(authorsQuery);
  if (authorData.length <= 0) {
    return {
      status: 404,
    };
  }

  const response = {
    status: 200,
    data: {
      query: slug,
      pageTitle: slug,
      results: posts,
      authors: authorData,
      popularCategories,
      childrenOfCurrentCategory,
      count: taxonomy[0].count,
      parent,
      categoryId,
      termId: taxonomyId,
      description: taxonomy[0].description,
      name: category[0].name,
    },
  };

  return {
    ...response,
  };
};

export default async (req, res) => {
  try {
    const fetchLibraryContent = await getLibraryContent('business-law');

    if (fetchLibraryContent.status === 404) {
      return res.status(404).send({ ...fetchLibraryContent });
    }

    return res.status(200).send({ ...fetchLibraryContent });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ error });
  }
};
