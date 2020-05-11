import React, { Component, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import history from './utils/history';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/**
 *  Components
 */
import NavBar from './components/NavBar';
import Footer from './components/Footer';

/**
 *  Home Page
 */
const FrontPage = lazy(() => import(/* webpackPreload: true */ './pages/FrontPage'));

/**
 *  Archive Pages
 */
const ArchiveAttorney = lazy(() => import(/* webpackPreload: true */ './pages/ArchiveAttorney'));
const ArchiveCareer = lazy(() => import(/* webpackPreload: true */ './pages/ArchiveCareer'));
const ArchiveAdmin = lazy(() => import(/* webpackPreload: true */ './pages/ArchiveAdmin'));
const ArchiveLocation = lazy(() => import(/* webpackPreload: true */ './pages/ArchiveLocation'));
const ArchivePractice = lazy(() => import(/* webpackPreload: true */ './pages/ArchivePractice'));


/**
 *  Single Pages
 */
const SingleAttorney = lazy(() => import(/* webpackPreload: true */ './pages/SingleAttorney'));
const SingleAdmin = lazy(() => import(/* webpackPreload: true */ './pages/SingleAdmin'));
const SingleCareer = lazy(() => import(/* webpackPreload: true */ './pages/SingleCareer'));
const SinglePractice = lazy(() => import(/* webpackPreload: true */ './pages/SinglePractice'));

/**
 * Back Pages
 */
const FirmOverview = lazy(() => import(/* webpackPreload: true */ './pages/FirmOverview'));
const FirmPage = lazy(() => import(/* webpackPreload: true */ './pages/FirmPage'));
const Page = lazy(() => import(/* webpackPreload: true */ './pages/Page'));
const Contact = lazy(() => import(/* webpackPreload: true */ './pages/Contact'));
const SubscriptionPage = lazy(() => import(/* webpackPreload: true */ './pages/SubscriptionPage'));
const Page404 = lazy(() => import(/* webpackPreload: true */ './pages/page404'));

/**
 *  Blog Archives Pages
 */
const QuickNews = lazy(() => import(/* webpackPreload: true */ './pages/QuickNews'));
const Archives = lazy(() => import(/* webpackPreload: true */ './pages/Archives'));
const Authors = lazy(() => import(/* webpackPreload: true */ './pages/Authors'));
const Category = lazy(() => import(/* webpackPreload: true */ './pages/Category'));

 /**
  *  Blog Pages
  */
const Single = lazy(() => import(/* webpackPreload: true */ './pages/Single'));

/**
 * Search Page
 */
const Search = lazy(() => import(/* webpackPreload: true */ './pages/Search'));

/**
*
* Bootstrap Resources
*
**/
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

/**
* Custom Style Sheets
**/
import './styles/main.scss';
import './styles/navigation.scss';
import './styles/archive-attorney&admin.scss';
import './styles/archive-location.scss';
import './styles/archive-practice.scss';
import './styles/single-admin&attorney&career&page&single.scss';
import './styles/single-practice.scss';
import './styles/subscription-form.scss';
import './styles/firm-page.scss';

/** 
 * Util Sheets
 */
 import './styles/utils/attorney-card.scss';
 import './styles/utils/carousel.scss';
 import './styles/utils/just-in-carousel.scss';
 import './styles/utils/location-carousel.scss';
 import './styles/utils/spacing-and-fonts.scss';

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
 */

 /**
  *  Set up Google Analytics 
  * =============================================
  */
ReactGA.initialize('UA-18813670-1');

history.listen(location => {
	ReactGA.set({ page: location.pathname });
	ReactGA.pageview(location.pathname);
});

class SiteRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sitePages: []
    }
  };

  async componentDidMount() {
    const response = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/single-page/page-list`);
    const sitePages = await response.json();

    this.setState({ sitePages });
    ReactGA.pageview(window.location.pathname);
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
        <Suspense fallback={<div> </div>}>
        <Switch>
          <Route path='/' exact component={FrontPage} />
          <Route path='/attorneys' exact component={ArchiveAttorney} />
          <Route path='/attorney/:attorney' exact component={SingleAttorney} />
          <Route path='/attorneys/:attorney' exact component={SingleAttorney} />
          <Route path='/administration' exact component={ArchiveAdmin} />
          <Route path='/administration/:admin' exact component={SingleAdmin} />
          <Route path='/administrations/:admin' exact component={SingleAdmin} />
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
          <Route path='/subscribe' exact component={SubscriptionPage} />
          <Route path='/category/quick-news' exact component={QuickNews} />
          <Route path='/category/quick-news/page/:pageNum' exact component={QuickNews} />                    
          <Route path='/archives/:categorySlug' exact component={Archives} />
          <Route path='/archives/:categorySlug/page/:pageNum' exact component={Archives} />
          <Route path ='/author/:author' exact component={Authors} />
          <Route path ='/author/:author/page/:pageNum' exact component={Authors} />
          <Route path={`/s`} component={Search} />
          <Route path='/category/:category' exact component={Category} />
          <Route path='/category/:category/:child' exact component={Category} />
          <Route path='/law-firm-insights/:parent/:post' exact component={Single} />
          <Route path='/law-firm-insights/:parent/:child/:post' exact component={Single} />
          <Route path='/law-firm-insights/:parent/:child/:grandchild/:post' exact component={Single} />
          <Route path='/firm-news/:parent/:post' exact component={Single} />
          <Route path='/firm-news/:post' exact component={Single} />
          <Route path='/firm-events/:parent/:post' exact component={Single} />
          <Route path='/firm-events/:post' exact component={Single} />
          <Route path='/quick-news/:post' exact component={Single} />
          {/** Firm Page routes */}
          {firmPages.map(fp => <Route key={fp.path} path={fp.path} exact render={props => <FirmPage {...props} /> } />)}
          {/** Pages **/}
          {sitePages.map(p => <Route key={p.ID} path={p.path} exact render={props => <Page {...props} /> } /> )}
          {/* 404 Page */}
          {(sitePages.length >0 ) && <Route component={Page404} />}
        </Switch>
        </Suspense>
        <Footer />
      </Router>
    )
  }
}

ReactDOM.render(<SiteRoutes />, document.getElementById('sh-law-client'));