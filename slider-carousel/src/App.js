import React from 'react';

import ArticleCarousel from './component/ArticleCarousel'
import FooterCarousel from './component/FooterCarousel'
import LocationCarousel from './component/LocationCarousel'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function App() {
  return (
    <div className="container">
       <FooterCarousel />    
    </div>
  );
}

export default App;
