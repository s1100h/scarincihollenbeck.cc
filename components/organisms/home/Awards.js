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
    <div className="wrapper-section">
      <div className="title-block-wr">
        <h3 className="title-block">AWARDS & ACCOLADES</h3>
        <a href="#" className="btn">
          Award Methodology
        </a>
      </div>
      <div className={lineStyles.awardWr}>
        {formattedAwards.map((award) => (
          <Accolade
            key={award.id}
            image={award.image}
            colSize={formattedAwards.length > 4 ? 4 : 3}
          />
        ))}
      </div>
    </div>
  );
};

export default Awards;
