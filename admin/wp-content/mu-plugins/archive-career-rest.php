<?php // Individual Practice Page  - WP REST Endpoints 
if(!defined("ABSPATH")) {
  exit;
}
/**
 * Register practice-page endpoint to WP-REST 
 *
 * @since 1.0.0
 * /
 * 
 **/
add_action('rest_api_init', function()
{
	register_rest_route("career-portal", "careers/", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "career_portal_data"
	));
});

/**
 * Grab event photos based slug
 *
 * @param array $request Options for the function.
 * @return string|null Title of event and series of photo data
 */
function career_portal_data()
{

	$args = array(
		"numberposts" => -1,
		"post_type" => "careers",
		"post_status" => "publish"
  );
  
  $careers = get_posts($args);

  $career_portal_data = array();

  foreach($careers as $car) {
    $career_portal_data[] = array(
      "title" => get_field("position", $car->ID),
      "positionType" => get_field("position_type", $car->ID),
      "contact" => get_field("contact", $car->ID),
      "startDate" => get_field('start_date', $car->ID),
      "positionLocation" => get_field('position_location', $car->ID),
      "duration" => get_field('duration', $car->ID),
      "positionDescription" => get_field('position_description', $car->ID)
    );
  }


	
  return rest_ensure_response($career_portal_data);
}
