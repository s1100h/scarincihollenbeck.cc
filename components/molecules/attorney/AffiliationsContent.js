import TextContent from 'components/molecules/attorney/TextContent';

const Affiliations = ({ affiliations }) => (
  <>
    <TextContent title="Affiliations" content={affiliations} />
    <div className="mb-4">
      {affiliations && <TextContent title="Affiliations" content={affiliations} />}
    </div>
  </>
);

export default Affiliations;
