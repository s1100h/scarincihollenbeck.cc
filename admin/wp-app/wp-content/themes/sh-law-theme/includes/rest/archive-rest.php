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
	register_rest_route("archive", "query/(?P<slug>[a-zA-Z0-9-+.,%20$]+)/(?P<offset>[a-zA-Z0-9-]+)", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "archive_query_data"
  ));  
});


// retrieves data based on use query
function archive_query_data($request) {
  global $wp_query;
  $slug = $request['slug'];
  $offset = $request["offset"];
  $archive_data = array();

  $numposts = 10;

  // set results to match offset 
  $start = ($offset - 1) * $numposts; 
  $end =  $offset * $numposts;

  $idObj = get_category_by_slug($slug); 
  $id = $idObj->term_id;
  
  $args = array(
    "category" => $id,
    "post_type"   => "post",
    "post_status" => "publish",
    "numberposts" => -1
  );
  
  $posts = get_posts($args);

  // add term to results
  $archive_data['term'] = $slug;

  // add number of pages to results
  $archive_data['pages'] = ceil(count($posts) / $numposts);

  foreach(range($start, $end) as $i) {
    if(isset($posts[$i])) {
      $archive_data['results'][] = array(
        "title" => $posts[$i]->post_title,
        "image" => get_the_post_thumbnail_url($posts[$i]->ID, 'full'),
        "imgAlt" => "article ".$posts[$i]->ID,
        "link" => str_replace(home_url(), '', get_permalink($posts[$i]->ID)),
        "id" => $posts[$i]->ID,
        "date" => get_the_date( 'F j, Y', $posts[$i]->ID ),
        "description" => html_entity_decode(htmlspecialchars_decode(wp_trim_words($posts[$i]->post_content, 20, '...' )))  
      );
    }
  };

  

  if($archive_data['pages'] <= 0) {
    $archive_data['results'] = array();
  }

  // get the top five posts
  $top_five_posts = new WP_Query(array('posts_per_page'=>5, 'meta_key'=>'popular_posts', 'orderby'=>'meta_value_num', 'order'=>'DESC'));

  $top_posts = array();

  foreach($top_five_posts->posts as $p) {
    $archive_data['posts'][] = array(
      "title" => get_the_title($p->ID),
      "image" => get_the_post_thumbnail_url($p->ID, 'full'),
      "link" => str_replace(home_url(), '', get_permalink($p->ID)),
      "author" => get_the_author_meta('display_name', (int)$p->post_author)
    );
  }

  /** Retrieve SEO data */
  $seo_meta   = get_option( 'wpseo_taxonomy_meta' );
  $seo_title  = $seo_meta['category'][$id]['wpseo_title'];
  $seo_metadescription = $seo_meta['category'][$id]['wpseo_desc'];

  $archive_data['seo'] = (object)array(
    "title" => $seo_title,
    "metaDescription" => $seo_metadescription,
    "canonicalLink" => "/"
  );

  return $archive_data;
}
