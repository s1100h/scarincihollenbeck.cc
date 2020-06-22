<?php // Attorney Search Shortcode - WP REST Endpoings 
if (!defined("ABSPATH")) {
    exit;
}
/**
 * Register attorney-search endpoints to WP-REST
 *
 * @since  1.0.0
 */
add_action("rest_api_init", function()
{
    register_rest_route("attorney-search", "/practices", array(
        "methods" => "GET",
        "callback" => "practice_list"
    ));
    register_rest_route("attorney-search", "/office-locations", array(
        "methods" => "GET",
        "callback" => "location_list"
    ));
    register_rest_route("attorney-search", "/designations", array(
        "methods" => "GET",
        "callback" => "designation_list"
    ));
    register_rest_route("attorney-search", "/attorneys", array(
        "methods" => "GET",
        "callback" => "attorney_list"
    ));
    register_rest_route("attorney-search", "/meta", array(
      "method" => "GET",
      "callback" => "attorney_meta"
    ));
});

/**
 * Return the meta data for the page
 * @since 2.0.0
 * @return object
 */
function attorney_meta() {
  $seo = (object)array(
    "title" => "Find an Attorney | Scarinci Hollenbeck, LLC",
    "metaDescription" => "In Scarinci Hollenbeck's attorneys archive, you can find one of our skillful attorneys who can service your business legal needs.",
    "canonicalLink" => "attorneys"
  );
  return $seo;
};
/**
 * Return the remove_ampersants.
 *
 * @since   1.0.0
 * @param   object  $string      string replace ACSII &
 * @return  string
 */
function remove_ampersands($string)
{
    return str_replace("&amp;", "&", $string);
}
/**
 * Return the practice_list
 *
 * @since   1.0.0
 *
 *
 * @return  object|null
 */
function practice_list()
{
  // retrieve all posts under the post type "location"
  $args = array(
    "numberposts" => -1,
    "post_type" => "practices",
    "post_status" => "publish"
  );
    
    $practice_data = array();

    $practices = get_posts($args);
    foreach($practices as $p) {
      $id = $p->ID;
      $title = get_the_title($id);
      $children = array();
      $child_practices = get_field("child_practice", $id);
      
     if(!empty($child_practices)) {
        foreach($child_practices as $cp) {
          if(!is_null($cp)) {
            $children[] = array(
              "ID" => uniqid(),
              "title" => html_entity_decode(htmlspecialchars_decode($cp->post_title))
            );
          }
        }
        $practice_data[] = array(
          "ID" => $id,
          "title" => html_entity_decode(htmlspecialchars_decode($title)),
          "children" => $children    
        );
     }
    }
    return $practice_data;
}
/**
 * Return the location_list
 *
 * @since   1.0.0 
 * @return  object|null
 *
 */
function location_list()
{
     // retrieve all posts under the post type "location"
    $args = array(
      "numberposts" => -1,
      "post_type" => "location",
      "post_status" => "publish"
    );
    
    $location_data = array();

    $locations = get_posts($args);
    foreach($locations as $loc) {
      $location_data[] = array(
        "ID" => $loc->ID,
        "title" => $loc->post_title
      );
    }
    return $location_data;
}
/**
 * Return the designation_list.
 *
 * @since   1.0.0
 * @return  object|null
 *
 */
function designation_list()
{
  $field = get_field_object('field_5c5b38095503d');
  $designation_data = array();
  if(is_array($field['choices'])){
    foreach($field['choices'] as $choice) {
      $designation_data[] = array(
        "ID" => uniqid(),
        "title" => $choice
      );
    }
  }  
  return $designation_data;
}
/**
 * Return the attorney_list
 *
 * @since   1.0.0
 * @return  object|null
 *
 */
function attorney_list()
{
    
    // retrieve all posts under the post type "attorney"
    // and sort them by their last name field atp_last
    $args = array(
        "numberposts" => -1,
        "post_type" => "attorneys",
        "post_status" => "publish",
        "meta_query" => array(
          array(
            "key" => "last_name"
          )
        ),
        "meta_key" => "last_name",
        "orderby" => "meta_value",
        "order" => "ASC"
    );
    $attorneys = get_posts($args);
    // the complete list of attorneys and their data
    $attorney_list = array();
    // iterate through the list of attorneys 
    // retrieve specific info and push it into attorney_list 
    foreach ($attorneys as $post) {
        
        // attorney id 
        $id = $post->ID;
        // retrieve the attorneys first name set first_name
        $first_name = get_field("first_name", $id);
        // retrieve the attorneys last name set last_name
        $last_name =  get_field("last_name", $id);
        // retrieve the attroneys middle initial set middle_initial
        $middle_initial = get_field("middle_initial", $id);
        // retrieve the attorneys designation set designation
        $designation = get_field("designation", $id);
        // retrieve the attorneys location and set main_location 
        $locations = get_field("office_location", $id);
        $location_data = array();
        if(is_array($locations)){
          foreach($locations as $loc) {
            $location_data[] = $loc->post_title;
          }
        }
        // retrieve the attorneys practices
        $practices = get_field("related_practices", $id);
        $practice_data = array();
        if(is_array($practices)) {
          foreach($practices as $prac) {
            $practice_data[] = html_entity_decode(htmlspecialchars_decode($prac->post_title));
          };
        }
        // retrieve the attorneys practices
        $primary_practices[] = get_field("primary_practice", $id);
        
        // retrieve the attorneys phone and set to phone 
        $phone = get_field("phone_number", $id);
        // retrieve the attorneys phone and set to phone 
        $fax =  get_field("fax_number", $id);
        // retrieve the attorneys email and set to email
        $email = get_field("email", $id);
        // retrieve the attorneys practice groups and convert to string 
        $args_practices = array(
            "fields" => "names"
        );
        // retrieve the attorney main photo
        $main_photo = get_field("profile_image", $id);
        //retrieve the PDF bio link
        $pdf = get_field("pdf_bio", $id);        
        // retrieve vizibility link
        $vizibility = get_field("vizibility", $id);
        // retrieve a small excerpt for each attorney
        // strip tags and limit excerpt length
        $excerpts = get_field("biography_content", $id);
        $excerpts = strip_tags($excerpts);
        $excerpts = wordwrap($excerpts, 275);
        $excerpts = explode("\n", $excerpts);
        $excerpts = $excerpts[0] . " ...";
        
       
        
        // build attorney bio object to send out in /attorneys endpoint
        $bio = (object) array(
            "id" => $id,
            "link" => "/" . $post->post_name,
            "title" => $post->post_title,
            "main_photo" => $main_photo["url"],
            "better_featured_image" => get_the_post_thumbnail_url($id, 'full'),
            "first_name" => $first_name,
            "last_name" => $last_name,
            "middle_initial" => $middle_initial,
            "designation" => $designation,
            "phone" => $phone,
            "fax" => $fax,
            "email" => $email,
            "pdf_bio" => $pdf["url"],
            "v_card" => $vizibility,
            "location_array" => $location_data,
            "location" => implode(", ", $location_data),
            "primary_practice" => $primary_practices[0]->post_title,
            "practices_array" => $practice_data,
            "practices" => implode(", ",$practice_data),
            "excerpt" => $excerpts
        );
        $attorney_list[] = $bio;
    }
    return rest_ensure_response($attorney_list);
}