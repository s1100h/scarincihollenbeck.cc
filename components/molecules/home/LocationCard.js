import textStyles from 'styles/Text.module.css';
import lineStyles from 'styles/LineHeader.module.css';

const LocationCard = ({ office }) => (
  <div className={textStyles.locationCard}>
    <div className={lineStyles.map} />
    <div className={lineStyles.content}>
      <strong>{office.title}</strong>
    </div>
  </div>
);

export default LocationCard;
