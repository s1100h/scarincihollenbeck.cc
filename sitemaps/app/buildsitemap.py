## Finish building out sitemap generator function
## Buidl document similar to https://www.wilentz.com/sitemap.xml
import xml.etree.ElementTree as ET
import datetime

def build_sitemap(site_links):
  now = datetime.datetime.now()
  root = ET.Element('urlset')
  root.attrib['xmlns:xsi']="https://www.w3.org/2001/XMLSchema-instance"
  root.attrib['xmlns']="http://www.sitemaps.org/schemas/sitemap/0.9"
  root.attrib['xsi:schemaLocation']="https://www.sitemaps.org/schemas/sitemap/0.9 https://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  

  for item in site_links:
    if item is not None:
      for i in item:
        doc = ET.SubElement(root, 'url')
        ET.SubElement(doc, 'loc').text = i['link']
        ET.SubElement(doc, 'lastmod').text = i['data_modified']
        ET.SubElement(doc, 'changefreq').text = i['change_freq']
        ET.SubElement(doc, 'priority').text = i['priority']


    tree = ET.ElementTree(root)
    date = now.strftime('%Y-%m-%dT%H%M%S')
    tree.write('../../client/app/public/sitemap.xml'.format(date=date), encoding='utf-8', xml_declaration=True)
    print('sitemap was written to /client/app/public/directory')
    return True
