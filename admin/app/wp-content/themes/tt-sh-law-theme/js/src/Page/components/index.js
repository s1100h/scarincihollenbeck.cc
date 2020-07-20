/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Header from './Header';
import ContactForm from './ContactForm';
import Sidebar from './Sidebar';
import { splitUrlPreview, createMarkup, splitUrl, sumbitSearchForm, sortByKey } from '../../utils/helpers';
import './index.scss';


class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      date: '',
      posts: [],
      searchTerm: '',
      t: {
        keyword: '',
        attorney: '',
        practice: '',
        category: '',
      },
      show: false,
      triggerModal: true,
      allAttorneys: [],
      allPractices: [],
      allCategories: [],
    };

    this.fetchPostData = this.fetchPostData.bind(this);
    this.printScreen = this.printScreen.bind(this);
    this.onChange = this.onChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.hideSubscription = this.hideSubscription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount() {
    let currentURL = window.location.href;

    // retrieve page data
    const postUrl = '2019-happy-holidays';

    if (currentURL.indexOf('page-index.html') > -1) {
      currentURL = `${process.env.API_URL}/${postUrl}`;
    }

    if (currentURL.indexOf('page_id=') > -1) {
      // preview url
      let prevURL = splitUrlPreview(currentURL, 'id=');
      prevURL = prevURL.replace('d=', '');

      this.fetchPageData(`${process.env.API_URL}/wp-json/preview/page/${prevURL}`);
    } else {
      // published production url
      let page = splitUrl(currentURL);
      page = page[page.length - 1];

      this.fetchPageData(`${process.env.API_URL}/wp-json/single-page/page/${page}`);
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

    // get latest posts
    fetch(`${process.env.API_URL}/wp-json/single/post/develop-in-a-jersey-city-inclusionary-zone`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ posts: data.posts });
      })
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

  printScreen() {
    window.print();
    return false;
  }

  toggleModal() {
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  }

  hideSubscription() {
    this.setState({ triggerModal: false }, () => {
      // remove custom modal
      const modal = document.getElementById('subscriptionModal');
      modal.classList.remove('show');
      modal.setAttribute('style', 'display:none');

      // remove custom modal background
      const modalBckGround = document.querySelector('.modal-backdrop');
      modalBckGround.setAttribute('style', 'display:none');
    });
  }

  render() {
    const {
      title,
      content,
      searchTerm,
      posts,
      show,
      allPractices,
      allAttorneys,
      allCategories,
    } = this.state;
    
    const eSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
    const subTitle = (eSubTitle !== null)  ? eSubTitle : ''
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
              {/** Author bios */}
              {/** Contact form */}
              <div className="w-100 mt-5 hide-print">
                <h4 className="bg-light-gray">Contact A Firm Reprepresentative</h4>
                <div className="mt-5">
                  <ContactForm />
                </div>
              </div>
              {/** Related content */}
            </div>
            <Sidebar
              searchTerm={searchTerm}
              onChange={this.onChange}
              onSubmit={this.onSubmit}
              posts={posts}
              hideSubscription={this.hideSubscription}
              show={show}
              toggleModal={this.toggleModal}
              allPractices={sAllPractices}
              allAttorneys={sAllAttorneys}
              allCategories={allCategories}
            />
          </div>
        </div>
      </span>
    );
  }
}

export default Page;
