import { GRAPHQL_API_URL } from 'utils/constants';
import {
  attorneyBySlugQuery,
  attorneyNewsEventsQuery,
  attorneyFirmBlogQuery,
  attorneySlugsQuery,
  categoryPostQuery,
  homePageLocationsQuery,
  contactSubscribePageQuery,
  homePageQuery,
} from './graphql-queries';

async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers.Authorization = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(GRAPHQL_API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

/** Get the attorneys bio data base on their slug */
export async function attorneyBySlug(slug) {
  const data = await fetchAPI(attorneyBySlugQuery, {
    variables: { slug },
  });
  return data.attorneyProfileBy;
}

/** Get all the news/events based on the attorneys name */
export async function attorneyNewsEvents(name) {
  const data = await fetchAPI(attorneyNewsEventsQuery, {
    variables: { name },
  });
  return data.posts;
}

/** Get all the attorneys blog posts */
export async function attorneyFirmBlog(id) {
  const data = await fetchAPI(attorneyFirmBlogQuery, {
    variables: { id },
  });
  return data.posts;
}

/** Get all the slugs for attorney profiles */
export async function attorneySlugs() {
  const data = await fetchAPI(attorneySlugsQuery);

  return data.attorneyProfiles?.edges;
}

/** Get all posts by category id with pagination */
export async function categoryPostsById(variables) {
  const data = await fetchAPI(categoryPostsById, variables);

  return {
    pageInfo: data.categoryPostsById?.pageInfo,
    posts: data.categoryPostsById?.edges,
  };
}

/** get the library category landing page content */
export async function categoryPosts(variables) {
  const data = await fetchAPI(categoryPostQuery, variables);
  return data.categories?.edges;
}

/** contact/subscribe page content query */
export async function contactSubscribePage(slug) {
  const data = await fetchAPI(contactSubscribePageQuery, {
    variables: { slug },
  });
  return data?.pageBy;
}

/** Get homepage content */
export async function homePageContent() {
  const data = await fetchAPI(homePageQuery, {});

  return data?.pageBy;
}

/** Get locations for home page */
export async function homePageLocations() {
  const data = await fetchAPI(homePageLocationsQuery, {});

  return data?.officeLocations?.edges;
}
