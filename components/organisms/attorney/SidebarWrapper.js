import Services from 'components/molecules/attorney/Services';
import SidebarBtn from 'components/molecules/attorney/SidebarBtn';
import AwardSlider from 'components/molecules/attorney/AwardSlider';
import marginStyles from 'styles/Margins.module.css';

const SidebarWrapper = ({
  services, setActiveTab, education, contact, awards,
}) => (
  <div className={marginStyles.mtMinusMd2}>
    <Services services={services} />
    <hr />
    <SidebarBtn
      setActiveTab={setActiveTab}
      tabId={contact.id}
      label="Let's get in touch"
      message="And we can discuss how my legal services can benefit you."
      btnLabel="Contact"
    />
    <hr />
    <SidebarBtn
      setActiveTab={setActiveTab}
      tabId={education.id}
      label="Education & Admissions"
      message="List of education, bar admissions, affiliations, memberships, etc."
      btnLabel="Credentials"
    />
    {awards && (
      <>
        <hr />
        <AwardSlider awards={awards} />
      </>
    )}
  </div>
);

export default SidebarWrapper;
