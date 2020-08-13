<?php
if(!defined("ABSPATH")) {
  exit;
}
/**
 * Register individual-admin endpoint to WP-REST 
 *
 * @since 1.0.0
 * /
 * 
 **/
add_action('rest_api_init', function()
  {
    register_rest_route("individual-admin", "admin/(?P<slug>[a-zA-Z0-9-]+)", array(
      "methods" => WP_REST_SERVER::READABLE,
      "callback" => "admin_bio_data",
      'permission_callback' => '__return_true'
    )); 
  });
  /**
   * Retrun the admin bio data 
   * 
   * @since 1.0.0
   * @return object | null
   */
   function admin_bio_data($request)
   {
     $slug = $request["slug"];
     $args = array(
       "numberposts" => 1,
       "name" => $slug, 
       "post_type" => "administration",
       "post_status" => "publish"
     );
     
     // query attorney post object
     $admin = get_posts($args);

     if(count($admin) > 0) {
      // return attorney post id
      $id = $admin[0]->ID;

      $image = get_field("featured_image", $id);

      // get first and last name 
      $name = get_field("name", $id);
      $name_array = explode(" ", $name);
      $last = $name_array[count($name_array) -1];
      $first = $name_array[0];

      // office locations
      $loc = get_field("location", $id);
      $office_locations = array();

      foreach($loc as $l) {
        $office_locations[] = $l->post_title;
      }

      $biography = array(
        "ID" => $id,
        "link" => "/administration/".$admin[0]->post_name,
        "name" => $name,
        "Title" => get_field("Title", $id),
        "image" => array(
          "url" => $image["url"],
          "altTag" => get_field("name", $id)
        ),
        "phone_extension" => get_field("phone_extension", $id),
        "email" => get_field("email", $id),
        "biography" => get_field("biography", $id),
        "vizibility" => get_field("Vizibility", $id),
        "location" => get_field("location", $id)[0]->post_title,
        "social_media_links" => get_field("social_media_links", $id),
        "seo" => (object)array(
          "title" => get_post_meta($id, '_yoast_wpseo_title', true),
          "name" => $name,
          "metaDescription" => get_post_meta($id, '_yoast_wpseo_metadesc', true),
          "canonicalLink" => "administration/".$slug,
          "featuredImg" => $image["url"],
          "imgHeight" => $image["sizes"]["medium_large-height"], 
          "imgWidth" =>  $image["sizes"]["medium_large-width"],
          "firstName" => $first,
          "lastName" => $last,
          "jobPosition" => get_field("Title", $id),
          "addressLocality" => $office_locations[0]
        ));

        return new WP_REST_Response($biography, 200);
     } else {       
      return new WP_REST_Response(array( 'message'=> 'No admin found.', 'status' => 404), 404);
     }
}