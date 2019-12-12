/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { PulseLoader } from 'react-spinners';
import { getDirectionsFromLocation } from '../../utils/helpers';
import SingleSubHeader from '../../components/SingleSubHeader';
import LargeSidebar from '../../components/LargeSidebar';
import BodyContent from './BodyContent';
import SideBar from './SideBar';
import locArchiveBckGround from './citybackground.jpg';


class LocationPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOffice: 'Lyndhurst',
      currentOfficeMap: '',
      currentOfficeAttorneys: [],
      currentOfficePractice: [],
      offices: [],
      posts: [],
      seo: [],
      spinner: false, 
    };
    this.getLocationDirections = this.getLocationDirections.bind(this);
  }

  componentDidMount() {
    this.setState({ spinner: true });
    fetch(`${process.env.API_URL}/wp-json/location-portal/offices`)
      .then(res => res.json())
      .then(offices => this.setState({ offices, spinner: false }))
      .then(() => {
        const { currentOffice } = this.state;
            this.fetchOfficeData(currentOffice);
        // get location params
        const { location } = this.props.match.params;

        if(location !== undefined) {
          const currentOffice = location.replace('-',' ');
          this.setState({currentOffice}, () => this.fetchOfficeData(location));

        }else {
          
        }
      
      });
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    if (nextProps.location.state === 'desiredState') {
     const { location } = nextProps.match.params;
     const currentOffice = location.replace('-',' ');
     this.setState({currentOffice}, () => this.fetchOfficeData(location));
    }
  }

  getLocationDirections(location) {
    return getDirectionsFromLocation(location);
  }

  fetchOfficeData(location) {
    const url = `${process.env.API_URL}/wp-json/individual-location/office/${location}`;

    fetch(url)
      .then(res => res.json())
      .then((data) => {
        const {
          mapLink,
          attorneys,
          practices,
          seo,
        } = data;


        this.setState({
          currentOfficeMap: mapLink,
          currentOfficeAttorneys: attorneys,
          currentOfficePractice: practices,
          seo,
        });
      });

    fetch(`${process.env.API_URL}/wp-json/individual-location/posts/${location}`)
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    const {
      offices,
      posts,
      currentOfficeMap,
      currentOfficeAttorneys,
      currentOfficePractice,
      currentOffice,
      seo,
      spinner,
    } = this.state;

    return (
      <div>
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.metaDescription}/>
          <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
          <link rel="canonical" href={window.location.href} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.metaDescription} />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:site_name" content={seo.title} />
          <meta property="article:publisher" content="https://www.facebook.com/ScarinciHollenbeck/" />
          <meta property="og:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
          <meta property="og:image:secure_url" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
          <meta property="og:image:width" content="750" />
          <meta property="og:image:height" content="350" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content={seo.metaDescription} />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:site" content="@S_H_Law" />
          <meta name="twitter:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
          <meta name="twitter:creator" content="@S_H_Law" /> 
        </Helmet>
        <SingleSubHeader
          title="Scarinci Hollenbeck Office Locations"
          subtitle={`To best serve our clients, Scarinci Hollenbeck has ${offices.length.toString()} offices strategically located around the New York/New Jersey Metropolitan area, as well as Washington D.C. and San Francisco, CA, with our head quarters in Lyndhurst, NJ.`}
          image={locArchiveBckGround}
        />
        {(!spinner) ? (
            <LargeSidebar
              body={<BodyContent
              attorneys={currentOfficeAttorneys}
              practices={currentOfficePractice}
              map={currentOfficeMap}
              title={currentOffice}
            />}
            sidebar={
              <SideBar
                title={currentOffice}
                posts={posts}
                offices={offices}
                getLocationDirections={this.getLocationDirections}
                setNewLocation={this.setNewLocation}
              />
            }
          />
          ) : <PulseLoader color="#D02422" loading={spinner} />
       }
      </div>
    );
  }
}

export default LocationPortal;
