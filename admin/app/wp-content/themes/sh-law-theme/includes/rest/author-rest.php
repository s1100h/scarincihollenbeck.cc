<?php // Author  - WP REST Endpoints 
if(!defined("ABSPATH")) {
  exit;
}
/**
 * Register author endpoint to WP-REST 
 *
 * @since 1.0.0
 * /
 * 
 **/
add_action('rest_api_init', function()
{
	register_rest_route("author", "/posts/(?P<slug>[a-zA-Z0-9-+.,%20$]+)/(?P<offset>[a-zA-Z0-9-]+)", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "author_query_data"
  ));
  register_rest_route("author", "/bio/(?P<slug>[a-zA-Z0-9-+.,%20$]+)", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "related_author_practices"
  ));
});

// retrieve related practices to author 
function related_author_practices($request) {
  $slug = $request['slug'];

  // author id
  $author = get_user_by('login', $slug);

  if(is_object($author)) {
    $author_email = $author->user_email;
  }else {
    $author_email = $author['user_email'];
  }
  

  $related_attorneys = get_posts(array(
    'posts_per_page' => 1,
    'post_status'      => 'publish',
		'post_type' => 'attorneys',
		'meta_query' => array(
			array(
			'key' => 'email',
			'value' => $author_email,
			'compare' => 'LIKE'
		))
  ));
  
  $attorney_id = $related_attorneys[0]->ID;

  $related_practices = get_field("related_practices", $attorney_id);
  $related_practice_data = array();

  if($slug == "scarincihollenbeck"){
    $bio = "With a growing practice of more than 70+ experienced attorneys, Scarinci Hollenbeck is an alternative to a National 250 law firm. With offices in New Jersey, New York City, San Francisco, CA, and the District of Columbia, we serve the niche practice areas most often required by institutions, corporations, entities, and the people who own and control them. Since the firm was founded in 1988, we have maintained our reputation for getting things done. Most attorneys at Scarinci Hollenbeck have significant experience in their practice areas, and have published and lectured on current topics in their field.";

    $related_practice_data['bio'] = array(
      "name" => "Scarinci Hollenbeck",
      "bioContent" => preg_replace('/\s+?(\S+)?$/', '', strip_tags(substr($bio, 0, 250))). " ...",
      "link" => "www.sh-law.com",
      "image" => "https://47vqih1qqjmc9x8wz20ph571-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/sh-mini-diamond_88a9c0b8e7ff2ed7ecff91cfdaa0b816.png",
      "email" => "info@sh-law.com",
      "phone" => "201-896-4100"
    );
    $related_practice_data['practices'] = array(
      array(
        "title" => "CORPORATE TRANSACTIONS & BUSINESS",
        "link" => "https://scarincihollenbeck.com/practices/corporate-transactions-and-business/"
      ),
      array(
        "title" => "ENVIRONMENTAL & LAND USE",
        "link" => "https://scarincihollenbeck.com/practices/environmental-and-land-use/"
      ),
      array(              
        "title" => "INTELLECTUAL PROPERTY",
        "link" => "https://scarincihollenbeck.com/practices/intellectual-property/"
      ),
      array(
        "title" => "LABOR & EMPLOYMENT",
        "link" => "https://scarincihollenbeck.com/practices/labor-employment/",
      ),
      array(              
        "title" => "LITIGATION",
        "link" => "https://scarincihollenbeck.com/practices/litigation/",
      ),
      array(
        "title" => "TAX, TRUSTS & ESTATES",
        "link" => "https://scarincihollenbeck.com/practices/tax-trusts-and-estates/",
      ),
      array(
        "title" => "GOVERNMENT & EDUCATION LAW",
        "link" => "https://scarincihollenbeck.com/practices/public-law/"
      )
    );   
  }else {
    $related_practice_data['bio'] = array(
      "name" => get_the_title($attorney_id),
      "bioContent" => preg_replace('/\s+?(\S+)?$/', '', strip_tags(substr(get_field("biography_content", $attorney_id), 0, 250))). " ...",
      "link" => str_replace(home_url(), '', get_permalink($attorney_id)),
      "image" => get_the_post_thumbnail_url($attorney_id),
      "email" => get_field("email", $attorney_id),
      "phone" => get_field("phone_number", $attorney_id)
    );
  

    if(count($related_practices) > 0) {
      foreach($related_practices as $rp) {
        $related_practice_data['practices'][] = array(
          "title" => $rp->post_title,
          "link" => "/practices/".$rp->post_name
        );
      }
    }
  }

  return $related_practice_data;
}
// retrieves data based on use query
function author_query_data($request) {
  $slug = $request['slug'];
  $offset = $request["offset"];
  $author_data = array();

  // author id
  $author = get_user_by('login', $slug);

  if(is_object($author)) {
    $author_id = $author->ID;
  }else {
    $author_id = $author['ID'];
  }

  $args = array(
    'author' => $author_id,
    'orderby' => 'post_date',
    'order' => 'ASC',
    'posts_per_page' => -1
  );

  $posts = get_posts($args);

  // set results to match offset 
  $start = ($offset - 1) * 9; 
  $end =  $offset * 9;
  
  // add number of pages to results
  $author_data['pages'] = ceil(count($posts) /14);

  foreach(range($start, $end) as $i) {
    if(isset($posts[$i])) {
      $author_data['results'][] = array(
        "title" => html_entity_decode(htmlspecialchars_decode($posts[$i]->post_title)),
        "link" => str_replace(home_url(), '', get_permalink($posts[$i]->ID)),
        "id" => $posts[$i]->ID,
        "description" => html_entity_decode(htmlspecialchars_decode(wp_trim_words($posts[$i]->post_content, 20, '...' )))       
      );
    }
  }; 
  

  if($author_data['pages'] <= 0) {
    $author_data['results'] = array();
  }

  $author_data['term'] = $slug;

  /** Retrieve SEO */
 
   $author_data['seo'] = (object)array(
    "title" => get_user_meta( $author_id, 'wpseo_title', true ),
    "metaDescription" => get_user_meta( $author_id, 'wpseo_desc', true ),
    "canonicalLink" => $slug
   );

  return $author_data;
}
