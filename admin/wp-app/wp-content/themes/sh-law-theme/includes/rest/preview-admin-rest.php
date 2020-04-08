<?php
if(!defined("ABSPATH")) {
  exit;
}
/**
 * Register preview admin endpoint to WP-REST 
 *
 * @since 1.0.0
 * /
 * 
 **/
add_action('rest_api_init', function()
  {
    register_rest_route("preview", "admin/(?P<id>[a-zA-Z0-9-]+)", array(
      "methods" => WP_REST_SERVER::READABLE,
      "callback" => "preview_admin_bio_data"
    )); 
  });
  /**
   * Retrun the preview admin bio data 
   * 
   * @since 1.0.0
   * @return object | null
   */
   function preview_admin_bio_data($request)
   {
     $slug_id = $request["id"];
     $slug_id = (int)$slug_id;
     // query attorney post object
     $admin = get_post($slug_id);

     // return attorney post id
     $id = $admin->ID;

     $image = get_field("featured_image", $id);

     $biography = array(
      "ID" => $id,
      "link" => get_home_url("/")."/administration/".$admin->post_name,
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