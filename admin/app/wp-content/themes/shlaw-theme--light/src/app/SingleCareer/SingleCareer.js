import React, { useState, useEffect } from 'react';
import SingleSubHeader from '../layouts/SingleSubHeader';
import LargeSidebar from '../layouts/LargeSidebar';
import BreadCrumb from '../components/singlecareer/Breadcrumb';
import Body from '../components/singlecareer/Body';
import Sidebar from '../components/singlecareer/Sidebar';
import { headers } from '../utils/helpers';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

export default function Career() {
  const [career, setCareer ] = useState([]);
  useEffect(() => {
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
      previewId = 29433;
    } 

    const fetchData = async () => {
      const [career] = await Promise.all([
        fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/preview-career/career/${previewId}`, { headers }).then((data) => data.json()),
      ]);
  
      setCareer(career);
    };

    fetchData();
  }, []);
   
  return (
    <>
      <SingleSubHeader
        image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Legal-Research-1800x400-JPG.jpg"
        title={career.title}
        subtitle=" Our commitment to diversity and equal opportunity enables Scarinci Hollenbeck to recruit, retain, and promote the best attorneys."
      />
      <LargeSidebar
        body={(
          <>
            <BreadCrumb title={career.title} />
            <Body
              title={career.title}
              position={career.positionDescription}
              contact={career.contact}
            />

          </>
        )}
        sidebar={<Sidebar />}
      />
    </>
  )
}
