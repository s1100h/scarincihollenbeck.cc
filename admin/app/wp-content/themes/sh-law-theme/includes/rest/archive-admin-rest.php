<?php // Admin Search Shortcode - WP REST Endpoings 
if (!defined("ABSPATH")) {
    exit;
}
/**
 * Register admin-search endpoints to WP-REST
 *
 * @since  1.0.0
 */
add_action("rest_api_init", function()
{
    register_rest_route("admin-search", "/admin", array(
        "methods" => "GET",
        "callback" => "admin_list"
    ));
});

function admin_list()
{
    
    // retrieve all posts under the post type "administration"
    // and sort them by their last name field atp_last
    $args = array(
        "numberposts" => -1,
        "post_type" => "administration",
        "post_status" => "publish",
        "meta_query" => array(
          array(
            "key" => "lastName"
          )
        ),
        "meta_key" => "lastName",
        "orderby" => "meta_value",
        "order" => "DESC"
    );
    $admins = get_posts($args);
    // the complete list of admins and their data
    $admin_id = $admins[0]->ID;
    $admin_list = array();

    foreach($admins as $a) {
      $id = $a->ID;
      $image = get_field("featured_image", $id);
      $admin_list['admins'][] = array(
        "ID" => $id,
        "link" => "/administration/".$a->post_name,
        "name" => get_field("name", $id),
        "Title" => get_field("Title", $id),
        "image" => array(
          "url" => $image["url"],
          "smallUrl" => get_the_post_thumbnail_url($id),
          "altTag" => get_field("name", $id)
        ),
        "phone_extension" => get_field("phone_extension", $id),
        "email" => get_field("email", $id)        
      );
    }

    $admin_list['seo'] = (object)array(
      "title" => "Administration Directors & Managers | Scarinci Hollenbeck",
      "metaDescription" => "In Scarinci Hollenbeck's administration archive, you can find the professionals behind the attorneys managing the business aspects of the firm.",
      "canonicalLink" => "administration"
    );

   
    return rest_ensure_response($admin_list);
}