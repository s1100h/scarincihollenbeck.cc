import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AttorneyCard from '../../../components/AttorneyCard';

function AttorneyCards(title, content) {
  return (
    <div className="row">
      <div className="col-sm-12 my-4">
        <h3 className="red-title text-uppercase border-bottom mb-0">
          {title}
        </h3>
      </div>
      { content.map((m) => (
        <div key={m.id} className="col-sm-12 col-md-6 col-lg-4 mb-2">
          <AttorneyCard
            link={m.link}
            image={m.better_featured_image}
            name={m.title}
            title={m.designation}
            number={m.phone}
            email={m.email}
            width="80px"
            height="112px"
          />
         </div>
      ))}
    </div>
  )
}

class NotFiltered extends PureComponent {
  render() {
    const { attorneys } = this.props;
    // managing partners
    const managingPartners = attorneys.filter((a) => a.designation === 'Managing Partner');

    // partners
    const partners = attorneys.filter((a) => a.designation === 'Partner');

    // counsel
    const counsel = attorneys.filter((a) => a.designation === 'Counsel');

    // of counsel & counsel emeritus
    const ofCounsel = attorneys.filter((a) => a.designation.indexOf('Of Counsel') > -1);

    // senior associates
    const seniorAssociates = attorneys.filter((a) => a.designation === 'Senior Associate');

    // associates
    const associates = attorneys.filter((a) => a.designation === 'Associate');

    return (
      <div>
        {AttorneyCards('Managing Partner',  managingPartners )}
        {AttorneyCards('Partners',  partners )}
        {AttorneyCards('Counsel',  counsel )}
        {AttorneyCards('Of Counsel & Counsel Emeritus',  ofCounsel )}
        {AttorneyCards('Senior Associates', seniorAssociates )}
        {AttorneyCards('Associates', associates )}
      </div>
    );
  }
};

NotFiltered.propTypes = {
  attorneys: PropTypes.arrayOf(PropTypes.object),
};

NotFiltered.defaultProps = {
  attorneys: [],
};

export default NotFiltered;
