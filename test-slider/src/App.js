import React, { useState, useEffect } from 'react';
import Loadable from 'react-loadable';
import { postApi } from './api/post-api';

import './App.css';


const Loading = () => <div> </div>

// additional components
const Item = Loadable({
  loader: () => import('./components/Item'),
  loading: () => <div> </div>,
});

const PreviousArrow = Loadable({
  loader: () => import('./components/PreviousArrow'),
  loading: Loading,
});

const NextArrow = Loadable({
  loader: () => import('./components/NextArrow'),
  loading: Loading,
});

export default function App() {
  const [ justInPosts, setJustInPosts ] = useState([]);
  const [ startCount, setStartCount ] = useState(0);
  const [ endCount, setEndCount ] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      const posts = await postApi();
      if(posts.status === 200) {
        setJustInPosts(posts.body)
      }
    };

    fetchData();
  }, []);

  function previousImage() {
    const arrLength = parseInt(justInPosts.length, 10);

    const previousStartIndex = (startCount <= 0) ? arrLength - 4 : startCount - 1; 
    const previousEndIndex = (startCount <= 0 ) ?  arrLength - 1: endCount - 1;

    setStartCount(previousStartIndex)
    setEndCount(previousEndIndex)

    
  }

  function nextImage() {
    const arrLength = parseInt(justInPosts.length, 10);
    const nextStartIndex = (endCount === arrLength) ?  0 : startCount + 1; 
    const nextEndIndex = (endCount === arrLength) ? 3 : endCount + 1;
    
   
    setStartCount(nextStartIndex)
    setEndCount(nextEndIndex)
  }

  function Slides() {
    return justInPosts.map((post, index) => (index >= startCount && index <= endCount) && <Item key={post.id} post={post} id={index} />)
  }

  return (
    <div id="carousel-slider">
      <PreviousArrow previousImage={previousImage} />
       <ul className="list-inline list-unstyled carousel-slider-track">
        {(justInPosts.length > 0) && Slides()} 
       </ul>          
      <NextArrow nextImage={nextImage} />
    </div>
  );
}