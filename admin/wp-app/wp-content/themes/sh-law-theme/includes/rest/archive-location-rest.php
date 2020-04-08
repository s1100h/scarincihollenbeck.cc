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


      // combine address fields into a single string
      $building_title = get_field("office_building_title", $loc->ID);
      $street_address = get_field("street_address", $loc->ID);
      $po_box = get_field("po_box", $loc->ID);
      $floor = get_field("floor",$loc->ID);
      $address_locality = get_field("address_locality", $loc->ID);
      $address_region = get_field("address_region", $loc->ID);
      $post_code = get_field("post_code", $loc->ID);
      $address_country = get_field("address_country", $loc->ID);

      $address_array = array (
        $building_title,
        $street_address,
        $po_box,
        $floor,
        $address_locality.", ".$address_region.", ".$post_code
      );
      $address_array = array_filter($address_array, 'strlen');
      $address_array = array_values($address_array);
      
      $portal_data['offices'][] = array(
        "id" => ($loc->post_name == 'lyndhurst') ? 1 : (($loc->post_name == 'red-bank') ? 2 : (($loc->post_name == 'new-york') ? 3 : (($loc->post_name == 'washington-dc') ? 4 : (($loc->post_name == 'san-francisco') ? 5 : $loc->post_name)))),
        "title" => get_the_title($loc->ID),
        "address" => $address_array,
        "phone" => get_field("phone", $loc->ID),
        "fax" => get_field("fax", $loc->ID),
        "slug" => "/location/".$loc->post_name,
        "shortName" => ($loc->post_name == 'washington-d-c') ? 'washington dc' : str_replace("-", ' ', $loc->post_name) ,
        "featuredImg" => get_the_post_thumbnail_url($loc->ID, 'full'),
      );
   }
   //seo
   $portal_data['seo'] = (object)array(
    "title" => "Scarinci Hollenbeck NY, NJ, DC, CA Office Locations",
    "metaDescription" => "To best serve our clients, Scarinci Hollenbeck has attorneys in office locations in New York, New Jersery, Washington D.C., and San Francisco, CA.",
    "canonicalLink" => "/",

   );
   return rest_ensure_response($portal_data);
 }