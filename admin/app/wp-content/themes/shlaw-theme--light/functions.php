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

function sh_law_theme_styles() {
  wp_enqueue_style("bootstrap", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", null, null, "screen");
  wp_enqueue_style("fontawesome", "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", array("bootstrap"), null, "screen");
}

// add scripts and styles to attorneys archive
add_action("wp_enqueue_scripts", "sh_law_theme_styles" );


function sh_law_theme_scripts() {
  wp_enqueue_script( "jquery-slim", "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js", null, null, true );
  wp_enqueue_script( "popper", "https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.4.4/cjs/popper.min.js", array("jquery-slim"), true );
  wp_enqueue_script( "bootstrap", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js", array("popper"), true );
}
// add scripts and styles to attorneys archive
add_action("wp_enqueue_scripts", "sh_law_theme_scripts", 21, 1);


/**
 * Admin Single Scripts
 *
 * enqueues scripts and styles for single admin page
 *
 * @since 1.0.0
 */
function single_admin_scripts() {
	if(is_singular("administration")){
    wp_enqueue_style("single-admin", get_template_directory_uri() ."/includes/assets/css/single-admin.min.css", array("bootstrap"), null, "screen"); 
    wp_enqueue_script( "single-admin", get_template_directory_uri()  . "/includes/assets/js/single-admin.min.js", null, null, true );
	} 
}
// add scripts and styles to single admin
add_action("wp_enqueue_scripts", "single_admin_scripts" );

// load single admins API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/apis/preview-admin.php";


/**
 * Attorneys Single Scripts
 *
 * enqueues scripts and styles for single attorneys page
 *
 * @since 1.0.0
 */
function single_attorneys_scripts() {
	if(is_singular("attorneys")){
    wp_enqueue_style("single-attorneys", get_template_directory_uri() ."/includes/assets/css/single-attorneys.min.css", array("bootstrap"), null, "screen"); 
    wp_enqueue_script( "single-attorneys", get_template_directory_uri()  . "/includes/assets/js/single-attorneys.min.js", null, null, true );
	} 
}
// add scripts and styles to single attorneys
add_action("wp_enqueue_scripts", "single_attorneys_scripts" );

// load single attorneys API endpoints
require_once plugin_dir_path(__FILE__) . "/includes/apis/preview-attorney.php";