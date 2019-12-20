  
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// layouts
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// pages
import FrontPage from './pages/FrontPage';
import ArchiveAttorney from './pages/ArchiveAttorney';
import ArchiveAdmin from './pages/ArchiveAdmin';
import SingleAdmin from './pages/SingleAdmin';
import SingleAttorney from './pages/SingleAttorney';
import SingleCareer from './pages/SingleCareer';
import ArchiveCareer from './pages/ArchiveCareer';
import ArchiveLocation from './pages/ArchiveLocation';
import ArchivePractice from './pages/ArchivePractice';
import SinglePractice from './pages/SinglePractice';
import FirmPage from './pages/FirmPage';
import FirmOverview from './pages/FirmOverview';
import Page from './pages/Page';
import Single from './pages/Single';
import Contact from './pages/Contact';
import Category from './pages/Category';
import Archives from './pages/Archives';
import Authors from './pages/Authors';
import QuickNews from './pages/QuickNews';
import Search from './pages/Search';
import Page404 from './pages/page404';

// vendor scss & js files
/**
*
* Bootstrap
* Font awesome
* Slick Carousel
*
**/

/**
* Main Style Sheet
**/
import './index.scss';

/**
 * Routes
 * ======================================
 * Archive Admin
 * Archive Attorney
 * Archive Career
 * Archive Practice
 * Archive Location, Single Location -- same component
 * Archives
 * Authors
 * Category
 * Contact
 * Firm Overview
 * Firm Page
 * Front Page
 * Page
 * Page 404
 * Quick News
 * Search
 * Single
 * Single Admin
 * Single Attorney
 * Single Career
 * Single Practice
 * 
 * Layout Components
 * =======================================
 * NavBar
 * Footer  
 * 
 * To Do (Pages & Components & WP Rest Route)
 * =======================================
 *  1. Update each Rest Route to have a Structured Data information -- Start w/ admin completed Practices
 *  2. Add AMP component to Posts
 *  3. Add fadein class from animate.css to each class, so the content fades in when the page loads
 *  4. Remove Bootstrap, Slick Carousel, Font Awesome from html file and import them as modules
 *  5. Add new SEO-optimized components (Description Text, Search) to Category Page
 * 
 * To Do (Webpack, Express API & Web Worker)
 * ==========================================
 *  1. Refactor integrating PWA (webpack 4, react-router)
 *  2. Enable webpack 4 to be a solution for GT Metrix & Google Page speed issues 
 * 
 *  Known Bugs:
 * ========================================
 *  1. Dropdown menu attorney sidebar messed up
 *  2. Fix links in the footer
 *  3. Fix News & Events Scroller front page (break out into own component)
 *  4. Fix dropdown menu style on all practices page
 *  5. Add +/- to location tabs 
 *  6. Make Tending Stories own Component 
 * 
 * To Do (Pre-Production Push)
 * =======================================
 *  1. Set up sitemap xml
 *  2. Add feature to allow Google Analytics for pages to Footer 
 * 
 */

class SiteRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sitePages: []
    }
  };
  componentDidMount() {
    fetch(`${process.env.API_URL}/wp-json/single-page/page-list`)
   .then(res => res.json())
   .then(data => this.setState({sitePages: data}));
  }
  render() {
    const { sitePages } = this.state; 
    const firmPages = [
      {
       path: '/pro-bono/'
      },
      {
        path: '/community-involvement/'
      },
      {
        path: '/diversity-group/'
      },
      {
        path: '/women-lead/'
      },
      {
        path: '/pro-bono/'
      }
    ];

    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={FrontPage} />
          <Route path='/attorneys' exact component={ArchiveAttorney} />
          <Route path='/attorneys/:attorney' exact component={SingleAttorney} />
          <Route path='/administration' exact component={ArchiveAdmin} />
          <Route path='/administration/:admin' exact component={SingleAdmin} />
          <Route path='/careers/' exact component={ArchiveCareer} />
          <Route path='/career/:career' exact component={SingleCareer} />
          <Route path='/locations' exact component={ArchiveLocation} />
          <Route path='/location/:location' exact component={ArchiveLocation} />
          <Route path='/practices' exact component={ArchivePractice} />
          <Route path='/law-practices' exact component={ArchivePractice} />
          <Route path='/practice/:practice' exact component={SinglePractice} />
          <Route path='/practices/:practice' exact component={SinglePractice} />
          <Route path='/contact/' exact component={Contact} />
          <Route path='/firm-overview/' exact component={FirmOverview} />
          <Route path='/category/quick-news' exact component={QuickNews} />
          <Route path='/category/quick-news/page/:pageNum' exact component={QuickNews} />
          <Route path='/archives/:categorySlug' exact component={Archives} />
          <Route path='/archives/:categorySlug/page/:pageNum' exact component={Archives} />
          <Route path ='/author/:author' exact component={Authors} />
          <Route path ='/author/:author/page/:pageNum' exact component={Authors} />
          <Route path={`/s`} component={Search} />
          <Route path='/law-firm-insights/:parent/:post' exact component={Single} />
          <Route path='/law-firm-insights/:parent/:child/:post' exact component={Single} />
          <Route path='/firm-news/:parent/:post' exact component={Single} />
          <Route path='/firm-events/:parent/:post' exact component={Single} />
          <Route path='/category/:category' exact component={Category} />
          <Route path='/category/:category/:child' exact component={Category} />       
          {/** Firm Page routes */}
          {
            firmPages.map(fp => <Route key={fp.path} path={fp.path} exact render={props => <FirmPage {...props} /> } />)
          }
          {/** Pages **/}
          {
            sitePages.map(p => <Route key={p.ID} path={p.path} exact render={props => <Page {...props} /> } /> )
          }
          {(sitePages.length > 0 ) ?  <Route component={Page404} /> : ''}
        </Switch>
        <Footer />
      </Router>
    )
  }
}

ReactDOM.render(<SiteRoutes />, document.getElementById('sh-law-client'));