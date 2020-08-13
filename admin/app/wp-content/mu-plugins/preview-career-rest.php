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
	register_rest_route("preview", "career/(?P<id>[a-zA-Z0-9-]+)", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "preview_individual_career_data",
    'permission_callback' => '__return_true'
	));
});

/**
 * Grab event photos based slug
 *
 * @param array $request Options for the function.
 * @return string|null Title of event and series of photo data
 */
function preview_individual_career_data($request)
{
  $career_id = $request["id"];
  $career_id = (int)$career_id;
  
  $careers = get_post($career_id);

  $id = $careers->ID;

  $career_data = array(
    "title" => get_field("position", $id),
    "startDate" => get_field("start_data", $id),
    "positionLocation" => get_field("position_location", $id),
    "duration" => get_field("duration", $id),
    "attorneyAdmin" => get_field("attorney_or_admin", $id),
    "additionalDetails" => get_field("additional_details", $id),
    "positionDescription" => get_field("position_description", $id)
  );
	
  return rest_ensure_response($career_data);
}
