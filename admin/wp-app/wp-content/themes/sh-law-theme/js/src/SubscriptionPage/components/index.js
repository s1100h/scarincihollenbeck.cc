/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import { sumbitSearchForm } from '../../utils/helpers'; 
import './index.scss';

const checkboxes = [
  {
    key: 'business',
    label: 'Business Law',
    name: 'Business Law',
    property: 'column_1',
  },
  {
    key: 'firmnews',
    label: 'Firm News',
    name: 'Firm News',
    property: 'column_1',
  },
  {
    key: 'publiclaw',
    label: 'Public Law',
    name: 'Public Law',
    property: 'column_1',
  },
  {
    key: 'technology',
    label: 'Technology',
    name: 'Technology',
    property: 'column_1',
  },
  {
    key: 'tax',
    label: 'Tax',
    name: 'Tax',
    property: 'column_1',
  },
  {
    key: 'firmevents',
    label: 'Firm Events',
    name: 'Firm Events',
    property: 'column_1',
  },
  {
    key: 'cannabis',
    label: 'Cannabis Law',
    name: 'Cannabis Law',
    property: 'column_1',
  },
  {
    key: 'commercialRealEstate',
    label: 'Commercial Real Estate',
    name: 'Commercial Real Estate',
    property: 'column_two',
  },
  {
    key: 'covid19alert',
    label: 'Covid 19 Alert',
    name: 'Covid 19 Alert',
    property: 'column_two',
  },
  {
    key: 'entertainmentSports',
    label: 'Entertainment & Sports',
    name: 'Entertainment & Sports',
    property: 'column_two',
  },
  {
    key: 'environmentalLandUse',
    label: 'Environmental & Land Use',
    name: 'Environmental & Land Use',
    property: 'column_two',
  },
  {
    key: 'intellectualProperty',
    label: 'Intellectual Property',
    name: 'Intellectual Property',
    property: 'column_two',
  },
  {
    key: 'laboremployment',
    label: 'Labor Employment',
    name: 'Labor Employment',
    property: 'column_two',
  },
  {
    key: 'litigation',
    label: 'Litigation',
    name: 'Litigation',
    property: 'column_two',
  },
];

const Checkbox = ({
  property,
  name,
  onChange,
}) => (
  <input type="checkbox" property={property} name={name} onChange={onChange} />
);


