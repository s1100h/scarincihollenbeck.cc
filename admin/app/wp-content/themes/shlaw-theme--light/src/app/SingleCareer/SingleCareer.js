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
    const fetchData = async () => {
      const [career] = await Promise.all([
        fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-career/career/education-school-law-attorney`, { headers }).then((data) => data.json()),
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
