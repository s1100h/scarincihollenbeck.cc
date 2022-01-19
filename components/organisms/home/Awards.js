import { Row, Col } from 'react-bootstrap';
import Accolade from 'components/molecules/home/Accolade';
import lineStyles from 'styles/LineHeader.module.css';
import { formatSrcToCloudinaryUrl } from 'utils/helpers';

const Awards = ({ awards }) => {
  const formattedAwards = awards
    .map(({
      appearanceOrder, imageHeight, imageWidth, label, awardImage,
    }) => ({
      id: label,
      order: appearanceOrder,
      image: {
        src: formatSrcToCloudinaryUrl(awardImage.sourceUrl),
        alt: label,
        width: imageWidth,
        height: imageHeight,
      },
    }))
    .sort((a, b) => (a.order > b.order ? 1 : -1));

  return (
    <Row className="mt-5 px-2">
      <Col sm={12} className="mt-5 mb-0 pb-0">
        <div className={lineStyles.lineHeader}>
          <h3>Awards & Accolades</h3>
        </div>
      </Col>
      {formattedAwards.map((award) => (
        <Accolade key={award.id} image={award.image} colSize={formattedAwards.length > 4 ? 4 : 3} />
      ))}
    </Row>
  );
};

export default Awards;
