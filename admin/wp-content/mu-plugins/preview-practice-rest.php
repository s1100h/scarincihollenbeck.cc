<?php // Preview Individual Practice Page  - WP REST Endpoints 
if(!defined("ABSPATH")) {
  exit;
}
/**
 * Register  preview practice-page endpoint to WP-REST 
 *
 * @since 1.0.0
 * /
 * 
 **/
add_action('rest_api_init', function()
{
	register_rest_route("preview", "practice/(?P<id>[a-zA-Z0-9-]+)", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "preview_individual_practice_data"
	));
});
function prev_sort_obj_res($data)
{
	$results = array();
	if(count($data) > 1) {
		foreach($data as $d) {
			$results[] = array(
				"ID" => $d->ID,
				"name" => html_entity_decode(htmlspecialchars_decode($d->post_title)),
				"lastName" => prev_ex_last_name(get_field("email", $d->ID)),
				"link" => get_home_url("/")."/attorney/".$d->post_name,
				"image" => get_field("profile_image", $d->ID)["url"],
				"email" => get_field("email", $d->ID),
				"contact" => get_field("phone_number", $d->ID),
				"designation" => get_field("designation", $d->ID)
			);
		}
	}else {
		$results[] = array(
			"ID" => $data[0]->ID,
			"name" => html_entity_decode(htmlspecialchars_decode($data[0]->post_title)),
			"lastName" => prev_ex_last_name(get_field("email", $data[0]->ID)),
			"link" => get_home_url("/")."/attorney/".$data[0]->post_name,
			"image" => get_field("profile_image", $data[0]->ID)["url"],
			"email" => get_field("email", $data[0]->ID),
			"contact" => get_field("phone_number", $data[0]->ID),
			"designation" => get_field("designation",$data [0]->ID)
		);
	}
	return $results;
}
function prev_sort_id_res($data)
{
	$results = array();
	if(count($data) > 1){
		foreach($data as $d) {
			$results[] = $d->ID;
		}
	}else {
		$results[] = $data[0]->ID;
	}
	return $results;
}
function prev_sort_res_link($data)
{
	$results = array();
	if(count($data) > 1) {
		foreach($data as $d) {
			$results[] = array(
				"ID" => $d->ID,
				"title" => html_entity_decode(htmlspecialchars_decode(get_the_title($d->ID))),
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
function prev_ex_last_name($attorney)
{
	$name = substr($attorney, 1);
	$name = preg_replace('/\b@.*$/', '', $name);
	return ucfirst($name);
}
function preview_individual_practice_data($request){
	$practice_id = $request["id"];
  $practice_id = (int)$practice_id; 

	// query attorney post object
  $practices = get_post($practice_id);
  
	//page id
	$id = $practices->ID;
	// practice chair
	$chair = get_field("section_chief", $id);
	$chair_data = array();
	if($chair) {
		$chair_data = prev_sort_obj_res($chair);
	}

	// include attorneys
	$include_attorneys = get_field("include_attorney", $id);
	$include_attorney_data = array();
	if($include_attorneys) {
		$include_attorney_data = prev_sort_obj_res($include_attorneys);
	}
	// related attorneys
	$related_attorneys = get_posts(array(
    'posts_per_page' => -1,
    'post_status'      => 'publish',
    'exclude'      => $chair[0]->ID,
		'post_type' => 'attorney',
		'meta_query' => array(
			array(
			'key' => 'related_practices',
			'value' => '"' .$id. '"',
			'compare' => 'LIKE'
		))
	));
	$related_attorneys_data = array();
	if($related_attorneys) {
		$related_attorneys_data = prev_sort_obj_res($related_attorneys);
	}
	// related blog
	$related_blogs = get_field("related_blog_category", $id);
	$related_blog_data = array();
	if($related_blogs) {
		foreach($related_blogs as $rb) {
			$args = array(
				'numberposts' => 5,
				'category' => $rb
			);
			$posts = get_posts($args);
			if($posts) {
			 foreach($posts as $p) {
        $related_blog_data [] = array(
          "ID" => $p->ID,
          "title" => html_entity_decode(htmlspecialchars_decode(get_the_title($p->ID))),
          "slug" => get_permalink($p->ID),
         );
       }
			}
		}
	}
	
	// get child
	$child = get_field("child_practice", $id);
	if($child) {
    $child_data = prev_sort_res_link($child);
  }
	// // exclude practices
	$exclude_practices = get_field("exclude_practice", $id);
	$exclude_practice_data = array();
	if($exclude_practices) {
		$exclude_practice_data = prev_sort_id_res($exclude_practices);
	}
	// include practices
	$include_practices = get_field("include_practice", $id);
	$include_practice_data = array();
	if($include_practices) {
		$include_practice_data = prev_sort_res_link($include_practices);
  }
  
  // retrieve children
  $related_children = get_field("child_practice", $id);
  
	$related_children_data = array();
	if($related_children) {
		$related_children_data = prev_sort_res_link($related_children);
  }
  
  // retrieve highlight real
  $highlight_real = get_field("highlight_scroller", $id);
  $highlight_real_data = array();
  if($highlight_real) {
    foreach($highlight_real as $hr) {
      $highlight_real_data[] = $hr;
    }    
  }
	// retrieve attorneys includes in this practice
	$practice_content = array(
    "practiceID" => $id,
    "slug" => $slug,
    "chairID" => $chair[0]->ID,
		"title" => html_entity_decode(htmlspecialchars_decode(get_the_title($id))),
		"description" => get_field("description", $id),
		"children" => $related_children_data,
		"content" => get_field("content_section", $id),
    "chair" => $chair_data,
    "attorneyList" => array_unique(array_merge($include_attorney_data, $related_attorneys_data), SORT_REGULAR),
    "practiceList" => array_unique(array_merge($include_practice_data, $related_children_data), SORT_REGULAR),
		"excludePractices" => $exclude_practice_data,
    "industryTopics" => $related_blog_data,
    "highlightReal" => $highlight_real_data,
	);
	return rest_ensure_response($practice_content);
}