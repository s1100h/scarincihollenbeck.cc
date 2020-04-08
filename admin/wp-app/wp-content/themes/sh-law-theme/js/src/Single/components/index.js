/* eslint-disable no-lonely-if */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Header from './Header';
import ArticleDetails from './ArticleDetails';
import SocialShareSidebar from './SocialShareSidebar';
import SocialShareFooter from './SocialShareFooter';
import AuthorBio from './AuthorBio';
import ContactForm from './ContactForm';
import Sidebar from './Sidebar';
import EventSidebar from './EventSidebar';
import { createMarkup, sumbitSearchForm, sortByKey,
} from '../../utils/helpers';
import { setUserCookie } from '../usercookie';
import './index.scss';


class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      date: '',
      posts: [],
      eventDetails: {},
      author: [],
      attorneys: [],
      searchTerm: '',
      t: {
        keyword: '',
        attorney: '',
        practice: '',
        category: '',
      },
      show: false,
      triggerModal: true,
      eventCat: false,
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
    const currentUrl = window.location.href;

    // how-to-develop-in-a-jersey-city-inclusionary-zone
    // development url
    let postUrl = 'apply-for-medical-marijuana-dispensary-license';
    if (currentUrl.indexOf('single-index.html') > -1) {
      this.fetchPostData(`${process.env.API_URL}/wp-json/single/post/${postUrl}`);
    } else {
      // check preview mode
      const urlSearch = window.location.search;
      if (urlSearch.indexOf('?preview_id=') > -1) {
        const previewUrl = urlSearch.split('?preview_id=').pop().split('&')[0];
        postUrl = previewUrl;
        this.fetchPostData(`${process.env.API_URL}/wp-json/single/post/${postUrl}`);
      } else if (urlSearch.indexOf('?p=') > -1) {
        const previewUrl = urlSearch.split('?p=').pop().split('&')[0];
        postUrl = previewUrl;
        this.fetchPostData(`${process.env.API_URL}/wp-json/single/post/${postUrl}`);
      } else {
        const urlSplit = window.location.pathname.split('/');
        const filtered = urlSplit.filter(a => a !== '');
        postUrl = filtered[filtered.length - 1];
        this.fetchPostData(`${process.env.API_URL}/wp-json/single/post/${postUrl}`);
      }
    }

    // parsing url

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
    // set timeout to trigger
    const screenWidth = window.innerWidth;
    if (screenWidth > 960) {
      this.triggerSubscription();
    }
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
          categories,
          eventDetails,
        } = data;

        // check if its an event category
        const eventCat = categories.map(a => a.id).indexOf(99) > -1;

        // set data from fetch requst to state
        this.setState({
          attorneys,
          author,
          content,
          date,
          posts,
          title,
          eventCat,
          eventDetails,
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

  triggerSubscription() {
    if (setUserCookie()) {
      // set time out for 8 seconds
      setTimeout(() => {
        // open modal
        const modal = document.getElementById('subscriptionModal');
        modal.classList.add('show');
        modal.setAttribute('style', 'padding-right:17px; display:block');

        // create modal background and add to DOM
        const modalBckGround = document.createElement('div');
        modalBckGround.classList.add('modal-backdrop');
        modalBckGround.classList.add('fade');
        modalBckGround.classList.add('show');
        document.body.appendChild(modalBckGround);
      }, 7000);
    }
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
      author,
      date,
      posts,
      attorneys,
      show,
      eventCat,
      eventDetails,
      allPractices,
      allAttorneys,
      allCategories,
    } = this.state;


    const subTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
    const featuredImg = content.match(/<figure(.*?)>(.*?)<\/figure>/g);
    const firstFeaturedImg = (featuredImg !== null) ? featuredImg[0] : '';
    const bodyContent = content.replace(firstFeaturedImg, '').replace(subTitle, '');

    // sort practices
    const sAllPractices = sortByKey(allPractices, 'title');
    const sAllAttorneys = sortByKey(allAttorneys, 'last_name');


    return (
      <span>
        <Header title={title} subTitle={subTitle} />
        <div className="container">
          <div className="row">
            <SocialShareSidebar printScreen={this.printScreen} title={title} />
            <div className="col-sm-12 col-md-7">
              {/** Featured image */}
              <div dangerouslySetInnerHTML={createMarkup(firstFeaturedImg)} className="f-image" />
              {/** Author & date & Category */}
              <ArticleDetails author={author} date={date} />
              <hr />
              <div className="post-content" dangerouslySetInnerHTML={createMarkup(bodyContent)} />
              <SocialShareFooter title={title} />
              {/** Author bios */}
              <AuthorBio author={author} />
              {/** Contact form */}
              <div className="w-100 mt-5 hide-print">
                <h4 className="bg-light-gray">{(eventCat) ? 'Contact Us For More Information On This Event' : 'Contact Practice Representative'}</h4>
                <div className="mt-5">
                  <ContactForm />
                </div>
              </div>
              {/** Related content */}
            </div>
            {
              (eventCat) ? (
                <EventSidebar
                  searchTerm={searchTerm}
                  onChange={this.onChange}
                  eventDetails={eventDetails}
                  attorneys={attorneys}
                  hideSubscription={this.hideSubscription}
                  show={show}
                  toggleModal={this.toggleModal}
                  allPractices={allPractices}
                  allAttorneys={allAttorneys}
                  allCategories={allCategories}
                  onSubmit={this.onSubmit}
                />
              ) : (
                <Sidebar
                  searchTerm={searchTerm}
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                  posts={posts}
                  attorneys={attorneys}
                  hideSubscription={this.hideSubscription}
                  show={show}
                  toggleModal={this.toggleModal}
                  allPractices={sAllPractices}
                  allAttorneys={sAllAttorneys}
                  allCategories={allCategories}
                />
              )
            }
          </div>
        </div>
      </span>
    );
  }
}

export default Single;
