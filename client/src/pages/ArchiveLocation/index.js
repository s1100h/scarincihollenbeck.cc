/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { PulseLoader } from 'react-spinners';
import loadable from '@loadable/component';
import { getDirectionsFromLocation } from '../../utils/helpers';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import LargeSidebar from '../../layouts/LargeSidebar';
import LocationHead from '../../components/Head/location';
import locArchiveBckGround from './citybackground.jpg';

/** lazy load components */
const BodyContent = loadable(() => import('./BodyContent'));
const SideBar  = loadable(() => import('./SideBar'));

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
      spinner: false,
    };
    this.getLocationDirections = this.getLocationDirections.bind(this);
  }

  componentDidMount() {
    this.setState({ spinner: true });
    fetch('http://localhost:8086/cached/office-locations')
      .then((res) => res.json())
      .then((data) => {
        const { offices } = data;
        const { seo } = data;
        this.setState({ offices, seo, spinner: false });
      })
      .then(() => {
        const { currentOffice } = this.state;
        this.fetchOfficeData(currentOffice);
        // get location params
        const { location } = this.props.match.params;

        if (location !== undefined) {
          const currentOffice = location.replace('-', ' ');
          this.setState({ currentOffice }, () => this.fetchOfficeData(location));
        } 
      });
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

  fetchOfficeData(location) {
    const url = `${process.env.API_URL}/wp-json/individual-location/office/${location}`;

    fetch(url)
      .then((res) => res.json())
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
      .then((res) => res.json())
      .then((posts) => this.setState({ posts }));
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
        <LocationHead seo={seo} />
        <SingleSubHeader
          title="Office Locations"
          subtitle={`To best serve our clients, Scarinci Hollenbeck has ${offices.length.toString()} offices strategically located around the New York/New Jersey Metropolitan area, as well as Washington D.C. and San Francisco, CA, with our head quarters in Lyndhurst, NJ.`}
          image={locArchiveBckGround}
        />
        {(!spinner) ? (
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
        ) : <PulseLoader color="#D02422" loading={spinner} />}
      </div>
    );
  }
}

export default LocationPortal;
