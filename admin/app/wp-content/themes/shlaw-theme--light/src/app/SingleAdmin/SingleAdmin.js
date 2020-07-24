import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BarLoader from 'react-spinners/BarLoader';
import ProfileImage from '../components/singleattorney/ProfileImage';
import InfoCard from '../components/singleattorney/InfoCard';
import MultiSubHeader from '../layouts/MultiSubHeader';
import FullWidth from '../layouts/FullWidth';
import { headers, createMarkup } from '../utils/helpers';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

export default function SingleAdmin() {
  const [admin, setAdmin ] = useState({});

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
        previewId = 20875;
      }     

      const [admin] = await Promise.all([
        fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/preview-admin/admin/${previewId}`, { headers }).then((data) => data.json())
      ]);
  
      setAdmin(admin);
    };

    fetchData();
  }, []);

  return (
    <>
      {(Object.keys(admin).length === 0) ? (
        <Container>
          <Row id="page-loader-container" className="justify-content-center align-self-center">
            <BarLoader color="#DB2220" />
          </Row>
        </Container>
      ) : (
        <>      
        <MultiSubHeader
          image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Columns-1800x400-JPG.jpg"
          height="450px"
          profile={(<ProfileImage image={admin.image.url} name={admin.name} />)}
          infoCard={(
            <InfoCard
              email={admin.email}
              social_media_links={admin.social_media_links}
              vizibility={admin.vizibility}
              fullName={admin.name}
              designation={admin.Title}
              phoneNumber={`201-896-4100 ${admin.phone_extension}`}
              socialMediaLinks={admin.social_media_links}
            />
        )}
        />
        <FullWidth>
          <div>
            <div className="line-header">
              <h3>Biography</h3>
            </div>
            <div className="w-100 mt-5">
              <div dangerouslySetInnerHTML={createMarkup(admin.biography)} />
            </div>
          </div>
        </FullWidth>
      </>
      )}                  
    </>
  );
}