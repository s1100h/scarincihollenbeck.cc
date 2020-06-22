<?php // Category  - WP REST Endpoints 
if(!defined("ABSPATH")) {
  exit;
}
/**
 * Register category endpoint to WP-REST 
 *
 * @since 1.0.0
 * /
 * 
 **/
add_action("rest_api_init", function()
{
	register_rest_route("category", "posts/(?P<slug>[a-zA-Z0-9-+.,%20$]+)", array(
		"methods" => "GET",
		"callback" => "category_data"
  ));
  register_rest_route("category", "/firm-insights-children", array(
		"methods" => "GET",
		"callback" => "firm_insights_children"
  ));
  
  register_rest_route("category", "sorted-categories", array (
    "methods" => "GET",
    "callback" => "category_sorted"
  ));

  register_rest_route("category", "all", array (
    "methods" => "GET",
    "callback" => "all_categories"
  ));    
});

// related practice posts
function get_core_practice_posts($id) {
  $posts = get_posts(array(
    'numberposts' => 8,
    'category' => $id
  ));
  $results = array();
  foreach($posts as $p) {
    $results[] = array(
      "title" => html_entity_decode(htmlspecialchars_decode($p->post_title)),
      "link" => str_replace(home_url(), '', get_permalink($p->ID)),
      "image" => get_featured_image($p->post_content),
      "excerpt" => wp_trim_words($p->post_content, 20, '...' )
    );
  }
  return $results;
}

