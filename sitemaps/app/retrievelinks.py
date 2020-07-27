import requests
import json
import datetime
from requests.exceptions import HTTPError


# remove duplicates
def remove_duplicates(site_link_arr):
  final_list = []
  for item in site_link_arr:
    if item not in final_list:
      final_list.append(item)
  return final_list

# http request for links data
def request_for_links(url, change_freq='weekly', priority='1.0'):
  results = []
  try:
    response = requests.get(url)
    json_data = json.loads(response.text)    

    for post in json_data:
      id = post['id']
      link = post['link']
      link = link.replace('admin.', '')
      date_modified = post['modified']
      date_modified = date_modified.split('T', 1)     
      
      # If the response was successful, no Exception will be raised
      results.append({
        'id': id,
        'link': link,
        'data_modified': date_modified[0],
        'change_freq': change_freq,
        'priority': priority
      })

  except HTTPError as http_err:
    print(f'HTTP error occurred: {http_err}')  # Python 3.6
  except Exception as err:
      print(f'Other error occurred: {err}')  # Python 3.6
  else:
      return results

# http request for category links data 
def request_for_category_links(url, change_freq='weekly', priority='1.0'):
  now = datetime.datetime.now()
  results = []
  try:
    response = requests.get(url)
    json_data = json.loads(response.text)   

    for post in json_data:
      id = post['id']
      link = 'https://scarincihollenbeck.com/category/{slug}'.format(slug=post['slug'])   
      
      # If the response was successful, no Exception will be raised
      results.append({
        'id': id,
        'link': link,
        'data_modified': now.strftime('%Y-%m-%d'),
        'change_freq': change_freq,
        'priority': priority
      })

  except HTTPError as http_err:
    print(f'HTTP error occurred: {http_err}')  # Python 3.6
  except Exception as err:
      print(f'Other error occurred: {err}')  # Python 3.6
  else:
      return results

# build out sitemap links array
def retrieve_links():
  site_links = []
  base_url = 'https://admin.scarincihollenbeck.com'
  total = 100

  # retrieve blog posts
  '''
  client alert 20098
  covid 19 alerts 20250
  covid 19 education 22896
  cyber security alert 18675
  women lead 5790
  featured 280
  federal payroll act 21923
  firm events 99
  firm insights 599
  firm news 98
  '''

  site_categorys = [20098, 20250, 22896, 18675, 5790, 280, 599, 98]

  # retrieve news, eventes, and blog posts
  for id in site_categorys:
    posts_url = '{base_url}/wp-json/wp/v2/posts/?categories={id}&per_page={total}'.format(id=id, base_url=base_url, total=total)
    post_links = request_for_links(posts_url,'monthly', '0.8')

    for post_link in post_links:
      site_links.append(post_link)
        
  # retrieve attorneys
  attorneys_url = '{base_url}/wp-json/wp/v2/attorneys?per_page={total}'.format(base_url=base_url, total=total)
  attorney_links = request_for_links(attorneys_url, 'monthly', '0.8')
  for attorney_link in attorney_links:
    site_links.append(attorney_link)

  # retrieve locations
  locations_url = '{base_url}/wp-json/wp/v2/location?per_page={total}'.format(base_url=base_url, total=total)
  location_links = request_for_links(locations_url, 'yearly', '0.6')
  for location_link in location_links:
    site_links.append(location_link)
  
  # retrieve admins
  admin_url = '{base_url}/wp-json/wp/v2/administration?per_page={total}'.format(base_url=base_url, total=total)
  admin_links = request_for_links(admin_url, 'yearly', '0.2')
  for admin_link in admin_links:
    site_links.append(admin_link)

  # retrieve practices
  practices_url = '{base_url}/wp-json/wp/v2/practices?per_page={total}'.format(base_url=base_url, total=total)
  practice_links = request_for_links(practices_url, 'monthly', '0.8')
  for practice_link in practice_links:
    site_links.append(practice_link)

  # retrieve careers
  careers_url = '{base_url}/wp-json/wp/v2/careers?per_page={total}'.format(base_url=base_url, total=total)
  career_links = request_for_links(careers_url, 'monthly', '0.4')
  for career_link in career_links:
    site_links.append(career_link)

  # retrieve pages
  pages_url = '{base_url}/wp-json/wp/v2/pages?per_page={total}'.format(base_url=base_url, total=total)
  page_links = request_for_links(pages_url, 'yearly', '0.2')
  for page_link in page_links:
    site_links.append(page_link)

  # standard pages
  now = datetime.datetime.now()
  standard_pages = [
    {
      'id': 1,
      'link': 'https://scarincihollenbeck.com',
      'data_modified': now.strftime('%Y-%m-%d'),
      'change_freq': 'daily',
      'priority': '1.0'     
    },
    {
      'id': 2,
      'link': 'https://scarincihollenbeck.com/practices',
      'data_modified': '2020-06-07',
      'change_freq': 'monthly',
      'priority': '0.4' 
    },
    {
      'id': 3,
      'link': 'https://scarincihollenbeck.com/law-practices',
      'data_modified': '2020-06-07',
      'change_freq': 'monthly',
      'priority': '0.4' 
    },
    {
      'id': 4,
      'link': 'https://scarincihollenbeck.com/attorneys',
      'data_modified': '2020-06-07',
      'change_freq': 'monthly',
      'priority': '0.4'            
    },
    {
      'id': 5,
      'link': 'https://scarincihollenbeck.com/careers',
      'data_modified': '2020-06-07',
      'change_freq': 'monthly',
      'priority': '0.4'              
    },
    {
      'id': 6,
      'link': 'https://scarincihollenbeck.com/contact',
      'data_modified': '2020-06-07',
      'change_freq': 'yearly',
      'priority': '0.2' 
    },
    {
      'id': 7,
      'link': 'https://scarincihollenbeck.com/subscribe',
      'data_modified': '2020-06-07',
      'change_freq': 'yearly',
      'priority': '0.2' 
    },
    {
      'id': 8,
      'link': 'https://scarincihollenbeck.com/locations',
      'data_modified': '2020-06-07',
      'change_freq': 'monthly',
      'priority': '0.4' 
    }       
  ]

  for page in standard_pages:
    site_links.append(page)


  # prunes results
  pruned_results = [i for n, i in enumerate(site_links) if i not in site_links[n + 1:]] 

  # retrieve archive pages
  return pruned_results