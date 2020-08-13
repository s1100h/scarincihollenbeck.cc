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
		"callback" => "career_portal_data",
    'permission_callback' => '__return_true'
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
    $career_slug = str_replace(home_url(), '', get_permalink($car->ID));
    $career_slug = str_replace('/careers', '', $career_slug);

    $career_portal_data['careers'][] = array(
      "title" => get_field("position", $car->ID),
      "slug" => rtrim($career_slug, "/"),
      "positionType" => get_field("position_type", $car->ID),
      "contact" => get_field("contact", $car->ID),
      "startDate" => get_field('start_date', $car->ID),
      "positionLocation" => get_field('position_location', $car->ID),
      "duration" => get_field('duration', $car->ID),
      "positionDescription" => get_field('position_description', $car->ID)
    );
  }

  $career_portal_data['seo'] = (object)array(
    "title" => "Careers & Positions | Scarinci Hollenbeck, LLC",
    "metaDescription" => "Scarinci Hollenbeck's commitment to diversity and equal opportunity enables Scarinci Hollenbeck to recruit, retain, and promote the best attorneys.",
    "canonicalLink" => "careers"
  );


	
  return rest_ensure_response($career_portal_data);
}