function get_attorney_info($authors) {

  $authors_data = array();
  $authors_email = array();

  // author emails
  foreach($authors as $author) {
    $authors_email[] = get_the_author_meta("email", $author->ID);
  }

  // query attorneys based on emails
  foreach($authors_email as $ae) {

    if($ae === "info@sh-law.com") {
      $authors_data[] = array(
        "name" => "Scarinci Hollenbeck",
        "link" => get_home_url("/")
      );
    } else if ($ae === "scarincihollenbeckmarketing@gmail.com") {
      $authors_data[] = array(
        "name" => "Scarinci Hollenbeck",
        "link" => get_home_url("/")
      );
    } else { 
      $apost = get_posts(array(
      "posts_per_page" => 1,
        "post_status"      => "publish",
        "post_type" => "attorneys",
        "meta_query" => array(
          array(
          "key" => "email",
          "value" => $ae,
          "compare" => "LIKE"
        ))
      ));
      $authors_data[] = array(
        "t" => $ae,
        "name" => ($apost != null) ? $apost[0]->post_title : 'No Attorney Found',
        "link" => str_replace("https://scarincihollenbeck.com", "", get_the_author_meta("user_url", $author->ID))
      );
    }
  }

  // populate authors_data
  return $authors_data;
}
function get_co_authors( $post_id ) {
  $authors = get_coauthors($post_id);
  return get_attorney_info($authors);  
}
function get_featured_image($content) {
	  // expresstion to match image element
	  $regex = '/src="([^"]*)"/';
	  // execute regex 
	  preg_match_all($regex, $content, $matches);
	  // reversing the matches array 
	  $matches = array_reverse($matches);

    $results = '';

    if(isset($matches[0][0])) {
      $results = $matches[0][0];
    }
	  return $results;
}
function category_data($request) {
	 global $post;

  $slug = $request["slug"];

  $args = array(
    "category_name" => $slug,
    "post_type"   => "post",
    "post_status" => "publish",
    "numberposts" => -1
  );

  $posts = get_posts($args);

  // current category
  $current_category = get_category_by_slug( $slug );
  $id = $current_category->term_id;

  $post_data = array();
  
  // todays post 
  $post_data['main'][] = array (
    "ID" => $posts[0]->ID,
    "title" => html_entity_decode(htmlspecialchars_decode($posts[0]->post_title)),
    "link" => str_replace(home_url(), '', get_permalink($posts[0]->ID)),
    //
    "image" =>  get_featured_image($posts[0]->post_content),
    "category" => array (
      "name" => get_the_category_by_ID(wp_get_post_categories($posts[0]->ID)[0]),
      "link" => "/category/".get_category(wp_get_post_categories($posts[0]->ID)[0])->slug
    ),
    "author" =>  get_co_authors($posts[0]->ID),
    "excerpt" => wp_trim_words($posts[0]->post_content, 50, '...' )
  );

  // weeks post
  foreach(range(1,3) as $i) {
    $post_data['latest'][] = array(
      "ID" => $posts[$i]->ID,
      "title" => html_entity_decode(htmlspecialchars_decode($posts[$i]->post_title)),
      "date" => get_the_date(' F j, Y', $posts[$i]),
      "category" => ucwords(str_replace( 'firm-', ' ', $slug )),
      "link" => str_replace(home_url(), '', get_permalink($posts[$i]->ID)),
      "image" => get_featured_image($posts[$i]->post_content),
      "excerpt" => wp_trim_words($posts[$i]->post_content, 20, '...' ),
      "author" =>  get_co_authors($posts[$i]->ID)
    );
  }
  
  // months posts
  $month_end = 8;

  if((count($posts) > 8)) {
    foreach(range(4, $month_end) as $j) {
      if(!is_null($posts[$j])) {
       $post_data['archives'][] = array(
        "ID" => $posts[$j]->ID,
         "title" => html_entity_decode(htmlspecialchars_decode($posts[$j]->post_title)),
         "link" => str_replace(home_url(), '', get_permalink($posts[$j]->ID)),
         "image" => get_featured_image($posts[$j]->post_content),
         "excerpt" => wp_trim_words($posts[$j]->post_content, 20, '...' ),
         "author" =>  get_co_authors($posts[$j]->ID)
       );
      }else {
        $post_data['archives'] = array();
      }
     }
  } else {
    $post_data['archives'] = array();
  }



  // child practices
  $parent_term_id = $id; // term id of parent term (edited missing semi colon)
  $taxonomies = array( 
    'category',
  );

  $args = array(
    'parent' => $parent_term_id,
  ); 
  
  $terms = get_terms($taxonomies, $args);
  if(count($terms) > 0) {
    foreach($terms as $t) {
      $post_data['practices'][] = array(
        "id" => $t->term_id,
        "name" => html_entity_decode(htmlspecialchars_decode($t->name)),
        "link" => "/category/".$t->slug,
        "posts" =>  get_core_practice_posts($t->term_id)
      );
    }
  }else {
    $post_data['practices'] = array();
  }

  // parent
  if($current_category->parent !== 0){
    $post_data['parent'] = array(
      "name" => get_category($current_category->parent)->name,
      "link" => "/category/".get_category($current_category->parent)->slug
    );
  }else {
    $post_data['parent'] = array();
  }
  


  $author_ids = array();

  // retrieve all author ids
  foreach($posts as $ap) {
    $author_ids[] = $ap->post_author;
  }

  // remove duplicates
  $author_ids = array_unique($author_ids);
  $author_ids= array_values($author_ids);

  foreach($author_ids as $ai) {
    $web_url = get_the_author_meta('url', $ai);

    if($web_url !== "") {
      $post_data['authors'][] = array(
        "name" => get_the_author_meta('display_name', $ai),
        "link" => "/author/".get_the_author_meta('user_nicename', $ai),
        "id" => $ai,
        "lastName" => get_the_author_meta('last_name', $ai)

      );
    }

  }  

  $post_data['current_category'] = $current_category;
  $post_data['numberOfPosts'] = count($posts);
  $post_data['$month_end'] = $month_end;

    /** Retrieve SEO data */
    $seo_meta   = get_option( 'wpseo_taxonomy_meta' );
    $seo_title  = $seo_meta['category'][$id]['wpseo_title'];
    $seo_metadescription = $seo_meta['category'][$id]['wpseo_desc'];
  
    $post_data['seo'] = (object)array(
      "title" => $seo_title,
      "metaDescription" => $seo_metadescription,
      "canonicalLink" => "category/".$slug
    );

    $post_data['description'] = category_description($id);

  return $post_data;
}

// get sorted cateories
function category_sorted() {
  $args = array(
    'orderby' => 'name',
    'order' => 'ASC',
    'parent' => 0
  );
  $categories = get_categories($args);

  $category_info = array();

  foreach($categories as $cat) {
    $category_info[] = array(
      $cat->term_id,
      $cat->name
    );
  }

  return $category_info;
}


// retrieve child categories for firm insights
function firm_insights_children() {
  $results = [];
  $categories = get_categories(array( 'parent' => 599));

  foreach($categories as $cat) {
    $results[] = array(
      "id" => $cat->term_id,
      "name" => html_entity_decode(htmlspecialchars_decode($cat->name)),
      "link" => '/category/'.$cat->slug 
    );
  }

  return $results;
}

// get all categories
function all_categories() {
  $categories = get_categories();

  foreach($categories as $cat) {
    $results[] = array(
      "title" => $cat->name,
      "link" => "/category/".$cat->slug
    );
  }
  return $results;
}