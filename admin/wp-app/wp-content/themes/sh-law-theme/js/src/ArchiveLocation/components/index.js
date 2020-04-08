/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { getDirectionsFromLocation, locationUrl } from '../../utils/helpers';
import Header from './Header';
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
    };
    this.getLocationDirections = this.getLocationDirections.bind(this);
    this.setNewLocation = this.setNewLocation.bind(this);
  }

  componentDidMount() {
    fetch(`${process.env.API_URL}/wp-json/location-portal/offices`)
      .then(res => res.json())
      .then(offices => this.setState({ offices }))
      .then(() => {
        const currentUrl = window.location.href;
        if (currentUrl.indexOf('#') > -1) {
          const hashedLoc = currentUrl.split('#').pop();
          const unUrlifyLoc = hashedLoc.replace('-', ' ');

          this.setState({ currentOffice: unUrlifyLoc }, () => this.fetchOfficeData(hashedLoc));
        } else {
          const { currentOffice } = this.state;
          this.fetchOfficeData(currentOffice);
        }
      });
  }

  getLocationDirections(location) {
    return getDirectionsFromLocation(location);
  }

  setNewLocation(location) {
    const sAgent = window.navigator.userAgent;
    const ie11 = 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko';
    window.location.hash = `${locationUrl(location)}`;
    
    if (sAgent === ie11) {
      window.location.reload();
    } else {
      this.setState({ currentOffice: location }, () => this.fetchOfficeData(location));
    }
  }

  fetchOfficeData(office) {
    const officeToSlug = locationUrl(office);
    const url = `${process.env.API_URL}/wp-json/individual-location/office/${officeToSlug}`;

    fetch(url)
      .then(res => res.json())
      .then((data) => {
        const {
          mapLink,
          attorneys,
          practices,
        } = data;
        this.setState({
          currentOfficeMap: mapLink,
          currentOfficeAttorneys: attorneys,
          currentOfficePractice: practices,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(`${process.env.API_URL}/wp-json/individual-location/posts/${officeToSlug}`)
      .then(res => res.json())
      .then(posts => this.setState({ posts }))
      .catch((err) => {
        console.log('err');
        console.log(err);
      });

    console.log('IE11 debugger');
    window.addEventListener('unhandledrejection', (event) => {
      console.log(`WARNING: Unhandled promise rejection. Reason: ${event.reason}`, event);
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
    } = this.state;

    return (
      <div>
        <Header offices={offices} />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <BodyContent
                attorneys={currentOfficeAttorneys}
                practices={currentOfficePractice}
                map={currentOfficeMap}
                title={currentOffice}
              />
            </div>
            <div className="col-sm-12 col-md-4">
              <SideBar
                title={currentOffice}
                posts={posts}
                offices={offices}
                getLocationDirections={this.getLocationDirections}
                setNewLocation={this.setNewLocation}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationPortal;