class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      categories: [],
      message: false,
      allCategories: [],
      allAttorneys: [],
      allPractices: [],
      searchTerm: '',
      posts: [],
      t: {
        keyword: '',
        attorney: '',
        practice: '',
        category: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const postUrl = 'apply-for-medical-marijuana-dispensary-license';

    // get practices
    fetch(`${process.env.API_URL}/wp-json/attorney-search/practices`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ allPractices: data });
      });

    // get attorneys
    fetch(`${process.env.API_URL}/wp-json/attorney-search/attorneys`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ allAttorneys: data });
      });

    // get categories
    fetch(`${process.env.API_URL}/wp-json/wp/v2/categories?per_page=100`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ allCategories: data });
      });

    // get posts
    this.fetchPostData(`${process.env.API_URL}/wp-json/single/post/${postUrl}`);
  }

  onSubmit() {
    const { t } = this.state;
    window.location = sumbitSearchForm(t);
  }

  onChange(event) {
    const { value, name } = event.target;
    const { t } = this.state;
    t[name] = value;
    this.setState({ t });
  }


  handleChange(e) {
    const { name, value } = e.target;

    if (name === 'firstName') {
      this.setState({ firstName: value });
    }

    if (name === 'lastName') {
      this.setState({ lastName: value });
    }

    if (name === 'email') {
      this.setState({ email: value });
    }

    if (name === 'business') {
      this.setState({ business: value });
    }
  }

  handleCategoryChange(e) {
    const { categories } = this.state;
    const value = e.target.name;
    const property = e.target.getAttribute('property');
    const isChecked = e.target.checked;

    if (isChecked === true) {
      this.setState({
        categories: [...categories, { property, value }],
      });
    }

    if (isChecked === false) {
      this.setState({ categories: categories.filter(a => a.value !== value) });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      categories,
      business,
    } = this.state;
    const categoryValues = categories.map(c => c.value);

    const subscriberData = {
      firstName,
      lastName,
      email,
      business,
      categoryValues,
      siteUrl: window.location.href,
    };

    fetch(`${process.env.EMAIL_URL}/shlaw/site/subscription/form`, {
      method: 'post',
      body: JSON.stringify(subscriberData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => {
        const { status } = data;

        if (status === 200) {
          this.setState({ message: true });
        }
      });
  }
  
  fetchPostData(url) {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        const { posts } = data;
        // set data from fetch requst to state
        this.setState({ posts });
      });
  }

  render() {
    const {
      email,
      message,
      lastName,
      firstName,
      business,
      allCategories,
      allAttorneys,
      allPractices,
      searchTerm,
      posts,
    } = this.state;


    return (

      <div>
        <div className="jumbotron jumbotron-fluid city-background">
          <div className="container animated fadeInUp fast mt--1">
            <div className="row">
              <div className="bg-black col-sm-12 col-md-8 offset-md-2">
                <div className="px-5 pt-4 pb-5">
                  <span id="red-block" />
                  <h1 className="text-white proxima-bold">Scarinci Hollenbeck Mailing List</h1>
                  <span id="white-border" />
                  <h2 className="proxima-regular mt-3 mb-5">
                    As the legal world continues to evolve, it is important to stay aware of its various and regular updates.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <h4>By subscribing the to the firm email list you&apos;ll have access to</h4>
              <ul className="h4 my-4">
                <li className="mb-4">
                  When our
                  {' '}
                  <strong>attorney&apos;s blog posts</strong>
                </li>
                <li className="mb-4">
              Various
                  {' '}
                  <strong>legal updates</strong>
                  {' '}
              that may pertain to your business
                </li>
                <li className="mb-4">Any annoucements and press releases from the attorneys at the firm</li>
              </ul>              
              <h3 className="proxima-bold mt-5">Sign up Today!</h3>
              <div className="w-75 border">
                <form onSubmit={this.handleSubmit} method="post" className="p-3">
                  <div className="form-group">
                    <label htmlFor="firstName" className="sr-only"> Email:</label>
                    <input id="firstName" name="firstName" type="text" value={firstName} onChange={this.handleChange} className="form-control" aria-describedby="firstName" placeholder="Enter first name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="sr-only"> last Name:</label>
                    <input id="lastName" name="lastName" type="text" value={lastName} onChange={this.handleChange} className="form-control" aria-describedby="lastName" placeholder="Enter last name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only"> Email:</label>
                    <input id="email" name="email" type="text" value={email} onChange={this.handleChange} className="form-control" aria-describedby="email" placeholder="Enter email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="business" className="sr-only"> Business/Company:</label>
                    <input id="business" name="business" type="text" value={business} onChange={this.handleChange} className="form-control" aria-describedby="business" placeholder="Enter the name of business" required />
                  </div>
                  <div className="form-group mb-0">
                    <p className="small-excerpt">Please select a category(s) below:</p>
                  </div>
                  <ul className="no-dots two-column mt-2">
                    {
                      checkboxes.map(item => (
                        <li key={item.key}>
                          <label htmlFor={item.name}>
                            <Checkbox id={item.name} className="d-block" name={item.name} property={item.property} onChange={this.handleCategoryChange} />
                            {' '}
                            {item.name}
                          </label>
                        </li>
                      ))
                    }
                  </ul>
                  <div>
                    {(message) && <p className="text-success">Thank you for subscribing!</p>}
                    <input type="submit" className="btn btn-danger" value="Submit" />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <Sidebar
                searchTerm={searchTerm}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                posts={posts}
                allCategories={allCategories}
                allAttorneys={allAttorneys}
                allPractices={allPractices}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Checkbox.propTypes = {
  property: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  property: '',
  name: '',
  onChange: () => {},
};

export default Subscribe;
