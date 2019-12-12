/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { PulseLoader } from 'react-spinners';
import SingleSubHeader from '../../components/SingleSubHeader';
import LargeSidebar from '../../components/LargeSidebar';
import Sidebar from './Sidebar';
import Body from './Body';
import { splitUrlPreview, createMarkup, splitUrl, sumbitSearchForm } from '../../utils/helpers';
import blogHeader from './blogheader.jpg';
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
      spinner:false,
    };

    this.fetchPostData = this.fetchPostData.bind(this);
    this.printScreen = this.printScreen.bind(this);
    this.onChange = this.onChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.hideSubscription = this.hideSubscription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount() {
    const page = this.props.location.pathname;
    this.fetchPageData(`${process.env.API_URL}/wp-json/single-page/page${page}`);

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
    this.setState({ spinner: true });
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        const { content, title } = data;
        this.setState({ title, content, spinner: false });
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
      spinner,
    } = this.state;

    return (
      <div>
        {/* <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.metaDescription}/>
          <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
          <link rel="canonical" href={window.location.href} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.metaDescription} />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:site_name" content={seo.title} />
          <meta property="article:publisher" content="https://www.facebook.com/ScarinciHollenbeck/" />
          <meta property="og:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
          <meta property="og:image:secure_url" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
          <meta property="og:image:width" content="750" />
          <meta property="og:image:height" content="350" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content={seo.metaDescription} />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:site" content="@S_H_Law" />
          <meta name="twitter:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
          <meta name="twitter:creator" content="@S_H_Law" /> 
        </Helmet> */}
        <SingleSubHeader
          title={title}
          subtitle=""
          image={blogHeader}
          height={'auto'}
        />
        {
          (!spinner) ? (
            <LargeSidebar
              body={(<Body content={content} />)}
              sidebar={(<Sidebar
                searchTerm={searchTerm}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                posts={posts}
                hideSubscription={this.hideSubscription}
                show={show}
                toggleModal={this.toggleModal}
                allPractices={allPractices}
                allAttorneys={allAttorneys}
                allCategories={allCategories}
              /> )}
            />
          ) : <PulseLoader color="#D02422" loading={spinner} />
        }
      </div>
    );
  }
}

export default Page;
