import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Col from 'react-bootstrap/Col';
import styles from 'styles/AttorneyCard.module.css';

const applyOfficeToTitle = (title) => {
  if (title.indexOf('M') === 0) {
    return `Firm ${title}`;
  }
  const office = title.split('Managing Partner')[0];

  return `${office} Office Managing Partner`;
};
const Leader = ({
  slug, featuredImage, title, designation, chair,
}) => {
  const [featuredTitle, setFeaturedTitle] = useState('');
  useEffect(() => {
    const isManager = designation.includes('Managing Partner') || designation.includes('Executive Director');

    if (isManager) {
      if (designation.includes('Managing Partner')) {
        setFeaturedTitle(applyOfficeToTitle(designation));
      } else {
        setFeaturedTitle(designation);
      }
    }

    if (!isManager && chair) {
      setFeaturedTitle(`Chair, ${chair}`);
    }
  }, []);

  return (
    <Col sm={12} md={3} className="my-4">
      <Link href={slug}>
        <a className="text-dark text-center">
          <div className="mx-auto d-block text-center">
            <Image
              src={featuredImage}
              alt={title}
              width={106}
              height={146}
              fill="responsive"
              className={styles.circle}
            />
          </div>
          <p className="mb-0">
            <strong>{title}</strong>
          </p>
          <p>{featuredTitle}</p>
        </a>
      </Link>
    </Col>
  );
};

export default Leader;
