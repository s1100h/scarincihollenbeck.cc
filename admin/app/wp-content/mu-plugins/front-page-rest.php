<?php // Attorney Search Shortcode - WP REST Endpoings 
if (!defined("ABSPATH")) {
    exit;
}
/**
 * Register attorney-search endpoints to WP-REST
 *
 * @since  1.0.0
 */
add_action("rest_api_init", function()
{
    register_rest_route("front-page", "meta", array(
        "methods" => "GET",
        "callback" => "front_page_meta",
        'permission_callback' => '__return_true'
    ));
});

add_action("rest_api_init", function()
{
    register_rest_route("front-page", "news", array(
        "methods" => "GET",
        "callback" => "front_page_news",
        'permission_callback' => '__return_true'
    ));
});

add_action("rest_api_init", function()
{
    register_rest_route("front-page", "events", array(
        "methods" => "GET",
        "callback" => "front_page_events",
        'permission_callback' => '__return_true'
    ));
});

/**
 *  get Front page meta data
 *  @return object
 */
function front_page_meta() {

  $seo = (object)array(
    "title" => get_post_meta(29494, '_yoast_wpseo_title', true),
    "metaDescription" => get_post_meta(29494, '_yoast_wpseo_metadesc', true),
    "canonicalLink" => "/"
  );
  return $seo; 
}

/**
 *  get Front page news
 *  @return object
 */
function front_page_news() {
  $results = array();


  // The Query
  $the_query = new WP_Query( array(
    'cat' => 98,
    'posts_per_page'=> 10
  ) );
  
  // The Loop
  if ( $the_query->have_posts() ) {
     $posts = $the_query->posts;

     foreach($posts as $post) {
       $results[] = array(
         "ID" => $post->ID,
         "link" => str_replace(home_url(), '', get_permalink($post->ID)),
         "title" => $post->post_title,
         "image" => get_the_post_thumbnail_url($post->ID),
         "category" => "Firm News"
       );
     }
    
  } else {
      // no posts found
  }
  /* Restore original Post Data */
  wp_reset_postdata();


  return $results;
 
}


/**
 *  get Front page events
 *  @return object
 */
function front_page_events() {
  $results = array();


  // The Query
  $the_query = new WP_Query( array(
    'cat' => 99,
    'posts_per_page'=> 10
  ) );
  
  // The Loop
  if ( $the_query->have_posts() ) {
     $posts = $the_query->posts;

     foreach($posts as $post) {
       $results[] = array(
         "ID" => $post->ID,
         "link" => str_replace(home_url(), '', get_permalink($post->ID)),
         "title" => $post->post_title,
         "image" => get_the_post_thumbnail_url($post->ID),
         "category" => "Firm Events"
       );
     }
    
  } else {
      // no posts found
  }
  /* Restore original Post Data */
  wp_reset_postdata();


  return $results;
 
}