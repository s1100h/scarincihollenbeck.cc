<?php // Search  - WP REST Endpoints 
if(!defined("ABSPATH")) {
  exit;
}
/**
 * Register search endpoint to WP-REST 
 *
 * @since 1.0.0
 * /
 * 
 **/
add_action('rest_api_init', function()
{
	register_rest_route("search", "query/(?P<slug>[a-zA-Z0-9-+.,%20$]+)/(?P<offset>[a-zA-Z0-9-]+)", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "search_query_data"
  ));
  register_rest_route("search", "top-queries", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "get_top_queries"
  ));
  register_rest_route("search", "post", array(
    "methods" => WP_REST_Server::EDITABLE,
    "callback" => "add_query_term"
  ));
});

// Store searches into db
function add_query_term(WP_REST_Request $request) {
  global $wpdb;
  $data = $request->get_body();
  $post = $wpdb->query("INSERT INTO {$wpdb->prefix}searchterm (search_term) VALUES ('$data')");
  return  $post;
}

//retrieve seraches from db
function get_top_queries() {
  global $wpdb;

  $terms = "  select search_term, count(*) as st from {$wpdb->prefix}searchterm group by search_term order by st desc limit 7";


  $results = $wpdb->get_results($terms);

  return $results;

}

// retrieves data based on use query
function search_query_data($request) {
  global $wpdb;
  $slug = $request['slug'];
  $offset = $request["offset"];
  $numposts = 10;
  // set results to match offset 
  $start = ($offset - 1) * $numposts; 
  $end =  $offset * $numposts;

  $slugTerm = explode("+", $slug);
 
  $posts = new WP_Query( array( 's' => $slug, 'posts_per_page' => -1 ) );
  $posts = $posts->posts;

  $search_data = array();

  // add term to results
  $search_data['term'] = implode(" ", $slugTerm);

  // add number of pages to results
  $search_data['pages'] = ceil(count($posts) / $numposts);

  foreach(range($start, $end) as $i) {
    if(isset($posts[$i])) {
      $search_data['results'][] = array(
        "title" => $posts[$i]->post_title,
        "image" => get_the_post_thumbnail_url($posts[$i]->ID, 'full'),
        "imgAlt" => "article ".$posts[$i]->ID,
        "link" => get_permalink($posts[$i]->ID),
        "id" => $posts[$i]->ID,
        "date" => get_the_date( 'F j, Y', $posts[$i]->ID ),
        "description" => html_entity_decode(htmlspecialchars_decode(wp_trim_words($posts[$i]->post_content, 20, '...' )))       
      );
    }
  }; 
  
   // get the top 5 posts
   $top_five_posts = new WP_Query(array('posts_per_page'=>5, 'meta_key'=>'popular_posts', 'orderby'=>'meta_value_num', 'order'=>'DESC'));
   $top_five_post_data = array();
   if(isset($top_five_posts->posts)) {
     foreach($top_five_posts->posts as $p) {
       $top_five_post_data[] = array(
         "ID" => $p->ID,
         "title" => html_entity_decode(htmlspecialchars_decode(get_the_title($p->ID))),
         "link" => get_the_permalink($p->ID),
         "author" => get_the_author_meta('display_name', (int)$p->post_author)
       );
     }
   }

   $search_data['posts'] = $top_five_post_data;

  if($search_data['pages'] <= 0) {
    $search_data['results'] = array();
  }


  return $search_data;
}
