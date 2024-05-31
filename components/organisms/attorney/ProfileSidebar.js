import Services from 'components/molecules/attorney/Services';
import {
  ProfileSidebarContainer,
  SidebarTile,
} from 'styles/attorney-page/ProfileSidebar.style';
import ProfileSidebarAwards from 'components/molecules/attorney/ProfileSidebarAwards';
import ContactForm from 'components/shared/ContactForm/ContactForm';
import React from 'react';

const ProfileSidebar = ({ services, awards }) => (
  <ProfileSidebarContainer>
    <Services services={services} />
    {awards && <ProfileSidebarAwards awards={awards} />}
    <div>
      <SidebarTile indent="true" red="true">
        Let`s get in touch
      </SidebarTile>
      <ContactForm isPositionRelativeProp />
    </div>
  </ProfileSidebarContainer>
);

export default ProfileSidebar;
