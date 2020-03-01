import React from 'react';

import ArticleCarousel from './component/ArticleCarousel'
import FooterCarousel from './component/FooterCarousel'
import LocationCarousel from './component/LocationCarousel'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container">
      <div className="row mt-3">
        <div className="col-sm-12">
          <h1>Footer Slider</h1>
          <FooterCarousel />
        </div>
        <div className="col-sm-12">
          <h1>Location Slider</h1>
          <LocationCarousel />
        </div>
        <div className="col-sm-12">
          <h1>Article Slider</h1>
          <ArticleCarousel />
        </div>
      </div>
    </div>
  );
}

export default App;
