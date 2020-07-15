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
  register_rest_route("single-page", "page/(?P<slug>[a-zA-Z0-9-]+)", array(
    "methods" => WP_REST_SERVER::READABLE,
    "callback" => "individual_page_data"
  ));
	register_rest_route("single-page", "page/(?P<slug>[a-zA-Z0-9-]+)", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "individual_page_data"
  ));
  register_rest_route("single-page", "page-list", array(
    "methods" => WP_REST_SERVER::READABLE,
    "callback" => "page_list",
  ));
});
function individual_page_data($request) {
  $slug = $request['slug'];
  $page = get_page_by_path($slug);
  $page_contents = array(
    "title" => $page->post_title,
    "content" => $page->post_content,
    "seo" => (object)array(
      "title" => get_post_meta($page->ID,'_yoast_wpseo_title', true),
      "metaDescription" => get_post_meta($page->ID,'_yoast_wpseo_metadesc', true),
      "canonicalLink" => $slug
    )    
  );
  return $page_contents;
}
function page_list() { 
  $results = array();
  foreach(get_pages() as $p) {
    // women lead, diversity-group, pro-bono, community-invovlement, firm-overview, contact
     if (($p->ID !== 28186) && ($p->ID !== 28188) && ($p->ID !== 28192) && ($p->ID !== 28194) && ($p->ID !== 28196) && ($p->ID !== 28200) && ($p->ID !== 28206)) {
      $results[] = array(
        "ID" => $p->ID,
         "path" => "/".$p->post_name."/"
       );
     }
     
  }
  return $results;
}