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
	register_rest_route("firm-page", "page/(?P<slug>[a-zA-Z0-9-]+)", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "individual_firm_page_data"
	));
});
function individual_firm_page_data($request) {
  $slug = $request['slug'];
  
  // get id from slug
  $page = get_page_by_path($slug);
  $page_id = $page->ID;
  $pages = array(
    'pro-bono',
    'women-in-sh',
    'community-involvement',
    'diversity-group'
  );
  $related_pages = array();
  $members = array();
  foreach($pages as $p){
    if($p !== $slug) {
      $related_pages[] = $p;
    }
  }
  /**
    * Query attorneys and admins based on their membership to the group
  */
  // Retrieve News
  $members = array();
  $args = array(
    'post_type' => array('attorneys', 'administration'),
    'posts_per_page' => -1,
    'meta_query' => array(
      array(
        'key'   => 'firm_groups',
        'value' => ''.$slug.'',
        'compare' => 'LIKE'
      )
    ) 
  );
  $members_query = new WP_Query($args);
  $mq = $members_query->posts;
  $membersList = array();
  foreach($mq as $m) {
    $fg = get_field('firm_groups', $m->ID, true); 
    foreach($fg as $f) {
      if(strpos($f, $slug) !== false) {
        if(strpos($f, 'chair') !== false) {
          $members['chair'][] = array(
            "ID" => $m->ID,
            "name" => $m->post_title,
            "lastName" => extract_last_name(get_field("email", $m->ID)),
            "link" => "/attorney/".$m->post_name,
            "image" => get_the_post_thumbnail_url($m->ID),
            "email" => get_field("email", $m->ID),
            "contact" => ($m->post_type === "administration") ? '201-896-4100 '.get_field("phone_extension", $m->ID) : get_field("phone_number", $m->ID),
            "designation" => ($m->post_type === "administration") ? get_field("Title", $m->ID) : get_field("designation", $m->ID)
          );
        }else {
          $members['member'][] = array(
            "ID" => $m->ID,
            "name" => $m->post_title,
            "lastName" => extract_last_name(get_field("email", $m->ID)),
            "link" => "/attorney/".$m->post_name,
            "image" => get_the_post_thumbnail_url($m->ID),
            "email" => get_field("email", $m->ID),
            "contact" => ($m->post_type === "administration") ? '201-896-4100 '.get_field("phone_extension", $m->ID) : get_field("phone_number", $m->ID),
            "designation" => ($m->post_type === "administration") ? get_field("Title", $m->ID) : get_field("designation", $m->ID)
          );
        }
      }
    }
  }
  //
  $tab_list = array(
    array(
     get_field("tab_header" , $page_id),
     get_field("tab_content", $page_id)
   ),
    array(
     get_field("tab_2_header", $page_id),
     get_field("tab_2_content", $page_id)
   ),
   array(
     get_field("tab_3_header", $page_id),
     get_field("tab_3_content", $page_id)
   ),
   array(
     get_field("tab_4_header", $page_id),
     get_field("tab_4_content", $page_id)
   ),
   array(
     get_field("tab_5_header", $page_id),
     get_field("tab_5_content", $page_id)
   )
   );
   $tab_results = array();
   foreach($tab_list as $ti => $tl) {
     if(!empty($tl[$ti][0]) && !empty($tl[$ti][1])) {
       $tab_results[] = array(
         "title" => $tl[0],
         "content" => $tl[1]
       );
     }
   }
  /**
   *  Get the page descritpion 
   *  @return string 
   */
   $description = get_field("description", $page_id);
   /**
    * *
    * Retreive articles from attorneys or admins who are in the group
    * 
    */
    $member_news = array();
    $cat_id = get_category_by_slug($slug);
    
    if($cat_id) {
      $cat_id = $cat_id->term_id;
    } else {
      $cat_id = 99;
    }
    $ma_args = array(
      "post_type" => "post",
      'numberposts'	=> 10,
      'cat' => $cat_id     
    );
    $ma = new WP_Query($ma_args);
    $ma = $ma->posts;
    foreach($ma as $m) {
      $member_news[] = array(
        "title" => html_entity_decode(htmlspecialchars_decode($m->post_title)),
        "link" => get_permalink($m->ID),
        "featuredImg" => get_the_post_thumbnail_url($m->ID, 'medium'),
      );
      
    }

  
  
  $page_contents = array(
    "attorneysMentioned" => $member_news,
    "page_id" => $page_id,
    "title" => $page->post_title,
    "description" => $description,
    "tabs" => $tab_results,
    "members" => $members,
    'relatedPages' => $related_pages,
    'seo' => (object)array(
      "title" => get_post_meta($page_id, '_yoast_wpseo_title', true),
      "metaDescription" => get_post_meta($page_id, '_yoast_wpseo_metadesc', true),
      "canonicalLink" => $slug
    )
  );
  return $page_contents;
}