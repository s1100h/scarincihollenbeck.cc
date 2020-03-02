import React, { useState, useEffect } from 'react';
import {
  FaNewspaper,
  FaPlusCircle,
  FaAngleDoubleLeft,
  FaAngleDoubleRight
} from 'react-icons/fa'
import { footerApi } from '../../api/footer-api'
import './index.css';

export default function FooterCousel() {
  const [ posts, setPosts ] = useState([]);
  const [ currentSlide, setCurrentSlide ] = useState(activeSlide);
  const { width, elementRef } = useSizeElement();
  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasNext,
    hasPrev
  } = useSliding(width, React.Children.count(children));

  const handleSelect = slide => {
    setCurrentSlide(slide);
  }

  const handleClose = () => {
    setCurrentSlide(null);
  }

  const contextValue = {
    onSelectSlide: handleSelect,
    onCloseSlide: handleClose,
    elementRef,
    currentSlide
  };


  useEffect(() => {
    const fetchData = async () => {
      const justInPosts = await footerApi();

      if (justInPosts.status === 200) {
        setPosts(justInPosts.body);
      }
    };

    fetchData();
  }, []);

  return (
    {/** https://codesandbox.io/s/ly4525156l?from-embed */}
    <div>
      {(posts) && posts.map((post, index) => (
              <div className="site-slide" key={post.id}>
                {post.title}         
              </div>
            ))}          
    </div>
    
  )
}