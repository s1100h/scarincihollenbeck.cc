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
	register_rest_route("preview", "single/(?P<id>[a-zA-Z0-9-+.,%20$]+)", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "single_preview_data"
  ));
  
});
function preview_get_prev_post_id( $post_id ) {
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
function preview_get_nex_post_id( $post_id ) {
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
function single_preview_data($request) {
  $id = $request["id"];
  $id = (int)$id;

  $post = get_post($id);
  
  // authors data
  $authors = get_coauthors($post->ID);
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
      $attorney_id = $related_attorneys[0]->ID;
    }
    $authors_data[] = array(
      "name" => get_the_author_meta("display_name", $a->ID),
      "link" => (get_the_author_meta("email", $a->ID) === "info@sh-law.com") ? get_home_url("/") : get_home_url("/")."/attorneys/".$related_attorneys[0]->post_name,
      "email" => get_the_author_meta("email", $a->ID),
      "bio" =>  get_the_author_meta("description", $a->ID),
      "image" => get_simple_local_avatar( get_the_author_meta("email", $a->ID ), 96, '','', array('height' => 108, 'width' => 96))
    );
  }
  // retrieve related attorney
  $attorney_data = array();
  $attorneys = get_field("related_attorneys", $post->ID);
  if($attorneys) {
    foreach($attorneys as $attorney) {
      $attorney_data[] = array(
        "name" => $attorney->post_title,
        "image" => get_the_post_thumbnail_url($attorney->ID),
        "designation" => get_field("designation", $attorney->ID),
        "link" => get_home_url("/")."/attorneys/".$attorney->post_name
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
        "title" => get_the_title($p->ID),
        "link" => str_replace(home_url(), '', get_permalink($p->ID)),
        "image" => get_the_post_thumbnail_url($p->ID, 'full')
      );
    }
  }
  
  $post_data = array(
    "title" => $post->post_title,
    "content" => $post->post_content,
    "author" => $authors_data, 
    "date" => get_the_date("F j, Y", $post->ID ),
    "next" => array(
      "title" => get_the_title(preview_get_nex_post_id($post->ID)),
      "link" => get_the_permalink(preview_get_nex_post_id($post->ID))
    ),
    "previous" => array(
      "title" => get_the_title(preview_get_prev_post_id($post->ID)),
      "link" => get_the_permalink(preview_get_prev_post_id($post->ID))
    ),
    "posts" => $top_five_post_data,
    "attorneys" => $attorney_data
  );
  return $post_data;
}