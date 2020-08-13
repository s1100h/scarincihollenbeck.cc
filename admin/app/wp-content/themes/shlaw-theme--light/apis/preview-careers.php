<?php // Individual Career Page  - WP REST Endpoints 
if(!defined("ABSPATH")) {
  exit;
}
/**
 * Register career-page endpoint to WP-REST 
 *
 * @since 1.0.0
 * /
 * 
 **/
add_action('rest_api_init', function()
{
	register_rest_route("preview-career", "career/(?P<id>\d+)", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "preview_career",
    'permission_callback' => '__return_true'
	));
});

/**
 * Grab event photos based slug
 *
 * @param array $request Options for the function.
 * @return string|null Title of event and series of photo data
 */
function preview_career($request)
{
  $id = $request["id"];

	$args = array(
		"numberposts" => 1,
    "p" => $id, 
    "post_type" => "careers",
    "post" => "revision",
    "post_status" => array('draft', 'publish', 'auto-draft', 'prending')
  );
  
  $careers = get_posts($args);

  $career_id = $careers[0]->ID;

  $career_data = array(
    "title" => get_field("position", $career_id),
      "positionType" => get_field("position_type", $career_id),
      "contact" => get_field("contact", $career_id),
      "startDate" => get_field('start_date', $career_id),
      "positionLocation" => get_field('position_location', $career_id),
      "duration" => get_field('duration', $career_id),
      "positionDescription" => get_field('position_description', $career_id),
      "seo" => (object)array(
        "title" => get_post_meta($career_id, '_yoast_wpseo_title', true),
        "metaDescription" => get_post_meta($career_id, '_yoast_wpseo_metadesc', true),
        "canonicalLink" => "career/".$careers[0]->post_name
      )
  );
	
  if(is_null($career_id)){
    return new WP_REST_Response(null, 404);
  } else {
    return rest_ensure_response($career_data);
  }
}