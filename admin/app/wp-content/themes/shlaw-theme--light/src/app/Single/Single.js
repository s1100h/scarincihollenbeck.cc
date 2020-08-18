import React, { useState, useEffect } from 'react';
import SingleSubHeader from '../layouts/SingleSubHeader';
import ThreeColMiniSidebar from '../layouts/ThreeColMiniSidebar';
import Body from '../components/post/Body';
import Sidebar from '../components/post/Sidebar';
import SocialShareSidebar from '../components/post/SocialshareSidebar';
import { headers } from '../utils/helpers';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

export default function Single() {
  const [post, setPost ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let previewId;

      if(process.env.NODE_ENV === 'production') {
        const url = window.location.search;

        if(url.indexOf('preview_id=') > -1) {
          previewId = url.split('preview_id=').pop().split('&')[0];
        }

        if(url.indexOf('p=') > -1) {
          previewId = url.split('p=').pop().split('&')[0];
        }        
      }

      if(process.env.NODE_ENV === 'development') {
        previewId = 37227;
      }
      
      const [post] = await Promise.all([
        fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/preview-single/post/${previewId}`, { headers }).then((data) => data.json())
      ]);
  
      setPost(post);
    };

    fetchData();
  }, []);

  return (
    <>
      <SingleSubHeader
        image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Legal-Research-1800x400-JPG.jpg"
        title={post.title}
        subtitle={post.subTitle}
      />
      <ThreeColMiniSidebar
        body={(
          <Body
            featuredImage={post.featuredImage}
            caption={post.featuredImageCaption}
            content={post.content}
            eventCat={post.isEventCategory}
            title={post.title}
            subTitle={post.subTitle}
            author={post.author}
            date={post.date}
            tags={post.tags || []}
          />
          )}
        OneSidebar={(<SocialShareSidebar title={post.title} />)}
        TwoSidebar={(
          <Sidebar
            posts={post.posts || []}
            attorneys={post.attorneys || []}
          />
        )}
      />
    </>
  );
}