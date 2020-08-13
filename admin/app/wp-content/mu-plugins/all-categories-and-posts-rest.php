<?php // Archive  - WP REST Endpoints 
if(!defined("ABSPATH")) {
  exit;
}
/**
 * Register archive endpoint to WP-REST 
 *
 * @since 1.0.0
 * /
 * 
 **/
add_action('rest_api_init', function()
{
	register_rest_route("all-categories", "list", array(
		"methods" => WP_REST_SERVER::READABLE,
    "callback" => "get_all_category_data",
    'permission_callback' => '__return_true'
  ));
  register_rest_route("all-categories", "single/(?P<slug>[a-zA-Z0-9-+.,%20$]+)", array(
		"methods" => WP_REST_SERVER::READABLE,
    "callback" => "get_single_category_data",
    'permission_callback' => '__return_true'
  ));    
});

function get_single_category_data($request) {
  $slug = $request['slug'];
  $results = [];

  $category = get_category_by_slug($slug); 
  $count = $category->category_count;
  $slug = $category->slug;

  for($i = 1; $i <= $count; $i++) {
    $results[] = array(
      "link" => $slug,
      "id" => $i
    );
  }

  return $results;
}


// retrieves data based on use query
function get_all_category_data() {
  $categories = get_categories();
  $results = [];

  foreach ($categories as $category) {
    $count = $category->category_count;
    $slug = $category->slug;

    for($i = 1; $i <= $count; $i++) {
      $results[] = array(
        "link" => $slug,
        "id" => $i
      );
    }
  }
  

  return $results;
}
