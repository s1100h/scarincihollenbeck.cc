import React, { Component } from 'react';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import FullWidth from '../../layouts/FullWidth';
import ArchiveHead from '../../components/Head/archive';
import AttorneyCard from '../../components/AttorneyCard';
import { headers } from '../../utils/helpers';

const adminArchiveBckGround = 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/attorney-archive-header.jpg';

class AdminArchive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admins: [],
      seo: {},
    };
  }

  /* Fetch data events */
  componentDidMount() {
    // fetch admin list
    fetch(`${process.env.REACT_APP_CACHED_API}/cached/administration-archives`, { headers })
      .then((res) => res.json())
      .then((data) => {
        const { admins } = data;
        const { seo } = data;

        this.setState({ admins, seo });
      });
  }

  render() {
    const {
      admins,
      seo,

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
          <div id="archive-admin" className="container p-3 pt-4 border">
            <div className="row">
              {
                  (admins.length > 0) && admins.map((a) => (
                    <div key={a.ID} className="col-sm-12 col-md-6 col-lg-4 mb-2">
                      <AttorneyCard
                        image={a.image.url}
                        name={a.name}
                        link={a.link}
                        title={a.Title}
                        number={`201-896-4100 ${a.phone_extension}`}
                        email={a.email}
                        height="112px"
                        width="107px"
                      />
                    </div>
                  ))
                }
            </div>
          </div>
        </FullWidth>
      </div>
    );
  }
}

export default AdminArchive;
