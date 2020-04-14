<?php // Individual Practice Page  - WP REST Endpoints 
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
	register_rest_route("individual-practices", "practice/(?P<slug>[a-zA-Z0-9-]+)", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "individual_practice_data"
	));
});
function sort_object_results($data)
{
	$results = array();
	if(count($data) > 1) {
		foreach($data as $d) {
			$results[] = array(
				"ID" => $d->ID,
				"name" => html_entity_decode(htmlspecialchars_decode($d->post_title)),
				"lastName" => extract_last_name(get_field("email", $d->ID)),
				"link" => "/attorney/".$d->post_name,
				"image" => get_the_post_thumbnail_url($d->ID),
				"email" => get_field("email", $d->ID),
				"contact" => get_field("phone_number", $d->ID),
				"designation" => get_field("designation", $d->ID)
			);
		}
	}else {
		$results[] = array(
			"ID" => $data[0]->ID,
			"name" => html_entity_decode(htmlspecialchars_decode($data[0]->post_title)),
			"lastName" => extract_last_name(get_field("email", $data[0]->ID)),
			"link" => "/attorney/".$data[0]->post_name,
			"image" => get_the_post_thumbnail_url($data[0]->ID),
			"email" => get_field("email", $data[0]->ID),
			"contact" => get_field("phone_number", $data[0]->ID),
			"designation" => get_field("designation",$data [0]->ID)
		);
	}
	return $results;
}
function sort_id_results($data)
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
function sort_result_links($data)
{
	$results = array();
	if(count($data) > 1) {
		foreach($data as $d) {
			$results[] = array(
				"ID" => $d->ID,
				"title" => html_entity_decode(htmlspecialchars_decode(get_the_title($d->ID))),
				"slug" => "/practices/".$d->post_name,
			);
		}
	}else {
		$results[] = array(
			"ID" => $data[0]->ID,
			"title" => html_entity_decode(htmlspecialchars_decode(get_the_title($data[0]->ID))),
			"slug" => "/practices/".$data[0]->post_name,
		);
	}
	return $results;
}
function extract_last_name($attorney)
{
	$name = substr($attorney, 1);
	$name = preg_replace('/\b@.*$/', '', $name);
	return ucfirst($name);
}
function individual_practice_data($request){
	$slug = $request["slug"];
	$args = array(
		"numberposts" => 1,
		"name" => $slug,
		"post_type" => "practices",
		"post_status" => "publish"
	);
	// query attorney post object
	$practices = get_posts($args);
	//page id
	$id = $practices[0]->ID;
	// practice chair
	$chair = get_field("section_chief", $id);
	$chair_data = array();
	if($chair) {
		$chair_data = sort_object_results($chair);
	}

	// include attorneys
	$include_attorneys = get_field("include_attorney", $id);
	$include_attorney_data = array();
	if($include_attorneys) {
		$include_attorney_data = sort_object_results($include_attorneys);
	}
	// related attorneys
	$related_attorneys = get_posts(array(
    'posts_per_page' => -1,
    'post_status'      => 'publish',
    'exclude'      => (isset($chair[0]->ID)) ? $chair[0]->ID : 0,
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
		$related_attorneys_data = sort_object_results($related_attorneys);
  }
  
  // related blog
  $related_blogs = implode(", ",get_field("related_blog_category", $id));
  $related_blog_data = array();

  $related_blog_args = array(
    'numberposts' => -1,
    'cat' => $related_blogs,
    'order' => 'DESC',
  );

  // query related posts
  $related_blog_posts = get_posts($related_blog_args);


  // get posts
  if($related_blog_posts) {
    foreach($related_blog_posts as $p) {
    $related_blog_data [] = array(
      "ID" => $p->ID,
      "date" => get_the_date('F j, Y', $p->ID),
      "title" => html_entity_decode(htmlspecialchars_decode(get_the_title($p->ID))),
      "link" => get_permalink($p->ID),
      "categoryParent" => get_the_category($p->ID)[0]->category_parent,
      "image" => get_the_post_thumbnail_url($p->ID),
      "category" => get_the_category($p->ID)
      );
    }
  }
	
	// get child
	$child = get_field("child_practice", $id);
	if($child) {
    $child_data = sort_result_links($child);
  }
	// // exclude practices
	$exclude_practices = get_field("exclude_practice", $id);
	$exclude_practice_data = array();
	if($exclude_practices) {
		$exclude_practice_data = sort_id_results($exclude_practices);
	}
	// include practices
	$include_practices = get_field("include_practice", $id);
	$include_practice_data = array();
	if($include_practices) {
		$include_practice_data = sort_result_links($include_practices);
  }
  
  // retrieve children
  $related_children = get_field("child_practice", $id);
  
	$related_children_data = array();
	if($related_children) {
		$related_children_data = sort_result_links($related_children);
  }
  
  // retrieve highlight real
  $highlight_real = get_field("highlight_scroller", $id);
  $highlight_real_data = array();

  if($highlight_real !== false) {
    foreach($highlight_real as $hr) {
      $highlight_real_data[] = array(
        "id" => $hr['image']['ID'],
        "title" => $hr['title'],
        "image" => $hr['image']['url']
      );
    }
  }

  // merge attorney list and practice list
  $attorneyList = array_merge($include_attorney_data, $related_attorneys_data);
  $practiceList = array_merge($include_practice_data, $related_children_data);
  // sort by title
  function sub_practice_attorney_sort($a, $b) {
    return strcmp($a['lastName'], $b['lastName']);
}

function sub_practice_practice_sort($a, $b) {
  return strcmp($a['title'], $b['title']);
}

usort($attorneyList, "sub_practice_attorney_sort");
usort($practiceList, "sub_practice_practice_sort");

	// retrieve attorneys includes in this practice
	$practice_content = array(
    "practiceID" => $id,
    "slug" => $slug,
    "chairID" => (isset($chair[0]->ID)) ? $chair[0]->ID : 0,
		"title" => html_entity_decode(htmlspecialchars_decode(get_the_title($id))),
		"description" => get_field("description", $id),
		"children" => $related_children_data,
		"content" => get_field("content_section", $id),
    "chair" => $chair_data,
    "attorneyList" =>  $attorneyList,
    "practiceList" => $practiceList,
		"excludePractices" => $exclude_practice_data,
    "industryTopics" => $related_blog_data,
    "highlightReal" => $highlight_real_data,
    "seo" => (object)array(
      "title" => get_post_meta($id, '_yoast_wpseo_title', true),
      "metaDescription" => get_post_meta($id, '_yoast_wpseo_metadesc', true),
      "canonicalLink" => $slug,
      "practiceTitle" => html_entity_decode(htmlspecialchars_decode(get_the_title($id)))
    )
	);
	return rest_ensure_response($practice_content);
}
