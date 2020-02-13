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
      "callback" => "admin_bio_data"
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

     // return attorney post id
     $id = $admin[0]->ID;

     $image = get_field("featured_image", $id);

     $biography = array(
      "ID" => $id,
      "link" => get_home_url("/")."/administration/".$admin[0]->post_name,
      "name" => get_field("name", $id),
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
      "social_media_links" => get_field("social_media_links", $id)

    );
  return rest_ensure_response($biography);
}