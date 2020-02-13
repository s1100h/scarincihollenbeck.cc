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
	register_rest_route("individual-career", "career/(?P<slug>[a-zA-Z0-9-]+)", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "individual_career_data"
	));
});

/**
 * Grab event photos based slug
 *
 * @param array $request Options for the function.
 * @return string|null Title of event and series of photo data
 */
function individual_career_data($request)
{
  $slug = $request["slug"];

	$args = array(
		"numberposts" => 1,
		"name" => $slug,
		"post_type" => "careers",
		"post_status" => "publish"
  );
  
  $careers = get_posts($args);

  $id = $careers[0]->ID;

  $career_data = array(
    "title" => get_field("position", $id),
      "positionType" => get_field("position_type", $id),
      "contact" => get_field("contact", $id),
      "startDate" => get_field('start_date', $id),
      "positionLocation" => get_field('position_location', $id),
      "duration" => get_field('duration', $id),
      "positionDescription" => get_field('position_description', $id)
  );
	
  return rest_ensure_response($career_data);
}
