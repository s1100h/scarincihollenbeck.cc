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
	register_rest_route("events-gallery", "event/(?P<slug>[a-zA-Z0-9-]+)/(?P<offset>[a-zA-Z0-9-]+)", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "individual_event_data"
	));
});

/**
 * Grab event photos based slug
 *
 * @param array $request Options for the function.
 * @return string|null Title of event and series of photo data
 */
function individual_event_data($request)
{
  $slug = $request["slug"];
  $offset = $request["offset"];

	$args = array(
		"numberposts" => 1,
		"name" => $slug,
		"post_type" => "events",
		"post_status" => "publish"
  );
  
  $events = get_posts($args);

  $id = $events[0]->ID;

  // retrieve gallery photos
  $images = get_field("photos", $id);
  $images_data = array();

  // set gallery photo to match offset 
  $start = ($offset - 1) * 11; 
  $end =  $offset * 11; 


  
  foreach(range($start, $end) as $i) {
    if(isset($images[$i])) {
      $images_data[] = array(
        "ID" => $images[$i]["ID"],
        "title" => $images[$i]["title"],
        "photo" => array(
          "thumbnail" => $images[$i]["sizes"]["medium"],
          "large" => $images[$i]["url"]
        )
      );      
    }
  };

  $events_data = array(
    "id" => $id,
    "slug" => $slug,
    "pages" => ceil(count($images) / 12),
    "title" => get_the_title($id),
    "gallery" => $images_data,
    "seo" => (object)array(
      "title" => get_post_meta( $id, '_yoast_wpseo_title', true),
      "metaDescription" => get_post_meta( $id, '_yoast_wpseo_metadesc', true),
      "canonicalLink" => $slug
    )
  );
	
  return rest_ensure_response($events_data);
}
