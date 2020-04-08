<?php
if(!defined("ABSPATH")) {
  exit;
}
/**
 * Register attorney-bio endpoint to WP-REST 
 *
 * @since 1.0.0
 * /
 * 
 **/
add_action('rest_api_init', function()
  {
    register_rest_route("preview", "attorney/(?P<id>[a-zA-Z0-9-]+)", array(
      "methods" => WP_REST_SERVER::READABLE,
      "callback" => "preview_attorney_bio_data"
    )); 
  });
  /**
   * Retrun the attorney bio data 
   * 
   * @since 1.0.0
   * @return object | null
   */
   function preview_attorney_bio_data($request)
   {
     $id = $request["id"];
     $id = (int)$id;

     // query attorney post object
     $attorney = get_post($id);

     // return attorney post id
     $attorney_id = $attorney->ID; 
     
     // retrieve attorney email & author id
     $email = get_field("email", $attorney_id);
     $author_id = get_user_by("email", $email);
    
         
     // External blog query
     $external_blog_ids = get_field("blog_id", $attorney_id);
     $external_blogs = array();
     $all_blogs = array();
     $blog_data = array();
     // Available blogs
     $external_blog_links = array(
       "music_esq" => "https://musicesq.com/wp-json/wp/v2/posts?author=ID&per_page=5&orderby=date",
       "constitutional_law_reporter" => "https://constitutionallawreporter.com/wp-json/wp/v2/posts?author=ID&per_page=5&orderby=date",
       "government_&_law" => "https://scarincilawyer.com/wp-json/wp/v2/posts?author=ID&per_page=5&orderby=date"
      );
      /**
      *  Query Blog Posts  
      */
      if($external_blog_ids) {
        foreach($external_blog_ids[0] as $ids => $id) {
          if(!empty($external_blog_ids[0][$ids])) {
            foreach($external_blog_links as $links => $link) {
              if($ids == $links) {
                if(isset($id)) {
                  $url = str_replace("ID", $id, $link);            
                  $request = wp_remote_get($url);
                  $body = wp_remote_retrieve_body($request);
                  $response = json_decode($body);
                  if(is_array($response)) {
                    foreach($response as $external_post){
                      $external_blogs[] = $external_post;
                    }
                  }
                }
              }
            }
          }
        }   
      }
      
      /**
      * Query Firm News & Events & Firm Insights
      */
      // Retrieve News
      $news_data = array();
      $news_true = get_posts(array(
        "post_type" => "post",
        "cat" => 7,
        "meta_query" => array(
        array(
          "key" => "related_attorneys", // name of custom field
          "value" => $attorney_id, // attorney ID 
          "compare" => "LIKE"
        )) 
      ));
      foreach($news_true as $news) {
        $news_data[] = array(
          "title" => $news->post_title,
          "link" => get_permalink($news->ID),
          "featuredImg" => get_the_post_thumbnail_url($news->ID,'full')
        );
      }
      // Retrieve Events
      $events_data = array(); 
      $events_true = get_posts(array(
        "post_type" => "post",
        "cat" => 8,
        "meta_query" => array(
        array(
          "key" => "related_attorneys", // name of custom field
          "value" => $attorney_id, // attorney ID 
          "compare" => "LIKE"
        ))
      ));
      foreach($events_true as $event) {
        $events_data[] = array(
          "title" => $event->post_title,
          "link" => get_permalink($event->ID),
          "featuredImg" => get_the_post_thumbnail_url($event->ID,'full')
        );
      }
      // check if ID exists 
      if($author_id) {
        // Retrieve Insights
        $insights_true = get_posts(array(
          "post_type" => "post",
          "cat" => 2,
          "author" => $author_id->ID,
          "posts_per_page" => -1
        ));
        
        $all_blogs = array_merge($external_blogs, $insights_true);
        foreach($all_blogs as $blog) {
          if(isset($blog->id)){
            $blog_data[] = array(
              "title" => $blog->title->rendered,
              "link" => $blog->link,
              "featuredImg" => esc_url( home_url( "/" ) )."wp-content/uploads/2019/05/no-image-found-diamond.png"
            );
          }else {
            $blog_data[] = array(
              "title" => $blog->post_title,
              "link" => get_permalink($blog->ID),
              "featuredImg" => get_the_post_thumbnail_url($blog->ID,'full')
            );
          }
        } 
        
      }
      /**
      * Retrieve Chair & Co-Chair title, link
      */
      $chair_data = array();
      $chair = get_field("chair", $attorney_id);
      if($chair) {
        foreach($chair as $c) {
          $chair_data[] = array(
            "title" => $c->post_title,
            "link" => esc_url( home_url( "/" ) )."/practices/".$c->post_name
          );
        }
      }
      $co_chair_data = array();
      $co_chair = get_field("co_chair", $attorney_id);
      if($co_chair) {
        foreach($co_chair as $d) {
          $co_chair_data[] = array(
            "title" => $d->post_title,
            "link" => esc_url( home_url( "/" ) )."/practices/".$d->post_name
          );
        }
      }
      /**
      * Retrieve Awards image, link, title
      */
      $awards = get_field("awards", $attorney_id);
      $awards_data = array();
      if($awards) {
        foreach($awards as $a) {
          $awards_data[] = array(
            "title" => $a["award_title"],
            "link" => $a["award_link"],
            "awardImg" => $a["award_image"]["url"]
          );
        }
      }

      /**
       * Retrieve related practice data 
       */
       $related_practices = get_field("related_practices", $attorney_id);
       $related_pratice_data = array();
       
       if($related_practices) {
        foreach($related_practices as $rp) {
          $related_pratice_data[] = array(
            "title" => $rp->post_title,
            "link" => get_home_url("/").'/practices/'.$rp->post_name
          );
        }
       }

            
  $biography = array(
    "fullName" => get_the_title($attorney_id),
    "firstName" => get_field("first_name", $attorney_id),
    "middleInitial" =>get_field("middle_initial", $attorney_id),
    "lastName" => get_field("last_name", $attorney_id),
    "designation" => get_field("designation", $attorney_id),
    "profileImage" => get_field("profile_image", $attorney_id)["url"],
    "phoneNumber" => get_field("phone_number", $attorney_id),
    "fax" => get_field("fax_number", $attorney_id),
    "email" => $email,
    "pdf" => get_field("pdf_bio", $attorney_id)["url"],
    "vizibility"=> get_field("vizibility", $attorney_id),
    "socialMediaLinks" => get_field("social_media_links", $attorney_id),
    "chair" => $chair_data,
    "coChair" => $co_chair_data,
    "biography" => get_field("biography_content", $attorney_id),
    "publications" => get_field( "attorney_publications", $attorney_id),
    "presentations" => get_field( "attorney_presentations", $attorney_id),
    "media" => get_field( "attorney_media", $attorney_id),
    "tabs" => array(
      "headers" => array(
        (get_field("tab_header_1", $attorney_id) != "") ? get_field("tab_header_1", $attorney_id) : hexdec( uniqid() ),
        (get_field("tab_header_2", $attorney_id) != "") ? get_field("tab_header_2", $attorney_id) : hexdec( uniqid() ),
        (get_field("tab_header_3", $attorney_id) != "") ? get_field("tab_header_3", $attorney_id) : hexdec( uniqid() ),
        (get_field("tab_header_4", $attorney_id) != "") ? get_field("tab_header_4", $attorney_id) : hexdec( uniqid() ),
        (get_field("tab_header_5", $attorney_id) != "") ? get_field("tab_header_5", $attorney_id) : hexdec( uniqid() ),
      ),
      "body" => array(
         array(
          hexdec( uniqid() ),
          get_field("tab_header_1" , $attorney_id),
          get_field("tab_content_1", $attorney_id)
        ),
         array(
          hexdec( uniqid() ),
          get_field("tab_header_2", $attorney_id),
          get_field("tab_content_2", $attorney_id)
        ),
        array(
          hexdec( uniqid() ),
          get_field("tab_header_3", $attorney_id),
          get_field("tab_content_3", $attorney_id)
        ),
        array(
          hexdec( uniqid() ),
          get_field("tab_header_4", $attorney_id),
          get_field("tab_content_4", $attorney_id)
        ),
        array(
          hexdec( uniqid() ),
          get_field("tab_header_5", $attorney_id),
          get_field("tab_content_5", $attorney_id)
        )
      )
      ),
      "representativeMatters" => get_field("rep_matters", $attorney_id),
      "representativeClients" => get_field("rep_clients", $attorney_id),
      "relatedPractices" => $related_pratice_data,
      "blogPosts" => $blog_data,
      "newsPosts" => $news_data,
      "eventPosts" => $events_data,
      "awards" => $awards_data,
      "videos" => get_field("attorney_videos", $attorney_id),
      "education" => get_field("education", $attorney_id),
      "barAdmissions" => get_field("bar_admissions", $attorney_id),
      "additionalInforamtion" => get_field("additional_information", $attorney_id)
  );
  return rest_ensure_response($biography);
}