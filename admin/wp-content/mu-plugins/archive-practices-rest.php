<?php // Practice Portal Page  - WP REST Endpoints 
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
	register_rest_route("practice-portal", "page", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "practice_portal_page"
  ));
  register_rest_route("practice-portal", "blog-categories", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "practice_portal_blogs"
	));
});
/** 
 * returns associated array
 */
function practice_portal_blogs()
{
    $blogs = array();
    $cat = get_category( 2 );
    $cat_id = $cat->cat_ID;
    $child_categories = get_categories(array( 'parent' => $cat_id ));
    $category_list = array();
    
    // build the category list with children and sub children
    foreach($child_categories as $key => $cat) {
      if ($cat->term_id !== 558) {
        $info = array('id'=> $cat->term_id, 'name' => $cat->name);
        $blogs[] = $info;
      }
      
      $sub_cat = get_category(  $cat->term_id );
      $sub_cat_id = $cat->cat_ID;
      $sub_child_categories=get_categories(array( 'parent' => $sub_cat_id ));
      
      // get sub children info
      foreach($sub_child_categories as $sub_key => $sub_c) {
        $sub_info = array('id'=> $sub_c->term_id, 'name' => $sub_c->name);
        $blogs[] = $sub_info; 
      }
    }
    return rest_ensure_response($blogs);
}
/** 
 * returns sorted array of content
 */
function sort_links($data)
{
	$results = array();
	if(count($data) > 1) {
		foreach($data as $d) {
			$results[] = array(
				"ID" => $d->ID,
				"title" =>  html_entity_decode(htmlspecialchars_decode(get_the_title($d->ID))),
				"slug" => get_home_url("/")."/practices/".$d->post_name,
			);
		}
	}else {
		$results[] = array(
			"ID" => $data[0]->ID,
			"title" => html_entity_decode(htmlspecialchars_decode(get_the_title($data[0]->ID))),
			"slug" => get_home_url("/")."/practices/".$d->post_name,
		);
	}
	return $results;
}
/**
 * 
 * returns object practice page data 
 * 
 */
function practice_portal_page() 
{
  $wp_query;
  // retrieve all the data from practice_portal_categories field
  $args = array(
		"posts_per_page" => -1,
		"post_type" => "practices",
		"post_status" => "publish"
	);
  $practices = new WP_Query($args);
  $practice_ids = wp_list_pluck( $practices->posts, 'ID' );
  
  // store page information
  $page_content = array();
  
  // iterate through each id
  foreach($practice_ids as $id) {
    $category = get_field('practice_portal_categories', $id, false);
    $slug = get_post_field( 'post_name', $id );
    // retrieve children
    $related_children = get_field('child_practice', $id);
    
    $related_children_data = array();

    if($related_children) {
      $related_children_data = sort_links($related_children);
    }
    
    if(!empty($category)){
      $page_content[] = array(
        "ID" => $id,
        "title" => html_entity_decode(htmlspecialchars_decode(get_the_title($id))),
        "slug" => get_home_url("/")."/practices/".$slug,
        "children" => $related_children_data,
        "category" =>  $category[0]
      );
    }
    
  }
  
  return rest_ensure_response($page_content);
  
}