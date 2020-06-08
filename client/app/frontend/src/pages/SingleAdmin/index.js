import React, { Component } from 'react';
import AdminHead from '../../components/Head/admin';
import MultiSubHeader from '../../layouts/MultiSubHeader';
import FullWidth from '../../layouts/FullWidth';
import Page404 from '../page404';
import ProfileImage from './ProfileImage';
import InfoCard from './InfoCard';
import { createMarkup, headers } from '../../utils/helpers';
import { attorneyHeaderJPG, attorneyHeaderWebP } from '../../utils/next-gen-images';


class AdminBiography extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: [],
      error: false,
    };
  }

  async componentDidMount() {
    const { admin } = this.props.match.params;

    try {
      const response = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/individual-admin/admin/${admin}`, { headers });
      const json = await response.json();

      this.setState({ admin: json });
    } catch (err) {
      this.setState({ error: true });
    }
  }

  render() {
    const { admin, error } = this.state;
    const {
      ID,
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
    
    if(error) {
      return <Page404 />
    }

    return (
      <div id="single--admin">
          <AdminHead seo={seo} />
          <MultiSubHeader
            imageWebp={attorneyHeaderWebP}            
            imageJPG={attorneyHeaderJPG}
            profile={(
              <ProfileImage
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
    );
  }
}

export default AdminBiography;
