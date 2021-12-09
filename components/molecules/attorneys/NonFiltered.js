import AttorneyCards from 'components/atoms/AttorneyCards';

const NonFiltered = ({ attorneys }) => {
  /// managing partners
  const managingPartners = attorneys.filter((a) => a.designation === 'Managing Partner');

  // partners & nyc managing partner
  const partners = attorneys.filter(
    (a) => a.designation === 'Partner'
      || a.designation === 'NYC Managing Partner'
      || a.designation === 'Washington, D.C. Managing Partner'
      || a.designation === 'Red Bank, NJ Managing Partner',
  );

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
      {AttorneyCards('Managing Partner', managingPartners)}
      {AttorneyCards('Partners', partners)}
      {AttorneyCards('Counsel', counsel)}
      {AttorneyCards('Of Counsel & Counsel Emeritus', ofCounsel)}
      {AttorneyCards('Senior Associates', seniorAssociates)}
      {AttorneyCards('Associates', associates)}
    </div>
  );
};

export default NonFiltered;
