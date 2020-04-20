// fetch posts
// https://scarincihollenbeck.com/wp-json/wp/v2/posts?post_per_page=-1
// fetch attorneys
//
// fetch locations
// fetch practices
// fetch admin
// fetch pages

// build sitemap
function buildSitemap(url) {
  return `
    <url>
      <loc>${url}</loc>
    </url>
  `
}