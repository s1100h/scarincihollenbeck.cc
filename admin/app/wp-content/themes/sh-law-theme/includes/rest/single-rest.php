<?php // Search  - WP REST Endpoints 
if(!defined("ABSPATH")) {
  exit;
}
/**
 * Register search endpoint to WP-REST 
 *
 * @since 1.0.0
 * /
 * 
 **/
add_action("rest_api_init", function()
{
  register_rest_route("single", "post/(?P<slug>[a-zA-Z0-9-+.,%20$]+)", array(
    "methods" => WP_REST_SERVER::READABLE,
    "callback" => "single_data"
  ));
  
});
function get_previous_post_id( $post_id ) {
  // Get a global post reference since get_adjacent_post() references it
  global $post;
  // Store the existing post object for later so we don't lose it
  $oldGlobal = $post;
  // Get the post object for the specified post and place it in the global variable
  $post = get_post( $post_id );
  // Get the post object for the previous post
  $previous_post = get_previous_post();
  // Reset our global object
  $post = $oldGlobal;
  if ( '' == $previous_post ) 
      return 0;
  return $previous_post->ID; 
} 
function get_next_post_id( $post_id ) {
  // Get a global post reference since get_adjacent_post() references it
  global $post;
  // Store the existing post object for later so we don't lose it
  $oldGlobal = $post;
  // Get the post object for the specified post and place it in the global variable
  $post = get_post( $post_id );
  // Get the post object for the next post
  $next_post = get_next_post();
  // Reset our global object
  $post = $oldGlobal;
  if ( '' == $next_post ) 
      return 0;
  return $next_post->ID; 
} 
function get_url_from_avatar($avatar) {
  preg_match("/src='(.*?)'/i", $avatar, $matches);
  return $matches[1];
}
function single_data($request) {
  $slug = $request["slug"];

  $args = array();
  $post;
  $post_id;
  $test;
  $slugIsID = is_numeric($slug);

  if($slugIsID) {
    $post = get_post($slug);
    $post_id = $post->ID;
    $test = 'slug is an id number';
    $post_title = $post->post_title;
    $post_content = $post->post_content;
  }else {
    $args = array(
      'name'        => $slug,
      'post_type'   => 'post',
      'post_status' => 'publish',
      'numberposts' => 1
    );
    $post = get_posts($args);
    $post_id = $post[0]->ID;
    $post_title = $post[0]->post_title;
    $post_content = str_replace(home_url(), '', $post[0]->post_content);
  }

  // authors data
  $authors = get_coauthors($post_id);
  $authors_data = array();
  foreach($authors as $a) {
    $author_email = get_the_author_meta("email", $a->ID);
    $related_attorneys;
  
    if($author_email !== "info@sh-law.com") {
      $related_attorneys = get_posts(array(
        "posts_per_page" => 1,
        "post_status"      => "publish",
        "post_type" => "attorneys",
        "meta_query" => array(
          array(
          "key" => "email",
          "value" => $author_email,
          "compare" => "LIKE"
        ))
      ));
    }
    $authors_data[] = array(
      "name" => get_the_author_meta("display_name", $a->ID),
      "link" => (get_the_author_meta("email", $a->ID) === "info@sh-law.com" || get_the_author_meta("email", $a->ID) === "scarincihollenbeckmarketing@gmail.com") ? "/" : $a->user_url,
      "email" => get_the_author_meta("email", $a->ID),
      "bio" =>  get_the_author_meta("description", $a->ID),
      "image" => get_wp_user_avatar_src($a->ID),
    );
  }
  // retrieve related attorney
  $attorney_data = array();
  $attorneys = get_field("related_attorneys", $post_id);
  if($attorneys) {
    foreach($attorneys as $attorney) {
      $attorney_data[] = array(
        "name" => $attorney->post_title,
        "image" => get_the_post_thumbnail_url($attorney->ID),
        "designation" => get_field("designation", $attorney->ID),
        "link" => "/attorneys/".$attorney->post_name
      );
    }
  }
  // get top 5 posts
  $top_five_posts = new WP_Query(array('posts_per_page'=>5, 'meta_key'=>'popular_posts', 'orderby'=>'meta_value_num', 'order'=>'DESC'));
  $top_five_post_data = array();
  if(isset($top_five_posts->posts)) {
    foreach($top_five_posts->posts as $p) {
      $top_five_post_data[] = array(
        "ID" => $p->ID,
        "title" => html_entity_decode(htmlspecialchars_decode(get_the_title($p->ID))),
        "link" => str_replace(home_url(), '', get_permalink($p->ID)),
        "author" => get_the_author_meta('display_name', (int)$p->post_author)
      );
    }
  }
  
  // categories 
  $category_list =  wp_get_post_categories($post_id);
  $categories = array();

  foreach($category_list as $cl) {
    $data = get_category($cl);
    $categories[] = array(
      "id" => $data->term_id,
      "title" => $data->name,
      "link" => '/category/'.$data->slug
    );
  }

  // event details
  $eventDetails = array();

  $address = get_field("event_location_address", $post_id);
  $post_event_date = get_field("post_event_date", $post_id);
  $start = get_field("event_start", $post_id);
  $end = get_field("event_end", $post_id);

  if($address !== null || $post_event_date !== null || $start !== null || $end !== null)
  $eventDetails[] = array(
    "address" => $address,
    "date" =>  $post_event_date,
    "start" => $start,
    "end" => $end
  );

  // get post tags
  $tags = array();
  $query_tags = get_the_tags($post_id);
  
  if($query_tags === true) {
    foreach($query_tags as $qt) {    
      $tags[] = html_entity_decode(htmlspecialchars_decode($qt->name));
    }  
  }


  // stringify authors for seo data
  $authors_names = array();
  foreach($authors_data as $ad) {
    $authors_names[] = $ad['name'];
  } 
  
  // default tag
  $default_tag[] = (object)array(
    "name" => "Scarinci Hollenbeck",
    "ID" => 000,
  );

  $post_data = array (
    "idTrueFalse" => $slugIsID,
    "id" => $post_id,
    "title" => $post_title,
    "content" => html_entity_decode(htmlspecialchars_decode($post_content)),
    "author" => $authors_data, 
    "date" => get_the_date("F j, Y", $post_id ),
    "categories" => $categories,
    "next" => array(
      "title" => get_the_title(get_next_post_id($post_id)),
      "link" => get_the_permalink(get_next_post_id($post_id))
    ),
    "previous" => array(
      "title" => get_the_title(get_previous_post_id($post_id)),
      "link" => get_the_permalink(get_previous_post_id($post_id))
    ),
    "posts" => $top_five_post_data,
    "attorneys" => $attorney_data,
    "eventDetails" => ($eventDetails) ? $eventDetails : [],
    "tags" => (get_the_tags($post_id) === false || count(get_the_tags($post_id)) < 0) ? $default_tag : get_the_tags($post_id),
    "seo" => (object)array(
      "title" => get_post_meta($post_id, '_yoast_wpseo_title', true),
      "metaDescription" => get_post_meta($post_id, '_yoast_wpseo_metadesc', true),
      "canonicalLink" => $slug,
      "featuredImg" => get_the_post_thumbnail_url($post_id),
      "tags" =>  (get_the_tags($post_id) === false || count(get_the_tags($post_id)) < 0) ? $default_tag : get_the_tags($post_id),
      "publishedDate" => get_the_date('Y-m-d H:i:s', $post_id),
      "updatedDate" => get_the_modified_date('Y-m-d H:i:s', $post_id),
      "postContent" => html_entity_decode(htmlspecialchars_decode(str_replace('"', '', $post_content))),
      "primaryCategory" => $categories[0],
      "author" => implode($authors_names)
    )
  );
  return rest_ensure_response($post_data);
}
