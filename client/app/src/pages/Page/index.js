/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PageHead from '../../components/Head/page';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import LargeSidebar from '../../layouts/LargeSidebar';
import Sidebar from './Sidebar';
import Body from './Body';
import { createMarkup } from '../../utils/helpers';
import blogHeader from './blogheader.jpg';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      date: '',
      posts: [],
      show: false,
      triggerModal: true,
      spinner: false,
      seo: {},
    };

    this.fetchPostData = this.fetchPostData.bind(this);
    this.printScreen = this.printScreen.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.hideSubscription = this.hideSubscription.bind(this);
  }


  componentDidMount() {
    const { location } = this.props;
    const page = location.pathname;
    
    this.fetchPageData(`${process.env.ADMIN_SITE}/wp-json/single-page/page${page}`);

    // get latest posts
    fetch(`${process.env.ADMIN_SITE}/wp-json/single/post/develop-in-a-jersey-city-inclusionary-zone`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data.posts });
      });
  }

  fetchPageData(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const { content, title, seo } = data;
        this.setState({
          title, content, seo, spinner: false,
        });
      });
  }

  fetchPostData(url) {
    fetch(url)
      .then((res) => res.json())
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
    this.setState((prevState) => ({
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
      posts,
      show,
      spinner,
      seo,
    } = this.state;


    return (
      <div>
        <PageHead seo={seo} />
        <SingleSubHeader
          title={title}
          subtitle=""
          image={blogHeader}
          height="auto"
        />
        <LargeSidebar
          body={(<Body content={content} />)}
          sidebar={(
            <Sidebar
              posts={posts}
              hideSubscription={this.hideSubscription}
              show={show}
              toggleModal={this.toggleModal}
            />
          )}
        />
      </div>
    );
  }
}

export default Page;
