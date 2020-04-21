<?php
if (!defined("ABSPATH")) {
  exit;
}
// Register Custom Navigation Walker
require_once get_template_directory() . '/class-wp-bootstrap-navwalker.php';
/**
 * Custom Post Thumbnail Support
 *
 * enable custom post thumbnail support for posts
 *
 * @since 1.0.0
 */
if ( function_exists( 'add_theme_support' ) ) { 
  add_theme_support( 'post-thumbnails' );
   // default Post Thumbnail dimensions (cropped)
  // additional image sizes
  // delete the next line if you do not need additional image sizes
  add_image_size( 'category-thumb', 300, 9999 ); //300 pixels wide (and unlimited height)
}
/**
 * Custom Menu Support
 *
 * enable custom menu support
 *
 * @since 1.0.0
 */
function register_my_menu() {
  register_nav_menu('main-menu',__( 'Main Menu' ));
}
add_action( 'init', 'register_my_menu' );
/**
 * SH-Law Theme 2019 Scripts
 *
 * enqueues scripts and styles for entire theme
 *
 * @since 1.0.0
 */
function sh_law_theme_styles() {
  wp_enqueue_style("bootstrap", get_template_directory_uri() ."/includes/assets/css/bootstrap.min.css", null, null, "screen");
  wp_enqueue_style("fontawesome", get_template_directory_uri() ."/includes/assets/fonts/fontawesome/css/all.min.css",array("bootstrap"), null, "screen");
  wp_enqueue_style("sh-law-theme", get_template_directory_uri() ."/includes/assets/css/sh-law-theme.min.css", array("fontawesome"), null, "screen");
}
// add scripts and styles to attorneys archive
add_action("wp_enqueue_scripts", "sh_law_theme_styles" );
function sh_law_theme_scripts() {
  wp_enqueue_script( "sh-law-theme", get_template_directory_uri()  . "/includes/assets/js/sh-law-theme.min.js", array("moove_gdpr_frontend"), null, true );
}
// add scripts and styles to attorneys archive
add_action("wp_enqueue_scripts", "sh_law_theme_scripts", 21, 1);

/**
 * Attorneys Archive Scripts
 *
 * enqueues scripts and styles for archive attorneys page
 *
 * @since 1.0.0
 */
