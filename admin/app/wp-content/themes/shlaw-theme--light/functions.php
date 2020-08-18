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

function main_styles() {
  wp_enqueue_style( 'bootstrapcss', '//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' );
  wp_enqueue_style("fontawesome", "//stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", array("vendorcss"), null);
  wp_enqueue_style("vendorcss", get_template_directory_uri() ."/src/dist/vendor.bundle.css", array("bootstrapcss"), null, "screen"); 
}

// add main styles
add_action("wp_enqueue_scripts", "main_styles" );


function main_scripts() {
  wp_enqueue_script( 'bootstrapjs', '//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', array( 'jquery' ), null, true );
  wp_enqueue_script( 'jquery-js', '//code.jquery.com/jquery-3.2.1.slim.min.js', array( 'jquery' ), null, true );
  wp_enqueue_script( 'jquery-js', '//cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', array( 'jquery' ), null, true );
  wp_enqueue_script( "vendorjs", get_template_directory_uri()  . "/src/dist/vendor.bundle.js",array("bootstrapjs"), null, true );
}

// add main scripts
add_action("wp_enqueue_scripts", "main_scripts");


/**
 * Admin Single Scripts
 *
 * enqueues scripts and styles for single admin page
 *
 * @since 1.0.0
 */
function single_admin_scripts() {
	if(is_singular("administration")){
    wp_enqueue_style("single-admin", get_template_directory_uri() ."/src/dist/singleAdmin.bundle.css", array("vendorcss"), null, "screen"); 
    wp_enqueue_script( "single-admin", get_template_directory_uri()  . "/src/dist/singleAdmin.bundle.js",array("vendorjs"), null, true );
	} 
}

// add scripts and styles to single admin
add_action("wp_enqueue_scripts", "single_admin_scripts" );

// load single admins API endpoints
require_once plugin_dir_path(__FILE__) . "/apis/preview-admin.php";


/**
 * Attorneys Single Scripts
 *
 * enqueues scripts and styles for single attorneys page
 *
 * @since 1.0.0
 */
function single_attorneys_scripts() {
	if(is_singular("attorneys")){
    wp_enqueue_style("single-attorneys", get_template_directory_uri() ."/src/dist/singleAttorney.bundle.css", array("vendorcss"), null, "screen"); 
    wp_enqueue_script( "single-attorneys", get_template_directory_uri()  . "/src/dist/singleAttorney.bundle.js", array("vendorjs"), null, true );
	} 
}

// add scripts and styles to single attorneys
add_action("wp_enqueue_scripts", "single_attorneys_scripts" );

// load single attorneys API endpoints
require_once plugin_dir_path(__FILE__) . "/apis/preview-attorney.php";

/**
 * Career Single Scripts
 *
 * enqueues scripts and styles for single career page
 *
 * @since 1.0.0
 */
function single_careers_scripts() {
	if(is_singular("careers")){
    wp_enqueue_style("single-careers", get_template_directory_uri() ."/src/dist/singleCareer.bundle.css", array("vendorcss"), null, "screen"); 
    wp_enqueue_script( "single-careers", get_template_directory_uri()  . "/src/dist/singleCareer.bundle.js", array("vendorjs"), null, true );
	} 
}

// add scripts and styles to single careers
add_action("wp_enqueue_scripts", "single_careers_scripts" );

// load single attorneys API endpoints
require_once plugin_dir_path(__FILE__) . "/apis/preview-careers.php";

/**
 * Location Single Scripts
 *
 * enqueues scripts and styles for single location page
 *
 * @since 1.0.0
 */
function single_locations_scripts() {
	if(is_singular("location")){
    wp_enqueue_style("single-locations", get_template_directory_uri() ."/src/dist/singleLocation.bundle.css", array("vendorcss"), null, "screen"); 
    wp_enqueue_script( "single-locations", get_template_directory_uri()  . "/src/dist/singleLocation.bundle.js", array("vendorjs"), null, true );
	} 
}

// add scripts and styles to single locations
add_action("wp_enqueue_scripts", "single_locations_scripts" );

// load single attorneys API endpoints
require_once plugin_dir_path(__FILE__) . "/apis/preview-locations.php";


/**
 * Page Scripts
 *
 * enqueues scripts and styles for page
 *
 * @since 1.0.0
 */
function page_scripts() {
	if(is_page()){
    wp_enqueue_style("page", get_template_directory_uri() ."/src/dist/page.bundle.css", array("vendorcss"), null, "screen"); 
    wp_enqueue_script( "page", get_template_directory_uri()  . "/src/dist/page.bundle.js", array("vendorjs"), null, true );
	} 
}

// add scripts and styles to single page
add_action("wp_enqueue_scripts", "page_scripts" );

// load single attorneys API endpoints
require_once plugin_dir_path(__FILE__) . "/apis/preview-page.php";

/**
 * Practice Single Scripts
 *
 * enqueues scripts and styles for single practic page
 *
 * @since 1.0.0
 */
function practices_scripts() {
	if(is_singular("practices")){
    wp_enqueue_style("practices", get_template_directory_uri() ."/src/dist/singlePractice.bundle.css", array("vendorcss"), null, "screen"); 
    wp_enqueue_script( "practices", get_template_directory_uri()  . "/src/dist/singlePractice.bundle.js", array("vendorjs"), null, true );
	} 
}

// add scripts and styles to single practices
add_action("wp_enqueue_scripts", "practices_scripts" );

// load single practices API endpoints
require_once plugin_dir_path(__FILE__) . "/apis/preview-practices.php";

/**
 * Single scripts
 *
 * enqueues scripts and styles for single
 *
 * @since 1.0.0
 */
function preview_single_scripts() {
	if(is_single() && get_post_type() == 'post'){
    wp_enqueue_style("single", get_template_directory_uri() ."/src/dist/single.bundle.css", array("vendorcss"), null, "screen"); 
    wp_enqueue_script( "single", get_template_directory_uri()  . "/src/dist/single.bundle.js", array("vendorjs"), null, true );
	} 
}
// add scripts and styles to page
add_action("wp_enqueue_scripts", "preview_single_scripts" );

// load single events API endpoints
require_once plugin_dir_path(__FILE__) . "/apis/preview-single.php";

// filter out admin subdomain from get_permalink function
add_filter( 'post_link', 'filter_permalink_subdomain', 99 );
function filter_permalink_subdomain( $permalink ) {
  return str_replace( "admin." , "", $permalink);
}

// make sure the preview mode link has the admin subdomain
add_filter( 'preview_post_link', 'the_preview_fix' );
function the_preview_fix() {
  $slug = str_replace(home_url(), '', get_permalink());
  return "https://admin.scarincihollenbeck.com$slug";
}



// redirect if someone isn't logged in
add_action( 'template_redirect', 'redirect_to_specific_page' );
function redirect_to_specific_page() {
  if (!is_user_logged_in() ) {
    wp_redirect( 'https://scarincihollenbeck.com', 301 ); 
    exit;
  }
}