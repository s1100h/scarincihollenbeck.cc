/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PostHead from '../../components/Head/post';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import ThreeColMiniSidebar from '../../layouts/ThreeColMiniSidebar';
import Body from './Body';
import Sidebar from './Sidebar';
import EventSidebar from './EventSidebar';
import SocialShareSidebar from './SocialShareSidebar';
import { setUserCookie } from './usercookie';
import { headers } from '../../utils/helpers';

const headerImg = 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/blogheader.jpg';

class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      date: '',
      posts: [],
      eventDetails: [],
      author: [],
      attorneys: [],
      tags: [],
      seo: {},
      show: false,
      triggerModal: true,
      eventCat: false,
    };

    this.fetchPostData = this.fetchPostData.bind(this);
    this.printScreen = this.printScreen.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.hideSubscription = this.hideSubscription.bind(this);
  }


  componentDidMount() {
    const { parent, child, post } = this.props.match.params;

    this.fetchPostData(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/single/post/${post}`);
    // set timeout to trigger
    this.triggerSubscription();
  }


  fetchPostData(url) {
    fetch(url, { headers })
      .then((res) => res.json())
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
          seo,
          tags,
        } = data;

        // check if its an event category
        const eventCat = categories.map((a) => a.id).indexOf(99) > -1;

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
          seo,
          tags,
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
      author,
      date,
      posts,
      attorneys,
      show,
      eventCat,
      eventDetails,
      seo,
      tags,
    } = this.state;


    const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
    const subTitle = (extractSubTitle !== null) ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
    const featuredImg = content.match(/<figure(.*?)>(.*?)<\/figure>/g);
    const firstFeaturedImg = (featuredImg !== null) ? featuredImg[0] : '';
    const bodyContent = content.replace(firstFeaturedImg, '').replace(subTitle, '');

    return (
      <div id="single">
        <PostHead seo={seo} />
        { (subTitle !== null) && (
          <SingleSubHeader
            title={title}
            subtitle={subTitle}
            image={headerImg}
          />
        )}
        <ThreeColMiniSidebar
          body={(
            <Body
              firstFeaturedImg={firstFeaturedImg}
              bodyContent={bodyContent}
              author={author}
              eventCat={eventCat}
              title={title}
              author={author}
              date={date}
              tags={tags}
            />
)}
          OneSidebar={(
            <SocialShareSidebar
              printScreen={this.printScreen}
              title={title}
            />
              )}
          TwoSidebar={(eventCat === true) ? (
            <EventSidebar
              eventDetails={eventDetails}
              attorneys={attorneys}
              hideSubscription={this.hideSubscription}
              show={show}
              toggleModal={this.toggleModal}
            />
          ) : (
            <Sidebar
              posts={posts}
              attorneys={attorneys}
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

export default Single;
