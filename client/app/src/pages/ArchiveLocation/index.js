/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { getDirectionsFromLocation, headers } from '../../utils/helpers';
import { singleCityBackgroundJPG, singleCityBackgroundWebP } from '../../utils/next-gen-images';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import LargeSidebar from '../../layouts/LargeSidebar';
import LocationHead from '../../components/Head/location';
import BodyContent from './BodyContent';
import SideBar from './SideBar';

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
      seo: {},
    };
    this.getLocationDirections = this.getLocationDirections.bind(this);
  }

  async componentDidMount() {
    const { currentOffice } = this.state;
    const { location } = this.props.match.params;
    const response = await fetch(`${process.env.REACT_APP_CACHED_API}/cached/office-locations`, { headers });
    const json = await response.json();
    const { offices, seo } = json;

    this.setState({ offices, seo });
    this.fetchOfficeData(currentOffice);

    if (location !== undefined) {
      const currentOffice = location.replace('-', ' ');
      this.setState({ currentOffice }, () => this.fetchOfficeData(location));
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.location.state === 'desiredState') {
      const { location } = nextProps.match.params;
      const currentOffice = location.replace('-', ' ');
      this.setState({ currentOffice }, () => this.fetchOfficeData(location));
    }
  }

  getLocationDirections(location) {
    return getDirectionsFromLocation(location);
  }

  async fetchOfficeData(location) {
    const officeResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/individual-location/office/${location}`, { headers });
    const postsResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/individual-location/posts/${location}`, { headers });
    const offices = await officeResponse.json();
    const posts = await postsResponse.json();
    const {
      mapLink, attorneys, practices, seo,
    } = offices;

    this.setState({
      currentOfficeMap: mapLink,
      currentOfficeAttorneys: attorneys,
      currentOfficePractice: practices,
      seo,
      posts,
    });
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
    } = this.state;

    return (
      <div>
        <LocationHead seo={seo} />
        <SingleSubHeader
          title="Office Locations"
          subtitle={`To best serve our clients, Scarinci Hollenbeck has ${offices.length.toString()} offices strategically located around the New York/New Jersey Metropolitan area, as well as Washington D.C. and San Francisco, CA, with our head quarters in Lyndhurst, NJ.`}
          imageWebp={singleCityBackgroundWebP}            
          imageJPG={singleCityBackgroundJPG}
        />
        <LargeSidebar
          body={(
            <BodyContent
              attorneys={currentOfficeAttorneys}
              practices={currentOfficePractice}
              map={currentOfficeMap}
              title={currentOffice}
            />
          )}
          sidebar={(
            <SideBar
              title={currentOffice}
              posts={posts}
              offices={offices}
              getLocationDirections={this.getLocationDirections}
              setNewLocation={this.setNewLocation}
            />
          )}
        />
      </div>
    );
  }
}

export default LocationPortal;
