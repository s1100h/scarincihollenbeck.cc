<?php // Search Object  - WP REST Endpoints 
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
	register_rest_route("search-obj", "post", array(
		"methods" => WP_REST_SERVER::EDITABLE,
		"callback" => "search_post_data"
  ));  
});


function search_post_data($request) {
  global $wpdb;
  $data = $request->get_body();
  $d = json_decode($data, true);

  return  $data;
}