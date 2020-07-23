import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BarLoader from 'react-spinners/BarLoader';
import SingleSubHeader from '../layouts/SingleSubHeader';
import LargeSidebar from '../layouts/LargeSidebar';
import BodyContent from '../components/locations/BodyContent';
import SideBar from '../components/locations/Sidebar';
import { headers, urlify } from '../utils/helpers';

import 'core-js/stable';
import 'regenerator-runtime/runtime';


export default function Location() {
  const [offices, setOffices ] = useState([]);
  const [currentOffice, setCurrentOffice ] = useState({});
  const [posts, setPosts ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [locations, currentOffice, currentOfficePosts] = await Promise.all([
        fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/location-portal/offices`, { headers }).then((data) => data.json()),
        fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-location/office/lyndhurst`, { headers }).then((data) => data.json()),
        fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-location/posts/lyndhurst`, { headers }).then((data) => data.json())
      ]);
  
      setOffices(locations.offices);
      setCurrentOffice(currentOffice);
      setPosts(currentOfficePosts);
    };

    fetchData();
  }, []);
  
  return (
     <>
      {(offices.length === 0 && Object.keys(currentOffice).length === 0) ? (
        <Container>
          <Row id="page-loader-container" className="justify-content-center align-self-center">
            <BarLoader color="#DB2220" />
          </Row>
        </Container>
      ) : (
        <>
          <SingleSubHeader
            title="Office Locations"
            subtitle={`To best serve our clients, Scarinci Hollenbeck has ${offices.length.toString()} offices strategically located around the New York/New Jersey Metropolitan area, as well as Washington D.C., with our head quarters in Lyndhurst, NJ.`}
            image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Skyscrapers-up-1800x400-JPG.jpg"
          />
          <LargeSidebar
            body={(
              <BodyContent
                attorneys={currentOffice.attorneys || []}
                practices={currentOffice.practices || []}
                map={currentOffice.mapLink}
                title={currentOffice.name}
              />
            )}
            sidebar={(
              <SideBar
                title={currentOffice.name}
                posts={posts}
                offices={offices}
                startingKey="lyndhurst"
              />
            )}
          />
        </>
      )}
    </>
  );
}
