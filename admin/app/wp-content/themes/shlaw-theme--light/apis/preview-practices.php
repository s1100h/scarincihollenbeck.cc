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
	register_rest_route("preview-practices", "practice/(?P<id>\d+)", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "preview_practice"
	));
});



function find_post_category_ids_practice_prev($post_id) {
  $categorys = get_the_category($post_id);
  $parent_ids = array();

  foreach($categorys as $cat) {
    $parent_ids[] = $cat->category_parent;
  };

  return array_values(array_unique($parent_ids)); 
}

function sort_object_results_practice_prev($data)
{
	$results = array();
	if(count($data) > 1) {
		foreach($data as $d) {
			$results[] = array(
				"ID" => $d->ID,
				"name" => html_entity_decode(htmlspecialchars_decode($d->post_title)),
				"lastName" => extract_last_name_practice_prev(get_field("email", $d->ID)),
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
			"lastName" => extract_last_name_practice_prev(get_field("email", $data[0]->ID)),
			"link" => "/attorney/".$data[0]->post_name,
			"image" => get_the_post_thumbnail_url($data[0]->ID),
			"email" => get_field("email", $data[0]->ID),
			"contact" => get_field("phone_number", $data[0]->ID),
			"designation" => get_field("designation",$data [0]->ID)
		);
	}
	return $results;
}

function sort_id_results_practice_prev($data)
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

function sort_result_links_practice_prev($data)
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

function extract_last_name_practice_prev($attorney)
{
	$name = substr($attorney, 1);
	$name = preg_replace('/\b@.*$/', '', $name);
	return ucfirst($name);
}

/**
 * Create practice object
 *
 * @param array $request Options for the function.
 * @return object|null page data for a single practice
 */
function preview_practice($request){
  $id = $request["id"];
  
	$args = array(
		"numberposts" => 1,
		"p" => $id, 
		"post_type" => "practices",
		"post" => "revision",
    "post_status" => array('draft', 'publish', 'auto-draft', 'prending')
  );
  
	// query attorney post object
  $practices = get_posts($args);
  
	//page id
  $practice_id = $practices[0]->ID;
  
	// practice chair
  $chair = get_field("section_chief", $practice_id);  
	$chair_data = array();
  
  if($chair) {
		$chair_data = sort_object_results_practice_prev($chair);
	}

	// include attorneys
	$include_attorneys = get_field("include_attorney", $practice_id);
  $include_attorney_data = array();
  
	if($include_attorneys) {
		$include_attorney_data = sort_object_results_practice_prev($include_attorneys);
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
			'value' => '"' .$practice_id. '"',
			'compare' => 'LIKE'
		))
	));
  $related_attorneys_data = array();
  
	if($related_attorneys) {
		$related_attorneys_data = sort_object_results_practice_prev($related_attorneys);
  }
  
  // related blog
  $related_blog_data = array();

  $related_blog_args = array(
    'numberposts' => 100,
    'category__in' => get_field("related_blog_category", $practice_id),
    'order' => 'DESC',
    
  );

  // query related posts
  $related_blog_posts = new WP_Query($related_blog_args);

  // get posts
  if($related_blog_posts->posts) {
    foreach($related_blog_posts->posts as $p) {
    $related_blog_data[] = array(
      "ID" => $p->ID,
      "date" => get_the_date('F j, Y', $p->ID),
      "title" => html_entity_decode(htmlspecialchars_decode(get_the_title($p->ID))),
      "link" => str_replace(home_url(), '', get_permalink($p->ID)),
      "categoryIds" => find_post_category_ids_practice_prev($p->ID),
      "image" => get_the_post_thumbnail_url($p->ID),
      "category" => get_the_category($p->ID)
      );
    }
  }
	
	// get child
	$child = get_field("child_practice", $practice_id);
	if($child) {
    $child_data = sort_result_links_practice_prev($child);
  }
	// // exclude practices
	$exclude_practices = get_field("exclude_practice", $practice_id);
	$exclude_practice_data = array();
	if($exclude_practices) {
		$exclude_practice_data = sort_id_results_practice_prev($exclude_practices);
	}
	// include practices
	$include_practices = get_field("include_practice", $practice_id);
	$include_practice_data = array();
	if($include_practices) {
		$include_practice_data = sort_result_links_practice_prev($include_practices);
  }
  
  // retrieve children
  $related_children = get_field("child_practice", $practice_id);
  
	$related_children_data = array();
	if($related_children) {
		$related_children_data = sort_result_links_practice_prev($related_children);
  }
  
  // retrieve highlight real
  $highlight_real = get_field("highlight_scroller", $practice_id);
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
    "practiceID" => $practice_id,
    "slug" => $practices[0]->post_name,
    "chairID" => (isset($chair[0]->ID)) ? $chair[0]->ID : 0,
		"title" => html_entity_decode(htmlspecialchars_decode(get_the_title($practice_id))),
		"description" => get_field("description", $practice_id),
		"children" => $related_children_data,
		"content" => get_field("content_section", $practice_id),
    "chair" => $chair_data,
    "attorneyList" =>  $attorneyList,
    "practiceList" => $practiceList,
    "excludePractices" => $exclude_practice_data,
    "blog_data_id" =>get_field("related_blog_category", $practice_id),
    "industryTopics" => $related_blog_data,
    "highlightReal" => $highlight_real_data,
    "seo" => (object)array(
      "title" => get_post_meta($practice_id, '_yoast_wpseo_title', true),
      "metaDescription" => get_post_meta($practice_id, '_yoast_wpseo_metadesc', true),
      "canonicalLink" => "practices/".$slug,
      "practiceTitle" => html_entity_decode(htmlspecialchars_decode(get_the_title($practice_id)))
    )
	);
	if(is_null($practice_id)){
    return new WP_REST_Response(null, 404);
  } else {
    return rest_ensure_response($practice_content);
  }
}