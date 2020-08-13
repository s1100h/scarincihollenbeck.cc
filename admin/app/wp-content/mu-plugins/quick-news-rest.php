<?php // Page  - WP REST Endpoints 
if(!defined("ABSPATH")) {
  exit;
}
/**
 * Register page endpoint to WP-REST 
 *
 * @since 1.0.0
 * /
 * 
 **/
add_action('rest_api_init', function()
{
	register_rest_route("quick-news", "posts/(?P<offset>[a-zA-Z0-9-]+)", array(
		"methods" => WP_REST_SERVER::READABLE,
		"callback" => "quick_news_data",
    'permission_callback' => '__return_true'
	));
});

function quick_news_data($request) {
 
 $quick_news_content = array();

 $offset = $request["offset"];

 $numposts = 10; 

 // set results to match offset 
 $start = ($offset - 1) * $numposts; 
 $end =  $offset * $numposts;
  
 // get posts
 $args = array(
   'posts_per_page'   => -1,
   'cat' => 590,
   'post_status' => 'publish'
  );

 $posts = get_posts($args);

 // add number of pages to results
 $quick_news_content['pages'] = ceil(count($posts) / $numposts);

 // get the top 5 posts
   // get top 5 posts
   $top_five_posts = new WP_Query(array('posts_per_page'=>5, 'meta_key'=>'popular_posts', 'orderby'=>'meta_value_num', 'order'=>'DESC'));
   $top_five_post_data = array();
   if(isset($top_five_posts->posts)) {
     foreach($top_five_posts->posts as $p) {
       $top_five_post_data[] = array(
         "ID" => $p->ID,
         "title" => html_entity_decode(htmlspecialchars_decode(get_the_title($p->ID))),
         "link" => str_replace(home_url(), '', get_permalink($p->ID)),
         "author" => get_the_author_meta('display_name', (int)$p->post_author)
       );
     }
   }

   $quick_news_content['posts'] = $top_five_post_data;

 foreach(range($start, $end) as $i) {
   if(isset($posts[$i])) {
     $quick_news_content['results'][] = array(
       "title" => html_entity_decode(htmlspecialchars_decode($posts[$i]->post_title)),
       "link" => str_replace(home_url(), '', get_permalink($posts[$i]->ID)),
       "id" => $posts[$i]->ID,
       "date" => get_the_date( 'F j, Y', $posts[$i]->ID ),
       "description" => html_entity_decode(htmlspecialchars_decode(wp_trim_words($posts[$i]->post_content, 20, '...' )))       
     );
   }
 };
 
 if($quick_news_content['pages'] <= 0) {
   $quick_news_content['results'] = array();
  }

  /** Retrieve SEO data */
  $seo_meta   = get_option( 'wpseo_taxonomy_meta' );
  $seo_title  = $seo_meta['category'][590]['wpseo_title'];
  $seo_metadescription = $seo_meta['category'][590]['wpseo_desc'];

  $quick_news_content['seo'] = (object)array(
    "title" => $seo_title,
    "metaDescription" => $seo_metadescription,
    "canonicalLink" => "category/quick-news"
  );

  return rest_ensure_response($quick_news_content);
}
