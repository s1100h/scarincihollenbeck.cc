import React, { Component } from 'react';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import FullWidth from '../../layouts/FullWidth';
import ArchiveHead from '../../components/Head/archive';
import AttorneyCard from '../../components/AttorneyCard';
import { headers } from '../../utils/helpers';
import { attorneyArchiveHeaderWebP, attorneyArchiveHeaderJPG } from '../../utils/next-gen-images';

class AdminArchive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admins: [],
      seo: {},
    };
  }

  /* Fetch data events */
  async componentDidMount() {
    const response = await fetch(`${process.env.REACT_APP_CACHED_API}/cached/administration-archives`, { headers });
    const json = await response.json();
    const { admins, seo } = json;

    this.setState({ admins, seo });
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
          imageWebp={attorneyArchiveHeaderWebP}            
          imageJPG={attorneyArchiveHeaderJPG}
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
