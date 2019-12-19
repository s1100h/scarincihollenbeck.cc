import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';
import AdminHead  from '../../components/Head/admin';
import MultiSubHeader from '../../layouts/MultiSubHeader';
import FullWidth from '../../layouts/FullWidth';
import ProfileImage from './ProfileImage';
import InfoCard from './InfoCard';
import { createMarkup } from '../../utils/helpers';
import './index.scss';
import attorneyHeader from './attorney-header.jpg';





class AdminBiography extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: [],
      spinner:false,
    };
    this.fetchPostData = this.fetchPostData.bind(this);
  }

  componentDidMount() {
    const { admin } = this.props.match.params;
    this.setState({ spinner:true });
    console.log(admin);
    this.fetchPostData(`${process.env.API_URL}/wp-json/individual-admin/admin/${admin}`);
  }

  fetchPostData(url) {
    fetch(url)
      .then(res => res.json())
      .then(admin => this.setState({ admin, spinner: false }));
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
      spinner,
    } = admin;

    return (
      <div>
        <AdminHead seo={seo} />
       {(!spinner) ? (
         <div>
          <MultiSubHeader
          image={attorneyHeader}
          profile={(
            <ProfileImage
              admin={admin}
              image={image}
              name={name}
            />
          )}
          height={'325px'}
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
       ):  <PulseLoader color="#D02422" loading={spinner} />
      }
      </div>
    );
  }
}

export default AdminBiography;
