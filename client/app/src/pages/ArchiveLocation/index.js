/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { getDirectionsFromLocation } from '../../utils/helpers';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import LargeSidebar from '../../layouts/LargeSidebar';
import LocationHead from '../../components/Head/location';

const locArchiveBckGround = 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/citybackground.jpg';

/** lazy load components */
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

  componentDidMount() {
    fetch(`${process.env.REACT_APP_CACHED_API}/cached/office-locations`, {
      headers: {
        'Content-Type': 'application/json',
        'Content-Encoding': 'gzip',
        'Accept-Encoding': 'gzip'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        const { offices } = data;
        const { seo } = data;
        this.setState({ offices, seo });
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
    const url = `${process.env.REACT_APP_ADMIN_SITE}/wp-json/individual-location/office/${location}`;

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

    fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/individual-location/posts/${location}`)
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
    } = this.state;

    return (
      <div>
        <LocationHead seo={seo} />
        <SingleSubHeader
          title="Office Locations"
          subtitle={`To best serve our clients, Scarinci Hollenbeck has ${offices.length.toString()} offices strategically located around the New York/New Jersey Metropolitan area, as well as Washington D.C. and San Francisco, CA, with our head quarters in Lyndhurst, NJ.`}
          image={locArchiveBckGround}
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
