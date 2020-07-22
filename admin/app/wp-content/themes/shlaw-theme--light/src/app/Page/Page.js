import React, { useState, useEffect} from 'react';
import Body from '../components/pages/body';
import Sidebar from '../components/pages/sidebar';
import SingleSubHeader from '../layouts/SingleSubHeader';
import LargeSidebar from '../layouts/LargeSidebar';
import { headers } from '../utils/helpers';


import 'core-js/stable';
import 'regenerator-runtime/runtime';

function Page() {
  const [content, setContent ] = useState('');
  const [title, setTitle ] = useState('');
  const [subTitle, setSubTitle ] = useState('');
  const [posts, setPosts ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [aJson, postJson] = await Promise.all([
        fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/single-page/page/privacy-policy`, { headers }).then((data) => data.json()),
        fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/single/post/develop-in-a-jersey-city-inclusionary-zone`, { headers }).then((data) => data.json()),
        fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then((data) => data.json()),
      ]);
  
      const { posts } = postJson;
      const { title, content } = aJson;

      const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
      const subTitle = (extractSubTitle !== null) ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
      const bodyContent = content.replace(subTitle, '');
   
      setContent(bodyContent);
      setPosts(posts);
      setTitle(title);
      setSubTitle(subTitle);
    };

    fetchData();
  }, []);

  


  return (
    <>      
      <SingleSubHeader
        title={title}
        subtitle={subTitle}
        image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Legal-Research-1800x400-JPG.jpg"
        height="auto"
      />
      <LargeSidebar
        body={(
          <Body
            content={content}
          />
          )}
        sidebar={(
          <Sidebar
            posts={posts}
          />
          )}
      />
    </>
  );
}

export default Page;
