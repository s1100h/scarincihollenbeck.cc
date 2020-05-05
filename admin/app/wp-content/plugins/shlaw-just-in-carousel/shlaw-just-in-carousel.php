<?php
/*
Plugin Name: Just In Latest News Carousel
Description: This is a react.js, slick carousel, & WP-REST API based news carousel for footer of website
Version: 0.0.1
Author: Peter Tumulty
Author URI: scarincihollenbeck.com
License: GPLv2
*/

// load style and script resources
require_once plugin_dir_path(__FILE__) . 'includes/wp-api-mods.php';
require_once plugin_dir_path(__FILE__) . 'includes/core-functions.php';
// load just in news shortcode

require_once plugin_dir_path(__FILE__) . 'includes/just-in-shortcode.php';
add_shortcode('just_in_news_carousel', 'justin_news_shortcode');
