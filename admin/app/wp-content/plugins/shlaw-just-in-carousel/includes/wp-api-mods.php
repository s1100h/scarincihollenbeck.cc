<?php

add_action( 'rest_api_init', function () {
	register_rest_route( 'just-in', '/posts', array(
		'methods' => 'GET',
		'callback' => 'get_just_in_posts',
	) );
} );

function get_categories_for_posts ($post_id) {
	
	$post_categories = wp_get_post_categories( $post_id );
	$cats = array();

	foreach($post_categories as $c){
		$cat = get_category( $c );
		if($cat-> name !== 'Just In') {
			$cats[] = $cat->name;
		}		
	}

	return $cats[0];

}

function get_just_in_posts () {
	
	$args = array(
		'category' => 97,
		'numberposts' => 10
	);

	$posts = get_posts( $args );
	
	$just_in_posts = array();

	foreach($posts as $post) {
		$just_in_posts[] = array(
			'id' => $post->ID,
			'date' => $post->post_date,
			'title' => $post->post_title,
			'link' => get_permalink($post->ID),
			'image' => get_the_post_thumbnail_url($post->ID),
			'category' => get_categories_for_posts($post->ID),
			'location' => get_field('location_selection', $post->ID)[0]
		);

	}

	   
	return $just_in_posts;
}