import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import Link from 'next/link';
import styles from 'styles/AttorneyCard.module.css'
import fontStyles from 'styles/Fonts.module.css'
import textStyles from 'styles/Text.module.css'

export default function AttorneyCard({
  link,
  image,
  name,
  title,
  number,
  email,
  height,
  width,
  type,
}) {
  return (
    <div className={`d-flex flex-row ${styles.attorneyCard}`} height={height}>
      <Link href={type} as={link}>
        <a>
          <img rel="preload" src={image} alt={name} className="mr-1" style={{ width }} />
        </a>
      </Link>
      <div className="mt-3 ml-3">
        <Link href={type} as={link}>
          <a>
            <p className={`text-uppercase ${textStyles.redTitle} ${fontStyles.smallExcerpt}`}>
              <strong>{name}</strong>
            </p>
            <p className={`mb-1 ${fontStyles.smallExcerpt}`}>
              <strong>
                {title}
              </strong>
            </p>
          </a>
        </Link>
        <div className={fontStyles.smallExcerpt}>
          <FontAwesomeIcon icon={faPhone} className={styles.iconW8pxH20px} />
          {' '}
          {number}
          <br />
          <FontAwesomeIcon icon={faEnvelope} className={styles.iconW8pxH20px} />
          {' '}
          {email}
        </div>
      </div>
    </div>
  );
}
