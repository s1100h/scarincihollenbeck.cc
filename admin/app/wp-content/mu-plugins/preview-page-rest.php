<?php // Page  - WP REST Endpoints 
if(!defined("ABSPATH")) {
  exit;
}
/**
 * Register page endpoint to WP-REST 
 *
 * @since 1.0.0
 * /
 * 
 **/
add_action('rest_api_init', function()
{
	register_rest_route("preview", "page/(?P<id>[a-zA-Z0-9-]+)", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "preview_individual_page_data",
    'permission_callback' => '__return_true'
	));
});

function preview_individual_page_data($request) {
  $id = $request['id'];
  $id = (int)$id; 

  $page = get_post($id);
  $page_contents = array(
    "title" => $page->post_title,
    "content" => $page->post_content
  );

  return $page_contents;
}
