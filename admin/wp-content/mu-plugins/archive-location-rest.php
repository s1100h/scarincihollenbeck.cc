<?php
add_action( 'rest_api_init', function () {
  register_rest_route( 'location-portal', '/offices/', array(
    'methods' => 'GET',
    'callback' => 'location_portal_data',
  ) );
} );
/**
 * Grab latest post title by location selection
 *
 * @param array $data Options for the function.
 * @return string|null Post title, link, and featured image for the latest,  * or null if none.
 */
 function location_portal_data()
 {
   $portal_data = array();
   $args = array(
		"post_type" => "location",
		"post_status" => "publish"
   );
   $locations = get_posts($args);
   foreach($locations as $loc) {
      $portal_data[] = array(
        "id" => ($loc->post_name == 'lyndhurst') ? 1 : (($loc->post_name == 'red-bank') ? 2 : (($loc->post_name == 'new-york') ? 3 : (($loc->post_name == 'washington-dc') ? 4 : (($loc->post_name == 'san-francisco') ? 5 : $loc->post_name)))),
        "title" => get_the_title($loc->ID),
        "address" => get_field("address", $loc->ID),
        "phone" => get_field("phone", $loc->ID),
        "fax" => get_field("fax", $loc->ID),
        "slug" => get_home_url("/")."/location/#".$loc->post_name,
        "shortName" => ($loc->post_name == 'washington-d-c') ? 'washington dc' : str_replace("-", ' ', $loc->post_name) ,
        "featuredImg" => get_the_post_thumbnail_url($loc->ID, 'full'),
        "test" => $loc->post_name,
      );
   }
   // 
   return rest_ensure_response($portal_data);
 }