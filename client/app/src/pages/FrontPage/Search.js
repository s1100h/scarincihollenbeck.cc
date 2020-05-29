import React from 'react';
import PropTypes from 'prop-types';
import FrontPageSearch from '../../components/FrontPageSearch';
import { ShDiamondPNG, ShDiamondWebP } from '../../utils/next-gen-images';


const Search = () => (
    <div className="col-sm-12 col-md-6">
      <picture>
        <source srcSet={ShDiamondWebP} type="image/webp"/>
        <source srcSet={ShDiamondPNG} type="image/png"/>
        <img rel="preconnect" src={ShDiamondPNG} alt="scarinci hollenbeck diamond" className="mt-3 p-2 animated fadeInUp slow mx-auto d-block" />     
      </picture>      
      <h2 className="text-white text-center display-32 text--shadow animated fadeInUp slow">How can we help?</h2>
      <FrontPageSearch />
    </div>
);

export default Search;
