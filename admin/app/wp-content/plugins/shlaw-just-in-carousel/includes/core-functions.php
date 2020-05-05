<?php // Just In Carousel - Loading Custom Scripts

// exit if file is called directly
if( !defined("ABSPATH")) { exit; }
// public stylesheets and scripts
function public_scripts_just_in() {
    wp_enqueue_style("just-in-style", plugin_dir_url(dirname(__FILE__))."includes/assets/css/just-in.css", array(), null, "screen");
    wp_enqueue_script("just-in-script", plugin_dir_url(dirname(__FILE__))."includes/assets/js/just-in.min.js", array(), null, true);
}
// add styles to admin header
add_action("wp_enqueue_scripts", "public_scripts_just_in" );

 ?>