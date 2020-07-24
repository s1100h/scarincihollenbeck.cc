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
  register_rest_route("preview-page", "page/(?P<id>\d+)", array(
    "methods" => WP_REST_SERVER::READABLE,
    "callback" => "preview_page"
  ));
});

function preview_page($request) {
  $id = $request["id"];

	$args = array(
		"numberposts" => 1,
		"p" => $id, 
		"post_type" => "page",
		"post" => "revision",
    "post_status" => array('draft', 'publish', 'auto-draft', 'prending')
  );

  
	// query attorney post object
  $page = get_posts($args);

  $page_contents = array(
    "title" => $page[0]->post_title,
    "content" => $page[0]->post_content,
    "seo" => (object)array(
      "title" => get_post_meta($page[0]->ID,'_yoast_wpseo_title', true),
      "metaDescription" => get_post_meta($page[0]->ID,'_yoast_wpseo_metadesc', true),
      "canonicalLink" => $page[0]->post_name
    )    
  );
  return $page_contents;
}