/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { PulseLoader } from 'react-spinners';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import LargeSidebar from '../../layouts/LargeSidebar';
import PageHead from '../../components/Head/page';
import Sidebar from './Sidebar';
import Body from './Body';
import { createMarkup } from '../../utils/helpers';
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
      show: false,
      triggerModal: true,
      spinner:false,
    };

    this.fetchPostData = this.fetchPostData.bind(this);
    this.printScreen = this.printScreen.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.hideSubscription = this.hideSubscription.bind(this);
  }


  componentDidMount() {
    const page = this.props.location.pathname;
    this.fetchPageData(`${process.env.API_URL}/wp-json/single-page/page${page}`);

    // get latest posts
    fetch(`${process.env.API_URL}/wp-json/single/post/develop-in-a-jersey-city-inclusionary-zone`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ posts: data.posts });
      })
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
      posts,
      show,
      spinner,
    } = this.state;

    return (
      <div>
        <PageHead seo={seo} />
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