function archive_attorneys_scripts() {
	if(is_post_type_archive("attorneys")){
    wp_enqueue_style("attorney-archive", get_template_directory_uri() ."/includes/assets/css/archive-attorneys.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_script( "vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script( "attorney-archive", get_template_directory_uri()  . "/includes/assets/js/archive-attorneys.min.js", array("vendor"), null, true );
	} 
}
// add scripts and styles to attorneys archive
add_action("wp_enqueue_scripts", "archive_attorneys_scripts" );
// load attorneys archive API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/rest/archive-attorneys-rest.php";
/**
 * Practices Archive Scripts
 *
 * enqueues scripts and styles for archive practices page
 *
 * @since 1.0.0
 */
function archive_practices_scripts() {
	if(is_post_type_archive("practices")){
    wp_enqueue_style("archive-practices", get_template_directory_uri() ."/includes/assets/css/archive-practices.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_script( "vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script( "archive-practices", get_template_directory_uri()  . "/includes/assets/js/archive-practices.min.js", array("vendor"), null, true );
	} 
}
// add scripts and styles to practices archive
add_action("wp_enqueue_scripts", "archive_practices_scripts" );
// load  arcive attorney API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/rest/archive-practices-rest.php";
/**
 * Location Archive Scripts
 *
 * enqueues scripts and styles for archive location page
 *
 * @since 1.0.0
 */
function archive_location_scripts() {
	if(is_post_type_archive("location")){
    wp_enqueue_style("archive-location", get_template_directory_uri() ."/includes/assets/css/archive-location.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_script( "vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script( "archive-location", get_template_directory_uri()  . "/includes/assets/js/archive-location.min.js", array("vendor"), null, true );
	} 
}
// add scripts and styles to attorney archive
add_action("wp_enqueue_scripts", "archive_location_scripts" );
// load  arcive attorney API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/rest/archive-location-rest.php";
/**
 * Attorneys Single Scripts
 *
 * enqueues scripts and styles for single attorneys page
 *
 * @since 1.0.0
 */
function single_attorneys_scripts() {
	if(is_singular("attorneys")){
    wp_enqueue_style("single-attorneys", get_template_directory_uri() ."/includes/assets/css/single-attorneys.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_script( "vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script( "single-attorneys", get_template_directory_uri()  . "/includes/assets/js/single-attorneys.min.js", array("vendor"), null, true );
	} 
}
// add scripts and styles to single attorneys
add_action("wp_enqueue_scripts", "single_attorneys_scripts" );
// load single attorneys API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/rest/single-attorneys-rest.php";
/**
 * Practices Single Scripts
 *
 * enqueues scripts and styles for single practices page
 *
 * @since 1.0.0
 */
function single_practices_scripts() {
	if(is_singular("practices")){
    wp_enqueue_style("single-practices", get_template_directory_uri() ."/includes/assets/css/single-practices.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_script( "vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script( "single-practices", get_template_directory_uri()  . "/includes/assets/js/single-practices.min.js", array("vendor"), null, true );
	} 
}
// add scripts and styles to single practices
add_action("wp_enqueue_scripts", "single_practices_scripts" );
// load single practices API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/rest/single-practices-rest.php";
/**
 * Practices Single Scripts
 *
 * enqueues scripts and styles for single practices page
 *
 * @since 1.0.0
 */
function single_location_scripts() {
	if(is_singular("location")){
    wp_enqueue_style("single-location", get_template_directory_uri() ."/includes/assets/css/single-location.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_script( "vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script( "single-location", get_template_directory_uri()  . "/includes/assets/js/single-location.min.js", array("vendor"), null, true );
	} 
}
// add scripts and styles to single location
add_action("wp_enqueue_scripts", "single_location_scripts" );
// load single location API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/rest/single-location-rest.php";
/**
 * Front Page scripts
 *
 * enqueues scripts and styles for front page template
 * @since 1.0.0
 */
function front_page_scripts() {
	if(is_front_page()){
    wp_enqueue_style("vendor", get_template_directory_uri() ."/includes/assets/css/vendor.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_style("front-page", get_template_directory_uri() ."/includes/assets/css/front-page.min.css", array("vendor"), null, "screen"); 
    wp_enqueue_script( "vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script( "front-page", get_template_directory_uri()  . "/includes/assets/js/front-page.min.js", null, null, true );
	} 
}
// add scripts and styles to single location
add_action("wp_enqueue_scripts", "front_page_scripts" );
// load front page API endpoint
require_once plugin_dir_path(__FILE__) . "/includes/rest/front-page-rest.php";
/**
 * Events Single scripts
 *
 * enqueues scripts and styles for single events gallery
 *
 * @since 1.0.0
 */
function single_event_gallery() {
	if(is_singular("events")){
    wp_enqueue_style("event-gallery", get_template_directory_uri() ."/includes/assets/css/event-gallery.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_script( "vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script( "event-gallery", get_template_directory_uri()  . "/includes/assets/js/event-gallery.min.js", array("vendor"), null, true );
	} 
}
// add scripts and styles to single location
add_action("wp_enqueue_scripts", "single_event_gallery" );
// load single events API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/rest/single-events-rest.php";
/**
 * Careers Single scripts
 *
 * enqueues scripts and styles for single career
 *
 * @since 1.0.0
 */
function single_career_scripts() {
	if(is_singular("careers")){
    wp_enqueue_style("single-career", get_template_directory_uri() ."/includes/assets/css/single-career.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_script( "vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script( "single-career", get_template_directory_uri()  . "/includes/assets/js/single-career.min.js", array("vendor"), null, true );
	} 
}
// add scripts and styles to single career
add_action("wp_enqueue_scripts", "single_career_scripts" );
// load single events API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/rest/single-career-rest.php";
/**
 * Careers Portal scripts
 *
 * enqueues scripts and styles for portal career
 *
 * @since 1.0.0
 */
function archive_career_scripts() {
	if(is_post_type_archive("careers")){
    wp_enqueue_style("archive-career", get_template_directory_uri() ."/includes/assets/css/archive-career.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_script( "vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script( "archive-career", get_template_directory_uri()  . "/includes/assets/js/archive-career.min.js", array("vendor"), null, true );
	} 
}
// // add scripts and styles to single career
add_action("wp_enqueue_scripts", "archive_career_scripts" );
// load single events API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/rest/archive-career-rest.php";
/**
 * Page scripts
 *
 * enqueues scripts and styles for page
 *
 * @since 1.0.0
 */
function page_scripts() {
	if(is_page(array(29484, 28190, 29496, 28204))){
    wp_enqueue_style("page", get_template_directory_uri() ."/includes/assets/css/page.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_script( "vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script( "page", get_template_directory_uri()  . "/includes/assets/js/page.min.js", array("vendor"), null, true );
	} 
}
// add scripts and styles to page
add_action("wp_enqueue_scripts", "page_scripts" );
// load single events API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/rest/page-rest.php";
/**
 * Search scripts
 *
 * enqueues scripts and styles for search
 *
 * @since 1.0.0
 */
function search_scripts() {
	if(is_search()){
    wp_enqueue_style("search", get_template_directory_uri() ."/includes/assets/css/search.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_script( "vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script( "search", get_template_directory_uri()  . "/includes/assets/js/search.min.js", array("vendor"), null, true );
	} 
}
// add scripts and styles to page
add_action("wp_enqueue_scripts", "search_scripts" );
// load searcg events API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/rest/search-rest.php";
/**
 * Single scripts
 *
 * enqueues scripts and styles for single
 *
 * @since 1.0.0
 */
function single_scripts() {
	if(is_single() && get_post_type()=='post'){
    wp_enqueue_style("single", get_template_directory_uri() ."/includes/assets/css/single.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_script( "vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script( "single", get_template_directory_uri()  . "/includes/assets/js/single.min.js", array("vendor"), null, true );
	} 
}
// add scripts and styles to page
add_action("wp_enqueue_scripts", "single_scripts" );
// load single events API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/rest/single-rest.php";
/**
 * Firm pages scripts
 *
 * enqueues scripts and styles for firm pages
 *
 * @since 1.0.0
*/
function firm_page_scripts() {
	if(is_page_template('template-firmpage.php')){
    wp_enqueue_style("firm-page", get_template_directory_uri() ."/includes/assets/css/firm-page.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_script("vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script("firm-page", get_template_directory_uri()  . "/includes/assets/js/firm-page.min.js", array("vendor"), null, true );
	} 
}
// add scripts and styles to firm page
add_action("wp_enqueue_scripts", "firm_page_scripts");
// load single events API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/rest/firm-page-rest.php";
/**
 * Firm overview scripts
 *
 * enqueues scripts and styles for firm overview
 *
 * @since 1.0.0
 */
function firm_overview_scripts() {
	if(is_page_template('template-firmoverview.php')){
    wp_enqueue_style("firm-overview", get_template_directory_uri() ."/includes/assets/css/firm-overview.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_script("vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script("firm-overview", get_template_directory_uri()  . "/includes/assets/js/firm-overview.min.js", array("vendor"), null, true );
	} 
}
// add scripts and styles to firm overview
add_action("wp_enqueue_scripts", "firm_overview_scripts");
// load single events API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/rest/firm-overview-rest.php";
/**
 * Contact page scripts
 *
 * enqueues scripts and styles for contact page
 *
 * @since 1.0.0
*/
function contact_scripts() {
	if(is_page_template('template-contact.php')){
    wp_enqueue_style("contact", get_template_directory_uri() ."/includes/assets/css/contact.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_script("vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script("contact", get_template_directory_uri()  . "/includes/assets/js/contact.min.js", array("vendor"), null, true );
	} 
}
// add scripts and styles to firm overview
add_action("wp_enqueue_scripts", "contact_scripts");
/**
  * Author scripts 
  *
  * enqueues scripts and styles for author
  *
  * @since 1.0.0
*/
function author_scripts() {
	if(is_author()){
    wp_enqueue_style("author", get_template_directory_uri() ."/includes/assets/css/author.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_script( "vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script( "author", get_template_directory_uri()  . "/includes/assets/js/author.min.js", array("vendor"), null, true );
	} 
}
// // add scripts and styles to page
add_action("wp_enqueue_scripts", "author_scripts" );
// load single events API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/rest/author-rest.php";
/** 
 * Archive scripts 
 * 
 * enques scripts and styles for archive
 * @since 1.0.0
 *
 */
function archive_scripts() {
  if(is_home()) {
    wp_enqueue_style("archive", get_template_directory_uri() ."/includes/assets/css/archive.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_script( "vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script( "archive", get_template_directory_uri()  . "/includes/assets/js/archive.min.js", array("vendor"), null, true );
  }
}
add_action("wp_enqueue_scripts", "archive_scripts" );
require_once plugin_dir_path(__FILE__) . "/includes/rest/archive-rest.php";
/**
  * Quick News scripts
  *
  * enqueues scripts and styles for quick news
  *
  * @since 1.0.0
*/
function quick_news_scripts() {
	if(is_page_template('template-quicknews.php')){
    wp_enqueue_style("quick-news", get_template_directory_uri() ."/includes/assets/css/quick-news.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_script( "vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script( "quick-news", get_template_directory_uri()  . "/includes/assets/js/quick-news.min.js", array("vendor"), null, true );
	} 
}
// add scripts and styles to quick news
add_action("wp_enqueue_scripts", "quick_news_scripts" );
// load single events API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/rest/quick-news-rest.php";
/**
 * 
 * Enable couting most viewed blog post
 * support
 * 
 */
// DIY Popular Posts @ https://digwp.com/2016/03/diy-popular-posts/
function shapeSpace_popular_posts($post_id) {
	$count_key = 'popular_posts';
	$count = get_post_meta($post_id, $count_key, true);
	if ($count == '') {
		$count = 0;
		delete_post_meta($post_id, $count_key);
		add_post_meta($post_id, $count_key, '0');
	} else {
		$count++;
		update_post_meta($post_id, $count_key, $count);
	}
}
function shapeSpace_track_posts($post_id) {
	if (!is_single()) return;
	if (empty($post_id)) {
		global $post;
		$post_id = $post->ID;
	}
	shapeSpace_popular_posts($post_id);
}
add_action('wp_head', 'shapeSpace_track_posts');
/**
  * Category scripts
  *
  * enqueues scripts and styles for category
  *
  * @since 1.0.0
*/
function category_scripts() {
	if(is_category()){
    wp_enqueue_style("category", get_template_directory_uri() ."/includes/assets/css/category.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_script( "vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script( "category", get_template_directory_uri()  . "/includes/assets/js/category.min.js", array("vendor"), null, true );
	} 
}
// // add scripts and styles to quick news
add_action("wp_enqueue_scripts", "category_scripts" );
// load single events API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/rest/category-rest.php";
/**
 * Admins Archive Scripts
 *
 * enqueues scripts and styles for archive admins page
 *
 * @since 1.0.0
 */
function archive_admin_scripts() {
	if(is_post_type_archive("administration")){
    wp_enqueue_style("admin-archive", get_template_directory_uri() ."/includes/assets/css/archive-admin.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_script( "vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script( "admin-archive", get_template_directory_uri()  . "/includes/assets/js/archive-admin.min.js", array("vendor"), null, true );
	} 
}
// add scripts and styles to attorneys archive
add_action("wp_enqueue_scripts", "archive_admin_scripts" );
// load attorneys archive API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/rest/archive-admin-rest.php";
/**
 * Admin Single Scripts
 *
 * enqueues scripts and styles for single admin page
 *
 * @since 1.0.0
 */
function single_admin_scripts() {
	if(is_singular("administration")){
    wp_enqueue_style("single-admin", get_template_directory_uri() ."/includes/assets/css/single-admin.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_script( "vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script( "single-admin", get_template_directory_uri()  . "/includes/assets/js/single-admin.min.js", array("vendor"), null, true );
	} 
}
// add scripts and styles to single admin
add_action("wp_enqueue_scripts", "single_admin_scripts" );
// load single admin API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/rest/single-admin-rest.php";
/**
 * Page 404 scripts
 *
 * enqueues scripts and styles for 404 page
 *
 * @since 1.0.0
 */
function page_404_scripts() {
	if(is_404()){
    wp_enqueue_style("page-404", get_template_directory_uri() ."/includes/assets/css/page404.min.css", array("sh-law-theme"), null, "screen"); 
    wp_enqueue_script( "vendor", get_template_directory_uri()  . "/includes/assets/js/vendor.min.js", null, null, true );
    wp_enqueue_script( "page-404", get_template_directory_uri()  . "/includes/assets/js/page404.min.js", array("vendor"), null, true );
	} 
}
// add scripts and styles to page 404
add_action("wp_enqueue_scripts", "page_404_scripts" );
/**
 * 
 * Enable re-write urls for /archive/ endpoint
 * 
 */
add_action( 'init', function() {
  add_rewrite_tag( '%term%', '([^/]+)' );
  add_rewrite_rule( 'archive/([^/]+)/?', 'index.php?term=$matches[1]', 'top' );
} );
add_action( 'template_redirect', function() {
  global $wp_query;
  $model = $wp_query->get( 'term' );
  if ( ! empty( $model ) ) {
    // Return stuff here
  }
} );
/***
 * 
 * Enable featured image field /posts WP-REST endpoint
 */
add_action('rest_api_init', 'register_rest_images' );
function register_rest_images(){
    register_rest_field( array('post'),
        'fimg_url',
        array(
            'get_callback'    => 'get_rest_featured_image',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}
function get_rest_featured_image( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        $img = wp_get_attachment_image_src( $object['featured_media'], 'app-thumb' );
        return $img[0];
    }
    return false;
}


// remove wp editor from firmpage template
function remove_editor() {
  if (isset($_GET['post'])) {
      $id = $_GET['post'];
      $template = get_post_meta($id, '_wp_page_template', true);

      if($template === 'template-firmpage.php') {
        remove_post_type_support('page', 'editor');
      }
  }
}
add_action('init', 'remove_editor');

/** Enable Better Meta Data support for custom WP Rest Routes */
add_action( 'rest_api_init', 'wp_rest_filter_add_filters' );
 /**
  * Add the necessary filter to each post type
  **/
function wp_rest_filter_add_filters() {
    foreach ( get_post_types( array( 'show_in_rest' => true ), 'objects' ) as $post_type ) {
        add_filter( 'rest_' . $post_type->name . '_query', 'wp_rest_filter_add_filter_param', 10, 2 );
    }
}
/**
 * Add the filter parameter
 *
 * @param  array           $args    The query arguments.
 * @param  WP_REST_Request $request Full details about the request.
 * @return array $args.
 **/
function wp_rest_filter_add_filter_param( $args, $request ) {
    // Bail out if no filter parameter is set.
    if ( empty( $request['filter'] ) || ! is_array( $request['filter'] ) ) {
        return $args;
    }
    $filter = $request['filter'];
    if ( isset( $filter['posts_per_page'] ) && ( (int) $filter['posts_per_page'] >= 1 && (int) $filter['posts_per_page'] <= 100 ) ) {
        $args['posts_per_page'] = $filter['posts_per_page'];
    }
    global $wp;
    $vars = apply_filters( 'rest_query_vars', $wp->public_query_vars );
    function allow_meta_query( $valid_vars )
    {
        $valid_vars = array_merge( $valid_vars, array( 'meta_query', 'meta_key', 'meta_value', 'meta_compare' ) );
        return $valid_vars;
    }
    $vars = allow_meta_query( $vars );

    foreach ( $vars as $var ) {
        if ( isset( $filter[ $var ] ) ) {
            $args[ $var ] = $filter[ $var ];
        }
    }
    return $args;
}

// load single admin API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/rest/core-practices-rest.php";


// load just in posts API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/rest/just-in-posts-rest.php";


function get_relative_permalink( $url ) {
  $url = get_permalink();
  return str_replace( home_url(), "http://test.com", $url );
}
