from retrievelinks import retrieve_links
from buildsitemap import build_sitemap

def generate_sitemap():
  site_links = retrieve_links()
  build_sitemap(site_links)

generate_sitemap()