import React, { Component } from 'react';
import AdminHead from '../../components/Head/admin';
import MultiSubHeader from '../../layouts/MultiSubHeader';
import FullWidth from '../../layouts/FullWidth';
import ProfileImage from './ProfileImage';
import InfoCard from './InfoCard';
import { createMarkup } from '../../utils/helpers';
const attorneyHeader = 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/attorney-header.jpg';


class AdminBiography extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: [],
    };
    this.fetchPostData = this.fetchPostData.bind(this);
  }

  componentDidMount() {
    const { admin } = this.props.match.params;
    this.fetchPostData(`${process.env.ADMIN_SITE}/wp-json/individual-admin/admin/${admin}`);
  }

  fetchPostData(url) {
    fetch(url)
      .then((res) => res.json())
      .then((admin) => this.setState({ admin }));
  }

  render() {
    const { admin } = this.state;
    const {
      Title,
      biography,
      email,
      image,
      name,
      social_media_links,
      vizibility,
      phone_extension,
      seo,
    } = admin;

    return (
      <div>
        <AdminHead seo={seo} />
        {(admin) && (
          <div id="single-admin">
            <MultiSubHeader
              image={attorneyHeader}
              profile={(
                <ProfileImage
                  admin={admin}
                  image={image}
                  name={name}
                />
          )}
              height="325px"
              infoCard={(
                <InfoCard
                  name={name}
                  Title={Title}
                  phone_extension={phone_extension}
                  email={email}
                  social_media_links={social_media_links}
                  vizibility={vizibility}
                />
          )}
            />
            <FullWidth>
              <div>
                <div className="line-header">
                  <h3>Biography</h3>
                </div>
                <div className="w-100 mt-5">
                  <div dangerouslySetInnerHTML={createMarkup(biography)} />
                </div>
              </div>
            </FullWidth>
          </div>
        )}
      </div>
    );
  }
}

export default AdminBiography;
