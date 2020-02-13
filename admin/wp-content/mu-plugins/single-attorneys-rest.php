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
    register_rest_route("individual-attorney", "attorney/(?P<slug>[a-zA-Z0-9-]+)", array(
      "methods" => WP_REST_SERVER::READABLE,
      "callback" => "attorney_bio_data"
    )); 
  });
  /**
   * Retrun the attorney bio data 
   * 
   * @since 1.0.0
   * @return object | null
   */
   function attorney_bio_data($request)
   {
     $slug = $request["slug"];
     $args = array(
       "numberposts" => 1,
       "name" => $slug, 
       "post_type" => "attorneys",
       "post_status" => "publish"
     );
     // query attorney post object
     $attorney = get_posts($args);
     // return attorney post id
     $attorney_id = $attorney[0]->ID; 
     
     // retrieve attorney email & author id
     $email = get_field("email", $attorney_id);
     $author_id = get_user_by("email", $email);
    
         
     // External blog query
     $external_blog_ids = get_field("blog_id", $attorney_id);
     $external_blog = array();
     // Available blogs
     $external_blog_links = array(
       "music_esq" => "https://musicesq.com/wp-json/wp/v2/posts?author=ID&per_page=100&orderby=date",
       "constitutional_law_reporter" => "https://constitutionallawreporter.com/wp-json/wp/v2/posts?author=ID&per_page=100&orderby=date",
       "government_&_law" => "https://scarincilawyer.com/wp-json/wp/v2/posts?author=ID&per_page=100&orderby=date"
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
                    foreach($response as $xp){
                      // $external_blog[] = $xp;
                      $external_blog[] = array(
                        "title" => html_entity_decode(htmlspecialchars_decode($xp->title->rendered)),
                        "link" => $xp->link,
                        "featuredImg" => (!is_null($xp->better_featured_image)) ? $xp->better_featured_image->source_url : get_home_url('/').'/wp-content/themes/sh-law-theme/includes/assets/images/88a9c0b8e7ff2ed7ecff91cfdaa0b816.png',
                        "date" => $xp->date
                      );
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
        "cat" => 98,
        "meta_query" => array(
        array(
          "key" => "related_attorneys", // name of custom field
          "value" => $attorney_id, // attorney ID 
          "compare" => "LIKE"
        )) 
      ));
      foreach($news_true as $news) {
        $news_data[] = array(
          "title" => html_entity_decode(htmlspecialchars_decode($news->post_title)),
          "link" => get_permalink($news->ID),
          "featuredImg" => get_the_post_thumbnail_url($news->ID, 'medium')
        );
      }
      // Retrieve Events
      $events_data = array(); 
      $events_true = get_posts(array(
        "post_type" => "post",
        "cat" => 99,
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
          "featuredImg" => get_the_post_thumbnail_url($event->ID,'medium')
        );
      }
      // check if ID exists 
      if($author_id) {
        // Retrieve Insights
        $insights_true = get_posts(array(
          "post_type" => "post",
          "cat" => 599,
          "author" => $author_id->ID,
          "posts_per_page" => -1
        ));
        
        
        $internal_blog = array();

        if (count($insights_true)) {
          foreach($insights_true as $it) {
            $internal_blog[] = array(
              "title" => html_entity_decode(htmlspecialchars_decode($it->post_title)),
              "link" => get_the_permalink($it->ID),
              "featuredImg" => get_the_post_thumbnail_url($it->ID,'medium'),
              "date" => $it->post_date
            );
          }
        }

        $blog_data = array_merge($internal_blog, $external_blog);      
        
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
            "featuredImg" => $a["award_image"]["url"]
          );
        }
      }

      /**
      * Retrieve Awards image, link, title
      */
      $clients = get_field("clients", $attorney_id);
      $clients_data = array();
      if($clients) {
        foreach($clients as $cl) {
          $clients_data[] = array(
            "title" => $cl["client_title"],
            "link" => $cl["client_link"],
            "featuredImg" => $cl["client_image"]["url"]
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

       function attorney_practice_sort($a, $b) {
        return strcmp($a['title'], $b['title']);
    }
    
    usort($related_pratice_data, "attorney_practice_sort");

            
  $biography = array(
    "authorID" => $author_id->ID,
    "fullName" => html_entity_decode(htmlspecialchars_decode(get_the_title($attorney_id))),
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
      "clients" => $clients_data,
      "videos" => get_field("attorney_videos", $attorney_id),
      "education" => get_field("education", $attorney_id),
      "barAdmissions" => get_field("bar_admissions", $attorney_id),
      "additionalInforamtion" => get_field("additional_information", $attorney_id)
  );
  return rest_ensure_response($biography);
}
