import TextContent from 'components/molecules/attorney/TextContent';

const EducationContent = ({
  education, additionalInformation, affiliations, barAdmissions,
}) => (
  <>
    <TextContent title="Education" content={education} />
    <div className="mb-4">
      {barAdmissions && <TextContent title="Bar Admissions" content={barAdmissions} />}
    </div>
    <div className="mb-4">
      {affiliations && <TextContent title="Affiliations" content={affiliations} />}
    </div>
    {additionalInformation && (
      <TextContent title="Additional Information" content={additionalInformation[0].content} />
    )}
  </>
);

export default EducationContent;
