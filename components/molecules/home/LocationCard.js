import Link from 'next/link';
import Image from 'next/image';
import { Col } from 'react-bootstrap';
import textStyles from 'styles/Text.module.css';
import { formatSrcToCloudinaryUrl } from 'utils/helpers';
import { IMAGE_NOT_FOUND_URL } from 'utils/constants';

const LocationCard = ({ title, slug, featuredImage }) => (
  <Col sm={12} md={3} className="mx-auto d-block my-5">
    <div className="border">
      <Link href={`/location/${slug}`}>
        <a>
          <Image
            src={
              featuredImage?.node?.sourceUrl
                ? formatSrcToCloudinaryUrl(featuredImage?.node?.sourceUrl)
                : IMAGE_NOT_FOUND_URL
            }
            alt={title}
            width={253}
            height={167}
            layout="responsive"
          />
          <p className={`${textStyles.redTitle} my-3 ml-2 text-uppercase`}>
            <strong>{title}</strong>
          </p>
        </a>
      </Link>
    </div>
  </Col>
);

export default LocationCard;
