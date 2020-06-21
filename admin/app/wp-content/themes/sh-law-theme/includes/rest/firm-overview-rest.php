<?php // Firm Page  - WP REST Endpoints 
if(!defined("ABSPATH")) {
  exit;
}
/**
 * Register firm page endpoint to WP-REST 
 *
 * @since 1.0.0
 * /
 * 
 **/
add_action('rest_api_init', function()
{
	register_rest_route("firm-overview", "/content", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "firm_overview_data"
	));
});

function firm_overview_data() {

  // members
  $members = array();

  // Organize attorneys by manging partner, and partner
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

  foreach($attorneys as $at) {
    $designation = get_field('designation', $at->ID);
    if($designation == "Managing Partner") {
      $members['managingPartners'][] = array(
        "ID" => $at->ID,
        "name" => $at->post_title,
        "image" => get_the_post_thumbnail_url($at->ID),
        "link" => "/".$at->post_name,
        "phone" => get_field('phone_number', $at->ID),
        "email" => get_field('email', $at->ID),
        "designation" => get_field('designation', $at->ID)
      );
    }

    if($designation == "Partner") {
      $members['partners'][] = array(
        "ID" => $at->ID,
        "name" => $at->post_title,
        "image" => get_the_post_thumbnail_url($at->ID),
        "link" => "/".$at->post_name,
        "phone" => get_field('phone_number', $at->ID),
        "email" => get_field('email', $at->ID),
        "designation" => get_field('designation', $at->ID)
      );
    }
  }





  // Get the list of admins
  $adminArgs = array(
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
    "order" => "ASC"
  );
  
  $admins = get_posts($adminArgs);

  foreach($admins as $ad) {
    $members['admin'][] = array(
      "ID" => $ad->ID,
      "name" => $ad->post_title,
      "title" => get_field("Title", $ad->ID),
      "image" => get_the_post_thumbnail_url($ad->ID),
      "link" => "/".$ad->post_name,
      "extension" => get_field('phone_extension', $ad->ID),
      "email" => get_field('email', $ad->ID),
      "designation" => get_field('designation', $at->ID)
    );    
  }

  $page = get_post(29492);
  $page_id = $page->ID;

  $main_tabs = get_field("main_tabs", $page_id);
  $main_tab_data = array();

  if(isset($main_tabs)) {
      foreach($main_tabs as $mt) {
    $main_tab_data[] = array(
      "title" => $mt['title'],
      "subTitle" => $mt['subtitle'],
      "mainImage" => $mt['main_image']['url'],
      "content" => $mt['content']
    );
  }
  }


  $page_content = array(
    "mainContent" => $page->post_content,
    "mainTabs" => $main_tab_data,
    "additionalInfo" => get_field("additional_content", $page_id),
    "members" => $members,
    "seo" => (object)array(
      "title" => get_post_meta($page_id,'_yoast_wpseo_title', true),
      "metaDescription" => get_post_meta($page_id,'_yoast_wpseo_metadesc', true),
      "canonicalLink" => "/firm-overview"
    )
  );
  

  return $page_content;
}
