<?php

// load attorneys archive API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/archive-attorneys-rest.php";

// load  arcive attorney API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/archive-practices-rest.php";

// load  arcive attorney API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/archive-location-rest.php";

// load single attorneys API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/single-attorneys-rest.php";

// load single practices API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/single-practices-rest.php";

// load single location API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/single-location-rest.php";

// load single events API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/single-events-rest.php";

// load single events API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/single-career-rest.php";

// load single events API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/archive-career-rest.php";

// load single events API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/page-rest.php";

// load searcg events API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/search-rest.php";

require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/search-obj-rest.php";

// load single events API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/single-rest.php";

// load single events API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/firm-page-rest.php";

// load single events API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/firm-overview-rest.php";

// load single events API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/author-rest.php";

require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/archive-rest.php";

// load single events API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/quick-news-rest.php";

// load single events API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/category-rest.php";

// load attorneys archive API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/archive-admin-rest.php";

// load single admin API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/single-admin-rest.php";

// load preview post API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/preview-single-rest.php";

// load preview admin API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/preview-admin-rest.php";

// load preview practice API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/preview-practice-rest.php";

// load preview office API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/preview-location-rest.php";

// load preview career API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/preview-career-rest.php";

// load preview attorney API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/preview-attorney-rest.php";

// load preview page API endpoints
require_once plugin_dir_path(__FILE__) . "/../../../mu-plugins/preview-page-rest.php";

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
