/* eslint-disable max-len */
import React, { Component } from 'react';
import FullWidth from '../../components/FullWidth';
import SingleSubHeader from '../../components/SingleSubHeader';
import styled from 'styled-components';
import './index.scss';
import cityBckGroundImg from './citybackground.jpg';

class Page404 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
  }

  onSubmit() {
    const { searchTerm } = this.state;
    fetch(`${process.env.API_URL}/wp-json/search/post`,
      {
        method: 'post',
        body: searchTerm,
      })
      .then(res => res.json());
  }


  render() {
    const { searchTerm } = this.state;
    return (
      <div>
        <SingleSubHeader 
          title="404: Resource Not Found"
          subtitle="Sorry, the page you are looking for cannot be found."
          image={cityBckGroundImg}
          height={'auto'}
        />
        <FullWidth>
          <p className="lead">
            It&apos;s possible you entered the address incorrectly or we moved the desired page. Try searching our site to find what you are looking for.
          </p>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 offset-md-3">
                <form role="search" className="mt-4 d-block" method="GET" action={window.location.origin}>
                  <span className="screen-reader-text">Search for:</span>
                  <input name="s" type="search" placeholder="Try another search..." value={searchTerm} aria-labelledby="searchbutton" className="form-control" onChange={this.onChange} />
                  <button type="submit" id="searchbutton" className="btn btn-danger px-5 d-block mx-auto mt-4">Submit</button>
                </form>
              </div>
              <div className="col-sm-12 col-md-8 mt-5 offset-md-2 off-white">
                <h4 className="proxima-bold p-3 pb-0 mb-0 text-center">Or try visiting one of these pages on our site to narrow your search.</h4>
                <ul className="ml-6">
                  <li><a href={`${window.location.origin}/attorneys`}><h5 className="u-hover">Attorneys</h5></a></li>
                  <li><a href={`${window.location.origin}/practices`}><h5 className="u-hover">Practices</h5></a></li>
                  <li><a href={`${window.location.origin}/locations`}><h5 className="u-hover">Locations</h5></a></li>
                  <li><a href={`${window.location.origin}/category/firm-news`}><h5 className="u-hover">Firm News</h5></a></li>
                  <li><a href={`${window.location.origin}/category/firm-events`}><h5 className="u-hover">Firm Events</h5></a></li>
                  <li><a href={`${window.location.origin}/category/firm-insights`}><h5 className="u-hover">Firm Insights</h5></a></li>
                </ul>
              </div>
            </div>
          </div>
        </FullWidth>        
      </div>
    );
  }
}

export default Page404;
