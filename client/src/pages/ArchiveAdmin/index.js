import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import FullWidth from '../../layouts/FullWidth';
import Head from '../../components/Head/archive';
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
        <ArchiveHead seo={seo} />
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
