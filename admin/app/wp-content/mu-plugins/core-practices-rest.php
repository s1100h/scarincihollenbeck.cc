<?php // Core Practices  - WP REST Endpoints 
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
add_action('rest_api_init', function()
{
	register_rest_route("core-practices", "list", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "core_practices",
    'permission_callback' => '__return_true'
  ));
});

function core_practices() {
  $wp_query;
  // retrieve all the data from practice_portal_categories field
  $args = array(
		"posts_per_page" => -1,
		"post_type" => "practices",
		"post_status" => "publish"
  );
  
  $practices = new WP_Query($args);
  $practice_ids = wp_list_pluck( $practices->posts, 'ID' );
  
  // store page information
  $page_content = array();

  foreach($practice_ids as $id) {
    $category = get_field('practice_portal_categories', $id, false);
    $slug = get_post_field( 'post_name', $id );
    $core_practices = "Core Practices";

    if(!empty($category)){
      if($category[0] === $core_practices) { 
        $page_content[] = array(
          "ID" => $id,
          "title" => html_entity_decode(htmlspecialchars_decode(get_the_title($id))),
          "slug" => "/practices/".$slug          
        );
      }
    }
  }

  return $page_content;
}
