import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';
import { Helmet } from 'react-helmet';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import FullWidth from '../../layouts/FullWidth';
import AttorneyCard from '../../components/AttorneyCard';
import adminArchiveBckGround from './attorney-archive-header.jpg';
import './index.scss';


class AdminArchive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admins: [],
      seo:[],
      spinner: false,
    };
  }

  /* Fetch data events */
  componentDidMount() {
    // fetch admin list
    this.setState({ spinner: true });
    fetch(`${process.env.API_URL}/wp-json/admin-search/admin/`)
      .then(res => res.json())
      .then((data) => {
        const admins = data.admins
        const seo = data.seo;
        this.setState({ admins, seo, spinner: false });
      });
  }

  render() {
    const {
      admins,
      seo,
      spinner
    } = this.state;

    return (
      <div>
        <Helmet>
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
        </Helmet>
        <SingleSubHeader
          image={adminArchiveBckGround}
          title="Administration"
          subtitle=" In order to fulfill the varying needs of our clients, the firm's group of attorneys rely on the support of Scarinci Hollenbeck's Administration group." 
          />
          <FullWidth>
            <div className="container p-3 pt-4 border">
              <div className="row">
                {
                  (!spinner) ? admins.map(a => (
                    <div key={a.ID} className="col-sm-12 col-md-6 col-lg-4 mb-2">
                      <AttorneyCard
                        image={a.image.url}
                        name={a.name}
                        link={a.link}
                        title={a.Title}
                        number={`201-896-4100 ${a.phone_extension}`}
                        email={a.email}
                        height={'112px'}
                        width={'107px'}
                      />
                    </div>
                  )) : <PulseLoader color="#D02422" loading={spinner} />
                }
              </div>
            </div>              
          </FullWidth>
      </div>
    );
  }
}

export default AdminArchive;
