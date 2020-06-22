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
  register_rest_route("author", "/list", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "get_author_list"
  ));
});

// retrieve related practices to author 
function related_author_practices($request) {
  $slug = $request['slug'];
  $author = get_user_by('login', $slug);

  if($author == false) {
    $author = get_user_by('login', 'Scarinci Hollenbeck');
  }

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

  $related_practice_data['currentUser'] = $slug;

  if($slug == "scarincihollenbeck"){
    $bio = "With a growing practice of more than 70+ experienced attorneys, Scarinci Hollenbeck is an alternative to a National 250 law firm. With offices in New Jersey, New York City, San Francisco, CA, and the District of Columbia, we serve the niche practice areas most often required by institutions, corporations, entities, and the people who own and control them. Since the firm was founded in 1988, we have maintained our reputation for getting things done. Most attorneys at Scarinci Hollenbeck have significant experience in their practice areas, and have published and lectured on current topics in their field.";

    $related_practice_data['bio'][] = array(
      "name" => "Scarinci Hollenbeck",
      "bioContent" => preg_replace('/\s+?(\S+)?$/', '', strip_tags(substr($bio, 0, 250))). " ...",
      "link" => "/",
      "image" => "https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/09/sh-mini-diamond_88a9c0b8e7ff2ed7ecff91cfdaa0b816.png",
      "email" => "info@sh-law.com",
      "phone" => "201-896-4100"
    );
    $related_practice_data['practices'] = core_practices();

  }else {
    $related_practice_data['bio'][] = array(
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

  $author_data['currentPage'] = $offset;

  /** Retrieve SEO */
 
   $author_data['seo'] = (object)array(
    "title" => get_user_meta( $author_id, 'wpseo_title', true ),
    "metaDescription" => get_user_meta( $author_id, 'wpseo_desc', true ),
    "canonicalLink" => $slug
   );

  return $author_data;
}

function get_author_list() {
  $authors = get_users();
  $results = [];



  $filtered_authors = array_filter($authors, function($element) {
    if (isset($element->user_url) && $element->user_url != '') {
      return True;
    }else {
      return False;
    }
  }, ARRAY_FILTER_USE_BOTH);

  foreach($filtered_authors as $author) {
    $author_data = $author;
    $post_count = count_user_posts($author_data->ID);

    if($post_count > 0) {
      if($author_data->user_login != "Peter" && $author_data->user_login != 'dyoung' && $author_data->user_login != 'ptumulty'){
         $results[] = $author_data->user_login;
      }
    }
  }

  return $results;
}
