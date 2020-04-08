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
	register_rest_route("preview", "office/(?P<id>[a-zA-Z0-9-]+)", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "preview_individual_location_data"
	));
});

function prev_s_obj_res($data)
{
	$results = array();
	if(count($data) > 1) {
		foreach($data as $d) {
			$results[] = array(
				"ID" => $d->ID,
				"name" => html_entity_decode(htmlspecialchars_decode($d->post_title)),
				"lastName" => extract_last_name(get_field("email", $d->ID)),
				"link" => get_home_url("/")."/attorney/".$d->post_name,
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
			"link" => get_home_url("/")."/attorney/".$data[0]->post_name,
			"image" => get_field("profile_image", $data[0]->ID)["url"],
			"email" => get_field("email", $data[0]->ID),
			"contact" => get_field("phone_number", $data[0]->ID),
			"designation" => get_field("designation",$data [0]->ID)
		);
	}
	return $results;
}
function prev_so_r_links($data)
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
function preview_individual_location_data($request)
{
  $office_id = $request['id'];
  $office_id = (int)$office_id;
	// query attorney post object
  $office = get_post($office_id);
  
  //page id
  $id = $office->ID;
  
  $practice_data = array();
  $practices = get_field("office_practices", $id);
  
  if($practices){
    $practice_data = prev_so_r_links($practices);
  }

  // related attorneys
  $args = array(
    'posts_per_page'	=> -1,
    'post_type'			=> 'attorneys',
    'meta_query' => array(
      array(
          'key' => 'office_location', // name of custom field
          'value' => '"'.$id.'"', // matches exactly "red"
          'compare' => 'LIKE'
      )
    )
  );

  $related_attorneys = get_posts($args);
  
  if($related_attorneys) {
    $attorney_data = prev_s_obj_res($related_attorneys);
  }
  
  // office data
  $office_data = array(
    "id" => $id,
    "name" => html_entity_decode(htmlspecialchars_decode(get_the_title($id))),
    "address" => get_field("address", $id),
    "phone" => get_field("phone", $id),
    "fax" => get_field("fax", $id),
    "mapLink" => get_field("map_link", $id),
    "practices" => $practice_data,
    "attorneys" => $attorney_data
  );
  return $office_data;
}
