/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    key: 'covid19Alert',
    label: 'Covid-19 Alert',
    name: 'Covid-19 Alert',
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


class SubscriptionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      categories: [],
      message: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
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
      this.setState({ categories: categories.filter((a) => a.value !== value) });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      categories,
    } = this.state;
    const categoryValues = categories.map((c) => c.value);

    const subscriberData = {
      firstName,
      lastName,
      email,
      categoryValues,
      siteUrl: window.location.href,
    };

    fetch(`${process.env.REACT_APP_FORMS_API}/shlaw/site/subscription/form`, {
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

  render() {
    const {
      email,
      message,
      lastName,
      firstName,
    } = this.state;

    const { hideSubscription } = this.props;


    return (
      <div className="w-100">
        {(message) && (
          <p className="text-success">Thank you for subscribing!</p>
        )}
        <form onSubmit={this.handleSubmit} method="post" className="mt-3">
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
          <div className="form-group mb-0">
            <p className="small-excerpt">Please select a category(s) below:</p>
          </div>
          <ul className="no-dots two-column">
            {
                  checkboxes.map(item => (
                    <li key={item.key} className="mb--1">
                      <label htmlFor={item.name}>
                        <Checkbox id={item.name} className="d-block" name={item.name} property={item.property} onChange={this.handleCategoryChange} />
                        {' '}
                        {item.name}
                      </label>
                    </li>
                  ))
                }
          </ul>
          <input type="submit" className="btn btn-danger" value="Submit" />
        </form>
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

SubscriptionForm.propTypes = {
  hideSubscription: PropTypes.func,
};

SubscriptionForm.defaultProps = {
  hideSubscription: () => {},
};

export default SubscriptionForm;
