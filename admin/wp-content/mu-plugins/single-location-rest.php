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
	register_rest_route("individual-location", "office/(?P<slug>[a-zA-Z0-9-]+)", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "individual_location_data"
	));
});

add_action( 'rest_api_init', function () {
  register_rest_route("individual-location", "posts/(?P<slug>[a-zA-Z0-9-]+)", array(
    'methods' => 'GET',
    'callback' => 'get_location_posts',
  ) );
} );


function sort_obj_results($data)
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
function sort_r_links($data)
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
function individual_location_data($request)
{
  $slug = $request["slug"];
	$args = array(
		"numberposts" => 1,
		"name" => $slug,
		"post_type" => "location",
		"post_status" => "publish"
  );
  
  $slug =  str_replace("-"," ", $slug);
  $slug = ucwords($slug);

  // Check for D.C.
  if($slug === "Washington") {
    $slug = "Washington D.C.";
  }
  
  // Check for New York 
  if($slug === "New York") {
    $slug = "New York City";
  }

  
	// query attorney post object
  $office = get_posts($args);
  
  //page id
  $id = $office[0]->ID;
  
  $practice_data = array();
  $practices = get_field("office_practices", $id);
  
  if($practices){
    $practice_data = sort_r_links($practices);
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
  $attorney_data = [];
  
  if($related_attorneys) {
    $attorney_data = sort_obj_results($related_attorneys);
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

/**
 * Grab latest post title by location selection
 *
 * @param array $data Options for the function.
 * @return string|null Post title, link, and featured image for the latest,  * or null if none.
 */
function get_location_posts($request) {
  $slug = $request['slug'];
  $slug =  str_replace("-"," ", $slug);
  $slug = ucwords($slug);

  // Check for D.C.
  if($slug === "Washington") {
    $slug = "Washington D.C.";
  }
  
  // Check for New York 
  if($slug === "New York") {
    $slug = "New York City";
  }

  // args
  $args = array(
    'posts_per_page'	=> 5,
    'post_type'			=> 'post',
    'meta_query' => array(
      array(
          'key' => 'location_selection', // name of custom field
          'value' => '"'.$slug.'"', // matches exactly "red"
          'compare' => 'LIKE'
      )
    )
  );

  $location_posts = get_posts( $args );
  $location_post_data = array();

  if($location_posts) {
    foreach($location_posts as $post) {
      $att = get_field('related_attorneys', $post->ID);
      $related_att = [];
      foreach($att as $a) {
        $related_att[] = array(
          "link" => get_home_url("/")."/attorneys/".$a->post_name,
          "name" => $a->post_title
        );
      }

      $location_post_data[] = array(
        "title" => html_entity_decode(htmlspecialchars_decode(get_the_title($post->ID))),
        "link" => get_the_permalink($post->ID),
        "author" => $related_att,
        "image" => (get_the_post_thumbnail_url($post->ID)) ? get_the_post_thumbnail_url($post->ID, 'full') : 'https://47vqih1qqjmc9x8wz20ph571-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/no-image-found-diamond.png'
      );
    }
  }





 
  return $location_post_data;
}