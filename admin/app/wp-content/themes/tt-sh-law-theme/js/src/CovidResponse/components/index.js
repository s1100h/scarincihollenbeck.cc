/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  createMarkup, sumbitSearchForm, sortByKey,
} from '../../utils/helpers';
import './index.scss';


class CovidResponse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      date: '',
      searchTerm: '',
      t: {
        keyword: '',
        attorney: '',
        practice: '',
        category: '',
      },
      allAttorneys: [],
      allPractices: [],
      allCategories: [],
      coronaPosts: [],
    };

    this.fetchPostData = this.fetchPostData.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount() {
    let currentURL = window.location.href;

    // retrieve page data
    const postUrl = 'covid-19-crisis-management-unit';

    if (currentURL.indexOf('covid-response-index.html') > -1) {
      currentURL = `${process.env.API_URL}/${postUrl}`;
    }

    if (currentURL.indexOf('page_id=') > -1) {
      this.fetchPageData(`${process.env.API_URL}/wp-json/preview/page/${postUrl}`);
    } else {
      console.log(`${process.env.API_URL}/wp-json/preview/page/${postUrl}`);
      this.fetchPageData(`${process.env.API_URL}/wp-json/single-page/page/${postUrl}`);
    }

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

    // get covid-19 articles
    fetch(`${process.env.COVID_URL}/covid-19-news`)
      .then(res => res.json())
      .then((posts) => {
        
        this.setState({ coronaPosts: posts });
      });
  }

  onChange(event) {
    const { value, name } = event.target;
    const { t } = this.state;
    t[name] = value;
    this.setState({ t });
  }

  onSubmit() {
    const { t } = this.state;
    window.location = sumbitSearchForm(t);
  }

  fetchPageData(url) {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        const { content, title } = data;
        this.setState({ title });
        this.setState({ content });
      });
  }

  fetchPostData(url) {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        const {
          attorneys,
          author,
          content,
          date,
          posts,
          title,
        } = data;

        // set data from fetch requst to state
        this.setState({
          attorneys,
          author,
          content,
          date,
          posts,
          title,
        });
      });
  }

  render() {
    const {
      title,
      content,
      searchTerm,
      allPractices,
      allAttorneys,
      allCategories,
      coronaPosts,
    } = this.state;

    const eSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
    const subTitle = (eSubTitle !== null) ? eSubTitle : '';
    const sAllPractices = sortByKey(allPractices, 'title');
    const sAllAttorneys = sortByKey(allAttorneys, 'last_name');
    const bodyContent = content.replace(subTitle, '');

    return (
      <span>
        <Header title={title} subTitle={subTitle} />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <div className="post-content" dangerouslySetInnerHTML={createMarkup(bodyContent)} />
            </div>
            <Sidebar
              searchTerm={searchTerm}
              onChange={this.onChange}
              onSubmit={this.onSubmit}
              allPractices={sAllPractices}
              allAttorneys={sAllAttorneys}
              allCategories={allCategories}
              coronaPosts={coronaPosts}
            />
          </div>
        </div>
      </span>
    );
  }
}

export default CovidResponse;
