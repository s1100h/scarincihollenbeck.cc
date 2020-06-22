import schedule
import time
from retrievelinks import retrieve_links
from buildsitemap import build_sitemap

def generate_sitemap():
  site_links = retrieve_links()
  return build_sitemap(site_links)

schedule.every().monday.at("11:50").do(generate_sitemap)

while True:
  schedule.run_pending()
  time.sleep(1)


