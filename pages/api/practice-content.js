require('dotenv').config();
const mysql = require('mysql2/promise');

// find meta
const extractMetaContent = (practice, key) => practice.filter((p) => p.meta_key.includes(key));
const extractExactMetaContent = (practice, key) => practice.filter((p) => p.meta_key === key);

const sanitiveACFIdResults = (acfItems) => {
  const results = [];

  if (acfItems.length > 0) {
    const rawChildren = acfItems[0].meta_value;
    const sanitizeResponse = rawChildren
      .replace(/";i:[0-9];/g, '')
      .replace(/";}/, '')
      .split(/s:[0-9]:/);

    const removeFirstIndex = sanitizeResponse.slice(1, sanitizeResponse.length);

    for (let i = 0; i < removeFirstIndex.length; i++) {
      results.push(parseInt(removeFirstIndex[i].replace(/"/g, ''), 10));
    }
  }

  return results;
};

// group items by key
const groupItemsByKey = (items, key) => items.reduce((result, currentValue) => {
  // If an array already present for key, push it to the array. Else create an array and push the object
  (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
  // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
  return result;
}, []);

export const getPracticeContent = async (slug) => {
  const connection = await mysql.createConnection({
    host: process.env.SITE_HOST,
    port: process.env.SITE_PORT,
    user: process.env.SITE_USER,
    password: process.env.SITE_PASSWORD,
    database: process.env.SITE_DATABASE,
    connectionLimit: 20,
  });

  // post, post meta, post categories, and category name
  const practiceQuery = `SELECT post_title, ID, post_name FROM ${process.env.POST_TABLE} WHERE post_name= ?`;
  const practiceQueryByID = `SELECT post_title, ID, post_name FROM ${process.env.POST_TABLE} WHERE ID= ?`;
  const practiceContentQuery = `SELECT meta_key, meta_value FROM ${process.env.POSTMETA_TABLE} WHERE post_id = ?`;

  /** Format attorney ids into post objects */
  const formatAttorneyObj = async (attorneyIds) => {
    const results = [];

    for (let i = 0; i < attorneyIds.length; i++) {
      const [attorneyData] = await connection.execute(practiceContentQuery, [attorneyIds[i]]);
      const [attorneyPostData] = await connection.execute(practiceQueryByID, [attorneyIds[i]]);

      if (attorneyData.length > 0 && attorneyPostData.length > 0) {
        const getLastName = extractExactMetaContent(attorneyData, 'last_name');
        const lastName = getLastName[0].meta_value;
        const getPhoneNumber = extractExactMetaContent(attorneyData, 'phone_number');
        const phoneNumber = getPhoneNumber[0].meta_value;
        const getEmail = extractExactMetaContent(attorneyData, 'email');
        const email = getEmail[0].meta_value;
        const getDesignation = extractExactMetaContent(attorneyData, 'designation');
        const designation = getDesignation[0].meta_value;

        const getThumbNailId = extractExactMetaContent(attorneyData, '_thumbnail_id');
        const thumbnailId = getThumbNailId[0].meta_value;
        const [thumbnailData] = await connection.execute(practiceContentQuery, [thumbnailId]);
        const getThumbUrl = extractExactMetaContent(thumbnailData, '_wp_attached_file');
        const image = `https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/${getThumbUrl[0].meta_value}`;

        results.push({
          ID: attorneyIds[i],
          name: attorneyPostData[0].post_title,
          lastName,
          link: `/attorney/${attorneyPostData[0].post_name}`,
          email,
          contact: phoneNumber,
          designation,
          image,
        });
      }
    }
    return results;
  };

  const [practice] = await connection.execute(practiceQuery, [slug]);

  if (practice.length <= 0) {
    return {
      status: 404,
    };
  }

  const [practiceMeta] = await connection.execute(practiceContentQuery, [practice[0].ID]);

  if (practiceMeta.length <= 0) {
    return {
      status: 404,
    };
  }

  // practice description
  const getPracticeDescription = extractMetaContent(practiceMeta, 'description');
  const description = getPracticeDescription[0].meta_value;

  // child practices
  const getPracticeChildren = extractMetaContent(practiceMeta, 'child_practice');
  const childIdResults = sanitiveACFIdResults(getPracticeChildren);
  const children = [];

  for (let i = 0; i < childIdResults.length; i++) {
    const [childPractice] = await connection.execute(practiceQueryByID, [childIdResults[i]]);
    const practice = childPractice[0];
    children.push({
      id: practice.ID,
      title: practice.post_title,
      slug: `/${practice.post_name}`,
    });
  }

  // tab content
  const getTabContent = extractMetaContent(practiceMeta, 'content_section_');
  const removeMeta = getTabContent.filter((tab) => !tab.meta_key.includes('_content_section_'));
  const organizeTabContent = removeMeta.map((tab, i) => {
    const results = {};
    const { meta_key, meta_value } = tab;
    const metaKey = meta_key;
    const metaValue = meta_value;

    if (metaKey.includes('_title')) {
      results.title = metaValue;
    }

    if (metaKey.includes('_content')) {
      results.content = metaValue;
    }

    results.tabId = metaKey.replace(/^\D+/g, '')[0];

    return results;
  });

  const content = groupItemsByKey(organizeTabContent, 'tabId');

  // chair content
  const getChairContent = extractMetaContent(practiceMeta, 'section_chief');
  const chiefIds = sanitiveACFIdResults(getChairContent);
  const chair = await formatAttorneyObj(chiefIds);

  // attorney list content
  const getAttorneyListContent = extractMetaContent(practiceMeta, 'include_attorney');
  const attorneyListIds = sanitiveACFIdResults(getAttorneyListContent);
  const attorneyList = await formatAttorneyObj(attorneyListIds);

  // seo title
  const getSeoTitle = extractMetaContent(practiceMeta, '_yoast_wpseo_title');
  const seoTitle = getSeoTitle[0].meta_value;

  // seo meta desc
  const getSeoMetaDesc = extractMetaContent(practiceMeta, '_yoast_wpseo_metadesc');
  const seoMetaDesc = getSeoMetaDesc[0].meta_value;

  // practice category
  const getPracticeCategory = extractMetaContent(practiceMeta, 'practice_portal_categories');
  const rawPracticeCategory = getPracticeCategory[0].meta_value;
  const practiceCategory = rawPracticeCategory.match(/(?:"[^"]*"|^[^"]*$)/)[0].replace(/"/g, '');

  // highlight real
  const getHighlightReal = extractMetaContent(practiceMeta, 'highlight_scroller');
  const removeHighlightMeta = getHighlightReal.filter(
    (tab) => !tab.meta_key.includes('_highlight_scroller_'),
  );
  const highlightResults = [];

  for (let i = 0; i < removeHighlightMeta.length; i++) {
    const metaKey = removeHighlightMeta[i].meta_key;
    const metaValue = removeHighlightMeta[i].meta_value;

    if (metaKey.includes('_image')) {
      const [highlightImage] = await connection.execute(practiceContentQuery, [metaValue]);
      const getImage = extractExactMetaContent(highlightImage, '_wp_attached_file');
      const image = `https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/${getImage[0].meta_value}`;

      highlightResults.push({
        image,
        alt: metaKey,
      });
    }
  }

  const highlightReal = highlightResults.filter((h) => h.highlightId !== '');

  // get blog id
  const getBlogId = extractMetaContent(practiceMeta, 'related_blog_category');
  const rawBlogId = getBlogId[0].meta_value;
  const blogId = rawBlogId.match(/(?:"[^"]*"|^[^"]*$)/)[0].replace(/"/g, '');

  const response = {
    status: 200,
    data: {
      practiceID: practice[0].ID,
      title: practice[0].post_title,
      description,
      children,
      content,
      chair,
      attorneyList,
      highlightReal,
      blogId,
      seo: {
        title: seoTitle,
        metaDescription: seoMetaDesc,
        canonicalLink: `practices/${slug}`,
        practiceTitle: practice[0].post_title,
      },
      practiceCategory,
    },
  };

  return {
    ...response,
  };
};

export default async (req, res) => {
  try {
    const fetchPractice = await getPracticeContent(
      'entertainment-and-media',
      // 'what-to-know-about-the-secs-shadow-trading-enforcement-action',
      // 'law-firm-insights'
    );

    if (fetchPractice.status === 404) {
      return res.status(404).send({ ...fetchPractice });
    }

    return res.status(200).send({ ...fetchPractice });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ error });
  }
};
